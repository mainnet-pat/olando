import { Artifact, Contract, FunctionArgument, NetworkProvider } from "cashscript";
export declare const min: (...args: bigint[]) => bigint;
export declare const require: (predicate: boolean, message: string) => void;
export declare const padVmNumber: (num: bigint, length: number) => Uint8Array<ArrayBuffer>;
export declare const vmToBigInt: (vmNumber: string) => bigint;
export declare function addressToLockScript(address: string): Uint8Array;
export declare const toCashAddress: (address: string) => string;
export declare const toTokenAddress: (address: string) => string;
export declare const olandoCategory = "7fa887fd4eac015478b95392c4984721fbe3060223c30b342d43cc06817f07f6";
export declare const replaceArtifactPlaceholders: <T extends Artifact>(artifact: T, parameters: Record<string, FunctionArgument>) => T;
export declare const getCauldronPoolContractInstance: (provider: NetworkProvider, poolOwnerPublicKeyHash160: Uint8Array) => Contract<{
    readonly contractName: "CauldronPool";
    readonly constructorInputs: readonly [];
    readonly abi: readonly [{
        readonly name: "withdraw";
        readonly inputs: readonly [{
            readonly name: "signature";
            readonly type: "sig";
        }, {
            readonly name: "owner_public_key";
            readonly type: "pubkey";
        }];
    }, {
        readonly name: "exchange";
        readonly inputs: readonly [];
    }];
    readonly bytecode: "OP_DEPTH OP_IF OP_DUP OP_HASH160 <pool_owner_public_key_hash160> OP_EQUALVERIFY OP_CHECKSIG OP_ELSE OP_INPUTINDEX OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_TXVERSION OP_2 OP_EQUALVERIFY OP_INPUTINDEX OP_OUTPUTBYTECODE OP_INPUTINDEX OP_UTXOBYTECODE OP_EQUALVERIFY OP_INPUTINDEX OP_UTXOVALUE OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_MUL OP_INPUTINDEX OP_UTXOVALUE OP_INPUTINDEX OP_OUTPUTVALUE OP_SUB OP_ABS OP_3 OP_MUL e803 OP_DIV OP_INPUTINDEX OP_OUTPUTVALUE OP_SWAP OP_SUB OP_INPUTINDEX OP_OUTPUTTOKENAMOUNT OP_MUL OP_SWAP OP_GREATERTHANOREQUAL OP_ENDIF";
    readonly source: "https://raw.githubusercontent.com/hosseinzoda/cashlab/c2ef62036bfcc7f63e7b462ef285f9e94f0bce0f/src/cauldron/cauldron-libauth-template.json";
    readonly compiler: {
        readonly name: "cashc";
        readonly version: "0.11.0";
    };
    readonly updatedAt: "2025-06-12T06:27:28.123Z";
}, {
    constructorInputs: [];
    functions: {
        withdraw: (functionParameters_0: string | Uint8Array<ArrayBufferLike> | import("cashscript").SignatureTemplate, functionParameters_1: string | Uint8Array<ArrayBufferLike>) => import("cashscript").Transaction;
        exchange: () => import("cashscript").Transaction;
    };
    unlock: {
        withdraw: (functionParameters_0: string | Uint8Array<ArrayBufferLike> | import("cashscript").SignatureTemplate, functionParameters_1: string | Uint8Array<ArrayBufferLike>) => import("cashscript").Unlocker;
        exchange: () => import("cashscript").Unlocker;
    };
}>;
export declare const findAuthGuard: ({ predeployment, provider, authKeyHolderAddress, olandoCategory }: {
    predeployment: boolean;
    provider: NetworkProvider;
    authKeyHolderAddress: string;
    olandoCategory: string;
}) => Promise<{
    authGuardContract: Contract<{
        readonly contractName: "AuthGuard";
        readonly constructorInputs: readonly [{
            readonly name: "authKeyTokenId";
            readonly type: "bytes";
        }];
        readonly abi: readonly [{
            readonly name: "unlockWithNft";
            readonly inputs: readonly [{
                readonly name: "keepGuarded";
                readonly type: "bool";
            }];
        }];
        readonly bytecode: "OP_1 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_1 OP_UTXOTOKENAMOUNT OP_0 OP_NUMEQUALVERIFY OP_IF OP_0 OP_OUTPUTBYTECODE OP_INPUTINDEX OP_UTXOBYTECODE OP_EQUALVERIFY OP_ENDIF OP_1";
        readonly source: "// https://github.com/mr-zwets/AuthGuard \n\npragma cashscript ^0.11.0;\n\n// AuthGuard covenant\n// Covenant unlocked by an AuthKey NFT\n\n// Opcode count: 10 (max 201)\n// Bytesize: 48 (max 520)\n\ncontract AuthGuard(\n    bytes authKeyTokenId\n) {\n    function unlockWithNft(\n        bool keepGuarded\n    ) {\n        // Check that the second input holds the AuthKey NFT\n        require(tx.inputs[1].tokenCategory == authKeyTokenId);\n        require(tx.inputs[1].tokenAmount == 0);\n\n        // if keepGuarded is false, the AuthHead can be released from the AuthGuard covenant\n        if(keepGuarded){\n            // Self preservation of AuthGuard covenant as the first output\n            require(tx.outputs[0].lockingBytecode == tx.inputs[this.activeInputIndex].lockingBytecode);\n        }\n    }\n}\n";
        readonly debug: {
            readonly bytecode: "51ce8851d0009d6300cdc0c7886851";
            readonly sourceMap: "18:26:18:27;:16::42:1;:8::62;19:26:19:27:0;:16::40:1;:44::45:0;:8::47:1;22:23:25:9:0;24:31:24:32;:20::49:1;:63::84:0;:53::101:1;:12::103;22:23:25:9;14:4:26:5";
            readonly logs: readonly [];
            readonly requires: readonly [{
                readonly ip: 3;
                readonly line: 18;
            }, {
                readonly ip: 7;
                readonly line: 19;
            }, {
                readonly ip: 13;
                readonly line: 24;
            }];
        };
        readonly compiler: {
            readonly name: "cashc";
            readonly version: "0.11.0";
        };
        readonly updatedAt: "2025-06-17T12:53:16.358Z";
    }, {
        constructorInputs: [string | Uint8Array<ArrayBufferLike>];
        functions: {
            unlockWithNft: (functionParameters_0: boolean) => import("cashscript").Transaction;
        };
        unlock: {
            unlockWithNft: (functionParameters_0: boolean) => import("cashscript").Unlocker;
        };
    }>;
    authGuardUtxo: import("cashscript").Utxo;
    authKeyUtxo: import("cashscript").Utxo;
} | undefined>;
