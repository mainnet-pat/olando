import { binToHex, utf8ToBin } from '@bitauth/libauth';
import IssuanceFundArtifact from '../artifacts/IssuanceFund.artifact.js';
import CouncilFund from '../artifacts/CouncilFund.artifact.js';
import { Contract, MockNetworkProvider, SignatureTemplate, TransactionBuilder, Unlocker, Utxo, randomUtxo } from 'cashscript';
import 'cashscript/jest';
import { addressToLockScript, libauthOutputToCashScriptOutput, zip } from 'cashscript/dist/utils.js';
import { aliceAddress, alicePkh, alicePriv, aliceSigTemplate, MockWallet } from './shared.js';
import { getCauldronPoolContractInstance, olandoCategory, padVmNumber, RawUnlocker, toTokenAddress, vmToBigInt } from '../src/index.js';
import { buildSwapTransaction } from '../src/swap.js';
import { hexToBin } from 'mainnet-js';

const deployContract = async (provider: MockNetworkProvider, salt: bigint = 0n) => {
  provider.addUtxo(aliceAddress, randomUtxo({
    satoshis: 100_000_000n, // 1 BCH
  }));

  provider.addUtxo(aliceAddress, randomUtxo({
    satoshis: 1000n, // 1 BCH
    token: {
      amount: 8_888_888_888_888_888_88n, // 2 decimals
      category: olandoCategory,
      nft: {
        capability: 'mutable',
        commitment: '',
      }
    }
  }));

  const councilFundContract = new Contract(CouncilFund, [salt], { provider, addressType: 'p2sh20' });

  const issuanceFundContract = new Contract(IssuanceFundArtifact, [addressToLockScript(councilFundContract.address)], { provider });
  const deploymentTime = 1749427200; // Mon Jun 09 2025 00:00:00 GMT+0000
  const lastInteractionTime = deploymentTime;

  const utxos = await provider.getUtxos(aliceAddress);

  const fundingUtxo = utxos.find(utxo => utxo.token === undefined && utxo.satoshis >= 100000n)!;

  const tokenFundingUtxo = utxos.find(utxo =>
    utxo.token?.category === olandoCategory &&
    utxo.token?.nft?.capability === 'mutable' &&
    utxo.token.nft.commitment.length === 0 &&
    utxo.token.amount > 8_888_888_888_888_88n)!;

  const deploymentTransaction = await new TransactionBuilder({ provider })
    .addInput(tokenFundingUtxo, new SignatureTemplate(alicePriv).unlockP2PKH())
    .addInput(fundingUtxo, new SignatureTemplate(alicePriv).unlockP2PKH())
    .addOutput({
      to: toTokenAddress(issuanceFundContract.address),
      amount: 1000n,
      token: {
        amount: 8_888_888_888_888_88n, // 2 decimals
        category: olandoCategory,
        nft: {
          capability: 'mutable',
          commitment: binToHex(Uint8Array.from([
            ...padVmNumber(BigInt(deploymentTime), 4),
            ...padVmNumber(BigInt(lastInteractionTime), 4),
          ])),
        }
      }
    })
    .addOutput({
      to: toTokenAddress(aliceAddress),
      amount: 1000n,
      token: {
        amount: 0n,
        category: olandoCategory,
        nft: {
          capability: 'none',
          commitment: binToHex(utf8ToBin('admin')),
        }
      }
    })
    .addOutput({
      to: aliceAddress,
      amount: fundingUtxo.satoshis - 3000n, // BCH change
      token: undefined,
    })
    .send();

  console.log(`Issuance fund deployed at ${issuanceFundContract.address} with txid ${deploymentTransaction.txid}`);

  return { issuanceFundContract, councilFundContract };
}

const setupFakeCauldronPools = async (provider: MockNetworkProvider) => {
  const fakeCauldron = getCauldronPoolContractInstance(provider, alicePkh);
  provider.addUtxo(fakeCauldron.address, randomUtxo({
    satoshis: 100000n,
    token: {
      amount: 3000n, // cauldron pool token output
      category: olandoCategory,
    }
  }));

  provider.addUtxo(fakeCauldron.address, randomUtxo({
    satoshis: 200000n,
    token: {
      amount: 4000n, // cauldron pool token output
      category: olandoCategory,
    }
  }));

  return { fakeCauldron }
}

