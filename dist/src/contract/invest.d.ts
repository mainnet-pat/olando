import { NetworkProvider } from "cashscript";
import { TestNetWallet, Wallet } from "mainnet-js";
import { Contract } from "cashscript";
import Multisig_2of3Artifact from "../../artifacts/Multisig_2of3.artifact";
export declare const investInIssuanceFund: ({ investAmountBch, provider, address, privKey, wallet, councilMultisigContract, adminMultisigContract, olandoCategory, send, }: {
    investAmountBch: number;
    provider: NetworkProvider;
    address: string;
    privKey: Uint8Array;
    wallet: Wallet | TestNetWallet;
    councilMultisigContract: Contract<typeof Multisig_2of3Artifact>;
    adminMultisigContract: Contract<typeof Multisig_2of3Artifact>;
    olandoCategory: string;
    send?: boolean;
}) => Promise<bigint>;
