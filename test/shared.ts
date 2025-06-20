import { secp256k1, encodeCashAddress, hexToBin, hash160, encodePrivateKeyWif } from "@bitauth/libauth";
import { Contract, MockNetworkProvider, randomNFT, randomUtxo, SignatureTemplate } from "cashscript";
import { binToHex, TestNetWallet, TokenI, UtxoI } from "mainnet-js";
import { getCauldronPoolContractInstance, olandoCategory, replaceArtifactPlaceholders } from "../src";
import Multisig_2of3Artifact from "../artifacts/Multisig_2of3.artifact.js";
import AuthGuardArtifact from "../artifacts/AuthGuard.artifact.js";

export const alicePriv = hexToBin('1'.repeat(64));
export const aliceSigTemplate = new SignatureTemplate(alicePriv);
export const alicePub = secp256k1.derivePublicKeyCompressed(alicePriv) as Uint8Array;
export const alicePkh = hash160(alicePub);
export const aliceAddress = encodeCashAddress({ prefix: 'bchtest', type: 'p2pkh', payload: alicePkh, throwErrors: true }).address;

export const bobPriv = hexToBin('2'.repeat(64));
export const bobSigTemplate = new SignatureTemplate(bobPriv);
export const bobPub = secp256k1.derivePublicKeyCompressed(bobPriv) as Uint8Array;
export const bobPkh = hash160(bobPub);
export const bobAddress = encodeCashAddress({ prefix: 'bchtest', type: 'p2pkh', payload: bobPkh, throwErrors: true }).address;

export const charliePriv = hexToBin('3'.repeat(64));
export const charlieSigTemplate = new SignatureTemplate(charliePriv);
export const charliePub = secp256k1.derivePublicKeyCompressed(charliePriv) as Uint8Array;
export const charliePkh = hash160(charliePub);
export const charlieAddress = encodeCashAddress({ prefix: 'bchtest', type: 'p2pkh', payload: charliePkh, throwErrors: true }).address;

export const davePriv = hexToBin('4'.repeat(64));
export const daveSigTemplate = new SignatureTemplate(davePriv);
export const davePub = secp256k1.derivePublicKeyCompressed(davePriv) as Uint8Array;
export const davePkh = hash160(davePub);
export const daveAddress = encodeCashAddress({ prefix: 'bchtest', type: 'p2pkh', payload: davePkh, throwErrors: true }).address;

export const MockWallet = async (provider: MockNetworkProvider): Promise<TestNetWallet> => {
  const wif = encodePrivateKeyWif(alicePriv, "testnet");
  const wallet = await TestNetWallet.fromWIF(wif);
  wallet.getAddressUtxos = async (address?: string): Promise<UtxoI[]> => {
    const utxos = await provider.getUtxos(address ?? aliceAddress);
    return utxos.map(utxo => ({
      txid: utxo.txid,
      vout: utxo.vout,
      satoshis: Number(utxo.satoshis),
      token: utxo.token ? {
        amount: utxo.token.amount,
        tokenId: utxo.token.category,
        capability: utxo.token.nft?.capability,
        commitment: utxo.token.nft?.commitment,
      } as TokenI : undefined,
    }));
  };

  return wallet;
}

export const setupAuthGuard = async (provider: MockNetworkProvider) => {
  provider.addUtxo(aliceAddress, randomUtxo({
    satoshis: 100_000_000n, // 1 BCH
  }));

  const authKeyUtxo = randomUtxo({
    satoshis: 1000n,
    token: randomNFT({
      nft: {
        capability: 'none',
        commitment: '00',
      }
    })
  });
  provider.addUtxo(aliceAddress, authKeyUtxo);

  const authGuardContract = new Contract(AuthGuardArtifact, [binToHex(hexToBin(authKeyUtxo.token!.category).reverse())], { provider, addressType: "p2sh20" });

  provider.addUtxo(authGuardContract.address, randomUtxo({
    satoshis: 1000n,
    token: {
      amount: 8_888_888_888_888_888_88n, // 2 decimals
      category: olandoCategory,
      nft: {
        capability: 'mutable',
        commitment: '',
      }
    }
  }));
}

export const setupFakeCauldronPools = async (provider: MockNetworkProvider) => {
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

export const getAdminMultisig2of3Contract = (provider: MockNetworkProvider) => {
  const artifact = replaceArtifactPlaceholders(Multisig_2of3Artifact, {
    pubkeyA: alicePub,
    pubkeyB: bobPub,
    pubkeyC: charliePub,
  });

  const contract = new Contract(artifact, [], { provider, ignoreFunctionSelector: true, addressType: 'p2sh20' });
  return contract;
}

export const getCouncilMultisig2of3Contract = (provider: MockNetworkProvider) => {
  const artifact = replaceArtifactPlaceholders(Multisig_2of3Artifact, {
    pubkeyA: alicePub,
    pubkeyB: bobPub,
    pubkeyC: davePub,
  });

  const contract = new Contract(artifact, [], { provider, ignoreFunctionSelector: true, addressType: 'p2sh20' });
  return contract;
}