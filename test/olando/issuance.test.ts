import { MockNetworkProvider, randomUtxo } from 'cashscript';
import 'cashscript/jest';
import { deployContractFromAuthGuard, investInIssuanceFund, olandoCategory } from '../../src/index.js';
import { aliceAddress, alicePriv, getAdminMultisig2of3Contract, getCouncilMultisig2of3Contract, MockWallet, setupAuthGuard } from '../shared.js';

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
      olandoCategory: olandoCategory,
      deploymentMtp: BigInt(Math.floor(Date.now() / 1000) - 40 * 60 * 60),
    });

    await investInIssuanceFund({
      investAmountBch: 0.001,
      provider,
      address: aliceAddress,
      privKey: alicePriv,
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
      olandoCategory: olandoCategory,
      deploymentMtp: BigInt(Math.floor(Date.now() / 1000) - 40 * 60 * 60),
    });

    await investInIssuanceFund({
      investAmountBch: 0.001,
      provider,
      address: aliceAddress,
      privKey: alicePriv,
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
      olandoCategory: olandoCategory,
      deploymentMtp: BigInt(Math.floor(Date.now() / 1000) - 40 * 60 * 60),
    });

    await expect(investInIssuanceFund({
      investAmountBch: 0.2,
      provider,
      address: aliceAddress,
      privKey: alicePriv,
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
      olandoCategory: olandoCategory,
      deploymentMtp: BigInt(Math.floor(Date.now() / 1000) - 40 * 60 * 60),
    });

    await expect(investInIssuanceFund({
      investAmountBch: 0.001,
      provider,
      address: aliceAddress,
      privKey: alicePriv,
      wallet: await MockWallet(provider),
      councilMultisigContract,
      adminMultisigContract,
      olandoCategory,
    })).resolves.not.toThrow();
  });
});
