import { AuthenticationInstructionPush, AuthenticationInstructions, binToHex, CashAddressResult, decodeAuthenticationInstructions, decodeTransaction, hexToBin, lockingBytecodeToCashAddress, Transaction } from "@bitauth/libauth";
import { Contract, GenerateUnlockingBytecodeOptions, HashType, NetworkProvider, SignatureAlgorithm, SignatureTemplate, TransactionBuilder, Utxo } from "cashscript";
import { getNetworkPrefix } from "cashscript/dist/utils";
import Multisig_2of3Artifact from "../artifacts/Multisig_2of3.artifact";

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
