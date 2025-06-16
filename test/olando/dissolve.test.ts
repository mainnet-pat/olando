import 'cashscript/jest';
import { HashType, MockNetworkProvider, randomUtxo, SignatureAlgorithm, SignatureTemplate, TransactionBuilder } from "cashscript";
import { binToHex, utf8ToBin } from "mainnet-js";
import { olandoCategory, toTokenAddress } from "../../src";
import { deployContractP2pkhAdmin, aliceAddress, aliceSigTemplate, getMultisig2of3Contract, deployContractMultisigAdmin, alicePriv, bobPriv } from "../shared";

describe('Dissolving Contract', () => {
  it('test dissolving contract', async () => {
    const provider = new MockNetworkProvider();

    const { issuanceFundContract } = await deployContractP2pkhAdmin(provider);

    const contractUtxo = (await provider.getUtxos(issuanceFundContract.address)).find(u =>
      u.token?.category === olandoCategory &&
      u.token?.nft?.capability === 'mutable' &&
      u.token.nft.commitment.length === 16
    )!;

    const adminUtxo = (await provider.getUtxos(aliceAddress)).find(u =>
      u.token?.category === olandoCategory &&
      u.token?.nft?.capability === 'none' &&
      u.token.nft.commitment === binToHex(utf8ToBin('admin'))
    )!;

    // funding + cauldron token-buy bch input
    const fundingUtxo = randomUtxo({
      satoshis: 100_000_000n, // 1 BCH
    });
    provider.addUtxo(aliceAddress, fundingUtxo);

    const builder = new TransactionBuilder({ provider })
      .addInput(contractUtxo, issuanceFundContract.unlock.dissolve())
      .addInput(adminUtxo, aliceSigTemplate.unlockP2PKH())
      .addInput(fundingUtxo, aliceSigTemplate.unlockP2PKH())
      .addOutput({
        to: toTokenAddress(aliceAddress),
        amount: contractUtxo.satoshis,
        token: {...contractUtxo.token!},
      });

    const txSize = builder.build().length / 2;
    const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
      builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
    builder.addOutput({
      to: aliceAddress,
      amount: change - BigInt(txSize) - 100n, // BCH change
      token: undefined,
    });

    const result = builder.send();
    await expect(result).resolves.not.toThrow();

    {
      const txSize = builder.build().length / 2;
      const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
        builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
      console.log(`Transaction size: ${txSize} bytes, change: ${change} satoshis, fee/byte ${Number(change) / txSize}`);
    }
  });

  it('test dissolving contract, multisig admin', async () => {
    const provider = new MockNetworkProvider();

    const { issuanceFundContract } = await deployContractMultisigAdmin(provider);
    const multisigContract = getMultisig2of3Contract(provider);

    const contractUtxo = (await provider.getUtxos(issuanceFundContract.address)).find(u =>
      u.token?.category === olandoCategory &&
      u.token?.nft?.capability === 'mutable' &&
      u.token.nft.commitment.length === 16
    )!;

    const adminUtxo = (await provider.getUtxos(multisigContract.address)).find(u =>
      u.token?.category === olandoCategory &&
      u.token?.nft?.capability === 'none' &&
      u.token.nft.commitment === binToHex(utf8ToBin('admin'))
    )!;

    // funding + cauldron token-buy bch input
    const fundingUtxo = randomUtxo({
      satoshis: 100_000_000n, // 1 BCH
    });
    provider.addUtxo(aliceAddress, fundingUtxo);

    const sigA = new SignatureTemplate(alicePriv, HashType.SIGHASH_ALL, SignatureAlgorithm.ECDSA);
    const sigB = new SignatureTemplate(bobPriv, HashType.SIGHASH_ALL, SignatureAlgorithm.ECDSA);

    const builder = new TransactionBuilder({ provider })
      .addInput(contractUtxo, issuanceFundContract.unlock.dissolve())
      .addInput(adminUtxo, multisigContract.unlock.spend(sigA, sigB, 0n))
      .addInput(fundingUtxo, aliceSigTemplate.unlockP2PKH())
      .addOutput({
        to: multisigContract.tokenAddress,
        amount: contractUtxo.satoshis,
        token: {...contractUtxo.token!},
      });

    const txSize = builder.build().length / 2;
    const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
      builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
    builder.addOutput({
      to: aliceAddress,
      amount: change - BigInt(txSize) - 100n, // BCH change
      token: undefined,
    });

    const result = builder.send();
    await expect(result).resolves.not.toThrow();

    {
      const txSize = builder.build().length / 2;
      const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
        builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
      console.log(`Transaction size: ${txSize} bytes, change: ${change} satoshis, fee/byte ${Number(change) / txSize}`);
    }
  });
});