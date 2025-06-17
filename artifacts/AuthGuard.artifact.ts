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
  source: "// https://github.com/mr-zwets/AuthGuard \n\npragma cashscript ^0.11.0;\n\n// AuthGuard covenant\n// Covenant unlocked by an AuthKey NFT\n\n// Opcode count: 10 (max 201)\n// Bytesize: 48 (max 520)\n\ncontract AuthGuard(\n    bytes authKeyTokenId\n) {\n    function unlockWithNft(\n        bool keepGuarded\n    ) {\n        // Check that the second input holds the AuthKey NFT\n        require(tx.inputs[1].tokenCategory == authKeyTokenId);\n        require(tx.inputs[1].tokenAmount == 0);\n\n        // if keepGuarded is false, the AuthHead can be released from the AuthGuard covenant\n        if(keepGuarded){\n            // Self preservation of AuthGuard covenant as the first output\n            require(tx.outputs[0].lockingBytecode == tx.inputs[this.activeInputIndex].lockingBytecode);\n        }\n    }\n}\n",
  debug: {
    bytecode: "51ce8851d0009d6300cdc0c7886851",
    sourceMap: "18:26:18:27;:16::42:1;:8::62;19:26:19:27:0;:16::40:1;:44::45:0;:8::47:1;22:23:25:9:0;24:31:24:32;:20::49:1;:63::84:0;:53::101:1;:12::103;22:23:25:9;14:4:26:5",
    logs: [],
    requires: [
      {
        ip: 3,
        line: 18
      },
      {
        ip: 7,
        line: 19
      },
      {
        ip: 13,
        line: 24
      }
    ]
  },
  compiler: {
    name: "cashc",
    version: "0.11.0-next.4"
  },
  updatedAt: "2025-06-17T12:53:16.358Z"
} as const;