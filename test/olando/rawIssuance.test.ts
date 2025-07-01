import { Contract, MockNetworkProvider, NetworkProvider, randomUtxo, SignatureTemplate, TransactionBuilder, Utxo } from "cashscript";
import { addressToLockScript, zip, libauthOutputToCashScriptOutput } from "cashscript/dist/utils";
import { Wallet, TestNetWallet, SendRequest, binToHex, hexToBin } from "mainnet-js";
import IssuanceFundArtifact from "../../artifacts/IssuanceFund.artifact";
import Multisig_2of3Artifact from "../../artifacts/Multisig_2of3.artifact";
import { deployContractFromAuthGuard, olandoCategory, vmToBigInt, getCauldronPoolContractInstance, toTokenAddress, padVmNumber, require, MaxTokenSupply } from "../../src";
import { buildSwapTransaction } from "../../src/swap";
import { aliceAddress, getCouncilMultisig2of3Contract, getAdminMultisig2of3Contract, setupAuthGuard, alicePriv, MockWallet } from "../shared";

describe('issuance raw tests', () => {
  it('add extra token output to steal from fund', async () => {
    const provider = new MockNetworkProvider();
    provider.reset();

    provider.addUtxo(aliceAddress, randomUtxo({
      satoshis: BigInt(0.12 * 1e8),
    }));

    provider.addUtxo(aliceAddress, randomUtxo({
      satoshis: 1000n,
    }));

    const councilMultisigContract = getCouncilMultisig2of3Contract(provider);
    const adminMultisigContract = getAdminMultisig2of3Contract(provider);

    await setupAuthGuard(provider);
    await deployContractFromAuthGuard({
      provider,
      deployerAddress: aliceAddress,
      deployerPriv: alicePriv,
      councilContract: councilMultisigContract,
      adminContract: adminMultisigContract,
      olandoCategory: olandoCategory,
    });

    await expect(investInIssuanceFundExtraOutput({
      investAmountBch: 0.001,
      provider,
      address: aliceAddress,
      privKey: alicePriv,
      wallet: await MockWallet(provider),
      councilMultisigContract,
      adminMultisigContract,
      olandoCategory,
    })).rejects.toThrow("Issue transaction must have one more output than inputs");
  });

  it('intentionally smaller cauldron token amount', async () => {
    const provider = new MockNetworkProvider();
    provider.reset();

    provider.addUtxo(aliceAddress, randomUtxo({
      satoshis: BigInt(0.12 * 1e8),
    }));

    provider.addUtxo(aliceAddress, randomUtxo({
      satoshis: 1000n,
    }));

    const councilMultisigContract = getCouncilMultisig2of3Contract(provider);
    const adminMultisigContract = getAdminMultisig2of3Contract(provider);

    await setupAuthGuard(provider);
    await deployContractFromAuthGuard({
      provider,
      deployerAddress: aliceAddress,
      deployerPriv: alicePriv,
      councilContract: councilMultisigContract,
      adminContract: adminMultisigContract,
      olandoCategory: olandoCategory,
    });

    await expect(investInIssuanceFundSmallerCauldronOutputTokenAmount({
      investAmountBch: 0.001,
      provider,
      address: aliceAddress,
      privKey: alicePriv,
      wallet: await MockWallet(provider),
      councilMultisigContract,
      adminMultisigContract,
      olandoCategory,
    })).rejects.toThrow("Cauldron pool token balance must be less than 2 tokens after the trade");
  });

  it('intentionally bigger cauldron token amount', async () => {
    const provider = new MockNetworkProvider();
    provider.reset();

    provider.addUtxo(aliceAddress, randomUtxo({
      satoshis: BigInt(0.12 * 1e8),
    }));

    provider.addUtxo(aliceAddress, randomUtxo({
      satoshis: 1000n,
    }));

    const councilMultisigContract = getCouncilMultisig2of3Contract(provider);
    const adminMultisigContract = getAdminMultisig2of3Contract(provider);

    await setupAuthGuard(provider);
    await deployContractFromAuthGuard({
      provider,
      deployerAddress: aliceAddress,
      deployerPriv: alicePriv,
      councilContract: councilMultisigContract,
      adminContract: adminMultisigContract,
      olandoCategory: olandoCategory,
      deploymentMtp: BigInt(Math.floor(Date.now() / 1000) - 50 * 60 * 60), // -50 hours
    });

    await expect(investInIssuanceFundGreaterCauldronOutputTokenAmount({
      investAmountBch: 0.001,
      provider,
      address: aliceAddress,
      privKey: alicePriv,
      wallet: await MockWallet(provider),
      councilMultisigContract,
      adminMultisigContract,
      olandoCategory,
    })).rejects.toThrow("Transaction violates token validation");
  });
});

