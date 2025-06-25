import { MockNetworkProvider, randomUtxo } from "cashscript";
import 'cashscript/jest';
import { deployContractFromAuthGuard, donate, olandoCategory } from "../../src/index.js";
import { aliceAddress, alicePriv, getAdminMultisig2of3Contract, getCouncilMultisig2of3Contract, MockWallet, setupAuthGuard } from "../shared.js";

describe('Issuance Fund Contract Donation Tests', () => {
  it('test donation to contract, no token change', async () => {
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
    });

    const donationUtxo = randomUtxo({
      satoshis: 1000n,
      token: {
        amount: 10_00n, // 2 decimals
        category: olandoCategory,
      }
    });
    provider.addUtxo(aliceAddress, donationUtxo);

    await donate({
      aliceAddress,
      alicePriv,
      wallet: await MockWallet(provider),
      provider,
      olandoCategory,
      councilMultisigContract,
      adminMultisigContract,
      donationTokenAmount: donationUtxo.token!.amount,
    });
  });

  it('test donation to contract, with token change', async () => {
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
    });

    const donationUtxo = randomUtxo({
      satoshis: 1000n,
      token: {
        amount: 10_00n, // 2 decimals
        category: olandoCategory,
      }
    });
    provider.addUtxo(aliceAddress, donationUtxo);

    await donate({
      aliceAddress,
      alicePriv,
      wallet: await MockWallet(provider),
      provider,
      olandoCategory,
      councilMultisigContract,
      adminMultisigContract,
      donationTokenAmount: donationUtxo.token!.amount - 10n,
    });
  });

  it('test donation to contract, not enough tokens', async () => {
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
    });

    const donationUtxo = randomUtxo({
      satoshis: 1000n,
      token: {
        amount: 10_00n, // 2 decimals
        category: olandoCategory,
      }
    });
    provider.addUtxo(aliceAddress, donationUtxo);

    await expect(donate({
      aliceAddress,
      alicePriv,
      wallet: await MockWallet(provider),
      provider,
      olandoCategory,
      councilMultisigContract,
      adminMultisigContract,
      donationTokenAmount: donationUtxo.token!.amount + 10n, // Not enough tokens
    })).rejects.toThrow("Not enough");
  });

  it('test donation to contract, 0 token amount', async () => {
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
    });

    const donationUtxo = randomUtxo({
      satoshis: 1000n,
      token: {
        amount: 0n,
        category: olandoCategory,
      }
    });
    provider.addUtxo(aliceAddress, donationUtxo);

    await expect(donate({
      aliceAddress,
      alicePriv,
      wallet: await MockWallet(provider),
      provider,
      olandoCategory,
      councilMultisigContract,
      adminMultisigContract,
      donationTokenAmount: donationUtxo.token!.amount,
    })).rejects.toThrow("Donation token amount must be greater than zero");
  });
});