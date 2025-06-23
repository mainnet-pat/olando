import { Contract, NetworkProvider, SignatureTemplate } from "cashscript";
import Multisig_2of3Artifact from "../../artifacts/Multisig_2of3.artifact";
export declare const migrate: ({ provider, adminMultisigContract, councilMultisigContract, newAdminMultisigContract, newCouncilMultisigContract, aliceAddress, alicePriv, signatures, send, }: {
    provider: NetworkProvider;
    adminMultisigContract: Contract<typeof Multisig_2of3Artifact>;
    councilMultisigContract: Contract<typeof Multisig_2of3Artifact>;
    newAdminMultisigContract: Contract<typeof Multisig_2of3Artifact>;
    newCouncilMultisigContract: Contract<typeof Multisig_2of3Artifact>;
    aliceAddress: string;
    alicePriv: Uint8Array;
    signatures: [Uint8Array | SignatureTemplate, Uint8Array | SignatureTemplate];
    send?: boolean;
}) => Promise<string>;
