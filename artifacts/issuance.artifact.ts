export default {
  contractName: "TimelockTest",
  constructorInputs: [],
  abi: [
    {
      name: "issue",
      inputs: []
    },
    {
      name: "migrate",
      inputs: []
    }
  ],
  bytecode: "OP_DUP OP_0 OP_NUMEQUAL OP_IF OP_INPUTINDEX OP_UTXOTOKENCOMMITMENT OP_4 OP_SPLIT OP_DROP OP_BIN2NUM OP_INPUTINDEX OP_UTXOTOKENCOMMITMENT OP_4 OP_SPLIT OP_NIP OP_BIN2NUM OP_TXLOCKTIME OP_LESSTHAN OP_VERIFY 388e7792702803 OP_DUP OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_SUB 00ca9a3b OP_TXLOCKTIME OP_4 OP_PICK OP_SUB OP_3 OP_2 OP_PICK OP_SWAP OP_ROT OP_MUL OP_ADD OP_DUP OP_MUL OP_OVER OP_DIV OP_3 OP_ROLL OP_2 OP_PICK OP_3 OP_PICK OP_4 OP_PICK OP_MUL OP_3 OP_ROLL OP_DIV OP_SUB OP_MUL OP_SWAP OP_DIV OP_TXINPUTCOUNT OP_1SUB OP_OUTPUTTOKENAMOUNT OP_DUP OP_2SWAP OP_SWAP OP_SUB OP_MIN OP_OVER OP_9 OP_MUL OP_10 OP_DIV OP_2 OP_PICK OP_ADD OP_2 OP_DIV OP_2DUP OP_SWAP OP_4 OP_PICK OP_LESSTHAN OP_IF 5f OP_3 OP_PICK OP_MUL 64 OP_DIV OP_4 OP_PICK OP_ADD OP_3 OP_PICK OP_SUB OP_ROT OP_DROP OP_SWAP 5f OP_3 OP_PICK OP_MUL 64 OP_DIV OP_NIP OP_ENDIF OP_ADD OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENAMOUNT OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_ROT OP_SUB OP_NUMEQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_INPUTINDEX OP_OUTPUTBYTECODE OP_INPUTINDEX OP_UTXOBYTECODE OP_EQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENCOMMITMENT OP_3 OP_ROLL OP_TXLOCKTIME OP_CAT OP_EQUALVERIFY c7c94c0d3957ca26087551 OP_2 OP_INPUTINDEX OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_NUMNOTEQUAL OP_IF OP_DUP OP_INPUTBYTECODE OP_3 OP_PICK OP_SPLIT OP_NIP OP_4 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_NUMNOTEQUAL OP_IF OP_DUP OP_INPUTBYTECODE OP_4 OP_PICK OP_SPLIT OP_NIP OP_5 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_NUMNOTEQUAL OP_IF OP_DUP OP_INPUTBYTECODE OP_5 OP_PICK OP_SPLIT OP_NIP OP_6 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_NUMNOTEQUAL OP_IF OP_DUP OP_INPUTBYTECODE OP_6 OP_PICK OP_SPLIT OP_NIP OP_7 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_NUMNOTEQUAL OP_IF OP_DUP OP_INPUTBYTECODE OP_7 OP_PICK OP_SPLIT OP_NIP OP_8 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_NUMNOTEQUAL OP_IF OP_DUP OP_INPUTBYTECODE OP_8 OP_PICK OP_SPLIT OP_NIP OP_9 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_NUMNOTEQUAL OP_IF OP_DUP OP_INPUTBYTECODE OP_9 OP_PICK OP_SPLIT OP_NIP OP_10 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_NUMNOTEQUAL OP_IF OP_DUP OP_INPUTBYTECODE OP_10 OP_PICK OP_SPLIT OP_NIP OP_11 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_NUMNOTEQUAL OP_IF OP_DUP OP_INPUTBYTECODE OP_11 OP_PICK OP_SPLIT OP_NIP OP_12 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_NUMNOTEQUAL OP_IF OP_DUP OP_INPUTBYTECODE OP_12 OP_PICK OP_SPLIT OP_NIP OP_13 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_NUMNOTEQUAL OP_IF OP_DUP OP_INPUTBYTECODE OP_13 OP_PICK OP_SPLIT OP_NIP OP_14 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_NUMNOTEQUAL OP_IF OP_DUP OP_INPUTBYTECODE OP_14 OP_PICK OP_SPLIT OP_NIP OP_15 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_NUMNOTEQUAL OP_IF OP_DUP OP_INPUTBYTECODE OP_15 OP_PICK OP_SPLIT OP_NIP OP_16 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_NUMNOTEQUAL OP_IF OP_DUP OP_INPUTBYTECODE OP_16 OP_PICK OP_SPLIT OP_NIP 11 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_NUMNOTEQUAL OP_IF OP_DUP OP_INPUTBYTECODE 11 OP_PICK OP_SPLIT OP_NIP 12 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_NUMNOTEQUAL OP_IF OP_DUP OP_INPUTBYTECODE 12 OP_PICK OP_SPLIT OP_NIP 13 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_NUMNOTEQUAL OP_IF OP_DUP OP_INPUTBYTECODE 13 OP_PICK OP_SPLIT OP_NIP 14 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_NUMNOTEQUAL OP_IF OP_DUP OP_INPUTBYTECODE 14 OP_PICK OP_SPLIT OP_NIP 15 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_NUMNOTEQUAL OP_IF OP_DUP OP_INPUTBYTECODE 15 OP_PICK OP_SPLIT OP_NIP 16 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_NUMNOTEQUAL OP_IF OP_DUP OP_INPUTBYTECODE 16 OP_PICK OP_SPLIT OP_NIP 17 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_NUMNOTEQUAL OP_IF OP_DUP OP_INPUTBYTECODE 17 OP_PICK OP_SPLIT OP_NIP 18 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_DROP OP_1 OP_ELSE OP_1 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_2 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_2 OP_NUMEQUALVERIFY OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_1 OP_UTXOTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY 20 OP_SPLIT OP_DROP OP_EQUALVERIFY OP_1 OP_UTXOTOKENCOMMITMENT 61646d696e OP_EQUALVERIFY OP_1 OP_OUTPUTBYTECODE OP_1 OP_UTXOBYTECODE OP_EQUAL OP_ENDIF",
  source: "contract TimelockTest() {\n  function issue() {\n    int deploymentTime = int(tx.inputs[this.activeInputIndex].nftCommitment.split(4)[0]);\n    int lastInteractionTime = int(tx.inputs[this.activeInputIndex].nftCommitment.split(4)[1]);\n    require(tx.locktime > lastInteractionTime, \"Current time is before last interaction time\");\n\n    int intialSupply = 8888888888888_88; // with 2 decimals\n    int emitted = intialSupply - tx.inputs[this.activeInputIndex].tokenAmount;\n\n    int SCALE = 1_000_000_000; // 1e9 for scaling\n    int t = tx.locktime - deploymentTime; // time in seconds since deploymentTime\n    console.log(t, \"time since start\");\n    int k = 3; // 3E-9 scaled by 1e9\n    int denom = SCALE + k * t; // (1 + 3E-9 * t) * 1e9\n    int denomSquared = denom * denom / SCALE; // (1 + 3E-9 * t)^2 * 1e9\n    int currentEmissionCap = intialSupply * (SCALE - SCALE * SCALE / denomSquared) / SCALE;\n    console.log(currentEmissionCap, \"current emission cap\");\n\n    // use inputs.length to find the cauldron token-buy output, since last ouput could be a bch change\n    int tokensBought = tx.outputs[tx.inputs.length - 1].tokenAmount;\n    int maxEmission = min(tokensBought, currentEmissionCap - emitted);\n    int issue = tokensBought * 9 / 10; // 90% of tokens bought\n    int investorShare = (tokensBought + issue) / 2;\n    int fundShare = investorShare;\n    if (maxEmission < tokensBought) {\n      investorShare = 95 * maxEmission / 100 + tokensBought - maxEmission;\n      fundShare = 95 * maxEmission / 100; // 95% of current emission cap\n    }\n    int emitting = investorShare + fundShare;\n\n    console.log(\"investorShare\", investorShare, \"fundShare\", fundShare, \"issue\", issue, \"tokensBought\", tokensBought);\n\n    require(this.activeInputIndex == 0, \"Active input index must be 0 for issuance contract\");\n    require(tx.outputs[this.activeInputIndex].tokenAmount == (tx.inputs[this.activeInputIndex].tokenAmount - emitting), \"Wrong amount of tokens emitted\");\n    require(tx.outputs[this.activeInputIndex].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory, \"Can not change token category\");\n    require(tx.outputs[this.activeInputIndex].lockingBytecode == tx.inputs[this.activeInputIndex].lockingBytecode, \"Can not change locking bytecode\");\n    require(tx.outputs[this.activeInputIndex].nftCommitment == bytes(deploymentTime) + bytes(tx.locktime), \"NFT commitment must be updated with current time\");\n\n    bytes cauldronPoolContractSignature = 0xc7c94c0d3957ca26087551; // signature of cauldron pool contract\n    int cauldronPoolContractSignatureSplit = 2;\n\n    int index = this.activeInputIndex; // 0\n    index = index + 1; // cauldron pool token output\n    if (index + 1 != tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    // #region 20 more cauldron pool input-output checks\n    index = index + 1; // cauldron pool token output\n    if (index + 1 != tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 != tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 != tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 != tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 != tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 != tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 != tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 != tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 != tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 != tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 != tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 != tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 != tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 != tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 != tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 != tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 != tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 != tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 != tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 != tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n    // #endregion\n  }\n\n  function migrate() {\n    require(tx.inputs.length == 2, \"Migration requires exactly 2 inputs\");\n    require(tx.outputs.length == 2, \"Migration requires exactly 2 outputs\");\n    require(this.activeInputIndex == 0, \"Active input index must be 0 for migration\");\n    // require(tx.outputs[0].lockingBytecode == tx.inputs[0].lockingBytecode, \"Locking bytecode must remain the same\");\n    require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[0].tokenAmount == tx.inputs[0].tokenAmount, \"Token amount must remain the same\");\n    require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n    // same category, capability 'none'\n    require(tx.inputs[1].tokenCategory == tx.inputs[0].tokenCategory.split(32)[0], \"Second input must have the same token category as the first input\");\n    require(tx.inputs[1].nftCommitment == 0x61646D696E, \"Second input must have 'admin' commitment\");\n    require(tx.outputs[1].lockingBytecode == tx.inputs[1].lockingBytecode, \"Locking bytecode must remain the same for second output\");\n  }\n}\n",
  debug: {
    bytecode: "76009c63c0cf547f7581c0cf547f7781c59f6907388e779270280376c0d0940400ca9a3bc55479945352797c7b959376957896537a52795379547995537a9694957c96c38cd376727c94a37859955a9652799352966e7c54799f63015f5379950164965479935379947b757c015f537995016496776893c0009dc0d3c0d07b949dc0d1c0ce88c0cdc0c788c0d2537ac57e880bc7c94c0d3957ca2608755152c0768b768bc39e6376ca53797f7754798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39e6376ca54797f7755798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39e6376ca55797f7756798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39e6376ca56797f7757798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39e6376ca57797f7758798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39e6376ca58797f7759798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39e6376ca59797f775a798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39e6376ca5a797f775b798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39e6376ca5b797f775c798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39e6376ca5c797f775d798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39e6376ca5d797f775e798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39e6376ca5e797f775f798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39e6376ca5f797f7760798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39e6376ca60797f770111798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39e6376ca0111797f770112798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39e6376ca0112797f770113798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39e6376ca0113797f770114798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39e6376ca0114797f770115798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39e6376ca0115797f770116798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39e6376ca0116797f770117798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39e6376ca0117797f770118798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a069686d6d6d6d6d6d6d6d6d6d6d6d6d755167519dc3529dc4529dc0009d00d100ce8800d300d09d00d200cf8800cc00c69d51ce00ce01207f758851cf0561646d696e8851cd51c78768",
    sourceMap: "2:2:275:3;;;;3:39:3:60;:29::75:1;:82::83:0;:29::84:1;:::87;:25::88;4:44:4:65:0;:34::80:1;:87::88:0;:34::89:1;:::92;:30::93;5:12:5:23:0;:::45:1;:4::95;7:23:7:39:0;8:18:8:30;:43::64;:33::77:1;:18;10:16:10:29:0;11:12:11:23;:26::40;;:12:::1;13::13:13:0;14:16:14:21;;:24::25;:28::29;:24:::1;:16;15:23:15:36:0;::::1;:39::44:0;:23:::1;16:29:16:41:0;;:45::50;;:53::58;;:61::66;;:53:::1;:69::81:0;;:53:::1;:45;:29::82;:85::90:0;:29:::1;20:34:20:50:0;:::54:1;:23::67;21:26:21:38:0;:40::68;;::::1;:22::69;22:16:22:28:0;:31::32;:16:::1;:35::37:0;:16:::1;23:25:23::0;;:::45:1;:49::50:0;:24:::1;24:20:25:19:0;;25:22::34;;:8:::1;:36:28:5:0;26:22:26:24;:27::38;;:22:::1;:41::44:0;:22:::1;:47::59:0;;:22:::1;:62::73:0;;:22:::1;:6::74;;;27:18:27:20:0;:23::34;;:18:::1;:37::40:0;:18:::1;:6::41;25:36:28:5;29:19:29:44;33:12:33:33:0;:37::38;:4::94:1;34:23:34:44:0;:12::57:1;:72::93:0;:62::106:1;:109::117:0;:62:::1;:4::154;35:23:35:44:0;:12::59:1;:73::94:0;:63::109:1;:4::144;36:23:36:44:0;:12::61:1;:75::96:0;:65::113:1;:4::150;37:23:37:44:0;:12::59:1;:69::83:0;;:93::104;:63::105:1;:4::159;39:42:39:66:0;40:45:40:46;42:16:42:37;43:12:43:17;:::21:1;44:8:44:13:0;:::17:1;:21::37:0;:8:::1;:39:52:5:0;45:24:45:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;47:25:47:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;48:25:48:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;49:25:49:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;50:25:50:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;51:25:51:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;44:39:52:5;55:12:55:17:0;:::21:1;56:8:56:13:0;:::17:1;:21::37:0;:8:::1;:39:64:5:0;57:24:57:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;59:25:59:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;60:25:60:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;61:25:61:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;62:25:62:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;63:25:63:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;56:39:64:5;66:12:66:17:0;:::21:1;67:8:67:13:0;:::17:1;:21::37:0;:8:::1;:39:75:5:0;68:24:68:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;70:25:70:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;71:25:71:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;72:25:72:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;73:25:73:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;74:25:74:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;67:39:75:5;77:12:77:17:0;:::21:1;78:8:78:13:0;:::17:1;:21::37:0;:8:::1;:39:86:5:0;79:24:79:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;81:25:81:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;82:25:82:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;83:25:83:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;84:25:84:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;85:25:85:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;78:39:86:5;88:12:88:17:0;:::21:1;89:8:89:13:0;:::17:1;:21::37:0;:8:::1;:39:97:5:0;90:24:90:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;92:25:92:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;93:25:93:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;94:25:94:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;95:25:95:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;96:25:96:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;89:39:97:5;99:12:99:17:0;:::21:1;100:8:100:13:0;:::17:1;:21::37:0;:8:::1;:39:108:5:0;101:24:101:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;103:25:103:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;104:25:104:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;105:25:105:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;106:25:106:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;107:25:107:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;100:39:108:5;110:12:110:17:0;:::21:1;111:8:111:13:0;:::17:1;:21::37:0;:8:::1;:39:119:5:0;112:24:112:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;114:25:114:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;115:25:115:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;116:25:116:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;117:25:117:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;118:25:118:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;111:39:119:5;121:12:121:17:0;:::21:1;122:8:122:13:0;:::17:1;:21::37:0;:8:::1;:39:130:5:0;123:24:123:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;125:25:125:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;126:25:126:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;127:25:127:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;128:25:128:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;129:25:129:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;122:39:130:5;132:12:132:17:0;:::21:1;133:8:133:13:0;:::17:1;:21::37:0;:8:::1;:39:141:5:0;134:24:134:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;136:25:136:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;137:25:137:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;138:25:138:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;139:25:139:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;140:25:140:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;133:39:141:5;143:12:143:17:0;:::21:1;144:8:144:13:0;:::17:1;:21::37:0;:8:::1;:39:152:5:0;145:24:145:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;147:25:147:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;148:25:148:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;149:25:149:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;150:25:150:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;151:25:151:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;144:39:152:5;154:12:154:17:0;:::21:1;155:8:155:13:0;:::17:1;:21::37:0;:8:::1;:39:163:5:0;156:24:156:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;158:25:158:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;159:25:159:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;160:25:160:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;161:25:161:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;162:25:162:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;155:39:163:5;165:12:165:17:0;:::21:1;166:8:166:13:0;:::17:1;:21::37:0;:8:::1;:39:174:5:0;167:24:167:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;169:25:169:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;170:25:170:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;171:25:171:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;172:25:172:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;173:25:173:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;166:39:174:5;176:12:176:17:0;:::21:1;177:8:177:13:0;:::17:1;:21::37:0;:8:::1;:39:185:5:0;178:24:178:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;180:25:180:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;181:25:181:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;182:25:182:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;183:25:183:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;184:25:184:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;177:39:185:5;187:12:187:17:0;:::21:1;188:8:188:13:0;:::17:1;:21::37:0;:8:::1;:39:196:5:0;189:24:189:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;191:25:191:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;192:25:192:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;193:25:193:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;194:25:194:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;195:25:195:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;188:39:196:5;198:12:198:17:0;:::21:1;199:8:199:13:0;:::17:1;:21::37:0;:8:::1;:39:207:5:0;200:24:200:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;202:25:202:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;203:25:203:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;204:25:204:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;205:25:205:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;206:25:206:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;199:39:207:5;209:12:209:17:0;:::21:1;210:8:210:13:0;:::17:1;:21::37:0;:8:::1;:39:218:5:0;211:24:211:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;213:25:213:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;214:25:214:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;215:25:215:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;216:25:216:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;217:25:217:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;210:39:218:5;220:12:220:17:0;:::21:1;221:8:221:13:0;:::17:1;:21::37:0;:8:::1;:39:229:5:0;222:24:222:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;224:25:224:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;225:25:225:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;226:25:226:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;227:25:227:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;228:25:228:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;221:39:229:5;231:12:231:17:0;:::21:1;232:8:232:13:0;:::17:1;:21::37:0;:8:::1;:39:240:5:0;233:24:233:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;235:25:235:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;236:25:236:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;237:25:237:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;238:25:238:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;239:25:239:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;232:39:240:5;242:12:242:17:0;:::21:1;243:8:243:13:0;:::17:1;:21::37:0;:8:::1;:39:251:5:0;244:24:244:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;246:25:246:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;247:25:247:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;248:25:248:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;249:25:249:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;250:25:250:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;243:39:251:5;253:12:253:17:0;:::21:1;254:8:254:13:0;:::17:1;:21::37:0;:8:::1;:39:262:5:0;255:24:255:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;257:25:257:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;258:25:258:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;259:25:259:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;260:25:260:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;261:25:261:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;254:39:262:5;264:12:264:17:0;:::21:1;265:8:265:13:0;:::17:1;:21::37:0;:8:::1;:39:273:5:0;266:24:266:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;268:25:268:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;269:25:269:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;270:25:270:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;271:25:271:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;272:25:272:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;265:39:273:5;2:2:275:3;;;;;;;;;;;;;;;;277::291::0;;278:12:278:28;:32::33;:4::74:1;279:12:279:29:0;:33::34;:4::76:1;280:12:280:33:0;:37::38;:4::86:1;282:23:282:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;283:23:283:24:0;:12::37:1;:51::52:0;:41::65:1;:4::104;284:23:284:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;285:23:285:24:0;:12::31:1;:45::46:0;:35::53:1;:4::92;288:22:288:23:0;:12::38:1;:52::53:0;:42::68:1;:75::77:0;:42::78:1;:::81;:4::152;289:22:289:23:0;:12::38:1;:42::54:0;:4::101:1;290:23:290:24:0;:12::41:1;:55::56:0;:45::73:1;:12;1:0:292:1",
    logs: [
      {
        ip: 29,
        line: 12,
        data: [
          {
            stackIndex: 0,
            type: "int",
            ip: 29
          },
          "time since start"
        ]
      },
      {
        ip: 56,
        line: 17,
        data: [
          {
            stackIndex: 0,
            type: "int",
            ip: 56
          },
          "current emission cap"
        ]
      },
      {
        ip: 104,
        line: 31,
        data: [
          "investorShare",
          {
            type: "int",
            stackIndex: 1,
            ip: 103
          },
          "fundShare",
          {
            type: "int",
            stackIndex: 1,
            ip: 103,
            transformations: "OP_SWAP"
          },
          "issue",
          {
            type: "int",
            stackIndex: 1,
            ip: 71
          },
          "tokensBought",
          {
            stackIndex: 2,
            type: "int",
            ip: 104
          }
        ]
      }
    ],
    requires: [
      {
        ip: 18,
        line: 5,
        message: "Current time is before last interaction time"
      },
      {
        ip: 106,
        line: 33,
        message: "Active input index must be 0 for issuance contract"
      },
      {
        ip: 113,
        line: 34,
        message: "Wrong amount of tokens emitted"
      },
      {
        ip: 118,
        line: 35,
        message: "Can not change token category"
      },
      {
        ip: 123,
        line: 36,
        message: "Can not change locking bytecode"
      },
      {
        ip: 130,
        line: 37,
        message: "NFT commitment must be updated with current time"
      },
      {
        ip: 149,
        line: 45,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 154,
        line: 47,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 159,
        line: 48,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 164,
        line: 49,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 170,
        line: 50,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 176,
        line: 51,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 193,
        line: 57,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 198,
        line: 59,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 203,
        line: 60,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 208,
        line: 61,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 214,
        line: 62,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 220,
        line: 63,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 237,
        line: 68,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 242,
        line: 70,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 247,
        line: 71,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 252,
        line: 72,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 258,
        line: 73,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 264,
        line: 74,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 281,
        line: 79,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 286,
        line: 81,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 291,
        line: 82,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 296,
        line: 83,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 302,
        line: 84,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 308,
        line: 85,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 325,
        line: 90,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 330,
        line: 92,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 335,
        line: 93,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 340,
        line: 94,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 346,
        line: 95,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 352,
        line: 96,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 369,
        line: 101,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 374,
        line: 103,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 379,
        line: 104,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 384,
        line: 105,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 390,
        line: 106,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 396,
        line: 107,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 413,
        line: 112,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 418,
        line: 114,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 423,
        line: 115,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 428,
        line: 116,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 434,
        line: 117,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 440,
        line: 118,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 457,
        line: 123,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 462,
        line: 125,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 467,
        line: 126,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 472,
        line: 127,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 478,
        line: 128,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 484,
        line: 129,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 501,
        line: 134,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 506,
        line: 136,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 511,
        line: 137,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 516,
        line: 138,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 522,
        line: 139,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 528,
        line: 140,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 545,
        line: 145,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 550,
        line: 147,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 555,
        line: 148,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 560,
        line: 149,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 566,
        line: 150,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 572,
        line: 151,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 589,
        line: 156,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 594,
        line: 158,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 599,
        line: 159,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 604,
        line: 160,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 610,
        line: 161,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 616,
        line: 162,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 633,
        line: 167,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 638,
        line: 169,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 643,
        line: 170,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 648,
        line: 171,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 654,
        line: 172,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 660,
        line: 173,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 677,
        line: 178,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 682,
        line: 180,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 687,
        line: 181,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 692,
        line: 182,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 698,
        line: 183,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 704,
        line: 184,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 721,
        line: 189,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 726,
        line: 191,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 731,
        line: 192,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 736,
        line: 193,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 742,
        line: 194,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 748,
        line: 195,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 765,
        line: 200,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 770,
        line: 202,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 775,
        line: 203,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 780,
        line: 204,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 786,
        line: 205,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 792,
        line: 206,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 809,
        line: 211,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 814,
        line: 213,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 819,
        line: 214,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 824,
        line: 215,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 830,
        line: 216,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 836,
        line: 217,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 853,
        line: 222,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 858,
        line: 224,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 863,
        line: 225,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 868,
        line: 226,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 874,
        line: 227,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 880,
        line: 228,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 897,
        line: 233,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 902,
        line: 235,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 907,
        line: 236,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 912,
        line: 237,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 918,
        line: 238,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 924,
        line: 239,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 941,
        line: 244,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 946,
        line: 246,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 951,
        line: 247,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 956,
        line: 248,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 962,
        line: 249,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 968,
        line: 250,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 985,
        line: 255,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 990,
        line: 257,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 995,
        line: 258,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 1000,
        line: 259,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 1006,
        line: 260,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 1012,
        line: 261,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 1029,
        line: 266,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 1034,
        line: 268,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 1039,
        line: 269,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 1044,
        line: 270,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 1050,
        line: 271,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 1056,
        line: 272,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 1078,
        line: 278,
        message: "Migration requires exactly 2 inputs"
      },
      {
        ip: 1081,
        line: 279,
        message: "Migration requires exactly 2 outputs"
      },
      {
        ip: 1084,
        line: 280,
        message: "Active input index must be 0 for migration"
      },
      {
        ip: 1089,
        line: 282,
        message: "Token category must remain the same"
      },
      {
        ip: 1094,
        line: 283,
        message: "Token amount must remain the same"
      },
      {
        ip: 1099,
        line: 284,
        message: "NFT commitment must remain the same"
      },
      {
        ip: 1104,
        line: 285,
        message: "Output value must remain the same"
      },
      {
        ip: 1112,
        line: 288,
        message: "Second input must have the same token category as the first input"
      },
      {
        ip: 1116,
        line: 289,
        message: "Second input must have 'admin' commitment"
      },
      {
        ip: 1122,
        line: 290,
        message: "Locking bytecode must remain the same for second output"
      }
    ]
  },
  compiler: {
    name: "cashc",
    version: "0.11.0-next.4"
  },
  updatedAt: "2025-06-10T18:41:49.521Z"
} as const;