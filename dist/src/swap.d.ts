import { type TestNetWallet, type Wallet } from 'mainnet-js';
import { type ActivePoolsResult } from './cauldron.js';
export declare const getCauldronPools: (tokenId: string) => Promise<ActivePoolsResult>;
export declare const buildSwapTransaction: (bchInvestmentSatoshis: bigint, wallet: Wallet | TestNetWallet) => Promise<{
    tradeTxList: import("cashlab/build/cauldron/types.js").TradeTxResult[];
    pools: ActivePoolsResult;
}>;
