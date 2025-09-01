export default {
  contractName: "AuthGuard",
  constructorInputs: [
    {
      name: "authKeyTokenId",
      type: "bytes"
    }
  ],
  abi: [
    {
      name: "unlockWithNft",
      inputs: [
        {
          name: "keepGuarded",
          type: "bool"
        }
      ]
    }
  ],
  bytecode: "OP_1 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_1 OP_UTXOTOKENAMOUNT OP_0 OP_NUMEQUALVERIFY OP_IF OP_0 OP_OUTPUTBYTECODE OP_INPUTINDEX OP_UTXOBYTECODE OP_EQUALVERIFY OP_ENDIF OP_1",
  source: "",
  compiler: {
    name: "cashc",
    version: "0.11.0"
  },
  updatedAt: "2025-09-01T08:54:33.898Z"
} as const;