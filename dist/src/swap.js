import { ElectrumClient } from "electrum-cash";
import { fundProposedTrade, NATIVE_BCH_TOKEN_ID, proposeTrade } from './cauldron.js';
export const getCauldronPools = async (tokenId) => {
    return new Promise((resolve, reject) => {
        const callback = async (response) => {
            if (response instanceof Error) {
                reject(response.message);
                return;
            }
            const rostrumResponse = response;
            resolve({
                active: rostrumResponse.utxos.map(utxo => ({
                    owner_p2pkh_addr: "",
                    owner_pkh: utxo.pkh,
                    sats: utxo.sats,
                    token_id: utxo.token_id,
                    tokens: utxo.token_amount,
                    tx_pos: utxo.new_utxo_n,
                    txid: utxo.new_utxo_txid,
                }))
            });
            await unsubscribe();
        };
        const electrumClient = new ElectrumClient("OlandoWallet", "1.4.3", "rostrum.cauldron.quest", 50004, "wss");
        electrumClient.connect().then(async () => {
            await electrumClient.subscribe(callback, "cauldron.contract.subscribe", 2, tokenId);
        });
        const unsubscribe = async () => {
            await electrumClient.unsubscribe(callback, "cauldron.contract.subscribe", 2, tokenId);
            await electrumClient.disconnect(true, false);
        };
    });
};
export const buildSwapTransaction = async (bchInvestmentSatoshis, wallet, olandoCategory) => {
    const pools = await getCauldronPools(olandoCategory);
    const tradeResult = await proposeTrade({
        supplyTokenId: NATIVE_BCH_TOKEN_ID,
        demandTokenId: olandoCategory,
        supplyAmount: bchInvestmentSatoshis,
        activePools: pools,
    });
    const tradeTxList = await fundProposedTrade({ wallet: wallet, tradeProposal: tradeResult });
    return { tradeTxList, pools };
};
//# sourceMappingURL=swap.js.map