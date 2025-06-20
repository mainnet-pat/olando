import 'cashscript/jest';
import { binToHex, hexToBin } from '@bitauth/libauth';
import { MockNetworkProvider, TransactionBuilder, Utxo, randomUtxo } from 'cashscript';
import { libauthOutputToCashScriptOutput, zip } from 'cashscript/dist/utils.js';
import { aliceAddress, aliceSigTemplate, MockWallet, setupFakeCauldronPools, alicePriv, getAdminMultisig2of3Contract, getCouncilMultisig2of3Contract, setupAuthGuard } from '../shared.js';
import { getCauldronPoolContractInstance, olandoCategory, padVmNumber, toTokenAddress, vmToBigInt, require, deployContractFromAuthGuard } from '../../src/index.js';
import { buildSwapTransaction } from '../../src/swap.js';

describe('test contract functions', () => {
  it('test issuance function, fake pools', async () => {
    const provider = new MockNetworkProvider();

    const councilMultisigContract = getCouncilMultisig2of3Contract(provider);
    const adminMultisigContract = getAdminMultisig2of3Contract(provider);

    await setupAuthGuard(provider);
    const { issuanceFundContract } = await deployContractFromAuthGuard({
      provider,
      deployerAddress: aliceAddress,
      deployerPriv: alicePriv,
      councilContract: councilMultisigContract,
      adminContract: adminMultisigContract,
    });

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
        to: councilMultisigContract.tokenAddress,
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

  it('test issuance function, fake pools, authguard', async () => {
    const provider = new MockNetworkProvider();

    const councilMultisigContract = getCouncilMultisig2of3Contract(provider);
    const adminMultisigContract = getAdminMultisig2of3Contract(provider);

    await setupAuthGuard(provider);
    const { issuanceFundContract } = await deployContractFromAuthGuard({
      provider,
      deployerAddress: aliceAddress,
      deployerPriv: alicePriv,
      councilContract: councilMultisigContract,
      adminContract: adminMultisigContract,
    });

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
        to: councilMultisigContract.tokenAddress,
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

  it('test issuance function, real pools, cauldron placeholder unlocker', async () => {
    const provider = new MockNetworkProvider();

    const councilMultisigContract = getCouncilMultisig2of3Contract(provider);
    const adminMultisigContract = getAdminMultisig2of3Contract(provider);

    await setupAuthGuard(provider);
    const { issuanceFundContract } = await deployContractFromAuthGuard({
      provider,
      deployerAddress: aliceAddress,
      deployerPriv: alicePriv,
      councilContract: councilMultisigContract,
      adminContract: adminMultisigContract,
    });

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
    require(issue <= currentEmissionCap - issued, "Issue amount exceeds current emission cap");

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
        to: councilMultisigContract.tokenAddress,
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
