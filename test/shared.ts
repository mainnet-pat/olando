import { secp256k1, encodeCashAddress, hexToBin, hash160, encodePrivateKeyWif } from "@bitauth/libauth";
import { MockNetworkProvider, SignatureTemplate } from "cashscript";
import { TestNetWallet, TokenI, UtxoI } from "mainnet-js";

export const alicePriv = hexToBin('1'.repeat(64));
export const aliceSigTemplate = new SignatureTemplate(alicePriv);
export const alicePub = secp256k1.derivePublicKeyCompressed(alicePriv) as Uint8Array;
export const alicePkh = hash160(alicePub);
export const aliceAddress = encodeCashAddress({ prefix: 'bchtest', type: 'p2pkh', payload: alicePkh, throwErrors: true }).address;
export const min = (...args: bigint[]) => args.reduce((m, e) => e < m ? e : m);

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