declare const _default: {
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
};
export default _default;
