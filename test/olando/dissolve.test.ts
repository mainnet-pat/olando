import 'cashscript/jest';
import { HashType, MockNetworkProvider, randomUtxo, SignatureAlgorithm, SignatureTemplate, TransactionBuilder } from "cashscript";
import { deployContractFromAuthGuard, findAuthGuard, olandoCategory, toTokenAddress } from "../../src/index.js";
import { aliceAddress, aliceSigTemplate, alicePriv, bobPriv, getAdminMultisig2of3Contract, getCouncilMultisig2of3Contract, setupAuthGuard } from "../shared.js";

describe('Dissolving Contract', () => {
  it('test dissolving back into authguard', async () => {
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

    const authGuard = await findAuthGuard({
      predeployment: false,
      provider,
      authKeyHolderAddress: aliceAddress,
      olandoCategory: olandoCategory,
    });

    if (!authGuard) {
      throw new Error('No valid auth guard pair found in the wallet');
    }

    const contractUtxo = (await provider.getUtxos(issuanceFundContract.address)).find(u =>
      u.token?.category === olandoCategory &&
      u.token?.nft?.capability === 'mutable' &&
      u.token.nft.commitment.length === 16
    )!;

    const adminUtxo = (await provider.getUtxos(adminMultisigContract.address)).find(u =>
      u.satoshis === 1000n,
    )!;

    // funding + cauldron token-buy bch input
    const fundingUtxo = randomUtxo({
      satoshis: 100_000_000n, // 1 BCH
    });
    provider.addUtxo(aliceAddress, fundingUtxo);

    const sigA = new SignatureTemplate(alicePriv, HashType.SIGHASH_ALL, SignatureAlgorithm.ECDSA);
    const sigB = new SignatureTemplate(bobPriv, HashType.SIGHASH_ALL, SignatureAlgorithm.ECDSA);

    const builder = new TransactionBuilder({ provider })
      .addInput(authGuard.authGuardUtxo, authGuard.authGuardContract.unlock.unlockWithNft(true))
      .addInput(authGuard.authKeyUtxo, aliceSigTemplate.unlockP2PKH())
      .addInput(adminUtxo, adminMultisigContract.unlock.spend(sigA, sigB, 0n))
      .addInput(contractUtxo, issuanceFundContract.unlock.dissolveIntoAuthguard())
      .addInput(fundingUtxo, aliceSigTemplate.unlockP2PKH())
      .addOutput({
        to: authGuard.authGuardContract.tokenAddress,
        amount: authGuard.authGuardUtxo.satoshis,
        token: {
          ...authGuard.authGuardUtxo.token!,
          amount: authGuard.authGuardUtxo.token!.amount + contractUtxo.token!.amount,
          nft: {
            ...authGuard.authGuardUtxo.token!.nft,
            capability: 'mutable',
            commitment: '',
          }
        },
      })
      .addOutput({
        to: toTokenAddress(aliceAddress),
        amount: authGuard.authKeyUtxo.satoshis,
        token: {
          ...authGuard.authKeyUtxo.token!,
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
});