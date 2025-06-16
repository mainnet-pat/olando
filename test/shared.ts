import { secp256k1, encodeCashAddress, hexToBin, hash160, encodePrivateKeyWif } from "@bitauth/libauth";
import { Contract, MockNetworkProvider, randomUtxo, SignatureTemplate, TransactionBuilder } from "cashscript";
import { binToHex, TestNetWallet, TokenI, utf8ToBin, UtxoI } from "mainnet-js";
import { addressToLockScript, getCauldronPoolContractInstance, olandoCategory, padVmNumber, replaceArtifactPlaceholders, toTokenAddress } from "../src";
import IssuanceFundArtifact from '../artifacts/IssuanceFund.artifact.js';
import CouncilFundArtifact from '../artifacts/CouncilFund.artifact.js';
import Multisig_2of3Artifact from "../artifacts/Multisig_2of3.artifact.js";

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

export const min = (...args: bigint[]) => args.reduce((m, e) => e < m ? e : m);
export const require = (predicate: boolean, message: string) => {
  if (!predicate) {
    throw new Error(message);
  }
}

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

export const deployContractP2pkhAdmin = async (provider: MockNetworkProvider, salt: bigint = 0n) => {
  provider.addUtxo(aliceAddress, randomUtxo({
    satoshis: 100_000_000n, // 1 BCH
  }));

  provider.addUtxo(aliceAddress, randomUtxo({
    satoshis: 1000n, // 1 BCH
    token: {
      amount: 8_888_888_888_888_888_88n, // 2 decimals
      category: olandoCategory,
      nft: {
        capability: 'mutable',
        commitment: '',
      }
    }
  }));

  const councilFundContract = new Contract(CouncilFundArtifact, [salt], { provider, addressType: 'p2sh20' });

  const issuanceFundContract = new Contract(IssuanceFundArtifact, [addressToLockScript(councilFundContract.address)], { provider });
  const deploymentTime = 1749427200; // Mon Jun 09 2025 00:00:00 GMT+0000
  const lastInteractionTime = deploymentTime;

  const utxos = await provider.getUtxos(aliceAddress);

  const fundingUtxo = utxos.find(utxo => utxo.token === undefined && utxo.satoshis >= 100000n)!;

  const tokenFundingUtxo = utxos.find(utxo =>
    utxo.token?.category === olandoCategory &&
    utxo.token?.nft?.capability === 'mutable' &&
    utxo.token.nft.commitment.length === 0 &&
    utxo.token.amount > 8_888_888_888_888_88n)!;

  const deploymentTransaction = await new TransactionBuilder({ provider })
    .addInput(tokenFundingUtxo, new SignatureTemplate(alicePriv).unlockP2PKH())
    .addInput(fundingUtxo, new SignatureTemplate(alicePriv).unlockP2PKH())
    .addOutput({
      to: toTokenAddress(issuanceFundContract.address),
      amount: 1000n,
      token: {
        amount: 8_888_888_888_888_88n, // 2 decimals
        category: olandoCategory,
        nft: {
          capability: 'mutable',
          commitment: binToHex(Uint8Array.from([
            ...padVmNumber(BigInt(deploymentTime), 4),
            ...padVmNumber(BigInt(lastInteractionTime), 4),
          ])),
        }
      }
    })
    .addOutput({
      to: toTokenAddress(aliceAddress),
      amount: 1000n,
      token: {
        amount: 0n,
        category: olandoCategory,
        nft: {
          capability: 'none',
          commitment: binToHex(utf8ToBin('admin')),
        }
      }
    })
    .addOutput({
      to: aliceAddress,
      amount: fundingUtxo.satoshis - 3000n, // BCH change
      token: undefined,
    })
    .send();

  console.log(`Issuance fund deployed at ${issuanceFundContract.address} with txid ${deploymentTransaction.txid}`);

  return { issuanceFundContract, councilFundContract };
}

export const deployContractMultisigAdmin = async (provider: MockNetworkProvider, salt: bigint = 0n) => {
  provider.addUtxo(aliceAddress, randomUtxo({
    satoshis: 100_000_000n, // 1 BCH
  }));

  provider.addUtxo(aliceAddress, randomUtxo({
    satoshis: 1000n, // 1 BCH
    token: {
      amount: 8_888_888_888_888_888_88n, // 2 decimals
      category: olandoCategory,
      nft: {
        capability: 'mutable',
        commitment: '',
      }
    }
  }));

  const councilFundContract = new Contract(CouncilFundArtifact, [salt], { provider, addressType: 'p2sh20' });

  const issuanceFundContract = new Contract(IssuanceFundArtifact, [addressToLockScript(councilFundContract.address)], { provider });
  const deploymentTime = 1749427200; // Mon Jun 09 2025 00:00:00 GMT+0000
  const lastInteractionTime = deploymentTime;

  const utxos = await provider.getUtxos(aliceAddress);

  const fundingUtxo = utxos.find(utxo => utxo.token === undefined && utxo.satoshis >= 100000n)!;

  const tokenFundingUtxo = utxos.find(utxo =>
    utxo.token?.category === olandoCategory &&
    utxo.token?.nft?.capability === 'mutable' &&
    utxo.token.nft.commitment.length === 0 &&
    utxo.token.amount > 8_888_888_888_888_88n)!;

  const multisigContract = getMultisig2of3Contract(provider);

  const deploymentTransaction = await new TransactionBuilder({ provider })
    .addInput(tokenFundingUtxo, new SignatureTemplate(alicePriv).unlockP2PKH())
    .addInput(fundingUtxo, new SignatureTemplate(alicePriv).unlockP2PKH())
    .addOutput({
      to: toTokenAddress(issuanceFundContract.address),
      amount: 1000n,
      token: {
        amount: 8_888_888_888_888_88n, // 2 decimals
        category: olandoCategory,
        nft: {
          capability: 'mutable',
          commitment: binToHex(Uint8Array.from([
            ...padVmNumber(BigInt(deploymentTime), 4),
            ...padVmNumber(BigInt(lastInteractionTime), 4),
          ])),
        }
      }
    })
    .addOutput({
      to: multisigContract.tokenAddress,
      amount: 1000n,
      token: {
        amount: 0n,
        category: olandoCategory,
        nft: {
          capability: 'none',
          commitment: binToHex(utf8ToBin('admin')),
        }
      }
    })
    .addOutput({
      to: aliceAddress,
      amount: fundingUtxo.satoshis - 3000n, // BCH change
      token: undefined,
    })
    .send();

  console.log(`Issuance fund deployed at ${issuanceFundContract.address} with txid ${deploymentTransaction.txid}`);

  return { issuanceFundContract, councilFundContract };
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

export const getMultisig2of3Contract = (provider: MockNetworkProvider) => {
  const artifact = replaceArtifactPlaceholders(Multisig_2of3Artifact, {
    pubkeyA: alicePub,
    pubkeyB: bobPub,
    pubkeyC: charliePub,
  });

  const contract = new Contract(artifact, [], { provider, ignoreFunctionSelector: true });
  return contract;
}