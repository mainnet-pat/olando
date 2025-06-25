import { NetworkProvider, Contract } from "cashscript";
import Multisig_2of3Artifact from "../../artifacts/Multisig_2of3.artifact";
import { TestNetWallet, Wallet } from "mainnet-js";
export declare const donate: ({ aliceAddress, alicePriv, wallet, provider, olandoCategory, councilMultisigContract, adminMultisigContract, donationTokenAmount, }: {
    aliceAddress: string;
    alicePriv: Uint8Array;
    wallet: Wallet | TestNetWallet;
    provider: NetworkProvider;
    olandoCategory: string;
    councilMultisigContract: Contract<typeof Multisig_2of3Artifact>;
    adminMultisigContract: Contract<typeof Multisig_2of3Artifact>;
    donationTokenAmount: bigint;
}) => Promise<void>;
