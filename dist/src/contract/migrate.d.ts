import { Contract, NetworkProvider, SignatureTemplate } from "cashscript";
import Multisig_2of3Artifact from "../../artifacts/Multisig_2of3.artifact";
export declare const migrate: ({ provider, adminMultisigContract, councilMultisigContract, newAdminMultisigContractAddress, newIssuanceFundContractAddress, address, privKey, signatures, olandoCategory, send, }: {
    provider: NetworkProvider;
    adminMultisigContract: Contract<typeof Multisig_2of3Artifact>;
    councilMultisigContract: Contract<typeof Multisig_2of3Artifact>;
    newAdminMultisigContractAddress: string;
    newIssuanceFundContractAddress: string;
    address: string;
    privKey: Uint8Array;
    signatures: [Uint8Array | SignatureTemplate, Uint8Array | SignatureTemplate];
    olandoCategory: string;
    send?: boolean;
}) => Promise<string>;
