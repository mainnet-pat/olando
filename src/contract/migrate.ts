import { Contract, NetworkProvider, SignatureTemplate, TransactionBuilder } from "cashscript";
import IssuanceFundArtifact from "../../artifacts/IssuanceFund.artifact";
import Multisig_2of3Artifact from "../../artifacts/Multisig_2of3.artifact";
import { addressToLockScript, toTokenAddress } from "../utils";

// Migrates the IssuanceFund contract to a new instance, changes admin or council multisigs. Or does all actions at once.
export const migrate = async ({
  provider,
  adminMultisigContract,
  councilMultisigContract,
  newAdminMultisigContractAddress,
  newIssuanceFundContractAddress,
  aliceAddress,
  alicePriv,
  signatures,
  olandoCategory,
  send = true,
} : {
  provider: NetworkProvider,
  adminMultisigContract: Contract<typeof Multisig_2of3Artifact>,
  councilMultisigContract: Contract<typeof Multisig_2of3Artifact>,
  newAdminMultisigContractAddress: string,
  newIssuanceFundContractAddress: string,
  aliceAddress: string,
  alicePriv: Uint8Array,
  signatures: [Uint8Array | SignatureTemplate, Uint8Array | SignatureTemplate],
  olandoCategory: string,
  send?: boolean,
}) => {
  const aliceSigTemplate = new SignatureTemplate(alicePriv);
  const userUtxos = await provider.getUtxos(aliceAddress);
  const issuanceFundContract = new Contract(
    IssuanceFundArtifact,
    [addressToLockScript(councilMultisigContract.address), addressToLockScript(adminMultisigContract.address)],
    { provider, addressType: 'p2sh20' }
  );

  const contractUtxo = (await provider.getUtxos(issuanceFundContract.address)).find(u =>
    u.token?.category === olandoCategory &&
    u.token?.nft?.capability === 'mutable' &&
    u.token.nft.commitment.length === 16
  )!;

  const adminUtxo = (await provider.getUtxos(adminMultisigContract.address)).find(u =>
    u.satoshis === 1000n,
  )!;

  // funding utxo
  const fundingUtxo = userUtxos.find(u =>
    u.token === undefined &&
    u.satoshis >= 10_000n
  );
  if (!fundingUtxo) {
    throw new Error(`No funding UTXO found for ${aliceAddress}`);
  }

  const builder = new TransactionBuilder({ provider })
    .addInput(contractUtxo, issuanceFundContract.unlock.migrate(addressToLockScript(newIssuanceFundContractAddress), addressToLockScript(newAdminMultisigContractAddress)))
    .addInput(adminUtxo, adminMultisigContract.unlock.spend(...signatures, 0n))
    .addInput(fundingUtxo, aliceSigTemplate.unlockP2PKH())
    .addOutput({
      to: toTokenAddress(newIssuanceFundContractAddress),
      amount: contractUtxo.satoshis,
      token: {...contractUtxo.token!},
    })
    .addOutput({
      to: newAdminMultisigContractAddress,
      amount: 1000n,
    });

  const txSize = builder.build().length / 2;
  const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
    builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
  builder.addOutput({
    to: aliceAddress,
    amount: change - BigInt(txSize) - 100n, // BCH change
    token: undefined,
  });

  {
    const txSize = builder.build().length / 2;
    const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
      builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
    console.log(`Transaction size: ${txSize} bytes, change: ${change} satoshis, fee/byte ${Number(change) / txSize}`);
  }

  if (send) {
    const result = await builder.send();
    return result.hex;
  }

  return builder.build();
};