// souce code is the same as in original invest.ts, but with extra code denoted
export const investInIssuanceFundExtraOutput = async ({
  investAmountBch,
  provider,
  address,
  privKey,
  wallet,
  councilMultisigContract,
  adminMultisigContract,
  olandoCategory,
} : {
  investAmountBch: number,
  provider: NetworkProvider,
  address: string,
  privKey: Uint8Array,
  wallet: Wallet | TestNetWallet,
  councilMultisigContract: Contract<typeof Multisig_2of3Artifact>,
  adminMultisigContract: Contract<typeof Multisig_2of3Artifact>,
  olandoCategory: string,
}) => {
  const aliceSigTemplate = new SignatureTemplate(privKey);
  let userUtxos = await provider.getUtxos(address);

  const issuanceFundContract = new Contract(IssuanceFundArtifact, [
    addressToLockScript(councilMultisigContract.address),
    addressToLockScript(adminMultisigContract.address),
  ], { provider, addressType: 'p2sh20' });

  const contractUtxo = (await provider.getUtxos(issuanceFundContract.address)).find(u =>
    u.token?.category === olandoCategory &&
    u.token?.nft?.capability === 'mutable' &&
    u.token.nft.commitment.length === 16
  );

  if (!contractUtxo) {
    throw new Error(`No valid contract UTXO found for issuance contract ${issuanceFundContract.address}`);
  }

  const deploymentTime = vmToBigInt(contractUtxo.token!.nft!.commitment.slice(0, 8));
  const lastInteractionTime = vmToBigInt(contractUtxo.token!.nft!.commitment.slice(8, 16));

  let userBchUtxos = userUtxos.filter(u => u.token === undefined);
  if (userBchUtxos.length === 0) {
    throw new Error(`No BCH UTXOs found for ${address}`);
  }

  if (userBchUtxos.length === 1) {
    await wallet.send(new SendRequest({
      cashaddr: wallet.address!,
      unit: 'sat',
      value: 1000,
    }));
    userUtxos = await provider.getUtxos(address);
    userBchUtxos = userUtxos.filter(u => u.token === undefined);
  }

  const balance = userBchUtxos.reduce((sum, u) => sum + u.satoshis, 0n);
  if (balance < BigInt(investAmountBch * 1e8) + 5000n) {
    throw new Error(`Not enough BCH balance to invest ${investAmountBch} BCH, current balance: ${Number(balance) / 1e8} BCH`);
  }

  // funding + cauldron token-buy bch input
  let investmentUtxo = userUtxos.find(u =>
    u.token === undefined &&
    u.satoshis >= BigInt(investAmountBch * 1e8) + 5000n
  );

  if (!investmentUtxo) {
    await wallet.send([new SendRequest({
      cashaddr: wallet.address!,
      unit: 'sat',
      value: 1e8 * investAmountBch + 5000,
    }), new SendRequest({
      cashaddr: wallet.address!,
      unit: 'sat',
      value: 1000,
    })]);

    userUtxos = await provider.getUtxos(address);
    investmentUtxo = userUtxos.find(u =>
      u.token === undefined &&
      u.satoshis >= BigInt(investAmountBch * 1e8) + 5000n
    );
  }

  if (!investmentUtxo) {
    throw new Error(`No funding UTXO found for ${address}`);
  }

  // a BCH-only utxo at index 1 to be used to balance the council output
  const councilUtxo = userUtxos.find(u =>
    u.token === undefined &&
    u.satoshis >= 1000n &&
    !(u.txid === investmentUtxo.txid && // ensure it's not the same as the investment UTXO
      u.vout === investmentUtxo.vout) // ensure it's not the same as the investment UTXO
  );

  if (!councilUtxo) {
    throw new Error(`No council UTXO found for ${address}`);
  }

  const { tradeTxList: proposedTxs, pools } = (await buildSwapTransaction(BigInt(investAmountBch * 1e8), wallet, olandoCategory));
  const proposedTx = proposedTxs[0]!;

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

  const currentTime = BigInt(Math.floor(Date.now() / 1000) - 2 * 60 * 60); // Current time in seconds since epoch - 2h

  const intialSupply = MaxTokenSupply; // with 2 decimals
  const issued = intialSupply - contractUtxo.token!.amount;

  const SCALE = 1_000_000_000n; // 1e9 for scaling
  const t = currentTime - deploymentTime; // time in seconds since startTime

  const k = 3n; // 3E-9 scaled by 1e9
  const denom = SCALE + k * t; // (1 + 3E-9 * t) * 1e9
  const denomSquared = denom * denom / SCALE; // (1 + 3E-9 * t)^2 * 1e9
  const currentEmissionCap = intialSupply * (SCALE - SCALE * SCALE / denomSquared) / SCALE;


  // use inputs.length to find the cauldron token-buy output, since last ouput could be a bch change
  const tokensBought = 100n * cauldronTradeAdjustedTokenAmount / 95n;
  const issue = tokensBought * 9n / 10n + 1n; // 90% of tokens bought

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

  /**/
  const stealAmount = 1000n; // 1000 tokens to steal from the issuance fund
  /**/

  builder
    .addOutput({
      to: toTokenAddress(issuanceFundContract.address),
      amount: contractUtxo.satoshis,
      token: {
        ...contractUtxo.token!,
        amount: contractUtxo.token!.amount - issue - stealAmount,
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

      builder.addOutput(libauthOutputToCashScriptOutput(copy));
      return;
    }
    builder.addOutput(libauthOutputToCashScriptOutput(output));
  });

  builder.setLocktime(Number(currentTime));

  const txSize = builder.build().length / 2;
  const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
    builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);

