import { NetworkProvider } from "cashscript";
import { TestNetWallet, Wallet } from "mainnet-js";
import { Contract } from "cashscript";
import Multisig_2of3Artifact from "../../artifacts/Multisig_2of3.artifact";
export declare const investInIssuanceFund: ({ investAmountBch, provider, aliceAddress, alicePriv, wallet, councilMultisigContract, adminMultisigContract, olandoCategory, }: {
    investAmountBch: number;
    provider: NetworkProvider;
    aliceAddress: string;
    alicePriv: Uint8Array;
    wallet: Wallet | TestNetWallet;
    councilMultisigContract: Contract<typeof Multisig_2of3Artifact>;
    adminMultisigContract: Contract<typeof Multisig_2of3Artifact>;
    olandoCategory: string;
}) => Promise<void>;
