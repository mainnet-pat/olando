export default {
  contractName: "IssuanceFund",
  constructorInputs: [
    {
      name: "councilFundLockingBytecode",
      type: "bytes"
    }
  ],
  abi: [
    {
      name: "issue",
      inputs: []
    },
    {
      name: "migrate",
      inputs: [
        {
          name: "newLockingBytecode",
          type: "bytes"
        }
      ]
    },
    {
      name: "dissolve",
      inputs: []
    }
  ],
  bytecode: "OP_OVER OP_0 OP_NUMEQUAL OP_IF OP_TXINPUTCOUNT OP_4 OP_GREATERTHANOREQUAL OP_VERIFY OP_TXOUTPUTCOUNT OP_5 OP_GREATERTHANOREQUAL OP_VERIFY OP_INPUTINDEX OP_UTXOTOKENCOMMITMENT OP_4 OP_SPLIT OP_DROP OP_BIN2NUM OP_INPUTINDEX OP_UTXOTOKENCOMMITMENT OP_4 OP_SPLIT OP_NIP OP_BIN2NUM OP_TXLOCKTIME OP_LESSTHAN OP_VERIFY 388e7792702803 OP_DUP OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_SUB 00ca9a3b OP_TXLOCKTIME OP_4 OP_PICK OP_SUB OP_3 OP_2 OP_PICK OP_SWAP OP_ROT OP_MUL OP_ADD OP_DUP OP_MUL OP_OVER OP_DIV OP_3 OP_ROLL OP_2 OP_PICK OP_3 OP_PICK OP_4 OP_PICK OP_MUL OP_3 OP_ROLL OP_DIV OP_SUB OP_MUL OP_SWAP OP_DIV 64 OP_TXINPUTCOUNT OP_1SUB OP_OUTPUTTOKENAMOUNT OP_MUL 5f OP_DIV OP_DUP OP_9 OP_MUL OP_10 OP_DIV OP_DUP OP_3 OP_ROLL OP_4 OP_ROLL OP_SUB OP_LESSTHANOREQUAL OP_VERIFY OP_ADD OP_2 OP_DIV OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENAMOUNT OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_2 OP_PICK OP_SUB OP_2 OP_PICK OP_SUB OP_NUMEQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_INPUTINDEX OP_OUTPUTBYTECODE OP_INPUTINDEX OP_UTXOBYTECODE OP_EQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENCOMMITMENT OP_ROT OP_TXLOCKTIME OP_CAT OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY 20 OP_SPLIT OP_DROP OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENAMOUNT OP_OVER OP_NUMEQUALVERIFY OP_1 OP_OUTPUTBYTECODE OP_ROT OP_EQUALVERIFY OP_1 OP_OUTPUTVALUE e803 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_2 OP_SUB OP_DUP OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY 20 OP_SPLIT OP_DROP OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_ROT OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_1 OP_UTXOBYTECODE OP_EQUALVERIFY OP_OUTPUTVALUE e803 OP_NUMEQUALVERIFY c94c0d3957ca2608827700a0 OP_2 OP_INPUTINDEX OP_1ADD OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_3 OP_PICK OP_SPLIT OP_NIP OP_4 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_4 OP_PICK OP_SPLIT OP_NIP OP_5 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_5 OP_PICK OP_SPLIT OP_NIP OP_6 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_6 OP_PICK OP_SPLIT OP_NIP OP_7 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_7 OP_PICK OP_SPLIT OP_NIP OP_8 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_8 OP_PICK OP_SPLIT OP_NIP OP_9 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_9 OP_PICK OP_SPLIT OP_NIP OP_10 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_10 OP_PICK OP_SPLIT OP_NIP OP_11 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_11 OP_PICK OP_SPLIT OP_NIP OP_12 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_12 OP_PICK OP_SPLIT OP_NIP OP_13 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_13 OP_PICK OP_SPLIT OP_NIP OP_14 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_14 OP_PICK OP_SPLIT OP_NIP OP_15 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_15 OP_PICK OP_SPLIT OP_NIP OP_16 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_16 OP_PICK OP_SPLIT OP_NIP 11 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 11 OP_PICK OP_SPLIT OP_NIP 12 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 12 OP_PICK OP_SPLIT OP_NIP 13 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 13 OP_PICK OP_SPLIT OP_NIP 14 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 14 OP_PICK OP_SPLIT OP_NIP 15 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 15 OP_PICK OP_SPLIT OP_NIP 16 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 16 OP_PICK OP_SPLIT OP_NIP 17 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 17 OP_PICK OP_SPLIT OP_NIP 18 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_DROP OP_1 OP_ELSE OP_OVER OP_1 OP_NUMEQUAL OP_IF OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_0 OP_OUTPUTBYTECODE OP_3 OP_ROLL OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_1 OP_UTXOTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY 20 OP_SPLIT OP_DROP OP_EQUALVERIFY OP_1 OP_UTXOTOKENCATEGORY OP_SIZE OP_NIP 20 OP_NUMEQUALVERIFY OP_1 OP_UTXOTOKENCOMMITMENT 61646d696e OP_EQUALVERIFY OP_1 OP_OUTPUTBYTECODE OP_1 OP_UTXOBYTECODE OP_EQUAL OP_NIP OP_NIP OP_ELSE OP_SWAP OP_2 OP_NUMEQUALVERIFY OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_2 OP_NUMEQUALVERIFY OP_0 OP_OUTPUTBYTECODE OP_1 OP_UTXOBYTECODE OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUAL OP_NIP OP_ENDIF OP_ENDIF",
  source: "// Olando Community Issuance Fund Contract\n// Each time an investor buys tokens from the cauldron pool, the contract emits extra tokens to the council.\n// The contract is deployed with a fixed supply of 8,888,888,888.88 tokens.\n// The contract emits tokens based on the time since deployment and the amount of tokens bought so far.\n// The contract can be migrated to a new issuance or dissolved to release tokens to the admin.\ncontract IssuanceFund(bytes councilFundLockingBytecode) {\n\n  // invest into Olando ecosystem by buying tokens from the cauldron pool\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input, NFT commitment: 4bytes deployment time + 4bytes last interaction time\n  //   1: investors BCH input to balance the council's OLA share payout\n  //   2..N: cauldron pool inputs\n  //   N+1: investment BCH, no tokens\n  //  outputs:\n  //   0: issuance fund output, NFT commitment: 4bytes deployment time + 4bytes new interaction time (tx.locktime)\n  //   1: council OLA share output, see notes for amounts\n  //   2..N: cauldron pool outputs, same properties as inputs but with reduced token amount\n  //   N+1: investors OLA share output, see notes for amounts\n  //   N+2: BCH change output\n  //\n  // Notes: if the issuance cap is not hit at the time of interaction, then ola bought from cauldron by investor\n  // are augmented with 90% of the tokens bought, the OLA amounts are added together and split in half.\n  // If the issuance cap is hit the contract execution fails, suggesting the investor to buy less tokens.\n  function issue() {\n    // first rough check for presence of a cauldron trade\n    require(tx.inputs.length >= 4, \"Issue transaction must have at least 4 inputs\");\n    require(tx.outputs.length >= 5, \"Issue transaction must have at least 5 outputs\");\n\n    int deploymentTime = int(tx.inputs[this.activeInputIndex].nftCommitment.split(4)[0]);\n    int lastInteractionTime = int(tx.inputs[this.activeInputIndex].nftCommitment.split(4)[1]);\n    require(tx.locktime > lastInteractionTime, \"Current time is before last interaction time\");\n\n    int intialSupply = 8888888888888_88; // with 2 decimals\n    int issued = intialSupply - tx.inputs[this.activeInputIndex].tokenAmount;\n\n    int SCALE = 1_000_000_000; // 1e9 for scaling\n    int t = tx.locktime - deploymentTime; // time in seconds since deploymentTime\n    console.log(t, \"time since start\");\n    int k = 3; // 3E-9 scaled by 1e9\n    int denom = SCALE + k * t; // (1 + 3E-9 * t) * 1e9\n    int denomSquared = denom * denom / SCALE; // (1 + 3E-9 * t)^2 * 1e9\n    int currentEmissionCap = intialSupply * (SCALE - SCALE * SCALE / denomSquared) / SCALE;\n    console.log(currentEmissionCap, \"current emission cap\");\n\n    // use inputs.length to find the cauldron token-buy output, since last ouput could be a bch change\n    // here we already assume that the cauldron pool output got only 95% of the tokens bought, the other 5% are forwarded to council fund\n    int tokensBought = 100 * tx.outputs[tx.inputs.length - 1].tokenAmount / 95;\n    int issue = tokensBought * 9 / 10; // 90% of tokens bought\n    require(issue <= currentEmissionCap - issued, \"Issue amount exceeds current emission cap\");\n    int issueShare = (tokensBought + issue) / 2;\n\n    console.log(\"investorShare\", issueShare, \"fundShare\", issueShare, \"issue\", issue, \"tokensBought\", tokensBought);\n\n    // constrain the input 0 and output 0 to be the issuance fund\n    require(this.activeInputIndex == 0, \"Active input index must be 0 for issuance contract\");\n    require(tx.outputs[this.activeInputIndex].tokenAmount == (tx.inputs[this.activeInputIndex].tokenAmount - issueShare - issueShare), \"Wrong amount of tokens issued\");\n    require(tx.outputs[this.activeInputIndex].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory, \"Can not change token category\");\n    require(tx.outputs[this.activeInputIndex].lockingBytecode == tx.inputs[this.activeInputIndex].lockingBytecode, \"Can not change locking bytecode\");\n    require(tx.outputs[this.activeInputIndex].nftCommitment == bytes(deploymentTime) + bytes(tx.locktime), \"NFT commitment must be updated with current time\");\n\n    // constrain the output 1 to be the council fund share\n    require(tx.outputs[1].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory.split(32)[0], \"Council fund share must have the same token category, no nft\");\n    require(tx.outputs[1].tokenAmount == issueShare, \"Council fund share must match the calculated fund share\");\n    require(tx.outputs[1].lockingBytecode == councilFundLockingBytecode, \"Council fund share must have the correct locking bytecode\");\n    require(tx.outputs[1].value == 1000, \"Council fund share must have a value of 1000 satoshis\");\n\n    // constrain the output N+1 to be the investor's share\n    int investorShareIndex = tx.outputs.length - 2;\n    require(tx.outputs[investorShareIndex].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory.split(32)[0], \"Investor's share must have the same token category, no nft\");\n    require(tx.outputs[investorShareIndex].tokenAmount == issueShare, \"Investor's share must match the calculated share\");\n    require(tx.outputs[investorShareIndex].lockingBytecode == tx.inputs[1].lockingBytecode, \"Investor's share must have the correct locking bytecode\");\n    require(tx.outputs[investorShareIndex].value == 1000, \"Investor's share must have a value of 1000 satoshis\");\n\n\n    // constrain the cauldron inputs and outputs 2..N\n    bytes cauldronPoolContractSignature = 0xc94c0d3957ca2608827700a0; // signature of cauldron pool contract\n    int cauldronPoolContractSignatureSplit = 2;\n\n    int index = this.activeInputIndex + 1; // 0\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n// #region 20 more cauldron pool input-output checks\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n// #endregion\n  }\n\n  // migrate contract to a new issuance fund contract\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input\n  //   1: admin NFT input\n  //   2: funding input\n  //  outputs:\n  //   0: issuance fund output. all same properties but new locking bytecode\n  //   1: admin NFT output, same as input\n  //   2: bch change output\n  function migrate(bytes newLockingBytecode) {\n    require(this.activeInputIndex == 0, \"Active input index must be 0\");\n    require(tx.inputs.length == 3, \"Migration requires exactly 3 inputs\");\n    require(tx.outputs.length == 3, \"Migration requires exactly 3 outputs\");\n\n    require(tx.outputs[0].lockingBytecode == newLockingBytecode, \"New locking bytecode must be provided for the issuance fund output\");\n    require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[0].tokenAmount == tx.inputs[0].tokenAmount, \"Token amount must remain the same\");\n    require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n    // preserve admin NFT: same category\n    require(tx.inputs[1].tokenCategory == tx.inputs[0].tokenCategory.split(32)[0], \"Second input must have the same token category as the first input\");\n    require(tx.inputs[1].tokenCategory.length == 32, \"Second input must have 'none' capability\");\n    require(tx.inputs[1].nftCommitment == 0x61646D696E, \"Second input must have 'admin' commitment\");\n    require(tx.outputs[1].lockingBytecode == tx.inputs[1].lockingBytecode, \"Locking bytecode must remain the same for second output\");\n\n    // bch change output is not burdened with any requirements\n  }\n\n  // dissolve contract and release tokens to admin\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input\n  //   1: admin NFT input\n  //   2: funding input\n  //  outputs:\n  //   0: same properties as input 0 paid to admin p2pkh\n  //   1: bch change output\n  function dissolve() {\n    require(this.activeInputIndex == 0, \"Active input index must be 0\");\n    require(tx.inputs.length == 3, \"Dissolve requires exactly 3 inputs\");\n    require(tx.outputs.length == 2, \"Dissolve requires exactly 2 outputs\");\n\n    require(tx.outputs[0].lockingBytecode == tx.inputs[1].lockingBytecode, \"Locking bytecode must be the same as admin p2pkh input\");\n    require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[0].tokenAmount == tx.inputs[0].tokenAmount, \"Token amount must remain the same\");\n    require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n    // bch change output is not burdened with any requirements\n  }\n}\n",
  debug: {
    bytecode: "78009c63c354a269c455a269c0cf547f7581c0cf547f7781c59f6907388e779270280376c0d0940400ca9a3bc55479945352797c7b959376957896537a52795379547995537a9694957c960164c38cd395015f967659955a9676537a547a94a169935296c0009dc0d3c0d05279945279949dc0d1c0ce88c0cdc0c788c0d27bc57e8851d1c0ce01207f758851d3789d51cd7b8851cc02e8039dc4529476d1c0ce01207f758876d37b9d76cd51c788cc02e8039d0cc94c0d3957ca2608827700a052c08b768b768bc39f6376ca53797f7754798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca54797f7755798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca55797f7756798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca56797f7757798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca57797f7758798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca58797f7759798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca59797f775a798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca5a797f775b798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca5b797f775c798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca5c797f775d798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca5d797f775e798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca5e797f775f798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca5f797f7760798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca60797f770111798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca0111797f770112798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca0112797f770113798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca0113797f770114798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca0114797f770115798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca0115797f770116798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca0116797f770117798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca0117797f770118798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a069686d6d6d6d6d6d6d6d6d6d6d6d75516778519c63c0009dc3539dc4539d00cd537a8800d100ce8800d300d09d00d200cf8800cc00c69d51ce00ce01207f758851ce827701209d51cf0561646d696e8851cd51c7877777677c529dc0009dc3539dc4529d00cd51c78800d100ce8800d300d09d00d200cf8800cc00c69c776868",
    sourceMap: "25:2:334:3;;;;27:12:27:28;:32::33;:12:::1;:4::84;28:12:28:29:0;:33::34;:12:::1;:4::86;30:39:30:60:0;:29::75:1;:82::83:0;:29::84:1;:::87;:25::88;31:44:31:65:0;:34::80:1;:87::88:0;:34::89:1;:::92;:30::93;32:12:32:23:0;:::45:1;:4::95;34:23:34:39:0;35:17:35:29;:42::63;:32::76:1;:17;37:16:37:29:0;38:12:38:23;:26::40;;:12:::1;40::40:13:0;41:16:41:21;;:24::25;:28::29;:24:::1;:16;42:23:42:36:0;::::1;:39::44:0;:23:::1;43:29:43:41:0;;:45::50;;:53::58;;:61::66;;:53:::1;:69::81:0;;:53:::1;:45;:29::82;:85::90:0;:29:::1;48:23:48:26:0;:40::56;:::60:1;:29::73;:23;:76::78:0;:23:::1;49:16:49:28:0;:31::32;:16:::1;:35::37:0;:16:::1;50:12:50:17:0;:21::39;;:42::48;;:21:::1;:12;:4::95;51:22:51:42;:46::47:0;:21:::1;56:12:56:33:0;:37::38;:4::94:1;57:23:57:44:0;:12::57:1;:72::93:0;:62::106:1;:109::119:0;;:62:::1;:122::132:0;;:62:::1;:4::168;58:23:58:44:0;:12::59:1;:73::94:0;:63::109:1;:4::144;59:23:59:44:0;:12::61:1;:75::96:0;:65::113:1;:4::150;60:23:60:44:0;:12::59:1;:69::83:0;:93::104;:63::105:1;:4::159;63:23:63:24:0;:12::39:1;:53::74:0;:43::89:1;:96::98:0;:43::99:1;:::102;:4::168;64:23:64:24:0;:12::37:1;:41::51:0;:4::112:1;65:23:65:24:0;:12::41:1;:45::71:0;:4::134:1;66:23:66:24:0;:12::31:1;:35::39:0;:4::98:1;69:29:69:46:0;:49::50;:29:::1;70:23:70:41:0;:12::56:1;:70::91:0;:60::106:1;:113::115:0;:60::116:1;:::119;:4::183;71:23:71:41:0;:12::54:1;:58::68:0;:4::122:1;72:23:72:41:0;:12::58:1;:72::73:0;:62::90:1;:4::151;73:12:73:48;:52::56:0;:4::113:1;77:42:77:68:0;78:45:78:46;80:16:80:37;:::41:1;81:12:81:17:0;:::21:1;82:8:82:13:0;:::17:1;:20::36:0;:8:::1;:38:91:5:0;84:24:84:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;86:25:86:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;87:25:87:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;88:25:88:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;89:25:89:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;90:25:90:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;82:38:91:5;94:12:94:17:0;:::21:1;95:8:95:13:0;:::17:1;:20::36:0;:8:::1;:38:104:5:0;97:24:97:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;99:25:99:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;100:25:100:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;101:25:101:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;102:25:102:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;103:25:103:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;95:38:104:5;106:12:106:17:0;:::21:1;107:8:107:13:0;:::17:1;:20::36:0;:8:::1;:38:116:5:0;109:24:109:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;111:25:111:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;112:25:112:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;113:25:113:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;114:25:114:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;115:25:115:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;107:38:116:5;118:12:118:17:0;:::21:1;119:8:119:13:0;:::17:1;:20::36:0;:8:::1;:38:128:5:0;121:24:121:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;123:25:123:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;124:25:124:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;125:25:125:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;126:25:126:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;127:25:127:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;119:38:128:5;130:12:130:17:0;:::21:1;131:8:131:13:0;:::17:1;:20::36:0;:8:::1;:38:140:5:0;133:24:133:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;135:25:135:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;136:25:136:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;137:25:137:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;138:25:138:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;139:25:139:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;131:38:140:5;142:12:142:17:0;:::21:1;143:8:143:13:0;:::17:1;:20::36:0;:8:::1;:38:152:5:0;145:24:145:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;147:25:147:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;148:25:148:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;149:25:149:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;150:25:150:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;151:25:151:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;143:38:152:5;154:12:154:17:0;:::21:1;155:8:155:13:0;:::17:1;:20::36:0;:8:::1;:38:164:5:0;157:24:157:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;159:25:159:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;160:25:160:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;161:25:161:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;162:25:162:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;163:25:163:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;155:38:164:5;166:12:166:17:0;:::21:1;167:8:167:13:0;:::17:1;:20::36:0;:8:::1;:38:176:5:0;169:24:169:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;171:25:171:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;172:25:172:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;173:25:173:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;174:25:174:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;175:25:175:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;167:38:176:5;178:12:178:17:0;:::21:1;179:8:179:13:0;:::17:1;:20::36:0;:8:::1;:38:188:5:0;181:24:181:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;183:25:183:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;184:25:184:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;185:25:185:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;186:25:186:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;187:25:187:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;179:38:188:5;190:12:190:17:0;:::21:1;191:8:191:13:0;:::17:1;:20::36:0;:8:::1;:38:200:5:0;193:24:193:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;195:25:195:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;196:25:196:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;197:25:197:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;198:25:198:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;199:25:199:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;191:38:200:5;202:12:202:17:0;:::21:1;203:8:203:13:0;:::17:1;:20::36:0;:8:::1;:38:212:5:0;205:24:205:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;207:25:207:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;208:25:208:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;209:25:209:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;210:25:210:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;211:25:211:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;203:38:212:5;214:12:214:17:0;:::21:1;215:8:215:13:0;:::17:1;:20::36:0;:8:::1;:38:224:5:0;217:24:217:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;219:25:219:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;220:25:220:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;221:25:221:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;222:25:222:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;223:25:223:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;215:38:224:5;226:12:226:17:0;:::21:1;227:8:227:13:0;:::17:1;:20::36:0;:8:::1;:38:236:5:0;229:24:229:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;231:25:231:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;232:25:232:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;233:25:233:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;234:25:234:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;235:25:235:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;227:38:236:5;238:12:238:17:0;:::21:1;239:8:239:13:0;:::17:1;:20::36:0;:8:::1;:38:248:5:0;241:24:241:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;243:25:243:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;244:25:244:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;245:25:245:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;246:25:246:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;247:25:247:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;239:38:248:5;250:12:250:17:0;:::21:1;251:8:251:13:0;:::17:1;:20::36:0;:8:::1;:38:260:5:0;253:24:253:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;255:25:255:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;256:25:256:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;257:25:257:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;258:25:258:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;259:25:259:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;251:38:260:5;262:12:262:17:0;:::21:1;263:8:263:13:0;:::17:1;:20::36:0;:8:::1;:38:272:5:0;265:24:265:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;267:25:267:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;268:25:268:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;269:25:269:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;270:25:270:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;271:25:271:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;263:38:272:5;274:12:274:17:0;:::21:1;275:8:275:13:0;:::17:1;:20::36:0;:8:::1;:38:284:5:0;277:24:277:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;279:25:279:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;280:25:280:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;281:25:281:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;282:25:282:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;283:25:283:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;275:38:284:5;286:12:286:17:0;:::21:1;287:8:287:13:0;:::17:1;:20::36:0;:8:::1;:38:296:5:0;289:24:289:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;291:25:291:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;292:25:292:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;293:25:293:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;294:25:294:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;295:25:295:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;287:38:296:5;298:12:298:17:0;:::21:1;299:8:299:13:0;:::17:1;:20::36:0;:8:::1;:38:308:5:0;301:24:301:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;303:25:303:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;304:25:304:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;305:25:305:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;306:25:306:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;307:25:307:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;299:38:308:5;310:12:310:17:0;:::21:1;311:8:311:13:0;:::17:1;:20::36:0;:8:::1;:38:320:5:0;313:24:313:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;315:25:315:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;316:25:316:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;317:25:317:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;318:25:318:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;319:25:319:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;311:38:320:5;322:12:322:17:0;:::21:1;323:8:323:13:0;:::17:1;:20::36:0;:8:::1;:38:332:5:0;325:24:325:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;327:25:327:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;328:25:328:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;329:25:329:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;330:25:330:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;331:25:331:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;323:38:332:5;25:2:334:3;;;;;;;;;;;;;;;346::364::0;;;;347:12:347:33;:37::38;:4::72:1;348:12:348:28:0;:32::33;:4::74:1;349:12:349:29:0;:33::34;:4::76:1;351:23:351:24:0;:12::41:1;:45::63:0;;:4::135:1;352:23:352:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;353:23:353:24:0;:12::37:1;:51::52:0;:41::65:1;:4::104;354:23:354:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;355:23:355:24:0;:12::31:1;:45::46:0;:35::53:1;:4::92;358:22:358:23:0;:12::38:1;:52::53:0;:42::68:1;:75::77:0;:42::78:1;:::81;:4::152;359:22:359:23:0;:12::38:1;:::45;;:49::51:0;:4::97:1;360:22:360:23:0;:12::38:1;:42::54:0;:4::101:1;361:23:361:24:0;:12::41:1;:55::56:0;:45::73:1;:12;346:2:364:3;;;375::387::0;;;376:12:376:33;:37::38;:4::72:1;377:12:377:28:0;:32::33;:4::73:1;378:12:378:29:0;:33::34;:4::75:1;380:23:380:24:0;:12::41:1;:55::56:0;:45::73:1;:4::133;381:23:381:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;382:23:382:24:0;:12::37:1;:51::52:0;:41::65:1;:4::104;383:23:383:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;384:23:384:24:0;:12::31:1;:45::46:0;:35::53:1;:12;375:2:387:3;6:0:388:1;",
    logs: [
      {
        ip: 38,
        line: 39,
        data: [
          {
            stackIndex: 0,
            type: "int",
            ip: 38
          },
          "time since start"
        ]
      },
      {
        ip: 65,
        line: 44,
        data: [
          {
            stackIndex: 0,
            type: "int",
            ip: 65
          },
          "current emission cap"
        ]
      },
      {
        ip: 88,
        line: 53,
        data: [
          "investorShare",
          {
            stackIndex: 0,
            type: "int",
            ip: 88
          },
          "fundShare",
          {
            stackIndex: 0,
            type: "int",
            ip: 88
          },
          "issue",
          {
            type: "int",
            stackIndex: 1,
            ip: 85,
            transformations: "OP_SWAP"
          },
          "tokensBought",
          {
            type: "int",
            stackIndex: 1,
            ip: 85
          }
        ]
      },
      {
        ip: 172,
        line: 83,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 172
          }
        ]
      },
      {
        ip: 216,
        line: 96,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 216
          }
        ]
      },
      {
        ip: 260,
        line: 108,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 260
          }
        ]
      },
      {
        ip: 304,
        line: 120,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 304
          }
        ]
      },
      {
        ip: 348,
        line: 132,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 348
          }
        ]
      },
      {
        ip: 392,
        line: 144,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 392
          }
        ]
      },
      {
        ip: 436,
        line: 156,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 436
          }
        ]
      },
      {
        ip: 480,
        line: 168,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 480
          }
        ]
      },
      {
        ip: 524,
        line: 180,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 524
          }
        ]
      },
      {
        ip: 568,
        line: 192,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 568
          }
        ]
      },
      {
        ip: 612,
        line: 204,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 612
          }
        ]
      },
      {
        ip: 656,
        line: 216,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 656
          }
        ]
      },
      {
        ip: 700,
        line: 228,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 700
          }
        ]
      },
      {
        ip: 744,
        line: 240,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 744
          }
        ]
      },
      {
        ip: 788,
        line: 252,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 788
          }
        ]
      },
      {
        ip: 832,
        line: 264,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 832
          }
        ]
      },
      {
        ip: 876,
        line: 276,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 876
          }
        ]
      },
      {
        ip: 920,
        line: 288,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 920
          }
        ]
      },
      {
        ip: 964,
        line: 300,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 964
          }
        ]
      },
      {
        ip: 1008,
        line: 312,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 1008
          }
        ]
      },
      {
        ip: 1052,
        line: 324,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 1052
          }
        ]
      }
    ],
    requires: [
      {
        ip: 8,
        line: 27,
        message: "Issue transaction must have at least 4 inputs"
      },
      {
        ip: 12,
        line: 28,
        message: "Issue transaction must have at least 5 outputs"
      },
      {
        ip: 27,
        line: 32,
        message: "Current time is before last interaction time"
      },
      {
        ip: 84,
        line: 50,
        message: "Issue amount exceeds current emission cap"
      },
      {
        ip: 90,
        line: 56,
        message: "Active input index must be 0 for issuance contract"
      },
      {
        ip: 101,
        line: 57,
        message: "Wrong amount of tokens issued"
      },
      {
        ip: 106,
        line: 58,
        message: "Can not change token category"
      },
      {
        ip: 111,
        line: 59,
        message: "Can not change locking bytecode"
      },
      {
        ip: 117,
        line: 60,
        message: "NFT commitment must be updated with current time"
      },
      {
        ip: 125,
        line: 63,
        message: "Council fund share must have the same token category, no nft"
      },
      {
        ip: 129,
        line: 64,
        message: "Council fund share must match the calculated fund share"
      },
      {
        ip: 133,
        line: 65,
        message: "Council fund share must have the correct locking bytecode"
      },
      {
        ip: 137,
        line: 66,
        message: "Council fund share must have a value of 1000 satoshis"
      },
      {
        ip: 148,
        line: 70,
        message: "Investor's share must have the same token category, no nft"
      },
      {
        ip: 152,
        line: 71,
        message: "Investor's share must match the calculated share"
      },
      {
        ip: 157,
        line: 72,
        message: "Investor's share must have the correct locking bytecode"
      },
      {
        ip: 160,
        line: 73,
        message: "Investor's share must have a value of 1000 satoshis"
      },
      {
        ip: 180,
        line: 84,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 185,
        line: 86,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 190,
        line: 87,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 195,
        line: 88,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 201,
        line: 89,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 207,
        line: 90,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 224,
        line: 97,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 229,
        line: 99,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 234,
        line: 100,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 239,
        line: 101,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 245,
        line: 102,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 251,
        line: 103,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 268,
        line: 109,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 273,
        line: 111,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 278,
        line: 112,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 283,
        line: 113,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 289,
        line: 114,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 295,
        line: 115,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 312,
        line: 121,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 317,
        line: 123,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 322,
        line: 124,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 327,
        line: 125,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 333,
        line: 126,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 339,
        line: 127,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 356,
        line: 133,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 361,
        line: 135,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 366,
        line: 136,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 371,
        line: 137,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 377,
        line: 138,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 383,
        line: 139,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 400,
        line: 145,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 405,
        line: 147,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 410,
        line: 148,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 415,
        line: 149,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 421,
        line: 150,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 427,
        line: 151,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 444,
        line: 157,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 449,
        line: 159,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 454,
        line: 160,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 459,
        line: 161,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 465,
        line: 162,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 471,
        line: 163,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 488,
        line: 169,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 493,
        line: 171,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 498,
        line: 172,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 503,
        line: 173,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 509,
        line: 174,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 515,
        line: 175,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 532,
        line: 181,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 537,
        line: 183,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 542,
        line: 184,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 547,
        line: 185,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 553,
        line: 186,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 559,
        line: 187,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 576,
        line: 193,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 581,
        line: 195,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 586,
        line: 196,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 591,
        line: 197,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 597,
        line: 198,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 603,
        line: 199,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 620,
        line: 205,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 625,
        line: 207,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 630,
        line: 208,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 635,
        line: 209,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 641,
        line: 210,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 647,
        line: 211,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 664,
        line: 217,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 669,
        line: 219,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 674,
        line: 220,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 679,
        line: 221,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 685,
        line: 222,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 691,
        line: 223,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 708,
        line: 229,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 713,
        line: 231,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 718,
        line: 232,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 723,
        line: 233,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 729,
        line: 234,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 735,
        line: 235,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 752,
        line: 241,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 757,
        line: 243,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 762,
        line: 244,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 767,
        line: 245,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 773,
        line: 246,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 779,
        line: 247,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 796,
        line: 253,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 801,
        line: 255,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 806,
        line: 256,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 811,
        line: 257,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 817,
        line: 258,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 823,
        line: 259,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 840,
        line: 265,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 845,
        line: 267,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 850,
        line: 268,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 855,
        line: 269,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 861,
        line: 270,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 867,
        line: 271,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 884,
        line: 277,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 889,
        line: 279,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 894,
        line: 280,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 899,
        line: 281,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 905,
        line: 282,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 911,
        line: 283,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 928,
        line: 289,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 933,
        line: 291,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 938,
        line: 292,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 943,
        line: 293,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 949,
        line: 294,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 955,
        line: 295,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 972,
        line: 301,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 977,
        line: 303,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 982,
        line: 304,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 987,
        line: 305,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 993,
        line: 306,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 999,
        line: 307,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 1016,
        line: 313,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 1021,
        line: 315,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 1026,
        line: 316,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 1031,
        line: 317,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 1037,
        line: 318,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 1043,
        line: 319,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 1060,
        line: 325,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 1065,
        line: 327,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 1070,
        line: 328,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 1075,
        line: 329,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 1081,
        line: 330,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 1087,
        line: 331,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 1110,
        line: 347,
        message: "Active input index must be 0"
      },
      {
        ip: 1113,
        line: 348,
        message: "Migration requires exactly 3 inputs"
      },
      {
        ip: 1116,
        line: 349,
        message: "Migration requires exactly 3 outputs"
      },
      {
        ip: 1121,
        line: 351,
        message: "New locking bytecode must be provided for the issuance fund output"
      },
      {
        ip: 1126,
        line: 352,
        message: "Token category must remain the same"
      },
      {
        ip: 1131,
        line: 353,
        message: "Token amount must remain the same"
      },
      {
        ip: 1136,
        line: 354,
        message: "NFT commitment must remain the same"
      },
      {
        ip: 1141,
        line: 355,
        message: "Output value must remain the same"
      },
      {
        ip: 1149,
        line: 358,
        message: "Second input must have the same token category as the first input"
      },
      {
        ip: 1155,
        line: 359,
        message: "Second input must have 'none' capability"
      },
      {
        ip: 1159,
        line: 360,
        message: "Second input must have 'admin' commitment"
      },
      {
        ip: 1165,
        line: 361,
        message: "Locking bytecode must remain the same for second output"
      },
      {
        ip: 1173,
        line: 376,
        message: "Active input index must be 0"
      },
      {
        ip: 1176,
        line: 377,
        message: "Dissolve requires exactly 3 inputs"
      },
      {
        ip: 1179,
        line: 378,
        message: "Dissolve requires exactly 2 outputs"
      },
      {
        ip: 1184,
        line: 380,
        message: "Locking bytecode must be the same as admin p2pkh input"
      },
      {
        ip: 1189,
        line: 381,
        message: "Token category must remain the same"
      },
      {
        ip: 1194,
        line: 382,
        message: "Token amount must remain the same"
      },
      {
        ip: 1199,
        line: 383,
        message: "NFT commitment must remain the same"
      },
      {
        ip: 1205,
        line: 384,
        message: "Output value must remain the same"
      }
    ]
  },
  compiler: {
    name: "cashc",
    version: "0.11.0-next.4"
  },
  updatedAt: "2025-06-11T19:24:55.446Z"
} as const;