/**/
  builder.addOutput({
      to: toTokenAddress(issuanceFundContract.address),
      amount: contractUtxo.satoshis,
      token: {
        ...contractUtxo.token!,
        amount: stealAmount,
        nft: {
          capability: 'mutable',
          commitment: binToHex(Uint8Array.from([
            ...padVmNumber(BigInt(deploymentTime), 4),
            ...padVmNumber(BigInt(currentTime), 4),
          ])),
        },
      },
  });
/**/

  builder.addOutput({
    to: address,
    amount: change - BigInt(txSize) - 200n, // BCH change
  });

  // console.log("investTx:");
  // console.log(builder.build());
  // console.log(await builder.send());
  await builder.send();

  // {
  //   const txSize = builder.build().length / 2;
  //   const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
  //     builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
  //   console.log(`Transaction size: ${txSize} bytes, change: ${change} satoshis, fee/byte ${Number(change) / txSize}`);
  // }

  return cauldronTradeAdjustedTokenAmount;
};

export const investInIssuanceFundSmallerCauldronOutputTokenAmount = async ({
  investAmountBch,
  provider,
  address,
  privKey,
  wallet,
  councilMultisigContract,
  adminMultisigContract,
  olandoCategory,
} : {
  investAmountBch: number,
  provider: NetworkProvider,
  address: string,
  privKey: Uint8Array,
  wallet: Wallet | TestNetWallet,
  councilMultisigContract: Contract<typeof Multisig_2of3Artifact>,
  adminMultisigContract: Contract<typeof Multisig_2of3Artifact>,
  olandoCategory: string,
}) => {
  const aliceSigTemplate = new SignatureTemplate(privKey);
  let userUtxos = await provider.getUtxos(address);

  const issuanceFundContract = new Contract(IssuanceFundArtifact, [
    addressToLockScript(councilMultisigContract.address),
    addressToLockScript(adminMultisigContract.address),
  ], { provider, addressType: 'p2sh20' });

  const contractUtxo = (await provider.getUtxos(issuanceFundContract.address)).find(u =>
    u.token?.category === olandoCategory &&
    u.token?.nft?.capability === 'mutable' &&
    u.token.nft.commitment.length === 16
  );

  if (!contractUtxo) {
    throw new Error(`No valid contract UTXO found for issuance contract ${issuanceFundContract.address}`);
  }

  const deploymentTime = vmToBigInt(contractUtxo.token!.nft!.commitment.slice(0, 8));
  const lastInteractionTime = vmToBigInt(contractUtxo.token!.nft!.commitment.slice(8, 16));

  let userBchUtxos = userUtxos.filter(u => u.token === undefined);
  if (userBchUtxos.length === 0) {
    throw new Error(`No BCH UTXOs found for ${address}`);
  }

  if (userBchUtxos.length === 1) {
    await wallet.send(new SendRequest({
      cashaddr: wallet.address!,
      unit: 'sat',
      value: 1000,
    }));
    userUtxos = await provider.getUtxos(address);
    userBchUtxos = userUtxos.filter(u => u.token === undefined);
  }

  const balance = userBchUtxos.reduce((sum, u) => sum + u.satoshis, 0n);
  if (balance < BigInt(investAmountBch * 1e8) + 5000n) {
    throw new Error(`Not enough BCH balance to invest ${investAmountBch} BCH, current balance: ${Number(balance) / 1e8} BCH`);
  }

  // funding + cauldron token-buy bch input
  let investmentUtxo = userUtxos.find(u =>
    u.token === undefined &&
    u.satoshis >= BigInt(investAmountBch * 1e8) + 5000n
  );

  if (!investmentUtxo) {
    await wallet.send([new SendRequest({
      cashaddr: wallet.address!,
      unit: 'sat',
      value: 1e8 * investAmountBch + 5000,
    }), new SendRequest({
      cashaddr: wallet.address!,
      unit: 'sat',
      value: 1000,
    })]);

    userUtxos = await provider.getUtxos(address);
    investmentUtxo = userUtxos.find(u =>
      u.token === undefined &&
      u.satoshis >= BigInt(investAmountBch * 1e8) + 5000n
    );
  }

  if (!investmentUtxo) {
    throw new Error(`No funding UTXO found for ${address}`);
  }

  // a BCH-only utxo at index 1 to be used to balance the council output
  const councilUtxo = userUtxos.find(u =>
    u.token === undefined &&
    u.satoshis >= 1000n &&
    !(u.txid === investmentUtxo.txid && // ensure it's not the same as the investment UTXO
      u.vout === investmentUtxo.vout) // ensure it's not the same as the investment UTXO
  );

  if (!councilUtxo) {
    throw new Error(`No council UTXO found for ${address}`);
  }

  const { tradeTxList: proposedTxs, pools } = (await buildSwapTransaction(BigInt(investAmountBch * 1e8), wallet, olandoCategory));
  const proposedTx = proposedTxs[0]!;

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
  // const cauldronTradeAdjustedTokenAmount = 95n * cauldronPoolOutputs.at(-2)!.token!.amount / 100n; // 95% of the cauldron pool token-buy output
  const cauldronTradeAdjustedTokenAmount = 100n; // supersmall amount to distort the cauldron receive

  const currentTime = BigInt(Math.floor(Date.now() / 1000) - 2 * 60 * 60); // Current time in seconds since epoch - 2h

  const intialSupply = MaxTokenSupply; // with 2 decimals
  const issued = intialSupply - contractUtxo.token!.amount;

  const SCALE = 1_000_000_000n; // 1e9 for scaling
  const t = currentTime - deploymentTime; // time in seconds since startTime

  const k = 3n; // 3E-9 scaled by 1e9
  const denom = SCALE + k * t; // (1 + 3E-9 * t) * 1e9
  const denomSquared = denom * denom / SCALE; // (1 + 3E-9 * t)^2 * 1e9
  const currentEmissionCap = intialSupply * (SCALE - SCALE * SCALE / denomSquared) / SCALE;


  // use inputs.length to find the cauldron token-buy output, since last ouput could be a bch change
  const tokensBought = 100n * cauldronTradeAdjustedTokenAmount / 95n;
  const issue = tokensBought * 9n / 10n + 1n; // 90% of tokens bought

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
        amount: contractUtxo.token!.amount - issue,
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
    to: address,
    amount: change - BigInt(txSize) - 200n, // BCH change
  });

  // console.log("investTx:");
  // console.log(builder.build());
  // console.log(await builder.send());
  await builder.send();

  // {
  //   const txSize = builder.build().length / 2;
  //   const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
  //     builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
  //   console.log(`Transaction size: ${txSize} bytes, change: ${change} satoshis, fee/byte ${Number(change) / txSize}`);
  // }

  return cauldronTradeAdjustedTokenAmount;
};

