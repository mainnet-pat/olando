import { HashType, MockNetworkProvider, randomUtxo, SignatureAlgorithm, SignatureTemplate } from "cashscript";
import 'cashscript/jest';
import { addMultisigSignature, deployContractFromAuthGuard, dissolveIssuanceFund, olandoCategory } from "../../src/index.js";
import { aliceAddress, alicePriv, bobPriv, getAdminMultisig2of3Contract, getCouncilMultisig2of3Contract, setupAuthGuard } from "../shared.js";

describe('Dissolving Contract', () => {
  it('test dissolving back into authguard', async () => {
    const provider = new MockNetworkProvider();

    provider.addUtxo(aliceAddress, randomUtxo({
      satoshis: BigInt(0.2 * 1e8),
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

    const sigA = new SignatureTemplate(alicePriv, HashType.SIGHASH_ALL, SignatureAlgorithm.ECDSA);
    const sigB = new SignatureTemplate(bobPriv, HashType.SIGHASH_ALL, SignatureAlgorithm.ECDSA);

    await dissolveIssuanceFund({
      aliceAddress,
      alicePriv,
      provider,
      olandoCategory,
      councilMultisigContract,
      adminMultisigContract,
      signatures: [sigA, sigB],
    });
  });

  it('test dissolving back into authguard, interactive', async () => {
    const provider = new MockNetworkProvider();

    provider.addUtxo(aliceAddress, randomUtxo({
      satoshis: BigInt(0.2 * 1e8),
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

    const sigA = new SignatureTemplate(alicePriv, HashType.SIGHASH_ALL, SignatureAlgorithm.ECDSA);
    const sigB = Uint8Array.from(Array(71));

    const partiallySignedTxHex = await dissolveIssuanceFund({
      aliceAddress,
      alicePriv,
      provider,
      olandoCategory,
      councilMultisigContract,
      adminMultisigContract,
      signatures: [sigA, sigB],
      send: false,
    });

    await addMultisigSignature({
      partiallySignedTxHex,
      provider,
      adminMultisigContract,
      multisigInputIndex: 2,
      privateKey: bobPriv,
      send: true,
    });
  });
});