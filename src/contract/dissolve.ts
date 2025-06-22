import { Contract, SignatureTemplate, HashType, SignatureAlgorithm, TransactionBuilder, NetworkProvider, GenerateUnlockingBytecodeOptions, Utxo } from "cashscript";
import IssuanceFundArtifact from "../../artifacts/IssuanceFund.artifact";
import Multisig_2of3Artifact from "../../artifacts/Multisig_2of3.artifact";
import { addressToLockScript, findAuthGuard, toTokenAddress } from "../utils";
import { hexToBin, binToHex, decodeTransaction, decodeAuthenticationInstructions, AuthenticationInstructions, AuthenticationInstructionPush, lockingBytecodeToCashAddress, CashAddressResult, Transaction } from "@bitauth/libauth";
import { getNetworkPrefix } from "cashscript/dist/utils";

// Dissolves the IssuanceFund contract back into the auth guard, transferring all tokens to the auth guard and BCH to the user
// It is initiated by the user holding the auth key
// It produces a partially signed multisig transaction that needs to be signed by other multisig members with `addMultisigSignature`
export const dissolveIssuanceFund = async ({
  aliceAddress,
  alicePriv,
  provider,
  olandoCategory,
  councilMultisigContract,
  adminMultisigContract,
  signatures,
  send = true,
}: {
  aliceAddress: string,
  alicePriv: Uint8Array,
  provider: NetworkProvider,
  olandoCategory: string,
  councilMultisigContract: Contract<typeof Multisig_2of3Artifact>,
  adminMultisigContract: Contract<typeof Multisig_2of3Artifact>,
  signatures: [Uint8Array | SignatureTemplate, Uint8Array | SignatureTemplate],
  send?: boolean,
}) => {
  const aliceSigTemplate = new SignatureTemplate(alicePriv);

  const userUtxos = await provider.getUtxos(aliceAddress);
  const issuanceFundContract = new Contract(
    IssuanceFundArtifact,
    [addressToLockScript(councilMultisigContract.address), addressToLockScript(adminMultisigContract.address)],
    { provider, addressType: 'p2sh20' }
  );

  const authGuard = await findAuthGuard({
    predeployment: false,
    provider,
    authKeyHolderAddress: aliceAddress,
    olandoCategory: olandoCategory,
  });

  if (!authGuard) {
    throw new Error('No valid auth guard pair found in the wallet');
  }

  const contractUtxo = (await provider.getUtxos(issuanceFundContract.address)).find(u =>
    u.token?.category === olandoCategory &&
    u.token?.nft?.capability === 'mutable' &&
    u.token.nft.commitment.length === 16
  )!;

  const adminUtxo = (await provider.getUtxos(adminMultisigContract.address)).find(u =>
    u.satoshis === 1000n,
  )!;

  // funding + cauldron token-buy bch input
  const fundingUtxo = userUtxos.find(u =>
    u.token === undefined &&
    u.satoshis >= 10_000n
  );
  if (!fundingUtxo) {
    throw new Error(`No funding UTXO found for ${aliceAddress}`);
  }

  const builder = new TransactionBuilder({ provider })
    .addInput(authGuard.authGuardUtxo, authGuard.authGuardContract.unlock.unlockWithNft(true))
    .addInput(authGuard.authKeyUtxo, aliceSigTemplate.unlockP2PKH())
    .addInput(adminUtxo, adminMultisigContract.unlock.spend(...(signatures as [Uint8Array | SignatureTemplate, Uint8Array | SignatureTemplate]), 0n))
    .addInput(contractUtxo, issuanceFundContract.unlock.dissolveIntoAuthguard())
    .addInput(fundingUtxo, aliceSigTemplate.unlockP2PKH())
    .addOutput({
      to: authGuard.authGuardContract.tokenAddress,
      amount: authGuard.authGuardUtxo.satoshis,
      token: {
        ...authGuard.authGuardUtxo.token!,
        amount: authGuard.authGuardUtxo.token!.amount + contractUtxo.token!.amount,
        nft: {
          ...authGuard.authGuardUtxo.token!.nft,
          capability: 'mutable',
          commitment: '',
        }
      },
    })
    .addOutput({
      to: toTokenAddress(aliceAddress),
      amount: authGuard.authKeyUtxo.satoshis,
      token: {
        ...authGuard.authKeyUtxo.token!,
      },
    });

  const txSize = builder.build().length / 2;
  const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
    builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
  builder.addOutput({
    to: aliceAddress,
    amount: change - BigInt(txSize) - 100n, // BCH change
    token: undefined,
  });

  // {
  //   const txSize = builder.build().length / 2;
  //   const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
  //     builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
  //   console.log(`Transaction size: ${txSize} bytes, change: ${change} satoshis, fee/byte ${Number(change) / txSize}`);
  // }

  if (send) {
    const result = await builder.send();
    return result.hex;
  }

  return builder.build();
};