export const investInIssuanceFundGreaterCauldronOutputTokenAmount = async ({
  investAmountBch,
  provider,
  address,
  privKey,
  wallet,
  councilMultisigContract,
  adminMultisigContract,
  olandoCategory,
} : {
  investAmountBch: number,
  provider: NetworkProvider,
  address: string,
  privKey: Uint8Array,
  wallet: Wallet | TestNetWallet,
  councilMultisigContract: Contract<typeof Multisig_2of3Artifact>,
  adminMultisigContract: Contract<typeof Multisig_2of3Artifact>,
  olandoCategory: string,
}) => {
  const aliceSigTemplate = new SignatureTemplate(privKey);
  let userUtxos = await provider.getUtxos(address);

  const issuanceFundContract = new Contract(IssuanceFundArtifact, [
    addressToLockScript(councilMultisigContract.address),
    addressToLockScript(adminMultisigContract.address),
  ], { provider, addressType: 'p2sh20' });

  const contractUtxo = (await provider.getUtxos(issuanceFundContract.address)).find(u =>
    u.token?.category === olandoCategory &&
    u.token?.nft?.capability === 'mutable' &&
    u.token.nft.commitment.length === 16
  );

  if (!contractUtxo) {
    throw new Error(`No valid contract UTXO found for issuance contract ${issuanceFundContract.address}`);
  }

  const deploymentTime = vmToBigInt(contractUtxo.token!.nft!.commitment.slice(0, 8));
  const lastInteractionTime = vmToBigInt(contractUtxo.token!.nft!.commitment.slice(8, 16));

  let userBchUtxos = userUtxos.filter(u => u.token === undefined);
  if (userBchUtxos.length === 0) {
    throw new Error(`No BCH UTXOs found for ${address}`);
  }

  if (userBchUtxos.length === 1) {
    await wallet.send(new SendRequest({
      cashaddr: wallet.address!,
      unit: 'sat',
      value: 1000,
    }));
    userUtxos = await provider.getUtxos(address);
    userBchUtxos = userUtxos.filter(u => u.token === undefined);
  }

  const balance = userBchUtxos.reduce((sum, u) => sum + u.satoshis, 0n);
  if (balance < BigInt(investAmountBch * 1e8) + 5000n) {
    throw new Error(`Not enough BCH balance to invest ${investAmountBch} BCH, current balance: ${Number(balance) / 1e8} BCH`);
  }

  // funding + cauldron token-buy bch input
  let investmentUtxo = userUtxos.find(u =>
    u.token === undefined &&
    u.satoshis >= BigInt(investAmountBch * 1e8) + 5000n
  );

  if (!investmentUtxo) {
    await wallet.send([new SendRequest({
      cashaddr: wallet.address!,
      unit: 'sat',
      value: 1e8 * investAmountBch + 5000,
    }), new SendRequest({
      cashaddr: wallet.address!,
      unit: 'sat',
      value: 1000,
    })]);

    userUtxos = await provider.getUtxos(address);
    investmentUtxo = userUtxos.find(u =>
      u.token === undefined &&
      u.satoshis >= BigInt(investAmountBch * 1e8) + 5000n
    );
  }

  if (!investmentUtxo) {
    throw new Error(`No funding UTXO found for ${address}`);
  }

  // a BCH-only utxo at index 1 to be used to balance the council output
  const councilUtxo = userUtxos.find(u =>
    u.token === undefined &&
    u.satoshis >= 1000n &&
    !(u.txid === investmentUtxo.txid && // ensure it's not the same as the investment UTXO
      u.vout === investmentUtxo.vout) // ensure it's not the same as the investment UTXO
  );

  if (!councilUtxo) {
    throw new Error(`No council UTXO found for ${address}`);
  }

  const { tradeTxList: proposedTxs, pools } = (await buildSwapTransaction(BigInt(investAmountBch * 1e8), wallet, olandoCategory));
  const proposedTx = proposedTxs[0]!;

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
  // const cauldronTradeAdjustedTokenAmount = 95n * cauldronPoolOutputs.at(-2)!.token!.amount / 100n;
/**/
  const cauldronTradeAdjustedTokenAmount = 95n * cauldronPoolOutputs.at(-2)!.token!.amount / 100n + 100n; // extra 100 tokens to distort the cauldron receive
/**/

  const currentTime = BigInt(Math.floor(Date.now() / 1000) - 2 * 60 * 60); // Current time in seconds since epoch - 2h

  const intialSupply = MaxTokenSupply; // with 2 decimals
  const issued = intialSupply - contractUtxo.token!.amount;

  const SCALE = 1_000_000_000n; // 1e9 for scaling
  const t = currentTime - deploymentTime; // time in seconds since startTime

  const k = 3n; // 3E-9 scaled by 1e9
  const denom = SCALE + k * t; // (1 + 3E-9 * t) * 1e9
  const denomSquared = denom * denom / SCALE; // (1 + 3E-9 * t)^2 * 1e9
  const currentEmissionCap = intialSupply * (SCALE - SCALE * SCALE / denomSquared) / SCALE;


  // use inputs.length to find the cauldron token-buy output, since last ouput could be a bch change
  const tokensBought = 100n * cauldronTradeAdjustedTokenAmount / 95n;
  const issue = tokensBought * 9n / 10n + 1n; // 90% of tokens bought

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
        amount: contractUtxo.token!.amount - issue,
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
    to: address,
    amount: change - BigInt(txSize) - 200n, // BCH change
  });

  // console.log("investTx:");
  // console.log(builder.build());
  // console.log(await builder.send());
  await builder.send();

  // {
  //   const txSize = builder.build().length / 2;
  //   const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
  //     builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
  //   console.log(`Transaction size: ${txSize} bytes, change: ${change} satoshis, fee/byte ${Number(change) / txSize}`);
  // }

  return cauldronTradeAdjustedTokenAmount;
};