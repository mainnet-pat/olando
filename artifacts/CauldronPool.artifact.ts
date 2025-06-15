export default {
  contractName: "CauldronPool",
  constructorInputs: [],
  abi: [
    {
      name: "withdraw",
      inputs: [
        {
          name: "signature",
          type: "sig"
        },
        {
          name: "owner_public_key",
          type: "pubkey"
        }
      ]
    },
    {
      name: "exchange",
      inputs: []
    }
  ],
  bytecode: "OP_DEPTH OP_IF OP_DUP OP_HASH160 <pool_owner_public_key_hash160> OP_EQUALVERIFY OP_CHECKSIG OP_ELSE OP_INPUTINDEX OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_TXVERSION OP_2 OP_EQUALVERIFY OP_INPUTINDEX OP_OUTPUTBYTECODE OP_INPUTINDEX OP_UTXOBYTECODE OP_EQUALVERIFY OP_INPUTINDEX OP_UTXOVALUE OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_MUL OP_INPUTINDEX OP_UTXOVALUE OP_INPUTINDEX OP_OUTPUTVALUE OP_SUB OP_ABS OP_3 OP_MUL e803 OP_DIV OP_INPUTINDEX OP_OUTPUTVALUE OP_SWAP OP_SUB OP_INPUTINDEX OP_OUTPUTTOKENAMOUNT OP_MUL OP_SWAP OP_GREATERTHANOREQUAL OP_ENDIF",
  source: "https://raw.githubusercontent.com/hosseinzoda/cashlab/c2ef62036bfcc7f63e7b462ef285f9e94f0bce0f/src/cauldron/cauldron-libauth-template.json",
  compiler: {
    name: "cashc",
    version: "0.11.0-next.4"
  },
  updatedAt: "2025-06-12T06:27:28.123Z"
} as const;
