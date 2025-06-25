import { ElectrumClient, type RequestResponse, type SubscribeCallback } from "electrum-cash";
import { type TestNetWallet, type Wallet } from 'mainnet-js';
import { type ActivePoolEntry, type ActivePoolsResult, fundProposedTrade, NATIVE_BCH_TOKEN_ID, proposeTrade, type RostrumCauldronContractSubscribeResponse } from './cauldron.js';

export const getCauldronPools = async (tokenId: string): Promise<ActivePoolsResult> => {
  return new Promise<ActivePoolsResult>((resolve, reject) => {
    const callback: SubscribeCallback = async (response: Error | RequestResponse) => {
      if (response instanceof Error) {
        reject(response.message);
        return;
      }

      const rostrumResponse = response as RostrumCauldronContractSubscribeResponse;
      resolve({
        active: rostrumResponse.utxos.map(utxo => ({
          owner_p2pkh_addr: "",
          owner_pkh: utxo.pkh,
          sats: utxo.sats,
          token_id: utxo.token_id,
          tokens: utxo.token_amount,
          tx_pos: utxo.new_utxo_n,
          txid: utxo.new_utxo_txid,
        }) as ActivePoolEntry)
      });

      await unsubscribe();
    }

    const electrumClient = new ElectrumClient("OlandoWallet", "1.4.3", "rostrum.cauldron.quest", 50004, "wss");
    electrumClient.connect().then(async () => {
      await electrumClient.subscribe(callback, "cauldron.contract.subscribe", 2, tokenId);
    });

    const unsubscribe = async () => {
      await electrumClient.unsubscribe(callback, "cauldron.contract.subscribe", 2, tokenId);
      await electrumClient.disconnect(true, false);
    };
  });
}

export const buildSwapTransaction = async (bchInvestmentSatoshis: bigint, wallet: Wallet | TestNetWallet, olandoCategory: string) => {
  const pools = await getCauldronPools(olandoCategory);

  const tradeResult = await proposeTrade({
    supplyTokenId: NATIVE_BCH_TOKEN_ID,
    demandTokenId: olandoCategory,
    supplyAmount: bchInvestmentSatoshis,
    activePools: pools,
  });

  const tradeTxList = await fundProposedTrade({wallet: wallet, tradeProposal: tradeResult});

  return { tradeTxList, pools };
}