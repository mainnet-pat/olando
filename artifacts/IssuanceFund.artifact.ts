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
  bytecode: "OP_OVER OP_0 OP_NUMEQUAL OP_IF OP_TXINPUTCOUNT OP_4 OP_GREATERTHANOREQUAL OP_VERIFY OP_TXOUTPUTCOUNT OP_5 OP_GREATERTHANOREQUAL OP_VERIFY OP_INPUTINDEX OP_UTXOTOKENCOMMITMENT OP_4 OP_SPLIT OP_DROP OP_BIN2NUM OP_INPUTINDEX OP_UTXOTOKENCOMMITMENT OP_4 OP_SPLIT OP_NIP OP_BIN2NUM OP_TXLOCKTIME OP_LESSTHAN OP_VERIFY 388e7792702803 OP_DUP OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_SUB 00ca9a3b OP_TXLOCKTIME OP_4 OP_PICK OP_SUB OP_3 OP_2 OP_PICK OP_SWAP OP_ROT OP_MUL OP_ADD OP_DUP OP_MUL OP_OVER OP_DIV OP_3 OP_ROLL OP_2 OP_PICK OP_3 OP_PICK OP_4 OP_PICK OP_MUL OP_3 OP_ROLL OP_DIV OP_SUB OP_MUL OP_SWAP OP_DIV 64 OP_TXINPUTCOUNT OP_1SUB OP_OUTPUTTOKENAMOUNT OP_MUL 5f OP_DIV OP_DUP OP_2SWAP OP_SWAP OP_SUB OP_MIN OP_OVER OP_9 OP_MUL OP_10 OP_DIV OP_2 OP_PICK OP_ADD OP_2 OP_DIV OP_2DUP OP_SWAP OP_4 OP_PICK OP_LESSTHAN OP_IF 5f OP_3 OP_PICK OP_MUL 64 OP_DIV OP_4 OP_PICK OP_ADD OP_3 OP_PICK OP_SUB OP_ROT OP_DROP OP_SWAP 5f OP_3 OP_PICK OP_MUL 64 OP_DIV OP_NIP OP_ENDIF OP_2DUP OP_ADD OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENAMOUNT OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_ROT OP_SUB OP_NUMEQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_INPUTINDEX OP_OUTPUTBYTECODE OP_INPUTINDEX OP_UTXOBYTECODE OP_EQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENCOMMITMENT OP_5 OP_ROLL OP_TXLOCKTIME OP_CAT OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY 20 OP_SPLIT OP_DROP OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENAMOUNT OP_NUMEQUALVERIFY OP_1 OP_OUTPUTBYTECODE OP_4 OP_ROLL OP_EQUALVERIFY OP_1 OP_OUTPUTVALUE e803 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_2 OP_SUB OP_DUP OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY 20 OP_SPLIT OP_DROP OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_OUTPUTTOKENAMOUNT OP_3 OP_ROLL OP_NUMEQUALVERIFY OP_OVER OP_OUTPUTBYTECODE OP_1 OP_UTXOBYTECODE OP_EQUALVERIFY OP_SWAP OP_OUTPUTVALUE e803 OP_NUMEQUALVERIFY c7c94c0d3957ca26087551 OP_2 OP_INPUTINDEX OP_1ADD OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_3 OP_PICK OP_SPLIT OP_NIP OP_4 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_4 OP_PICK OP_SPLIT OP_NIP OP_5 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_5 OP_PICK OP_SPLIT OP_NIP OP_6 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_6 OP_PICK OP_SPLIT OP_NIP OP_7 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_7 OP_PICK OP_SPLIT OP_NIP OP_8 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_8 OP_PICK OP_SPLIT OP_NIP OP_9 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_9 OP_PICK OP_SPLIT OP_NIP OP_10 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_10 OP_PICK OP_SPLIT OP_NIP OP_11 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_11 OP_PICK OP_SPLIT OP_NIP OP_12 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_12 OP_PICK OP_SPLIT OP_NIP OP_13 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_13 OP_PICK OP_SPLIT OP_NIP OP_14 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_14 OP_PICK OP_SPLIT OP_NIP OP_15 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_15 OP_PICK OP_SPLIT OP_NIP OP_16 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_16 OP_PICK OP_SPLIT OP_NIP 11 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 11 OP_PICK OP_SPLIT OP_NIP 12 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 12 OP_PICK OP_SPLIT OP_NIP 13 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 13 OP_PICK OP_SPLIT OP_NIP 14 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 14 OP_PICK OP_SPLIT OP_NIP 15 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 15 OP_PICK OP_SPLIT OP_NIP 16 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 16 OP_PICK OP_SPLIT OP_NIP 17 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 17 OP_PICK OP_SPLIT OP_NIP 18 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_1 OP_ELSE OP_OVER OP_1 OP_NUMEQUAL OP_IF OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_0 OP_OUTPUTBYTECODE OP_3 OP_ROLL OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_1 OP_UTXOTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY 20 OP_SPLIT OP_DROP OP_EQUALVERIFY OP_1 OP_UTXOTOKENCATEGORY OP_SIZE OP_NIP 20 OP_NUMEQUALVERIFY OP_1 OP_UTXOTOKENCOMMITMENT 61646d696e OP_EQUALVERIFY OP_1 OP_OUTPUTBYTECODE OP_1 OP_UTXOBYTECODE OP_EQUAL OP_NIP OP_NIP OP_ELSE OP_SWAP OP_2 OP_NUMEQUALVERIFY OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_2 OP_NUMEQUALVERIFY OP_0 OP_OUTPUTBYTECODE OP_1 OP_UTXOBYTECODE OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUAL OP_NIP OP_ENDIF OP_ENDIF",
  source: "// Olando Community Issuance Fund Contract\n// Each time an investor buys tokens from the cauldron pool, the contract emits extra tokens to the council.\n// The contract is deployed with a fixed supply of 8,888,888,888.88 tokens.\n// The contract emits tokens based on the time since deployment and the amount of tokens bought so far.\n// The contract can be migrated to a new issuance or dissolved to release tokens to the admin.\ncontract IssuanceFund(bytes councilFundLockingBytecode) {\n\n  // invest into Olando ecosystem by buying tokens from the cauldron pool\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input, NFT commitment: 4bytes deployment time + 4bytes last interaction time\n  //   1: investors BCH input to balance the council's OLA share payout\n  //   2..N: cauldron pool inputs\n  //   N+1: investment BCH, no tokens\n  //  outputs:\n  //   0: issuance fund output, NFT commitment: 4bytes deployment time + 4bytes new interaction time (tx.locktime)\n  //   1: council OLA share output, see notes for amounts\n  //   2..N: cauldron pool outputs, same properties as inputs but with reduced token amount\n  //   N+1: investors OLA share output, see notes for amounts\n  //   N+2: BCH change output\n  //\n  // Notes: if the issuance cap is not hit at the time of interaction, then ola bought from cauldron by investor\n  // are augmented with 90% of the tokens bought, the OLA amounts are added together and split in half.\n  // If the issuance cap is hit and the OLA amount available for issuance is less that OLA bought from cauldron,\n  // then the investor share is 95% of the available issuance cap plus (the OLA bought from cauldron - issuance cap).\n  function issue() {\n    // first rough check for presence of a cauldron trade\n    require(tx.inputs.length >= 4, \"Issue transaction must have at least 4 inputs\");\n    require(tx.outputs.length >= 5, \"Issue transaction must have at least 5 outputs\");\n\n    int deploymentTime = int(tx.inputs[this.activeInputIndex].nftCommitment.split(4)[0]);\n    int lastInteractionTime = int(tx.inputs[this.activeInputIndex].nftCommitment.split(4)[1]);\n    require(tx.locktime > lastInteractionTime, \"Current time is before last interaction time\");\n\n    int intialSupply = 8888888888888_88; // with 2 decimals\n    int emitted = intialSupply - tx.inputs[this.activeInputIndex].tokenAmount;\n\n    int SCALE = 1_000_000_000; // 1e9 for scaling\n    int t = tx.locktime - deploymentTime; // time in seconds since deploymentTime\n    console.log(t, \"time since start\");\n    int k = 3; // 3E-9 scaled by 1e9\n    int denom = SCALE + k * t; // (1 + 3E-9 * t) * 1e9\n    int denomSquared = denom * denom / SCALE; // (1 + 3E-9 * t)^2 * 1e9\n    int currentEmissionCap = intialSupply * (SCALE - SCALE * SCALE / denomSquared) / SCALE;\n    console.log(currentEmissionCap, \"current emission cap\");\n\n    // use inputs.length to find the cauldron token-buy output, since last ouput could be a bch change\n    int tokensBought = 100 * tx.outputs[tx.inputs.length - 1].tokenAmount / 95;\n    int maxEmission = min(tokensBought, currentEmissionCap - emitted);\n    int issue = tokensBought * 9 / 10; // 90% of tokens bought\n    int investorShare = (tokensBought + issue) / 2;\n    int fundShare = investorShare;\n    if (maxEmission < tokensBought) {\n      investorShare = 95 * maxEmission / 100 + tokensBought - maxEmission;\n      fundShare = 95 * maxEmission / 100; // 95% of current emission cap\n    }\n    int emitting = investorShare + fundShare;\n\n    console.log(\"investorShare\", investorShare, \"fundShare\", fundShare, \"issue\", issue, \"tokensBought\", tokensBought);\n\n    // constrain the input 0 and output 0 to be the issuance fund\n    require(this.activeInputIndex == 0, \"Active input index must be 0 for issuance contract\");\n    require(tx.outputs[this.activeInputIndex].tokenAmount == (tx.inputs[this.activeInputIndex].tokenAmount - emitting), \"Wrong amount of tokens emitted\");\n    require(tx.outputs[this.activeInputIndex].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory, \"Can not change token category\");\n    require(tx.outputs[this.activeInputIndex].lockingBytecode == tx.inputs[this.activeInputIndex].lockingBytecode, \"Can not change locking bytecode\");\n    require(tx.outputs[this.activeInputIndex].nftCommitment == bytes(deploymentTime) + bytes(tx.locktime), \"NFT commitment must be updated with current time\");\n\n    // constrain the output 1 to be the council fund share\n    require(tx.outputs[1].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory.split(32)[0], \"Council fund share must have the same token category, no nft\");\n    require(tx.outputs[1].tokenAmount == fundShare, \"Council fund share must match the calculated fund share\");\n    require(tx.outputs[1].lockingBytecode == councilFundLockingBytecode, \"Council fund share must have the correct locking bytecode\");\n    require(tx.outputs[1].value == 1000, \"Council fund share must have a value of 1000 satoshis\");\n\n    // constrain the output N+1 to be the investor's share\n    int investorShareIndex = tx.outputs.length - 2;\n    require(tx.outputs[investorShareIndex].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory.split(32)[0], \"Investor's share must have the same token category, no nft\");\n    int amount = tx.outputs[investorShareIndex].tokenAmount;\n    console.log(amount, investorShare);\n    require(tx.outputs[investorShareIndex].tokenAmount == investorShare, \"Investor's share must match the calculated share\");\n    require(tx.outputs[investorShareIndex].lockingBytecode == tx.inputs[1].lockingBytecode, \"Investor's share must have the correct locking bytecode\");\n    require(tx.outputs[investorShareIndex].value == 1000, \"Investor's share must have a value of 1000 satoshis\");\n\n\n    // constrain the cauldron inputs and outputs 2..N\n    bytes cauldronPoolContractSignature = 0xc7c94c0d3957ca26087551; // signature of cauldron pool contract\n    int cauldronPoolContractSignatureSplit = 2;\n\n    int index = this.activeInputIndex + 1; // 0\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n// #region 20 more cauldron pool input-output checks\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n// #endregion\n  }\n\n  // migrate contract to a new issuance fund contract\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input\n  //   1: admin NFT input\n  //   2: funding input\n  //  outputs:\n  //   0: issuance fund output. all same properties but new locking bytecode\n  //   1: admin NFT output, same as input\n  //   2: bch change output\n  function migrate(bytes newLockingBytecode) {\n    require(this.activeInputIndex == 0, \"Active input index must be 0\");\n    require(tx.inputs.length == 3, \"Migration requires exactly 3 inputs\");\n    require(tx.outputs.length == 3, \"Migration requires exactly 3 outputs\");\n\n    require(tx.outputs[0].lockingBytecode == newLockingBytecode, \"New locking bytecode must be provided for the issuance fund output\");\n    require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[0].tokenAmount == tx.inputs[0].tokenAmount, \"Token amount must remain the same\");\n    require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n    // preserve admin NFT: same category\n    require(tx.inputs[1].tokenCategory == tx.inputs[0].tokenCategory.split(32)[0], \"Second input must have the same token category as the first input\");\n    require(tx.inputs[1].tokenCategory.length == 32, \"Second input must have 'none' capability\");\n    require(tx.inputs[1].nftCommitment == 0x61646D696E, \"Second input must have 'admin' commitment\");\n    require(tx.outputs[1].lockingBytecode == tx.inputs[1].lockingBytecode, \"Locking bytecode must remain the same for second output\");\n\n    // bch change output is not burdened with any requirements\n  }\n\n  // dissolve contract and release tokens to admin\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input\n  //   1: admin NFT input\n  //   2: funding input\n  //  outputs:\n  //   0: same properties as input 0 paid to admin p2pkh\n  //   1: bch change output\n  function dissolve() {\n    require(this.activeInputIndex == 0, \"Active input index must be 0\");\n    require(tx.inputs.length == 3, \"Dissolve requires exactly 3 inputs\");\n    require(tx.outputs.length == 2, \"Dissolve requires exactly 2 outputs\");\n\n    require(tx.outputs[0].lockingBytecode == tx.inputs[1].lockingBytecode, \"Locking bytecode must be the same as admin p2pkh input\");\n    require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[0].tokenAmount == tx.inputs[0].tokenAmount, \"Token amount must remain the same\");\n    require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n    // bch change output is not burdened with any requirements\n  }\n}\n",
  debug: {
    bytecode: "78009c63c354a269c455a269c0cf547f7581c0cf547f7781c59f6907388e779270280376c0d0940400ca9a3bc55479945352797c7b959376957896537a52795379547995537a9694957c960164c38cd395015f9676727c94a37859955a9652799352966e7c54799f63015f5379950164965479935379947b757c015f53799501649677686e93c0009dc0d3c0d07b949dc0d1c0ce88c0cdc0c788c0d2557ac57e8851d1c0ce01207f758851d39d51cd547a8851cc02e8039dc4529476d1c0ce01207f758876d378d3537a9d78cd51c7887ccc02e8039d0bc7c94c0d3957ca2608755152c08b768b768bc39f6376ca53797f7754798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca54797f7755798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca55797f7756798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca56797f7757798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca57797f7758798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca58797f7759798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca59797f775a798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca5a797f775b798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca5b797f775c798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca5c797f775d798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca5d797f775e798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca5e797f775f798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca5f797f7760798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca60797f770111798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca0111797f770112798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca0112797f770113798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca0113797f770114798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca0114797f770115798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca0115797f770116798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca0116797f770117798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca0117797f770118798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a069686d6d6d6d6d6d6d6d6d6d6d6d6d6d516778519c63c0009dc3539dc4539d00cd537a8800d100ce8800d300d09d00d200cf8800cc00c69d51ce00ce01207f758851ce827701209d51cf0561646d696e8851cd51c7877777677c529dc0009dc3539dc4529d00cd51c78800d100ce8800d300d09d00d200cf8800cc00c69c776868",
    sourceMap: "26:2:342:3;;;;28:12:28:28;:32::33;:12:::1;:4::84;29:12:29:29:0;:33::34;:12:::1;:4::86;31:39:31:60:0;:29::75:1;:82::83:0;:29::84:1;:::87;:25::88;32:44:32:65:0;:34::80:1;:87::88:0;:34::89:1;:::92;:30::93;33:12:33:23:0;:::45:1;:4::95;35:23:35:39:0;36:18:36:30;:43::64;:33::77:1;:18;38:16:38:29:0;39:12:39:23;:26::40;;:12:::1;41::41:13:0;42:16:42:21;;:24::25;:28::29;:24:::1;:16;43:23:43:36:0;::::1;:39::44:0;:23:::1;44:29:44:41:0;;:45::50;;:53::58;;:61::66;;:53:::1;:69::81:0;;:53:::1;:45;:29::82;:85::90:0;:29:::1;48:23:48:26:0;:40::56;:::60:1;:29::73;:23;:76::78:0;:23:::1;49:26:49:38:0;:40::68;;::::1;:22::69;50:16:50:28:0;:31::32;:16:::1;:35::37:0;:16:::1;51:25:51::0;;:::45:1;:49::50:0;:24:::1;52:20:53:19:0;;53:22::34;;:8:::1;:36:56:5:0;54:22:54:24;:27::38;;:22:::1;:41::44:0;:22:::1;:47::59:0;;:22:::1;:62::73:0;;:22:::1;:6::74;;;55:18:55:20:0;:23::34;;:18:::1;:37::40:0;:18:::1;:6::41;53:36:56:5;57:19:57:44:0;::::1;62:12:62:33:0;:37::38;:4::94:1;63:23:63:44:0;:12::57:1;:72::93:0;:62::106:1;:109::117:0;:62:::1;:4::154;64:23:64:44:0;:12::59:1;:73::94:0;:63::109:1;:4::144;65:23:65:44:0;:12::61:1;:75::96:0;:65::113:1;:4::150;66:23:66:44:0;:12::59:1;:69::83:0;;:93::104;:63::105:1;:4::159;69:23:69:24:0;:12::39:1;:53::74:0;:43::89:1;:96::98:0;:43::99:1;:::102;:4::168;70:23:70:24:0;:12::37:1;:4::111;71:23:71:24:0;:12::41:1;:45::71:0;;:4::134:1;72:23:72:24:0;:12::31:1;:35::39:0;:4::98:1;75:29:75:46:0;:49::50;:29:::1;76:23:76:41:0;:12::56:1;:70::91:0;:60::106:1;:113::115:0;:60::116:1;:::119;:4::183;77:28:77:46:0;:17::59:1;79:23:79:41:0;:12::54:1;:58::71:0;;:4::125:1;80:23:80:41:0;:12::58:1;:72::73:0;:62::90:1;:4::151;81:23:81:41:0;:12::48:1;:52::56:0;:4::113:1;85:42:85:66:0;86:45:86:46;88:16:88:37;:::41:1;89:12:89:17:0;:::21:1;90:8:90:13:0;:::17:1;:20::36:0;:8:::1;:38:99:5:0;92:24:92:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;94:25:94:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;95:25:95:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;96:25:96:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;97:25:97:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;98:25:98:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;90:38:99:5;102:12:102:17:0;:::21:1;103:8:103:13:0;:::17:1;:20::36:0;:8:::1;:38:112:5:0;105:24:105:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;107:25:107:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;108:25:108:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;109:25:109:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;110:25:110:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;111:25:111:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;103:38:112:5;114:12:114:17:0;:::21:1;115:8:115:13:0;:::17:1;:20::36:0;:8:::1;:38:124:5:0;117:24:117:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;119:25:119:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;120:25:120:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;121:25:121:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;122:25:122:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;123:25:123:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;115:38:124:5;126:12:126:17:0;:::21:1;127:8:127:13:0;:::17:1;:20::36:0;:8:::1;:38:136:5:0;129:24:129:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;131:25:131:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;132:25:132:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;133:25:133:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;134:25:134:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;135:25:135:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;127:38:136:5;138:12:138:17:0;:::21:1;139:8:139:13:0;:::17:1;:20::36:0;:8:::1;:38:148:5:0;141:24:141:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;143:25:143:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;144:25:144:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;145:25:145:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;146:25:146:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;147:25:147:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;139:38:148:5;150:12:150:17:0;:::21:1;151:8:151:13:0;:::17:1;:20::36:0;:8:::1;:38:160:5:0;153:24:153:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;155:25:155:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;156:25:156:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;157:25:157:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;158:25:158:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;159:25:159:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;151:38:160:5;162:12:162:17:0;:::21:1;163:8:163:13:0;:::17:1;:20::36:0;:8:::1;:38:172:5:0;165:24:165:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;167:25:167:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;168:25:168:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;169:25:169:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;170:25:170:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;171:25:171:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;163:38:172:5;174:12:174:17:0;:::21:1;175:8:175:13:0;:::17:1;:20::36:0;:8:::1;:38:184:5:0;177:24:177:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;179:25:179:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;180:25:180:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;181:25:181:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;182:25:182:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;183:25:183:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;175:38:184:5;186:12:186:17:0;:::21:1;187:8:187:13:0;:::17:1;:20::36:0;:8:::1;:38:196:5:0;189:24:189:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;191:25:191:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;192:25:192:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;193:25:193:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;194:25:194:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;195:25:195:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;187:38:196:5;198:12:198:17:0;:::21:1;199:8:199:13:0;:::17:1;:20::36:0;:8:::1;:38:208:5:0;201:24:201:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;203:25:203:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;204:25:204:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;205:25:205:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;206:25:206:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;207:25:207:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;199:38:208:5;210:12:210:17:0;:::21:1;211:8:211:13:0;:::17:1;:20::36:0;:8:::1;:38:220:5:0;213:24:213:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;215:25:215:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;216:25:216:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;217:25:217:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;218:25:218:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;219:25:219:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;211:38:220:5;222:12:222:17:0;:::21:1;223:8:223:13:0;:::17:1;:20::36:0;:8:::1;:38:232:5:0;225:24:225:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;227:25:227:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;228:25:228:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;229:25:229:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;230:25:230:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;231:25:231:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;223:38:232:5;234:12:234:17:0;:::21:1;235:8:235:13:0;:::17:1;:20::36:0;:8:::1;:38:244:5:0;237:24:237:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;239:25:239:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;240:25:240:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;241:25:241:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;242:25:242:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;243:25:243:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;235:38:244:5;246:12:246:17:0;:::21:1;247:8:247:13:0;:::17:1;:20::36:0;:8:::1;:38:256:5:0;249:24:249:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;251:25:251:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;252:25:252:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;253:25:253:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;254:25:254:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;255:25:255:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;247:38:256:5;258:12:258:17:0;:::21:1;259:8:259:13:0;:::17:1;:20::36:0;:8:::1;:38:268:5:0;261:24:261:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;263:25:263:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;264:25:264:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;265:25:265:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;266:25:266:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;267:25:267:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;259:38:268:5;270:12:270:17:0;:::21:1;271:8:271:13:0;:::17:1;:20::36:0;:8:::1;:38:280:5:0;273:24:273:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;275:25:275:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;276:25:276:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;277:25:277:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;278:25:278:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;279:25:279:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;271:38:280:5;282:12:282:17:0;:::21:1;283:8:283:13:0;:::17:1;:20::36:0;:8:::1;:38:292:5:0;285:24:285:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;287:25:287:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;288:25:288:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;289:25:289:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;290:25:290:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;291:25:291:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;283:38:292:5;294:12:294:17:0;:::21:1;295:8:295:13:0;:::17:1;:20::36:0;:8:::1;:38:304:5:0;297:24:297:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;299:25:299:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;300:25:300:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;301:25:301:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;302:25:302:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;303:25:303:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;295:38:304:5;306:12:306:17:0;:::21:1;307:8:307:13:0;:::17:1;:20::36:0;:8:::1;:38:316:5:0;309:24:309:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;311:25:311:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;312:25:312:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;313:25:313:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;314:25:314:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;315:25:315:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;307:38:316:5;318:12:318:17:0;:::21:1;319:8:319:13:0;:::17:1;:20::36:0;:8:::1;:38:328:5:0;321:24:321:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;323:25:323:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;324:25:324:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;325:25:325:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;326:25:326:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;327:25:327:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;319:38:328:5;330:12:330:17:0;:::21:1;331:8:331:13:0;:::17:1;:20::36:0;:8:::1;:38:340:5:0;333:24:333:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;335:25:335:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;336:25:336:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;337:25:337:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;338:25:338:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;339:25:339:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;331:38:340:5;26:2:342:3;;;;;;;;;;;;;;;;354::372::0;;;;355:12:355:33;:37::38;:4::72:1;356:12:356:28:0;:32::33;:4::74:1;357:12:357:29:0;:33::34;:4::76:1;359:23:359:24:0;:12::41:1;:45::63:0;;:4::135:1;360:23:360:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;361:23:361:24:0;:12::37:1;:51::52:0;:41::65:1;:4::104;362:23:362:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;363:23:363:24:0;:12::31:1;:45::46:0;:35::53:1;:4::92;366:22:366:23:0;:12::38:1;:52::53:0;:42::68:1;:75::77:0;:42::78:1;:::81;:4::152;367:22:367:23:0;:12::38:1;:::45;;:49::51:0;:4::97:1;368:22:368:23:0;:12::38:1;:42::54:0;:4::101:1;369:23:369:24:0;:12::41:1;:55::56:0;:45::73:1;:12;354:2:372:3;;;383::395::0;;;384:12:384:33;:37::38;:4::72:1;385:12:385:28:0;:32::33;:4::73:1;386:12:386:29:0;:33::34;:4::75:1;388:23:388:24:0;:12::41:1;:55::56:0;:45::73:1;:4::133;389:23:389:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;390:23:390:24:0;:12::37:1;:51::52:0;:41::65:1;:4::104;391:23:391:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;392:23:392:24:0;:12::31:1;:45::46:0;:35::53:1;:12;383:2:395:3;6:0:396:1;",
    logs: [
      {
        ip: 38,
        line: 40,
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
        line: 45,
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
        ip: 118,
        line: 59,
        data: [
          "investorShare",
          {
            stackIndex: 2,
            type: "int",
            ip: 118
          },
          "fundShare",
          {
            stackIndex: 1,
            type: "int",
            ip: 118
          },
          "issue",
          {
            type: "int",
            stackIndex: 1,
            ip: 84
          },
          "tokensBought",
          {
            stackIndex: 4,
            type: "int",
            ip: 118
          }
        ]
      },
      {
        ip: 178,
        line: 78,
        data: [
          {
            stackIndex: 0,
            type: "int",
            ip: 178
          },
          {
            stackIndex: 2,
            type: "int",
            ip: 178
          }
        ]
      },
      {
        ip: 203,
        line: 91,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 203
          }
        ]
      },
      {
        ip: 247,
        line: 104,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 247
          }
        ]
      },
      {
        ip: 291,
        line: 116,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 291
          }
        ]
      },
      {
        ip: 335,
        line: 128,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 335
          }
        ]
      },
      {
        ip: 379,
        line: 140,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 379
          }
        ]
      },
      {
        ip: 423,
        line: 152,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 423
          }
        ]
      },
      {
        ip: 467,
        line: 164,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 467
          }
        ]
      },
      {
        ip: 511,
        line: 176,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 511
          }
        ]
      },
      {
        ip: 555,
        line: 188,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 555
          }
        ]
      },
      {
        ip: 599,
        line: 200,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 599
          }
        ]
      },
      {
        ip: 643,
        line: 212,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 643
          }
        ]
      },
      {
        ip: 687,
        line: 224,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 687
          }
        ]
      },
      {
        ip: 731,
        line: 236,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 731
          }
        ]
      },
      {
        ip: 775,
        line: 248,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 775
          }
        ]
      },
      {
        ip: 819,
        line: 260,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 819
          }
        ]
      },
      {
        ip: 863,
        line: 272,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 863
          }
        ]
      },
      {
        ip: 907,
        line: 284,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 907
          }
        ]
      },
      {
        ip: 951,
        line: 296,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 951
          }
        ]
      },
      {
        ip: 995,
        line: 308,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 995
          }
        ]
      },
      {
        ip: 1039,
        line: 320,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 1039
          }
        ]
      },
      {
        ip: 1083,
        line: 332,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 1083
          }
        ]
      }
    ],
    requires: [
      {
        ip: 8,
        line: 28,
        message: "Issue transaction must have at least 4 inputs"
      },
      {
        ip: 12,
        line: 29,
        message: "Issue transaction must have at least 5 outputs"
      },
      {
        ip: 27,
        line: 33,
        message: "Current time is before last interaction time"
      },
      {
        ip: 120,
        line: 62,
        message: "Active input index must be 0 for issuance contract"
      },
      {
        ip: 127,
        line: 63,
        message: "Wrong amount of tokens emitted"
      },
      {
        ip: 132,
        line: 64,
        message: "Can not change token category"
      },
      {
        ip: 137,
        line: 65,
        message: "Can not change locking bytecode"
      },
      {
        ip: 144,
        line: 66,
        message: "NFT commitment must be updated with current time"
      },
      {
        ip: 152,
        line: 69,
        message: "Council fund share must have the same token category, no nft"
      },
      {
        ip: 155,
        line: 70,
        message: "Council fund share must match the calculated fund share"
      },
      {
        ip: 160,
        line: 71,
        message: "Council fund share must have the correct locking bytecode"
      },
      {
        ip: 164,
        line: 72,
        message: "Council fund share must have a value of 1000 satoshis"
      },
      {
        ip: 175,
        line: 76,
        message: "Investor's share must have the same token category, no nft"
      },
      {
        ip: 182,
        line: 79,
        message: "Investor's share must match the calculated share"
      },
      {
        ip: 187,
        line: 80,
        message: "Investor's share must have the correct locking bytecode"
      },
      {
        ip: 191,
        line: 81,
        message: "Investor's share must have a value of 1000 satoshis"
      },
      {
        ip: 211,
        line: 92,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 216,
        line: 94,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 221,
        line: 95,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 226,
        line: 96,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 232,
        line: 97,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 238,
        line: 98,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 255,
        line: 105,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 260,
        line: 107,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 265,
        line: 108,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 270,
        line: 109,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 276,
        line: 110,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 282,
        line: 111,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 299,
        line: 117,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 304,
        line: 119,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 309,
        line: 120,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 314,
        line: 121,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 320,
        line: 122,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 326,
        line: 123,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 343,
        line: 129,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 348,
        line: 131,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 353,
        line: 132,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 358,
        line: 133,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 364,
        line: 134,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 370,
        line: 135,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 387,
        line: 141,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 392,
        line: 143,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 397,
        line: 144,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 402,
        line: 145,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 408,
        line: 146,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 414,
        line: 147,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 431,
        line: 153,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 436,
        line: 155,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 441,
        line: 156,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 446,
        line: 157,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 452,
        line: 158,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 458,
        line: 159,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 475,
        line: 165,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 480,
        line: 167,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 485,
        line: 168,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 490,
        line: 169,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 496,
        line: 170,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 502,
        line: 171,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 519,
        line: 177,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 524,
        line: 179,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 529,
        line: 180,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 534,
        line: 181,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 540,
        line: 182,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 546,
        line: 183,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 563,
        line: 189,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 568,
        line: 191,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 573,
        line: 192,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 578,
        line: 193,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 584,
        line: 194,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 590,
        line: 195,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 607,
        line: 201,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 612,
        line: 203,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 617,
        line: 204,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 622,
        line: 205,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 628,
        line: 206,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 634,
        line: 207,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 651,
        line: 213,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 656,
        line: 215,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 661,
        line: 216,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 666,
        line: 217,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 672,
        line: 218,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 678,
        line: 219,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 695,
        line: 225,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 700,
        line: 227,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 705,
        line: 228,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 710,
        line: 229,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 716,
        line: 230,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 722,
        line: 231,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 739,
        line: 237,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 744,
        line: 239,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 749,
        line: 240,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 754,
        line: 241,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 760,
        line: 242,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 766,
        line: 243,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 783,
        line: 249,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 788,
        line: 251,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 793,
        line: 252,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 798,
        line: 253,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 804,
        line: 254,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 810,
        line: 255,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 827,
        line: 261,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 832,
        line: 263,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 837,
        line: 264,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 842,
        line: 265,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 848,
        line: 266,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 854,
        line: 267,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 871,
        line: 273,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 876,
        line: 275,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 881,
        line: 276,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 886,
        line: 277,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 892,
        line: 278,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 898,
        line: 279,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 915,
        line: 285,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 920,
        line: 287,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 925,
        line: 288,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 930,
        line: 289,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 936,
        line: 290,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 942,
        line: 291,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 959,
        line: 297,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 964,
        line: 299,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 969,
        line: 300,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 974,
        line: 301,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 980,
        line: 302,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 986,
        line: 303,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 1003,
        line: 309,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 1008,
        line: 311,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 1013,
        line: 312,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 1018,
        line: 313,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 1024,
        line: 314,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 1030,
        line: 315,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 1047,
        line: 321,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 1052,
        line: 323,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 1057,
        line: 324,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 1062,
        line: 325,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 1068,
        line: 326,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 1074,
        line: 327,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 1091,
        line: 333,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 1096,
        line: 335,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 1101,
        line: 336,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 1106,
        line: 337,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 1112,
        line: 338,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 1118,
        line: 339,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 1142,
        line: 355,
        message: "Active input index must be 0"
      },
      {
        ip: 1145,
        line: 356,
        message: "Migration requires exactly 3 inputs"
      },
      {
        ip: 1148,
        line: 357,
        message: "Migration requires exactly 3 outputs"
      },
      {
        ip: 1153,
        line: 359,
        message: "New locking bytecode must be provided for the issuance fund output"
      },
      {
        ip: 1158,
        line: 360,
        message: "Token category must remain the same"
      },
      {
        ip: 1163,
        line: 361,
        message: "Token amount must remain the same"
      },
      {
        ip: 1168,
        line: 362,
        message: "NFT commitment must remain the same"
      },
      {
        ip: 1173,
        line: 363,
        message: "Output value must remain the same"
      },
      {
        ip: 1181,
        line: 366,
        message: "Second input must have the same token category as the first input"
      },
      {
        ip: 1187,
        line: 367,
        message: "Second input must have 'none' capability"
      },
      {
        ip: 1191,
        line: 368,
        message: "Second input must have 'admin' commitment"
      },
      {
        ip: 1197,
        line: 369,
        message: "Locking bytecode must remain the same for second output"
      },
      {
        ip: 1205,
        line: 384,
        message: "Active input index must be 0"
      },
      {
        ip: 1208,
        line: 385,
        message: "Dissolve requires exactly 3 inputs"
      },
      {
        ip: 1211,
        line: 386,
        message: "Dissolve requires exactly 2 outputs"
      },
      {
        ip: 1216,
        line: 388,
        message: "Locking bytecode must be the same as admin p2pkh input"
      },
      {
        ip: 1221,
        line: 389,
        message: "Token category must remain the same"
      },
      {
        ip: 1226,
        line: 390,
        message: "Token amount must remain the same"
      },
      {
        ip: 1231,
        line: 391,
        message: "NFT commitment must remain the same"
      },
      {
        ip: 1237,
        line: 392,
        message: "Output value must remain the same"
      }
    ]
  },
  compiler: {
    name: "cashc",
    version: "0.11.0-next.4"
  },
  updatedAt: "2025-06-11T18:31:40.455Z"
} as const;