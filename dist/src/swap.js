import { ElectrumClient } from "@electrum-cash/network";
import { ElectrumWebSocket } from "@electrum-cash/web-socket";
import { fundProposedTrade, NATIVE_BCH_TOKEN_ID, proposeTrade } from './cauldron.js';
export const getCauldronPools = async (tokenId) => {
    return new Promise((resolve, reject) => {
        const callback = async (response) => {
            if (response instanceof Error || !response) {
                console.error("ElectrumCash callback error:", response);
                reject(response);
                return;
            }
            const rostrumResponse = (response[2] ?? response);
            if (!rostrumResponse.utxos) {
                console.error("ElectrumCash callback error: no data", response);
                reject(response);
            }
            await unsubscribe();
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
        };
        const webSocket = new ElectrumWebSocket("rostrum.cauldron.quest", 50004, true, 30000);
        const electrumClient = new ElectrumClient("OlandoWallet", "1.4.3", webSocket, {
            disableBrowserConnectivityHandling: true,
            disableBrowserVisibilityHandling: true,
        });
        electrumClient.on("notification", (notification) => {
            if (notification.method === "cauldron.contract.subscribe") {
                callback(notification.params);
            }
        });
        electrumClient.connect().then(async () => {
            await electrumClient.subscribe("cauldron.contract.subscribe", 2, tokenId);
        });
        const unsubscribe = async () => {
            await electrumClient.unsubscribe("cauldron.contract.subscribe", 2, tokenId);
            await electrumClient.disconnect(true, false);
        };
    });
};
export const buildSwapTransaction = async (bchInvestmentSatoshis, wallet, olandoCategory, utxos) => {
    const pools = await getCauldronPools(olandoCategory);
    const tradeResult = await proposeTrade({
        supplyTokenId: NATIVE_BCH_TOKEN_ID,
        demandTokenId: olandoCategory,
        supplyAmount: bchInvestmentSatoshis,
        activePools: pools,
    });
    const tradeTxList = await fundProposedTrade({ wallet: wallet, tradeProposal: tradeResult, utxos });
    return { tradeTxList, pools };
};
//# sourceMappingURL=swap.js.map