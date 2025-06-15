import 'cashscript/jest';
import { MockNetworkProvider, randomUtxo, TransactionBuilder } from "cashscript";
import { olandoCategory, toTokenAddress } from "../src";
import { deployContract, aliceAddress, aliceSigTemplate } from "./shared";

describe('Issuance Fund Contract Donation Tests', () => {
  it('test donation to contract, no token change', async () => {
    const provider = new MockNetworkProvider();

    const { issuanceFundContract } = await deployContract(provider);

    const contractUtxo = (await provider.getUtxos(issuanceFundContract.address)).find(u =>
      u.token?.category === olandoCategory &&
      u.token?.nft?.capability === 'mutable' &&
      u.token.nft.commitment.length === 16
    )!;

    const donationUtxo = randomUtxo({
      satoshis: 1000n, // 1 BCH
      token: {
        amount: 10_00n, // 2 decimals
        category: olandoCategory,
      }
    });
    provider.addUtxo(aliceAddress, donationUtxo);

    // funding + cauldron token-buy bch input
    const fundingUtxo = randomUtxo({
      satoshis: 100_000_000n, // 1 BCH
    });
    provider.addUtxo(aliceAddress, fundingUtxo);

    const builder = new TransactionBuilder({ provider })
      .addInput(contractUtxo, issuanceFundContract.unlock.donate())
      .addInput(donationUtxo, aliceSigTemplate.unlockP2PKH())
      .addInput(fundingUtxo, aliceSigTemplate.unlockP2PKH())
      .addOutput({
        to: issuanceFundContract.tokenAddress,
        amount: contractUtxo.satoshis,
        token: {
          ...contractUtxo.token!,
          amount: contractUtxo.token!.amount + donationUtxo.token!.amount,
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

    const result = builder.send();
    await expect(result).resolves.not.toThrow();

    {
      const txSize = builder.build().length / 2;
      const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
        builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
      console.log(`Transaction size: ${txSize} bytes, change: ${change} satoshis, fee/byte ${Number(change) / txSize}`);
    }
  });

  it('test donation to contract, with token change', async () => {
    const provider = new MockNetworkProvider();

    const { issuanceFundContract } = await deployContract(provider);

    const contractUtxo = (await provider.getUtxos(issuanceFundContract.address)).find(u =>
      u.token?.category === olandoCategory &&
      u.token?.nft?.capability === 'mutable' &&
      u.token.nft.commitment.length === 16
    )!;

    const donationUtxo = randomUtxo({
      satoshis: 1000n, // 1 BCH
      token: {
        amount: 10_00n, // 2 decimals
        category: olandoCategory,
      }
    });
    provider.addUtxo(aliceAddress, donationUtxo);

    // funding + cauldron token-buy bch input
    const fundingUtxo = randomUtxo({
      satoshis: 100_000_000n, // 1 BCH
    });
    provider.addUtxo(aliceAddress, fundingUtxo);

    const builder = new TransactionBuilder({ provider })
      .addInput(contractUtxo, issuanceFundContract.unlock.donate())
      .addInput(donationUtxo, aliceSigTemplate.unlockP2PKH())
      .addInput(fundingUtxo, aliceSigTemplate.unlockP2PKH())
      .addOutput({
        to: issuanceFundContract.tokenAddress,
        amount: contractUtxo.satoshis,
        token: {
          ...contractUtxo.token!,
          amount: contractUtxo.token!.amount + donationUtxo.token!.amount - 2_00n,
        },
      })
      .addOutput({
        to: toTokenAddress(aliceAddress),
        amount: 1000n,
        token: {
          ...donationUtxo.token!,
          amount: 2_00n,
        }
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

  it('test donation to contract, wrong token change', async () => {
    const provider = new MockNetworkProvider();

    const { issuanceFundContract } = await deployContract(provider);

    const contractUtxo = (await provider.getUtxos(issuanceFundContract.address)).find(u =>
      u.token?.category === olandoCategory &&
      u.token?.nft?.capability === 'mutable' &&
      u.token.nft.commitment.length === 16
    )!;

    const donationUtxo = randomUtxo({
      satoshis: 1000n, // 1 BCH
      token: {
        amount: 10_00n, // 2 decimals
        category: olandoCategory,
      }
    });
    provider.addUtxo(aliceAddress, donationUtxo);

    // funding + cauldron token-buy bch input
    const fundingUtxo = randomUtxo({
      satoshis: 100_000_000n, // 1 BCH
    });
    provider.addUtxo(aliceAddress, fundingUtxo);

    const builder = new TransactionBuilder({ provider })
      .addInput(contractUtxo, issuanceFundContract.unlock.donate())
      .addInput(donationUtxo, aliceSigTemplate.unlockP2PKH())
      .addInput(fundingUtxo, aliceSigTemplate.unlockP2PKH())
      .addOutput({
        to: issuanceFundContract.tokenAddress,
        amount: contractUtxo.satoshis,
        token: {
          ...contractUtxo.token!,
          amount: contractUtxo.token!.amount + donationUtxo.token!.amount - 2_00n,
        },
      })
      .addOutput({
        to: toTokenAddress(aliceAddress),
        amount: 1000n,
        token: {
          ...donationUtxo.token!,
          amount: 1_00n,
        }
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

  it('test donation to contract, no token amount change for issuance fund', async () => {
    const provider = new MockNetworkProvider();

    const { issuanceFundContract } = await deployContract(provider);

    const contractUtxo = (await provider.getUtxos(issuanceFundContract.address)).find(u =>
      u.token?.category === olandoCategory &&
      u.token?.nft?.capability === 'mutable' &&
      u.token.nft.commitment.length === 16
    )!;

    const donationUtxo = randomUtxo({
      satoshis: 1000n, // 1 BCH
      token: {
        amount: 10_00n, // 2 decimals
        category: olandoCategory,
      }
    });
    provider.addUtxo(aliceAddress, donationUtxo);

    // funding + cauldron token-buy bch input
    const fundingUtxo = randomUtxo({
      satoshis: 100_000_000n, // 1 BCH
    });
    provider.addUtxo(aliceAddress, fundingUtxo);

    const builder = new TransactionBuilder({ provider })
      .addInput(contractUtxo, issuanceFundContract.unlock.donate())
      .addInput(donationUtxo, aliceSigTemplate.unlockP2PKH())
      .addInput(fundingUtxo, aliceSigTemplate.unlockP2PKH())
      .addOutput({
        to: issuanceFundContract.tokenAddress,
        amount: contractUtxo.satoshis,
        token: {
          ...contractUtxo.token!,
          amount: contractUtxo.token!.amount,
        },
      })
      .addOutput({
        to: toTokenAddress(aliceAddress),
        amount: 1000n,
        token: {
          ...donationUtxo.token!,
          amount: 10_00n,
        }
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
    await expect(result).rejects.toThrow(/Token amount must increase/);

    {
      const txSize = builder.build().length / 2;
      const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
        builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
      console.log(`Transaction size: ${txSize} bytes, change: ${change} satoshis, fee/byte ${Number(change) / txSize}`);
    }
  });
});