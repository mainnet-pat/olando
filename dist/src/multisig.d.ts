import { Contract, NetworkProvider } from "cashscript";
import Multisig_2of3Artifact from "../artifacts/Multisig_2of3.artifact";
export declare const addMultisigSignature: ({ partiallySignedTxHex, privateKey, provider, adminMultisigContract, multisigInputIndex, send, }: {
    partiallySignedTxHex: string;
    privateKey: Uint8Array;
    provider: NetworkProvider;
    adminMultisigContract: Contract<typeof Multisig_2of3Artifact>;
    multisigInputIndex: number;
    send?: boolean;
}) => Promise<string>;
