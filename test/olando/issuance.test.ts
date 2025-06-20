import 'cashscript/jest';
import { binToHex, hexToBin } from '@bitauth/libauth';
import { MockNetworkProvider, TransactionBuilder, Utxo, randomUtxo } from 'cashscript';
import { libauthOutputToCashScriptOutput, zip } from 'cashscript/dist/utils.js';
import { aliceAddress, aliceSigTemplate, MockWallet, setupFakeCauldronPools, alicePriv, getAdminMultisig2of3Contract, getCouncilMultisig2of3Contract, setupAuthGuard } from '../shared.js';
import { getCauldronPoolContractInstance, olandoCategory, padVmNumber, toTokenAddress, vmToBigInt, require, deployContractFromAuthGuard, investInIssuanceFund } from '../../src/index.js';
import { buildSwapTransaction } from '../../src/swap.js';

describe('test contract functions', () => {
  it('test issuance function', async () => {
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
    });

    await investInIssuanceFund({
      investAmountBch: 0.1,
      provider,
      aliceAddress,
      alicePriv,
      wallet: await MockWallet(provider),
      councilMultisigContract,
      adminMultisigContract,
      olandoCategory,
    });
  });

  it('test issuance function, no council balancing input', async () => {
    const provider = new MockNetworkProvider();
    provider.reset();

    provider.addUtxo(aliceAddress, randomUtxo({
      satoshis: BigInt(0.12 * 1e8),
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
    });

    await investInIssuanceFund({
      investAmountBch: 0.1,
      provider,
      aliceAddress,
      alicePriv,
      wallet: await MockWallet(provider),
      councilMultisigContract,
      adminMultisigContract,
      olandoCategory,
    });
  });

  it('test not enough balance', async () => {
    const provider = new MockNetworkProvider();
    provider.reset();

    provider.addUtxo(aliceAddress, randomUtxo({
      satoshis: BigInt(0.12 * 1e8),
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
    });

    await expect(investInIssuanceFund({
      investAmountBch: 0.2,
      provider,
      aliceAddress,
      alicePriv,
      wallet: await MockWallet(provider),
      councilMultisigContract,
      adminMultisigContract,
      olandoCategory,
    })).rejects.toThrow();
  });

  it('test small coins', async () => {
    const provider = new MockNetworkProvider();
    provider.reset();

    provider.addUtxo(aliceAddress, randomUtxo({
      satoshis: BigInt(0.12 * 1e8),
    }));

    provider.addUtxo(aliceAddress, randomUtxo({
      satoshis: BigInt(0.12 * 1e8),
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
    });

    await expect(investInIssuanceFund({
      investAmountBch: 0.21,
      provider,
      aliceAddress,
      alicePriv,
      wallet: await MockWallet(provider),
      councilMultisigContract,
      adminMultisigContract,
      olandoCategory,
    })).resolves.not.toThrow();
  });
});
