declare const _default: {
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
    readonly source: "";
    readonly compiler: {
        readonly name: "cashc";
        readonly version: "0.11.0";
    };
    readonly updatedAt: "2025-09-20T09:54:28.650Z";
};
export default _default;
