import { Contract, NetworkProvider, SignatureTemplate } from "cashscript";
import Multisig_2of3Artifact from "../../artifacts/Multisig_2of3.artifact";
export declare const dissolveIssuanceFund: ({ aliceAddress, alicePriv, provider, olandoCategory, councilMultisigContract, adminMultisigContract, signatures, send, }: {
    aliceAddress: string;
    alicePriv: Uint8Array;
    provider: NetworkProvider;
    olandoCategory: string;
    councilMultisigContract: Contract<typeof Multisig_2of3Artifact>;
    adminMultisigContract: Contract<typeof Multisig_2of3Artifact>;
    signatures: [Uint8Array | SignatureTemplate, Uint8Array | SignatureTemplate];
    send?: boolean;
}) => Promise<string>;
