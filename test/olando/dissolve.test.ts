import 'cashscript/jest';
import { Contract, HashType, MockNetworkProvider, randomUtxo, SignatureAlgorithm, SignatureTemplate, TransactionBuilder } from "cashscript";
import { deployContractFromAuthGuard, olandoCategory, toTokenAddress } from "../../src/index.js";
import { aliceAddress, aliceSigTemplate, alicePriv, bobPriv, getAdminMultisig2of3Contract, getCouncilMultisig2of3Contract, setupAuthGuard } from "../shared.js";
import AuthGuardArtifact from '../../artifacts/AuthGuard.artifact';
import { binToHex, hexToBin } from "@bitauth/libauth";

describe('Dissolving Contract', () => {
  // it('test dissolving contract', async () => {
  //   const provider = new MockNetworkProvider();

  //   const councilMultisigContract = getCouncilMultisig2of3Contract(provider);
  //   const adminMultisigContract = getAdminMultisig2of3Contract(provider);

  //   await setupAuthGuard(provider);
  //   const { issuanceFundContract } = await deployContractFromAuthGuard({
  //     provider,
  //     deployerAddress: aliceAddress,
  //     deployerPriv: alicePriv,
  //     councilContract: councilMultisigContract,
  //     adminContract: adminMultisigContract,
  //   });

  //   const contractUtxo = (await provider.getUtxos(issuanceFundContract.address)).find(u =>
  //     u.token?.category === olandoCategory &&
  //     u.token?.nft?.capability === 'mutable' &&
  //     u.token.nft.commitment.length === 16
  //   )!;

  //   const adminUtxo = (await provider.getUtxos(adminMultisigContract.address)).find(u =>
  //     u.satoshis === 1000n,
  //   )!;

  //   // funding + cauldron token-buy bch input
  //   const fundingUtxo = randomUtxo({
  //     satoshis: 100_000_000n, // 1 BCH
  //   });
  //   provider.addUtxo(aliceAddress, fundingUtxo);

  //   const sigA = new SignatureTemplate(alicePriv, HashType.SIGHASH_ALL, SignatureAlgorithm.ECDSA);
  //   const sigB = new SignatureTemplate(bobPriv, HashType.SIGHASH_ALL, SignatureAlgorithm.ECDSA);

  //   const builder = new TransactionBuilder({ provider })
  //     .addInput(contractUtxo, issuanceFundContract.unlock.dissolve())
  //     .addInput(adminUtxo, adminMultisigContract.unlock.spend(sigA, sigB, 0n))
  //     .addInput(fundingUtxo, aliceSigTemplate.unlockP2PKH())
  //     .addOutput({
  //       to: adminMultisigContract.tokenAddress,
  //       amount: contractUtxo.satoshis,
  //       token: {...contractUtxo.token!},
  //     });

  //   const txSize = builder.build().length / 2;
  //   const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
  //     builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
  //   builder.addOutput({
  //     to: aliceAddress,
  //     amount: change - BigInt(txSize) - 100n, // BCH change
  //     token: undefined,
  //   });

  //   const result = builder.send();
  //   await expect(result).resolves.not.toThrow();

  //   {
  //     const txSize = builder.build().length / 2;
  //     const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
  //       builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
  //     console.log(`Transaction size: ${txSize} bytes, change: ${change} satoshis, fee/byte ${Number(change) / txSize}`);
  //   }
  // });

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

    const authGuard = await (async () => {
      const userUtxos = await provider.getUtxos(aliceAddress);
      const authKeyCandidates = userUtxos.filter(utxo =>
        utxo.token?.amount === 0n &&
        utxo.token?.nft?.capability === 'none' &&
        utxo.token.nft.commitment === '00'
      );

      for (const authKeyCandidate of authKeyCandidates) {
        const authGuardContract = new Contract(AuthGuardArtifact, [binToHex(hexToBin(authKeyCandidate.token!.category).reverse())], { provider, addressType: "p2sh20" });
        const contractUtxos = await provider.getUtxos(authGuardContract.address);
        const authGuardCandidate = contractUtxos.find(contractUtxo =>
          contractUtxo.token &&
          contractUtxo.token.category === olandoCategory &&
          contractUtxo.token.amount >= 8_888_888_888_888_88n // 2 decimals
        );

        if (authGuardCandidate) {
          return { authGuardContract, authGuardUtxo: authGuardCandidate, authKeyUtxo: authKeyCandidate };
        }
      };
    })();

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