describe('test contract functions', () => {
  it('test issuance function, fake pools', async () => {
    const provider = new MockNetworkProvider();

    const { issuanceFundContract, councilFundContract } = await deployContract(provider);
    const { fakeCauldron: cauldron } = await setupFakeCauldronPools(provider);

    const contractUtxo = (await provider.getUtxos(issuanceFundContract.address)).find(u =>
      u.token?.category === olandoCategory &&
      u.token?.nft?.capability === 'mutable' &&
      u.token.nft.commitment.length === 16
    )!;

    const deploymentTime = vmToBigInt(contractUtxo.token!.nft!.commitment.slice(0, 8));
    const lastInteractionTime = vmToBigInt(contractUtxo.token!.nft!.commitment.slice(8, 16));

    // funding + cauldron token-buy bch input
    const investmentUtxo = randomUtxo({
      satoshis: 100_000_000n, // 1 BCH
    });
    provider.addUtxo(aliceAddress, investmentUtxo);

    // a BCH-only utxo at index 1 to be used to balance the council output
    const councilUtxo = randomUtxo({
      satoshis: 100000n,
    });
    provider.addUtxo(aliceAddress, councilUtxo);

    const cauldronPoolUtxos = (await provider.getUtxos(cauldron.address));
    const cauldronTradeBoughtTokens = 1000n;

    const currentTime = BigInt(Math.floor(Date.now() / 1000)); // Current time in seconds since epoch

    const intialSupply = 8888888888888_88n; // with 2 decimals
    const issued = intialSupply - contractUtxo.token!.amount;

    const SCALE = 1_000_000_000n; // 1e9 for scaling
    const t = currentTime - deploymentTime; // time in seconds since startTime
    console.log(t, "time since start");
    const k = 3n; // 3E-9 scaled by 1e9
    const denom = SCALE + k * t; // (1 + 3E-9 * t) * 1e9
    const denomSquared = denom * denom / SCALE; // (1 + 3E-9 * t)^2 * 1e9
    const currentEmissionCap = intialSupply * (SCALE - SCALE * SCALE / denomSquared) / SCALE;
    console.log(currentEmissionCap, "current emission cap");

    // use inputs.length to find the cauldron token-buy output, since last ouput could be a bch change
    const tokensBought = cauldronTradeBoughtTokens;
    const issue = tokensBought * 9n / 10n; // 90% of tokens bought
    const issueShare = (tokensBought + issue) / 2n;
    console.log("investorShare", issueShare, "fundShare", issueShare, "issue", issue, "tokensBought", tokensBought);

    const builder = new TransactionBuilder({ provider })
      .addInput(contractUtxo, issuanceFundContract.unlock.issue())
      .addInput(councilUtxo, aliceSigTemplate.unlockP2PKH())
      .addInput(cauldronPoolUtxos[0], cauldron.unlock.exchange())
      .addInput(cauldronPoolUtxos[1], cauldron.unlock.exchange())
      .addInput(investmentUtxo, aliceSigTemplate.unlockP2PKH())
      .addOutput({
        to: toTokenAddress(issuanceFundContract.address),
        amount: contractUtxo.satoshis,
        token: {
          ...contractUtxo.token!,
          amount: contractUtxo.token!.amount - issueShare - issueShare,
          nft: {
            capability: 'mutable',
            commitment: binToHex(Uint8Array.from([
              ...padVmNumber(BigInt(deploymentTime), 4),
              ...padVmNumber(BigInt(currentTime), 4),
            ])),
          },
        },
      })
      .addOutput({
        to: councilFundContract.tokenAddress,
        amount: 1000n,
        token: {
          category: olandoCategory,
          amount: issueShare, // council fund share
        }
      })
      .addOutput({
        to: cauldron.tokenAddress,
        amount: 200000n,
        token: {
          category: olandoCategory,
          nft: undefined,
          amount: 2500n, // cauldron pool token output
        },
      })
      .addOutput({
        to: cauldron.tokenAddress,
        amount: 400000n,
        token: {
          category: olandoCategory,
          nft: undefined,
          amount: 3500n, // cauldron pool token output
        },
      })
      .addOutput({
        to: toTokenAddress(aliceAddress),
        amount: 1000n,
          token: {
          category: contractUtxo.token!.category,
          nft: undefined,
          amount: issueShare,
        },
      })
      .setLocktime(Number(currentTime));

    const txSize = builder.build().length / 2;
    const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
      builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
    builder.addOutput({
      to: aliceAddress,
      amount: change - BigInt(txSize) - 200n, // BCH change
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

  it.skip('test issuance function, real pools, raw unlocker', async () => {
    const provider = new MockNetworkProvider();

    const { issuanceFundContract, councilFundContract } = await deployContract(provider);

    const contractUtxo = (await provider.getUtxos(issuanceFundContract.address)).find(u =>
      u.token?.category === olandoCategory &&
      u.token?.nft?.capability === 'mutable' &&
      u.token.nft.commitment.length === 16
    )!;

    const deploymentTime = vmToBigInt(contractUtxo.token!.nft!.commitment.slice(0, 8));
    const lastInteractionTime = vmToBigInt(contractUtxo.token!.nft!.commitment.slice(8, 16));

    // funding + cauldron token-buy bch input
    const investmentUtxo = randomUtxo({
      satoshis: 100_000_000n, // 1 BCH
    });
    provider.addUtxo(aliceAddress, investmentUtxo);

    // a BCH-only utxo at index 1 to be used to balance the council output
    const councilUtxo = randomUtxo({
      satoshis: 100000n,
    });
    provider.addUtxo(aliceAddress, councilUtxo);

    const wallet = await MockWallet(provider);
    const { tradeTxList: proposedTxs } = (await buildSwapTransaction(1000000n, wallet));
    const proposedTx = proposedTxs[0];

    const cauldronPoolUtxos: Utxo[] = zip(proposedTx.libauth_generated_transaction.inputs, proposedTx.libauth_source_outputs).map(([input, sourceOutput]) => ({
      txid: binToHex(input.outpointTransactionHash),
      vout: input.outpointIndex,
      satoshis: sourceOutput.valueSatoshis,
      token: sourceOutput.token ? {
        category: binToHex(sourceOutput.token.category),
        amount: sourceOutput.token.amount,
        nft: sourceOutput.token.nft ? {
          capability: sourceOutput.token.nft.capability,
          commitment: binToHex(sourceOutput.token.nft.commitment),
        } : undefined,
      } : undefined,
    }));

    const cauldronPoolOutputs = proposedTx.libauth_generated_transaction.outputs.map((output) => libauthOutputToCashScriptOutput(output));
    const cauldronTradeBoughtTokens = cauldronPoolOutputs.at(-2)!.token!.amount; // last to last output is the cauldron pool token-buy output, the last one is bch change

    const currentTime = BigInt(Math.floor(Date.now() / 1000)); // Current time in seconds since epoch

    const intialSupply = 8888888888888_88n; // with 2 decimals
    const issued = intialSupply - contractUtxo.token!.amount;

    const SCALE = 1_000_000_000n; // 1e9 for scaling
    const t = currentTime - deploymentTime; // time in seconds since startTime
    console.log(t, "time since start");
    const k = 3n; // 3E-9 scaled by 1e9
    const denom = SCALE + k * t; // (1 + 3E-9 * t) * 1e9
    const denomSquared = denom * denom / SCALE; // (1 + 3E-9 * t)^2 * 1e9
    const currentEmissionCap = intialSupply * (SCALE - SCALE * SCALE / denomSquared) / SCALE;
    console.log(currentEmissionCap, "current emission cap");

    // use inputs.length to find the cauldron token-buy output, since last ouput could be a bch change
    const tokensBought = cauldronTradeBoughtTokens;
    const issue = tokensBought * 9n / 10n; // 90% of tokens bought
    const issueShare = (tokensBought + issue) / 2n;
    console.log("investorShare", issueShare, "fundShare", issueShare, "issue", issue, "tokensBought", tokensBought);

    const builder = new TransactionBuilder({ provider })
      .addInput(contractUtxo, issuanceFundContract.unlock.issue())
      .addInput(councilUtxo, aliceSigTemplate.unlockP2PKH());

    // we are assuming here that bch investment input is always the last input, paying for the trade in full
    cauldronPoolUtxos.forEach((utxo, index) => {
      builder.addInput(utxo, RawUnlocker(proposedTx.libauth_generated_transaction.inputs[index].unlockingBytecode, proposedTx.libauth_generated_transaction.outputs[index].lockingBytecode) as Unlocker);
    });

    builder
      .addOutput({
        to: toTokenAddress(issuanceFundContract.address),
        amount: contractUtxo.satoshis,
        token: {
          ...contractUtxo.token!,
          amount: contractUtxo.token!.amount - issueShare - issueShare,
          nft: {
            capability: 'mutable',
            commitment: binToHex(Uint8Array.from([
              ...padVmNumber(BigInt(deploymentTime), 4),
              ...padVmNumber(BigInt(currentTime), 4),
            ])),
          },
        },
      })
      .addOutput({
        to: councilFundContract.tokenAddress,
        amount: 1000n,
        token: {
          category: olandoCategory,
          amount: issueShare, // council fund share
        }
      });

    proposedTx.libauth_generated_transaction.outputs.forEach((output, index) => {
      if (index === proposedTx.libauth_generated_transaction.outputs.length - 2) {
        const copy = structuredClone(output);
        copy.token!.amount = issueShare; // 95% of the cauldron pool token output
        builder.addOutput(libauthOutputToCashScriptOutput(copy));
        return;
      }
      builder.addOutput(libauthOutputToCashScriptOutput(output));
    });

    builder.setLocktime(Number(currentTime));

    const txSize = builder.build().length / 2;
    const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
      builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
    builder.addOutput({
      to: aliceAddress,
      amount: change - BigInt(txSize) - 200n, // BCH change
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

  it('test issuance function, real pools, cauldron placeholder unlocker', async () => {
    const provider = new MockNetworkProvider();

    const { issuanceFundContract, councilFundContract } = await deployContract(provider);

    const contractUtxo = (await provider.getUtxos(issuanceFundContract.address)).find(u =>
      u.token?.category === olandoCategory &&
      u.token?.nft?.capability === 'mutable' &&
      u.token.nft.commitment.length === 16
    )!;

    const deploymentTime = vmToBigInt(contractUtxo.token!.nft!.commitment.slice(0, 8));
    const lastInteractionTime = vmToBigInt(contractUtxo.token!.nft!.commitment.slice(8, 16));

    // funding + cauldron token-buy bch input
    const investmentUtxo = randomUtxo({
      satoshis: 1000_0000n,
    });
    provider.addUtxo(aliceAddress, investmentUtxo);

    // a BCH-only utxo at index 1 to be used to balance the council output
    const councilUtxo = randomUtxo({
      satoshis: 100000n,
    });
    provider.addUtxo(aliceAddress, councilUtxo);

    const wallet = await MockWallet(provider);
    const { tradeTxList: proposedTxs, pools } = (await buildSwapTransaction(investmentUtxo.satoshis, wallet));
    const proposedTx = proposedTxs[0];

    const cauldronPoolUtxos: Utxo[] = zip(proposedTx.libauth_generated_transaction.inputs, proposedTx.libauth_source_outputs).map(([input, sourceOutput]) => ({
      txid: binToHex(input.outpointTransactionHash),
      vout: input.outpointIndex,
      satoshis: sourceOutput.valueSatoshis,
      token: sourceOutput.token ? {
        category: binToHex(sourceOutput.token.category),
        amount: sourceOutput.token.amount,
        nft: sourceOutput.token.nft ? {
          capability: sourceOutput.token.nft.capability,
          commitment: binToHex(sourceOutput.token.nft.commitment),
        } : undefined,
      } : undefined,
    }));

    const cauldronPoolOutputs = proposedTx.libauth_generated_transaction.outputs.map((output) => libauthOutputToCashScriptOutput(output));
    const cauldronTradeAdjustedTokenAmount = 95n * cauldronPoolOutputs.at(-2)!.token!.amount / 100n; // 95% of the cauldron pool token-buy output

    console.log(cauldronPoolOutputs.at(-2)!.token!.amount, cauldronTradeAdjustedTokenAmount)

    const currentTime = BigInt(Math.floor(Date.now() / 1000)); // Current time in seconds since epoch

    const intialSupply = 8888888888888_88n; // with 2 decimals
    const issued = intialSupply - contractUtxo.token!.amount;

    const SCALE = 1_000_000_000n; // 1e9 for scaling
    const t = currentTime - deploymentTime; // time in seconds since startTime
    console.log(t, "time since start");
    const k = 3n; // 3E-9 scaled by 1e9
    const denom = SCALE + k * t; // (1 + 3E-9 * t) * 1e9
    const denomSquared = denom * denom / SCALE; // (1 + 3E-9 * t)^2 * 1e9
    const currentEmissionCap = intialSupply * (SCALE - SCALE * SCALE / denomSquared) / SCALE;
    console.log(currentEmissionCap, "current emission cap");

    // use inputs.length to find the cauldron token-buy output, since last ouput could be a bch change
    const tokensBought = 100n * cauldronTradeAdjustedTokenAmount / 95n;
    const issue = tokensBought * 9n / 10n; // 90% of tokens bought
    console.log("tokensBought", tokensBought, "issue", issue);

    const builder = new TransactionBuilder({ provider })
      .addInput(contractUtxo, issuanceFundContract.unlock.issue())
      .addInput(councilUtxo, aliceSigTemplate.unlockP2PKH());

    // we are assuming here that bch investment input is always the last input, paying for the trade in full
    cauldronPoolUtxos.forEach((utxo, index) => {
      const pkh = pools.active.find(pool => pool.txid === utxo.txid && pool.tx_pos === utxo.vout)?.owner_pkh;
      if (!pkh) {
        builder.addInput(utxo, aliceSigTemplate.unlockP2PKH());
        return;
      }
      builder.addInput(utxo, getCauldronPoolContractInstance(provider, hexToBin(pkh)).unlock.exchange());
    });

    builder
      .addOutput({
        to: toTokenAddress(issuanceFundContract.address),
        amount: contractUtxo.satoshis,
        token: {
          ...contractUtxo.token!,
          amount: contractUtxo.token!.amount - cauldronTradeAdjustedTokenAmount - cauldronTradeAdjustedTokenAmount,
          nft: {
            capability: 'mutable',
            commitment: binToHex(Uint8Array.from([
              ...padVmNumber(BigInt(deploymentTime), 4),
              ...padVmNumber(BigInt(currentTime), 4),
            ])),
          },
        },
      })
      .addOutput({
        to: councilFundContract.tokenAddress,
        amount: 1000n,
        token: {
          category: olandoCategory,
          amount: cauldronTradeAdjustedTokenAmount, // council fund share
        }
      });

    proposedTx.libauth_generated_transaction.outputs.forEach((output, index) => {
      if (index === proposedTx.libauth_generated_transaction.outputs.length - 1) {
        return; // skip the last output, which is BCH change, we will recaulculate it later
      }

      if (index === proposedTx.libauth_generated_transaction.outputs.length - 2) {
        const copy = structuredClone(output);
        copy.valueSatoshis = 1000n; // set token output satoshis to 1000n
        copy.token!.amount = cauldronTradeAdjustedTokenAmount; // 95% of the cauldron pool token output
        console.log("adding cauldron pool output", copy);
        builder.addOutput(libauthOutputToCashScriptOutput(copy));
        return;
      }
      builder.addOutput(libauthOutputToCashScriptOutput(output));
    });

    builder.setLocktime(Number(currentTime));

    const txSize = builder.build().length / 2;
    const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
      builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
    builder.addOutput({
      to: aliceAddress,
      amount: change - BigInt(txSize) - 200n, // BCH change
      token: undefined,
    });

    console.log(builder.outputs, proposedTx.libauth_generated_transaction.outputs)

    const result = builder.send();
    await expect(result).resolves.not.toThrow();

    {
      const txSize = builder.build().length / 2;
      const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
        builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
      console.log(`Transaction size: ${txSize} bytes, change: ${change} satoshis, fee/byte ${Number(change) / txSize}`);
    }
  });

  it('test migrating contract', async () => {
    const provider = new MockNetworkProvider();

    const { issuanceFundContract } = await deployContract(provider);
    const { issuanceFundContract: newIssuanceFundContract } = await deployContract(provider, 1n);

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
      .addInput(contractUtxo, issuanceFundContract.unlock.migrate(addressToLockScript(newIssuanceFundContract.address)))
      .addInput(adminUtxo, aliceSigTemplate.unlockP2PKH())
      .addInput(fundingUtxo, aliceSigTemplate.unlockP2PKH())
      .addOutput({
        to: toTokenAddress(newIssuanceFundContract.address),
        amount: contractUtxo.satoshis,
        token: {...contractUtxo.token!},
      })
      .addOutput({
        to: toTokenAddress(aliceAddress),
        amount: 1000n,
        token: {...adminUtxo.token!}
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

  it('test dissolving contract', async () => {
    const provider = new MockNetworkProvider();

    const { issuanceFundContract } = await deployContract(provider);

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