// Adds a multisig signature to a partially signed transaction hex
export const addMultisigSignature = async ({
  partiallySignedTxHex,
  privateKey,
  provider,
  adminMultisigContract,
  multisigInputIndex,
  send = true,
}: {
  partiallySignedTxHex: string,
  privateKey: Uint8Array,
  provider: NetworkProvider,
  adminMultisigContract: Contract<typeof Multisig_2of3Artifact>,
  multisigInputIndex: number,
  send?: boolean,
}) => {
  const partiallySignedTx = decodeTransaction(hexToBin(partiallySignedTxHex));
  if (typeof partiallySignedTx === "string") {
    throw new Error(`Failed to decode transaction: ${partiallySignedTx}`);
  }

  let signature: Uint8Array;
  const instructions = decodeAuthenticationInstructions(partiallySignedTx.inputs[multisigInputIndex].unlockingBytecode) as AuthenticationInstructions;
  if ((instructions[1] as AuthenticationInstructionPush).data.every((byte) => byte === 0)) {
    signature = (instructions[2] as AuthenticationInstructionPush).data;
  } else {
    signature = (instructions[1] as AuthenticationInstructionPush).data;
  }

  const txMap: Record<string, Transaction> = {};
  for (const input of partiallySignedTx.inputs) {
    const prevTxId = binToHex(input.outpointTransactionHash);
    if (!txMap[prevTxId]) {
      const txHex = await provider.getRawTransaction(prevTxId);
      const tx = decodeTransaction(hexToBin(txHex));
      if (typeof tx === "string") {
        throw new Error(`Failed to decode transaction: ${tx}`);
      }
      txMap[prevTxId] = tx;
    }
  }

  const builder = new TransactionBuilder({ provider });
  for (const [index, input] of partiallySignedTx.inputs.entries()) {
    const txid = binToHex(input.outpointTransactionHash);
    const output = txMap[txid].outputs[input.outpointIndex];
    const utxo: Utxo = {
      satoshis: output.valueSatoshis,
      txid: txid,
      vout: input.outpointIndex,
      token: output.token ? {
        category: binToHex(output.token.category),
        amount: output.token.amount,
        nft: output.token.nft ? {
          capability: output.token.nft.capability,
          commitment: binToHex(output.token.nft.commitment),
        } : undefined,
      } : undefined,
    };

    if (index === multisigInputIndex) {
      const bobSigTemplate = new SignatureTemplate(privateKey, HashType.SIGHASH_ALL, SignatureAlgorithm.ECDSA);
      builder.addInput(utxo, adminMultisigContract.unlock.spend(signature, bobSigTemplate, 0n));
    } else {
      // raw unlocker
      builder.addInput(utxo, {
          generateLockingBytecode: () => Uint8Array.from([]), // Placeholder, as we are not locking;
          generateUnlockingBytecode: (options: GenerateUnlockingBytecodeOptions) => input.unlockingBytecode,
      });
    }
  }

  for (const output of partiallySignedTx.outputs) {
    const encodeResult = lockingBytecodeToCashAddress({
        bytecode: output.lockingBytecode,
        prefix: getNetworkPrefix(provider.network),
        tokenSupport: output.token !== undefined,
      }) as CashAddressResult;

    builder.addOutput({
      to: encodeResult.address,
      amount: output.valueSatoshis,
      token: output.token ? {
        category: binToHex(output.token.category),
        amount: output.token.amount,
        nft: output.token.nft ? {
          capability: output.token.nft.capability,
          commitment: binToHex(output.token.nft.commitment),
        } : undefined,
      } : undefined,
    });
  }

  if (send) {
    const result = await builder.send();
    return result.hex;
  }

  return builder.build();
}
