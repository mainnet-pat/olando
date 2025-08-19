import { HashType, MockNetworkProvider, randomUtxo, SignatureAlgorithm, SignatureTemplate } from "cashscript";
import 'cashscript/jest';
import { addMultisigSignature, deployContractFromAuthGuard, getIssuanceContract, migrate, olandoCategory } from "../../src/index.js";
import { aliceAddress, alicePriv, bobPriv, getAdminMultisig2of3Contract, getCouncilMultisig2of3Contract, setupAuthGuard } from "../shared.js";

describe('Migrating Contract', () => {
  it('test migrating contract, set council to be the same as admin', async () => {
    const provider = new MockNetworkProvider();
    provider.addUtxo(aliceAddress, randomUtxo({
      satoshis: 100_000_000n, // 1 BCH
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

    const newCouncilContract = getAdminMultisig2of3Contract(provider); // set council contract same as admin multisig
    const newIssuanceFundContract = getIssuanceContract({
      provider: provider,
      councilMultisigContract: newCouncilContract,
      adminMultisigContract: adminMultisigContract,
    });

    const sigA = new SignatureTemplate(alicePriv, HashType.SIGHASH_ALL, SignatureAlgorithm.ECDSA);
    const sigB = new SignatureTemplate(bobPriv, HashType.SIGHASH_ALL, SignatureAlgorithm.ECDSA);

    const action = migrate({
      provider,
      address: aliceAddress,
      privKey: alicePriv,
      councilMultisigContract,
      adminMultisigContract,
      newAdminMultisigContractAddress: councilMultisigContract.address,
      newIssuanceFundContractAddress: newIssuanceFundContract.address,
      signatures: [sigA, sigB],
      olandoCategory: olandoCategory,
      send: true,
    });

    await expect(action).resolves.not.toThrow();
  });

  it('test migrating contract, interactive AB', async () => {
    const provider = new MockNetworkProvider();
    provider.addUtxo(aliceAddress, randomUtxo({
      satoshis: 100_000_000n, // 1 BCH
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

    const newCouncilContract = getAdminMultisig2of3Contract(provider); // set council contract same as admin multisig
    const newIssuanceFundContract = getIssuanceContract({
      provider: provider,
      councilMultisigContract: newCouncilContract,
      adminMultisigContract: adminMultisigContract,
    });

    const sigA = Uint8Array.from(Array(71));
    const sigB = new SignatureTemplate(bobPriv, HashType.SIGHASH_ALL, SignatureAlgorithm.ECDSA);

    const partiallySignedTxHex = await migrate({
      provider,
      address: aliceAddress,
      privKey: alicePriv,
      councilMultisigContract,
      adminMultisigContract,
      newAdminMultisigContractAddress: councilMultisigContract.address,
      newIssuanceFundContractAddress: newIssuanceFundContract.address,
      signatures: [sigA, sigB],
      olandoCategory: olandoCategory,
      send: false,
    });

    await addMultisigSignature({
      partiallySignedTxHex,
      provider,
      adminMultisigContract,
      multisigInputIndex: 1,
      privateKey: alicePriv,
      send: true,
    });
  });

  it('test migrating contract, interactive BA', async () => {
    const provider = new MockNetworkProvider();
    provider.addUtxo(aliceAddress, randomUtxo({
      satoshis: 100_000_000n, // 1 BCH
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

    const newCouncilContract = getAdminMultisig2of3Contract(provider); // set council contract same as admin multisig
    const newIssuanceFundContract = getIssuanceContract({
      provider: provider,
      councilMultisigContract: newCouncilContract,
      adminMultisigContract: adminMultisigContract,
    });

    const sigA = new SignatureTemplate(alicePriv, HashType.SIGHASH_ALL, SignatureAlgorithm.ECDSA);
    const sigB = Uint8Array.from(Array(71));

    const partiallySignedTxHex = await migrate({
      provider,
      address: aliceAddress,
      privKey: alicePriv,
      councilMultisigContract,
      adminMultisigContract,
      newAdminMultisigContractAddress: councilMultisigContract.address,
      newIssuanceFundContractAddress: newIssuanceFundContract.address,
      signatures: [sigA, sigB],
      olandoCategory: olandoCategory,
      send: false,
    });

    await addMultisigSignature({
      partiallySignedTxHex,
      provider,
      adminMultisigContract,
      multisigInputIndex: 1,
      privateKey: bobPriv,
      send: true,
    });
  });
});
