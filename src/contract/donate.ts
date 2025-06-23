import { NetworkProvider, Contract, randomUtxo, TransactionBuilder, MockNetworkProvider, SignatureTemplate } from "cashscript";
import IssuanceFundArtifact from "../../artifacts/IssuanceFund.artifact";
import Multisig_2of3Artifact from "../../artifacts/Multisig_2of3.artifact";
import { addressToLockScript, olandoCategory, toTokenAddress } from "../utils";
import { TestNetWallet, TokenSendRequest, Wallet } from "mainnet-js";

export const donate = async ({
  aliceAddress,
  alicePriv,
  wallet,
  provider,
  olandoCategory,
  councilMultisigContract,
  adminMultisigContract,
  donationTokenAmount,
} : {
  aliceAddress: string,
  alicePriv: Uint8Array,
  wallet: Wallet | TestNetWallet,
  provider: NetworkProvider,
  olandoCategory: string,
  councilMultisigContract: Contract<typeof Multisig_2of3Artifact>,
  adminMultisigContract: Contract<typeof Multisig_2of3Artifact>,
  donationTokenAmount: bigint,
}) => {
  if (donationTokenAmount <= 0n) {
    throw new Error('Donation token amount must be greater than zero');
  }

  const aliceSigTemplate = new SignatureTemplate(alicePriv);

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

  let utxos = await provider.getUtxos(aliceAddress);
  const tokenUtxos = utxos.filter(u => u.token?.category === olandoCategory);
  if (tokenUtxos.reduce((sum, u) => sum + (u.token?.category === olandoCategory ? u.token.amount : 0n), 0n) < donationTokenAmount) {
    throw new Error(`Not enough ${olandoCategory} tokens in wallet to donate ${donationTokenAmount}`);
  }
  if (tokenUtxos.length > 1) {
    await wallet.send(new TokenSendRequest({
      cashaddr: wallet.address!,
      tokenId: olandoCategory,
      amount: donationTokenAmount,
    }));

    utxos = await provider.getUtxos(aliceAddress);
  }

  const fundingUtxo = utxos.find(utxo => utxo.token === undefined && utxo.satoshis >= 5000n);
  if (!fundingUtxo) {
    throw new Error(`No BCH UTXO found for ${aliceAddress} with at least 5000 satoshis`);
  }

  const donationUtxo = utxos.find(utxo =>
    utxo.token?.category === olandoCategory &&
    utxo.token.amount >= donationTokenAmount
  );
  if (!donationUtxo) {
    throw new Error(`No ${olandoCategory} token UTXO found for ${aliceAddress} with at least ${donationTokenAmount}`);
  }

  const builder = new TransactionBuilder({ provider })
    .addInput(contractUtxo, issuanceFundContract.unlock.donate())
    .addInput(donationUtxo, aliceSigTemplate.unlockP2PKH())
    .addInput(fundingUtxo, aliceSigTemplate.unlockP2PKH())
    .addOutput({
      to: issuanceFundContract.tokenAddress,
      amount: contractUtxo.satoshis,
      token: {
        ...contractUtxo.token!,
        amount: contractUtxo.token!.amount + donationTokenAmount,
      },
    });


  const tokenChange = donationUtxo.token!.amount - donationTokenAmount;
  if (tokenChange > 0n) {
    builder.addOutput({
      to: toTokenAddress(aliceAddress),
      amount: 1000n,
      token: {
        ...donationUtxo.token!,
        amount: tokenChange,
      },
    });
  }

  const txSize = builder.build().length / 2;
  const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
    builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
  builder.addOutput({
    to: aliceAddress,
    amount: change - BigInt(txSize) - 100n, // BCH change
    token: undefined,
  });

  await builder.send();

  {
    const txSize = builder.build().length / 2;
    const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
      builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
    console.log(`Transaction size: ${txSize} bytes, change: ${change} satoshis, fee/byte ${Number(change) / txSize}`);
  }
};
