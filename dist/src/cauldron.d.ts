import { type TradeResult, type TradeTxResult } from "cashlab/build/cauldron/index.js";
import { type TestNetWallet, type UtxoI, type Wallet } from "mainnet-js";
export type RostrumCauldronContractSubscribeResponse = {
    type: string;
    utxos: Array<{
        is_withdrawn: boolean;
        new_utxo_hash: string;
        new_utxo_n: number;
        new_utxo_txid: string;
        pkh: string;
        sats: number;
        spent_utxo_hash: string;
        token_amount: number;
        token_id: string;
    }>;
};
export type ActivePoolEntry = {
    owner_p2pkh_addr: string;
    owner_pkh: string;
    sats: number;
    token_id: string;
    tokens: number;
    tx_pos: number;
    txid: string;
};
export type ActivePoolsResult = {
    active: Array<ActivePoolEntry>;
};
export declare const NATIVE_BCH_TOKEN_ID = "BCH";
export declare const DEFAULT_DUST_TOKEN_MIN_IN_BCH = 800n;
export type TokenId = string;
export type TradeProposal = TradeResult & {
    priceImpact: number;
};
/**
 * Proposes a trade between supply and demand tokens.
 *
 * @param {Object} options - The trade options.
 * @param {bigint} [options.txFeePerByte=1n] - The transaction fee per byte.
 * @param {TokenId} options.supplyTokenId - The ID of the supply token.
 * @param {TokenId} options.demandTokenId - The ID of the demand token.
 * @param {bigint} [options.demandAmount] - The amount of demand token.
 * @param {bigint} [options.supplyAmount] - The amount of supply token.
 * @returns {Promise<TradeProposal>} The trade proposal.
 */
export declare const proposeTrade: ({ txFeePerByte, supplyTokenId, demandTokenId, demandAmount, supplyAmount, activePools, }: {
    txFeePerByte?: bigint;
    supplyTokenId: TokenId;
    demandTokenId: TokenId;
    demandAmount?: bigint;
    supplyAmount?: bigint;
    noCache?: boolean;
    activePools?: ActivePoolsResult;
}) => Promise<TradeProposal>;
/**
 * Funds a proposed trade by selecting input coins from a wallet and generating trade transactions.
 *
 * @param {Object} options - The options for funding the trade.
 * @param {Wallet | TestNetWallet} options.wallet - The wallet to use for funding the trade.
 * @param {TradeResult} options.tradeProposal - The trade proposal containing the trade entries.
 * @param {bigint} [options.txFeePerByte=1n] - The transaction fee per byte.
 * @param {boolean} [options.burnDustTokens=true] - Whether to burn dust tokens.
 *
 * @returns {Promise<TradeTxResult[]>} A promise that resolves to an array of trade transaction results.
 */
export declare const fundProposedTrade: ({ wallet, tradeProposal, txFeePerByte, burnDustTokens, utxos, }: {
    wallet: Wallet | TestNetWallet;
    tradeProposal: TradeProposal;
    txFeePerByte?: bigint;
    burnDustTokens?: boolean;
    utxos?: UtxoI[];
}) => Promise<TradeTxResult[]>;
/**
 * Broadcasts a list of trade transactions using the provided wallet.
 * @param wallet - The wallet used to submit the transactions.
 * @param tradeTxList - The list of trade transactions to be broadcasted.
 * @returns A promise that resolves to an array of transaction IDs for the submitted transactions.
 */
export declare const broadcastTrade: (wallet: Wallet | TestNetWallet, tradeTxList: TradeTxResult[]) => Promise<string[]>;
