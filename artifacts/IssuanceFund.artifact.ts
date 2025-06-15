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
    },
    {
      name: "donate",
      inputs: []
    }
  ],
  bytecode: "OP_OVER OP_0 OP_NUMEQUAL OP_IF OP_TXINPUTCOUNT OP_4 OP_GREATERTHANOREQUAL OP_VERIFY OP_TXOUTPUTCOUNT OP_5 OP_GREATERTHANOREQUAL OP_VERIFY OP_INPUTINDEX OP_UTXOTOKENCOMMITMENT OP_4 OP_SPLIT OP_DROP OP_BIN2NUM OP_INPUTINDEX OP_UTXOTOKENCOMMITMENT OP_4 OP_SPLIT OP_NIP OP_BIN2NUM OP_TXLOCKTIME OP_LESSTHAN OP_VERIFY OP_TXINPUTCOUNT OP_1SUB OP_OUTPUTTOKENAMOUNT 388e7792702803 OP_DUP OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_SUB 00ca9a3b OP_TXLOCKTIME OP_5 OP_PICK OP_SUB OP_3 OP_2 OP_PICK OP_SWAP OP_ROT OP_MUL OP_ADD OP_DUP OP_MUL OP_OVER OP_DIV OP_3 OP_ROLL OP_2 OP_PICK OP_3 OP_PICK OP_4 OP_PICK OP_MUL OP_3 OP_ROLL OP_DIV OP_SUB OP_MUL OP_SWAP OP_DIV 64 OP_TXINPUTCOUNT OP_1SUB OP_OUTPUTTOKENAMOUNT OP_MUL 5f OP_DIV OP_9 OP_MUL OP_10 OP_DIV OP_SWAP OP_ROT OP_SUB OP_LESSTHANOREQUAL OP_VERIFY OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_OVER OP_SUB OP_OVER OP_SUB OP_INPUTINDEX OP_OUTPUTTOKENAMOUNT OP_INPUTINDEX OP_OUTPUTTOKENAMOUNT OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_4 OP_PICK OP_SUB OP_4 OP_PICK OP_SUB OP_NUMEQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_INPUTINDEX OP_OUTPUTBYTECODE OP_INPUTINDEX OP_UTXOBYTECODE OP_EQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENCOMMITMENT OP_4 OP_ROLL OP_TXLOCKTIME OP_CAT OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY 20 OP_SPLIT OP_DROP OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENAMOUNT OP_3 OP_PICK OP_NUMEQUALVERIFY OP_1 OP_OUTPUTBYTECODE OP_4 OP_ROLL OP_EQUALVERIFY OP_1 OP_OUTPUTVALUE e803 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_2 OP_SUB OP_DUP OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY 20 OP_SPLIT OP_DROP OP_2 OP_PICK OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY 20 OP_SPLIT OP_DROP OP_EQUALVERIFY OP_2 OP_PICK OP_OUTPUTTOKENAMOUNT OP_6 OP_ROLL OP_NUMEQUALVERIFY OP_2 OP_PICK OP_OUTPUTBYTECODE OP_1 OP_UTXOBYTECODE OP_EQUALVERIFY OP_ROT OP_OUTPUTVALUE e803 OP_NUMEQUALVERIFY 88ac67c0d1c0ce88c25288c0cdc0c788c0c6c0d095c0c6c0cc9490539502e80396c0cc7c94c0d3957ca268 1a OP_INPUTINDEX OP_1ADD OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_3 OP_PICK OP_SPLIT OP_NIP OP_OVER OP_INPUTBYTECODE OP_4 OP_PICK OP_SPLIT OP_NIP OP_5 OP_PICK OP_EQUALVERIFY OP_OVER OP_OUTPUTTOKENCATEGORY OP_2 OP_PICK OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_OVER OP_OUTPUTTOKENCOMMITMENT OP_2 OP_PICK OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_OVER OP_OUTPUTBYTECODE OP_2 OP_PICK OP_UTXOBYTECODE OP_EQUALVERIFY OP_OVER OP_OUTPUTTOKENAMOUNT OP_2 OP_PICK OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_OVER OP_OUTPUTVALUE OP_2 OP_PICK OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_DROP OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_4 OP_PICK OP_SPLIT OP_NIP OP_5 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_5 OP_PICK OP_SPLIT OP_NIP OP_6 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_6 OP_PICK OP_SPLIT OP_NIP OP_7 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_7 OP_PICK OP_SPLIT OP_NIP OP_8 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_8 OP_PICK OP_SPLIT OP_NIP OP_9 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_9 OP_PICK OP_SPLIT OP_NIP OP_10 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_10 OP_PICK OP_SPLIT OP_NIP OP_11 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_11 OP_PICK OP_SPLIT OP_NIP OP_12 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_12 OP_PICK OP_SPLIT OP_NIP OP_13 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_13 OP_PICK OP_SPLIT OP_NIP OP_14 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_14 OP_PICK OP_SPLIT OP_NIP OP_15 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_15 OP_PICK OP_SPLIT OP_NIP OP_16 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_16 OP_PICK OP_SPLIT OP_NIP 11 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 11 OP_PICK OP_SPLIT OP_NIP 12 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 12 OP_PICK OP_SPLIT OP_NIP 13 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 13 OP_PICK OP_SPLIT OP_NIP 14 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 14 OP_PICK OP_SPLIT OP_NIP 15 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 15 OP_PICK OP_SPLIT OP_NIP 16 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 16 OP_PICK OP_SPLIT OP_NIP 17 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 17 OP_PICK OP_SPLIT OP_NIP 18 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_DROP OP_1 OP_ELSE OP_OVER OP_1 OP_NUMEQUAL OP_IF OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_0 OP_OUTPUTBYTECODE OP_3 OP_ROLL OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_1 OP_UTXOTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY 20 OP_SPLIT OP_DROP OP_EQUALVERIFY OP_1 OP_UTXOTOKENCATEGORY OP_SIZE OP_NIP 20 OP_NUMEQUALVERIFY OP_1 OP_UTXOTOKENCOMMITMENT 61646d696e OP_EQUALVERIFY OP_1 OP_OUTPUTBYTECODE OP_1 OP_UTXOBYTECODE OP_EQUAL OP_NIP OP_NIP OP_ELSE OP_OVER OP_2 OP_NUMEQUAL OP_IF OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_2 OP_NUMEQUALVERIFY OP_0 OP_OUTPUTBYTECODE OP_1 OP_UTXOBYTECODE OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUAL OP_NIP OP_NIP OP_ELSE OP_SWAP OP_3 OP_NUMEQUALVERIFY OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_1 OP_GREATERTHAN OP_VERIFY OP_TXOUTPUTCOUNT OP_4 OP_LESSTHAN OP_VERIFY OP_0 OP_OUTPUTBYTECODE OP_0 OP_UTXOBYTECODE OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_GREATERTHAN OP_VERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUAL OP_NIP OP_ENDIF OP_ENDIF OP_ENDIF",
  source: "// Olando Community Issuance Fund Contract\n// Each time an investor buys tokens from the cauldron pool, the contract emits extra tokens to the council.\n// The contract is deployed with a fixed supply of 8,888,888,888.88 tokens.\n// The contract emits tokens based on the time since deployment and the amount of tokens bought so far.\n// The contract can be migrated to a new issuance or dissolved to release tokens to the admin.\ncontract IssuanceFund(bytes councilFundLockingBytecode) {\n\n  // invest into Olando ecosystem by buying tokens from the cauldron pool\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input, NFT commitment: 4bytes deployment time + 4bytes last interaction time\n  //   1: investors BCH input to balance the council's OLA share payout\n  //   2..N: cauldron pool inputs\n  //   N+1: investment BCH, no tokens\n  //  outputs:\n  //   0: issuance fund output, NFT commitment: 4bytes deployment time + 4bytes new interaction time (tx.locktime)\n  //   1: council OLA share output, see notes for amounts\n  //   2..N: cauldron pool outputs, same properties as inputs but with reduced token amount\n  //   N+1: investors OLA share output, see notes for amounts\n  //   N+2: BCH change output\n  //\n  // Notes: if the issuance cap is not hit at the time of interaction, then ola bought from cauldron by investor\n  // are augmented with 90% of the tokens bought, the OLA amounts are added together and split in half.\n  // If the issuance cap is hit the contract execution fails, suggesting the investor to buy less tokens.\n  function issue() {\n    // first rough check for presence of a cauldron trade\n    require(tx.inputs.length >= 4, \"Issue transaction must have at least 4 inputs\");\n    require(tx.outputs.length >= 5, \"Issue transaction must have at least 5 outputs\");\n\n    int deploymentTime = int(tx.inputs[this.activeInputIndex].nftCommitment.split(4)[0]);\n    int lastInteractionTime = int(tx.inputs[this.activeInputIndex].nftCommitment.split(4)[1]);\n    require(tx.locktime > lastInteractionTime, \"Current time is before last interaction time\");\n\n    int cauldronTradeAdjustedTokenAmount = tx.outputs[tx.inputs.length - 1].tokenAmount; // 95% of the cauldron pool token-buy output\n\n    int intialSupply = 8888888888888_88; // with 2 decimals\n    int issued = intialSupply - tx.inputs[this.activeInputIndex].tokenAmount;\n\n    int SCALE = 1_000_000_000; // 1e9 for scaling\n    int t = tx.locktime - deploymentTime; // time in seconds since deploymentTime\n    console.log(t, \"time since start\");\n    int k = 3; // 3E-9 scaled by 1e9\n    int denom = SCALE + k * t; // (1 + 3E-9 * t) * 1e9\n    int denomSquared = denom * denom / SCALE; // (1 + 3E-9 * t)^2 * 1e9\n    int currentEmissionCap = intialSupply * (SCALE - SCALE * SCALE / denomSquared) / SCALE;\n    console.log(currentEmissionCap, \"current emission cap\");\n\n    // use inputs.length to find the cauldron token-buy output, since last ouput could be a bch change\n    // here we already assume that the cauldron pool output got only 95% of the tokens bought, the other 5% are forwarded to council fund\n    int tokensBought = 100 * tx.outputs[tx.inputs.length - 1].tokenAmount / 95;\n    int issue = tokensBought * 9 / 10; // 90% of tokens bought\n    console.log(\"tokensBought\", tokensBought, \"issue\", issue);\n    require(issue <= currentEmissionCap - issued, \"Issue amount exceeds current emission cap\");\n    // int issueShare = (tokensBought + issue) / 2;\n\n    // console.log(\"investorShare\", issueShare, \"fundShare\", issueShare, \"issue\", issue, \"tokensBought\", tokensBought);\n\n    // constrain the input 0 and output 0 to be the issuance fund\n    require(this.activeInputIndex == 0, \"Active input index must be 0 for issuance contract\");\n    int expected = tx.inputs[this.activeInputIndex].tokenAmount - cauldronTradeAdjustedTokenAmount - cauldronTradeAdjustedTokenAmount;\n    int actual = tx.outputs[this.activeInputIndex].tokenAmount;\n    console.log(expected, actual);\n    require(tx.outputs[this.activeInputIndex].tokenAmount == (tx.inputs[this.activeInputIndex].tokenAmount - cauldronTradeAdjustedTokenAmount - cauldronTradeAdjustedTokenAmount), \"Wrong amount of tokens issued\");\n    require(tx.outputs[this.activeInputIndex].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory, \"Can not change token category\");\n    require(tx.outputs[this.activeInputIndex].lockingBytecode == tx.inputs[this.activeInputIndex].lockingBytecode, \"Can not change locking bytecode\");\n    require(tx.outputs[this.activeInputIndex].nftCommitment == bytes(deploymentTime) + bytes(tx.locktime), \"NFT commitment must be updated with current time\");\n\n    // constrain the output 1 to be the council fund share\n    require(tx.outputs[1].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory.split(32)[0], \"Council fund share must have the same token category, no nft\");\n    require(tx.outputs[1].tokenAmount == cauldronTradeAdjustedTokenAmount, \"Council fund share must match the calculated fund share\");\n    require(tx.outputs[1].lockingBytecode == councilFundLockingBytecode, \"Council fund share must have the correct locking bytecode\");\n    require(tx.outputs[1].value == 1000, \"Council fund share must have a value of 1000 satoshis\");\n\n    // constrain the output N+1 to be the investor's share\n    int investorShareIndex = tx.outputs.length - 2;\n    bytes actualCategory = tx.outputs[investorShareIndex].tokenCategory;\n    bytes expectedCategory = tx.inputs[this.activeInputIndex].tokenCategory.split(32)[0];\n    console.log(\"Investor share category\", actualCategory, \"expected\", expectedCategory, investorShareIndex);\n    require(tx.outputs[investorShareIndex].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory.split(32)[0], \"Investor's share must have the same token category, no nft\");\n    require(tx.outputs[investorShareIndex].tokenAmount == cauldronTradeAdjustedTokenAmount, \"Investor's share must match the calculated share\");\n    require(tx.outputs[investorShareIndex].lockingBytecode == tx.inputs[1].lockingBytecode, \"Investor's share must have the correct locking bytecode\");\n    require(tx.outputs[investorShareIndex].value == 1000, \"Investor's share must have a value of 1000 satoshis\");\n\n\n    // constrain the cauldron inputs and outputs 2..N\n    bytes cauldronPoolContractSignature = 0x88ac67c0d1c0ce88c25288c0cdc0c788c0c6c0d095c0c6c0cc9490539502e80396c0cc7c94c0d3957ca268; // signature of cauldron pool contract\n    int cauldronPoolContractSignatureSplit = 26;\n\n    int index = this.activeInputIndex + 1; // 0\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      bytes bytecode = tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1];\n      console.log(index, cauldronPoolContractSignatureSplit, bytecode, cauldronPoolContractSignature, \"cauldron pool contract signature split\");\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n// #region 20 more cauldron pool input-output checks\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n// #endregion\n  }\n\n  // migrate contract to a new issuance fund contract\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input\n  //   1: admin NFT input\n  //   2: funding input\n  //  outputs:\n  //   0: issuance fund output. all same properties but new locking bytecode\n  //   1: admin NFT output, same as input\n  //   2: bch change output\n  function migrate(bytes newLockingBytecode) {\n    require(this.activeInputIndex == 0, \"Active input index must be 0\");\n    require(tx.inputs.length == 3, \"Migration requires exactly 3 inputs\");\n    require(tx.outputs.length == 3, \"Migration requires exactly 3 outputs\");\n\n    require(tx.outputs[0].lockingBytecode == newLockingBytecode, \"New locking bytecode must be provided for the issuance fund output\");\n    require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[0].tokenAmount == tx.inputs[0].tokenAmount, \"Token amount must remain the same\");\n    require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n    // preserve admin NFT: same category\n    require(tx.inputs[1].tokenCategory == tx.inputs[0].tokenCategory.split(32)[0], \"Second input must have the same token category as the first input\");\n    require(tx.inputs[1].tokenCategory.length == 32, \"Second input must have 'none' capability\");\n    require(tx.inputs[1].nftCommitment == 0x61646D696E, \"Second input must have 'admin' commitment\");\n    require(tx.outputs[1].lockingBytecode == tx.inputs[1].lockingBytecode, \"Locking bytecode must remain the same for second output\");\n\n    // bch change output is not burdened with any requirements\n  }\n\n  // dissolve contract and release tokens to admin\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input\n  //   1: admin NFT input\n  //   2: funding input\n  //  outputs:\n  //   0: same properties as input 0 paid to admin p2pkh\n  //   1: bch change output\n  function dissolve() {\n    require(this.activeInputIndex == 0, \"Active input index must be 0\");\n    require(tx.inputs.length == 3, \"Dissolve requires exactly 3 inputs\");\n    require(tx.outputs.length == 2, \"Dissolve requires exactly 2 outputs\");\n\n    require(tx.outputs[0].lockingBytecode == tx.inputs[1].lockingBytecode, \"Locking bytecode must be the same as admin p2pkh input\");\n    require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[0].tokenAmount == tx.inputs[0].tokenAmount, \"Token amount must remain the same\");\n    require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n    // bch change output is not burdened with any requirements\n  }\n\n  // donate to the issuance fund\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input\n  //   1: donation token input, strictly FT\n  //   2: funding input\n  //  outputs:\n  //   0: issuance fund output, no changes\n  //   [1]: token change if any\n  //   [2]: bch change if any\n  function donate() {\n    require(this.activeInputIndex == 0, \"Active input index must be 0\");\n    require(tx.inputs.length == 3, \"Donation requires exactly 3 inputs\");\n    require(tx.outputs.length > 1, \"Donation requires more than 1 output\");\n    require(tx.outputs.length < 4, \"Donation requires less than 4 outputs\");\n\n    require(tx.outputs[0].lockingBytecode == tx.inputs[0].lockingBytecode, \"Locking bytecode must remain the same\");\n    require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[0].tokenAmount > tx.inputs[0].tokenAmount, \"Token amount must increase\");\n    require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n    // token and bch change outputs is not burdened with any requirements\n  }\n}\n",
  debug: {
    bytecode: "78009c63c354a269c455a269c0cf547f7581c0cf547f7781c59f69c38cd307388e779270280376c0d0940400ca9a3bc55579945352797c7b959376957896537a52795379547995537a9694957c960164c38cd395015f9659955a967c7b94a169c0009dc0d078947894c0d3c0d3c0d05479945479949dc0d1c0ce88c0cdc0c788c0d2547ac57e8851d1c0ce01207f758851d353799d51cd547a8851cc02e8039dc4529476d1c0ce01207f755279d1c0ce01207f75885279d3567a9d5279cd51c7887bcc02e8039d2b88ac67c0d1c0ce88c25288c0cdc0c788c0c6c0d095c0c6c0cc9490539502e80396c0cc7c94c0d3957ca268011ac08b768b768bc39f6376ca53797f7778ca54797f7755798878d15279ce8878d25279cf8878cd5279c78878d35279d09f6978cc5279c6a0697568768b768bc39f6376ca54797f7755798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca55797f7756798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca56797f7757798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca57797f7758798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca58797f7759798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca59797f775a798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca5a797f775b798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca5b797f775c798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca5c797f775d798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca5d797f775e798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca5e797f775f798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca5f797f7760798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca60797f770111798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca0111797f770112798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca0112797f770113798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca0113797f770114798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca0114797f770115798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca0115797f770116798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca0116797f770117798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a06968768b768bc39f6376ca0117797f770118798876d178ce8876d278cf8876cd78c78876d378d09f6976cc78c6a069686d6d6d6d6d6d6d6d6d6d6d6d6d6d75516778519c63c0009dc3539dc4539d00cd537a8800d100ce8800d300d09d00d200cf8800cc00c69d51ce00ce01207f758851ce827701209d51cf0561646d696e8851cd51c78777776778529c63c0009dc3539dc4529d00cd51c78800d100ce8800d300d09d00d200cf8800cc00c69c7777677c539dc0009dc3539dc451a069c4549f6900cd00c78800d100ce8800d300d0a06900d200cf8800cc00c69c77686868",
    sourceMap: "25:2:345:3;;;;27:12:27:28;:32::33;:12:::1;:4::84;28:12:28:29:0;:33::34;:12:::1;:4::86;30:39:30:60:0;:29::75:1;:82::83:0;:29::84:1;:::87;:25::88;31:44:31:65:0;:34::80:1;:87::88:0;:34::89:1;:::92;:30::93;32:12:32:23:0;:::45:1;:4::95;34:54:34:70:0;:::74:1;:43::87;36:23:36:39:0;37:17:37:29;:42::63;:32::76:1;:17;39:16:39:29:0;40:12:40:23;:26::40;;:12:::1;42::42:13:0;43:16:43:21;;:24::25;:28::29;:24:::1;:16;44:23:44:36:0;::::1;:39::44:0;:23:::1;45:29:45:41:0;;:45::50;;:53::58;;:61::66;;:53:::1;:69::81:0;;:53:::1;:45;:29::82;:85::90:0;:29:::1;50:23:50:26:0;:40::56;:::60:1;:29::73;:23;:76::78:0;:23:::1;51:31:51:32:0;:16:::1;:35::37:0;:16:::1;53:21:53:39:0;:42::48;:21:::1;:12;:4::95;59:12:59:33:0;:37::38;:4::94:1;60:29:60:50:0;:19::63:1;:66::98:0;:19:::1;:101::133:0;:19:::1;61:28:61:49:0;:17::62:1;63:23:63:44:0;:12::57:1;:72::93:0;:62::106:1;:109::141:0;;:62:::1;:144::176:0;;:62:::1;:4::212;64:23:64:44:0;:12::59:1;:73::94:0;:63::109:1;:4::144;65:23:65:44:0;:12::61:1;:75::96:0;:65::113:1;:4::150;66:23:66:44:0;:12::59:1;:69::83:0;;:93::104;:63::105:1;:4::159;69:23:69:24:0;:12::39:1;:53::74:0;:43::89:1;:96::98:0;:43::99:1;:::102;:4::168;70:23:70:24:0;:12::37:1;:41::73:0;;:4::134:1;71:23:71:24:0;:12::41:1;:45::71:0;;:4::134:1;72:23:72:24:0;:12::31:1;:35::39:0;:4::98:1;75:29:75:46:0;:49::50;:29:::1;76:38:76:56:0;:27::71:1;77:39:77:60:0;:29::75:1;:82::84:0;:29::85:1;:::88;79:23:79:41:0;;:12::56:1;:70::91:0;:60::106:1;:113::115:0;:60::116:1;:::119;:4::183;80:23:80:41:0;;:12::54:1;:58::90:0;;:4::144:1;81:23:81:41:0;;:12::58:1;:72::73:0;:62::90:1;:4::151;82:23:82:41:0;:12::48:1;:52::56:0;:4::113:1;86:42:86:130:0;87:45:87:47;89:16:89:37;:::41:1;90:12:90:17:0;:::21:1;91:8:91:13:0;:::17:1;:20::36:0;:8:::1;:38:102:5:0;93:33:93:38;:23::57:1;:64::98:0;;:23::99:1;:::102;95:24:95:29:0;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;97:25:97:30:0;:14::45:1;:59::64:0;;:49::79:1;:6::134;98:25:98:30:0;:14::45:1;:59::64:0;;:49::79:1;:6::136;99:25:99:30:0;:14::47:1;:61::66:0;;:51::83:1;:6::146;100:25:100:30:0;:14::43:1;:56::61:0;;:46::74:1;:14;:6::137;101:25:101:30:0;:14::37:1;:50::55:0;;:40::62:1;:14;:6::135;91:38:102:5;;105:12:105:17:0;:::21:1;106:8:106:13:0;:::17:1;:20::36:0;:8:::1;:38:115:5:0;108:24:108:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;110:25:110:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;111:25:111:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;112:25:112:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;113:25:113:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;114:25:114:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;106:38:115:5;117:12:117:17:0;:::21:1;118:8:118:13:0;:::17:1;:20::36:0;:8:::1;:38:127:5:0;120:24:120:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;122:25:122:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;123:25:123:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;124:25:124:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;125:25:125:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;126:25:126:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;118:38:127:5;129:12:129:17:0;:::21:1;130:8:130:13:0;:::17:1;:20::36:0;:8:::1;:38:139:5:0;132:24:132:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;134:25:134:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;135:25:135:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;136:25:136:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;137:25:137:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;138:25:138:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;130:38:139:5;141:12:141:17:0;:::21:1;142:8:142:13:0;:::17:1;:20::36:0;:8:::1;:38:151:5:0;144:24:144:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;146:25:146:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;147:25:147:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;148:25:148:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;149:25:149:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;150:25:150:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;142:38:151:5;153:12:153:17:0;:::21:1;154:8:154:13:0;:::17:1;:20::36:0;:8:::1;:38:163:5:0;156:24:156:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;158:25:158:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;159:25:159:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;160:25:160:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;161:25:161:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;162:25:162:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;154:38:163:5;165:12:165:17:0;:::21:1;166:8:166:13:0;:::17:1;:20::36:0;:8:::1;:38:175:5:0;168:24:168:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;170:25:170:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;171:25:171:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;172:25:172:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;173:25:173:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;174:25:174:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;166:38:175:5;177:12:177:17:0;:::21:1;178:8:178:13:0;:::17:1;:20::36:0;:8:::1;:38:187:5:0;180:24:180:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;182:25:182:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;183:25:183:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;184:25:184:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;185:25:185:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;186:25:186:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;178:38:187:5;189:12:189:17:0;:::21:1;190:8:190:13:0;:::17:1;:20::36:0;:8:::1;:38:199:5:0;192:24:192:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;194:25:194:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;195:25:195:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;196:25:196:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;197:25:197:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;198:25:198:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;190:38:199:5;201:12:201:17:0;:::21:1;202:8:202:13:0;:::17:1;:20::36:0;:8:::1;:38:211:5:0;204:24:204:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;206:25:206:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;207:25:207:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;208:25:208:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;209:25:209:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;210:25:210:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;202:38:211:5;213:12:213:17:0;:::21:1;214:8:214:13:0;:::17:1;:20::36:0;:8:::1;:38:223:5:0;216:24:216:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;218:25:218:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;219:25:219:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;220:25:220:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;221:25:221:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;222:25:222:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;214:38:223:5;225:12:225:17:0;:::21:1;226:8:226:13:0;:::17:1;:20::36:0;:8:::1;:38:235:5:0;228:24:228:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;230:25:230:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;231:25:231:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;232:25:232:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;233:25:233:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;234:25:234:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;226:38:235:5;237:12:237:17:0;:::21:1;238:8:238:13:0;:::17:1;:20::36:0;:8:::1;:38:247:5:0;240:24:240:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;242:25:242:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;243:25:243:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;244:25:244:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;245:25:245:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;246:25:246:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;238:38:247:5;249:12:249:17:0;:::21:1;250:8:250:13:0;:::17:1;:20::36:0;:8:::1;:38:259:5:0;252:24:252:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;254:25:254:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;255:25:255:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;256:25:256:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;257:25:257:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;258:25:258:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;250:38:259:5;261:12:261:17:0;:::21:1;262:8:262:13:0;:::17:1;:20::36:0;:8:::1;:38:271:5:0;264:24:264:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;266:25:266:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;267:25:267:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;268:25:268:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;269:25:269:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;270:25:270:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;262:38:271:5;273:12:273:17:0;:::21:1;274:8:274:13:0;:::17:1;:20::36:0;:8:::1;:38:283:5:0;276:24:276:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;278:25:278:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;279:25:279:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;280:25:280:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;281:25:281:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;282:25:282:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;274:38:283:5;285:12:285:17:0;:::21:1;286:8:286:13:0;:::17:1;:20::36:0;:8:::1;:38:295:5:0;288:24:288:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;290:25:290:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;291:25:291:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;292:25:292:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;293:25:293:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;294:25:294:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;286:38:295:5;297:12:297:17:0;:::21:1;298:8:298:13:0;:::17:1;:20::36:0;:8:::1;:38:307:5:0;300:24:300:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;302:25:302:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;303:25:303:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;304:25:304:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;305:25:305:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;306:25:306:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;298:38:307:5;309:12:309:17:0;:::21:1;310:8:310:13:0;:::17:1;:20::36:0;:8:::1;:38:319:5:0;312:24:312:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;314:25:314:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;315:25:315:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;316:25:316:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;317:25:317:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;318:25:318:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;310:38:319:5;321:12:321:17:0;:::21:1;322:8:322:13:0;:::17:1;:20::36:0;:8:::1;:38:331:5:0;324:24:324:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;326:25:326:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;327:25:327:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;328:25:328:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;329:25:329:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;330:25:330:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;322:38:331:5;333:12:333:17:0;:::21:1;334:8:334:13:0;:::17:1;:20::36:0;:8:::1;:38:343:5:0;336:24:336:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;338:25:338:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;339:25:339:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;340:25:340:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;341:25:341:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;342:25:342:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;334:38:343:5;25:2:345:3;;;;;;;;;;;;;;;;;357::375::0;;;;358:12:358:33;:37::38;:4::72:1;359:12:359:28:0;:32::33;:4::74:1;360:12:360:29:0;:33::34;:4::76:1;362:23:362:24:0;:12::41:1;:45::63:0;;:4::135:1;363:23:363:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;364:23:364:24:0;:12::37:1;:51::52:0;:41::65:1;:4::104;365:23:365:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;366:23:366:24:0;:12::31:1;:45::46:0;:35::53:1;:4::92;369:22:369:23:0;:12::38:1;:52::53:0;:42::68:1;:75::77:0;:42::78:1;:::81;:4::152;370:22:370:23:0;:12::38:1;:::45;;:49::51:0;:4::97:1;371:22:371:23:0;:12::38:1;:42::54:0;:4::101:1;372:23:372:24:0;:12::41:1;:55::56:0;:45::73:1;:12;357:2:375:3;;;386::398::0;;;;387:12:387:33;:37::38;:4::72:1;388:12:388:28:0;:32::33;:4::73:1;389:12:389:29:0;:33::34;:4::75:1;391:23:391:24:0;:12::41:1;:55::56:0;:45::73:1;:4::133;392:23:392:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;393:23:393:24:0;:12::37:1;:51::52:0;:41::65:1;:4::104;394:23:394:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;395:23:395:24:0;:12::31:1;:45::46:0;:35::53:1;:12;386:2:398:3;;;410::423::0;;;411:12:411:33;:37::38;:4::72:1;412:12:412:28:0;:32::33;:4::73:1;413:12:413:29:0;:32::33;:12:::1;:4::75;414:12:414:29:0;:32::33;:12:::1;:4::76;416:23:416:24:0;:12::41:1;:55::56:0;:45::73:1;:4::116;417:23:417:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;418:23:418:24:0;:12::37:1;:50::51:0;:40::64:1;:12;:4::96;419:23:419:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;420:23:420:24:0;:12::31:1;:45::46:0;:35::53:1;:12;410:2:423:3;6:0:424:1;;",
    logs: [
      {
        ip: 41,
        line: 41,
        data: [
          {
            stackIndex: 0,
            type: "int",
            ip: 41
          },
          "time since start"
        ]
      },
      {
        ip: 68,
        line: 46,
        data: [
          {
            stackIndex: 0,
            type: "int",
            ip: 68
          },
          "current emission cap"
        ]
      },
      {
        ip: 79,
        line: 52,
        data: [
          "tokensBought",
          {
            type: "int",
            stackIndex: 0,
            ip: 75
          },
          "issue",
          {
            stackIndex: 0,
            type: "int",
            ip: 79
          }
        ]
      },
      {
        ip: 95,
        line: 62,
        data: [
          {
            stackIndex: 1,
            type: "int",
            ip: 95
          },
          {
            stackIndex: 0,
            type: "int",
            ip: 95
          }
        ]
      },
      {
        ip: 155,
        line: 78,
        data: [
          "Investor share category",
          {
            stackIndex: 1,
            type: "bytes",
            ip: 155
          },
          "expected",
          {
            stackIndex: 0,
            type: "bytes",
            ip: 155
          },
          {
            stackIndex: 2,
            type: "int",
            ip: 155
          }
        ]
      },
      {
        ip: 191,
        line: 92,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 191
          }
        ]
      },
      {
        ip: 197,
        line: 94,
        data: [
          {
            stackIndex: 1,
            type: "int",
            ip: 197
          },
          {
            stackIndex: 3,
            type: "int",
            ip: 197
          },
          {
            stackIndex: 0,
            type: "bytes",
            ip: 197
          },
          {
            stackIndex: 4,
            type: "bytes",
            ip: 197
          },
          "cauldron pool contract signature split"
        ]
      },
      {
        ip: 247,
        line: 107,
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
        line: 119,
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
        line: 131,
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
        line: 143,
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
        line: 155,
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
        line: 167,
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
        line: 179,
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
        line: 191,
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
        line: 203,
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
        line: 215,
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
        line: 227,
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
        line: 239,
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
        line: 251,
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
        line: 263,
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
        line: 275,
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
        line: 287,
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
        line: 299,
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
        line: 311,
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
        line: 323,
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
        line: 335,
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
        ip: 83,
        line: 53,
        message: "Issue amount exceeds current emission cap"
      },
      {
        ip: 86,
        line: 59,
        message: "Active input index must be 0 for issuance contract"
      },
      {
        ip: 105,
        line: 63,
        message: "Wrong amount of tokens issued"
      },
      {
        ip: 110,
        line: 64,
        message: "Can not change token category"
      },
      {
        ip: 115,
        line: 65,
        message: "Can not change locking bytecode"
      },
      {
        ip: 122,
        line: 66,
        message: "NFT commitment must be updated with current time"
      },
      {
        ip: 130,
        line: 69,
        message: "Council fund share must have the same token category, no nft"
      },
      {
        ip: 135,
        line: 70,
        message: "Council fund share must match the calculated fund share"
      },
      {
        ip: 140,
        line: 71,
        message: "Council fund share must have the correct locking bytecode"
      },
      {
        ip: 144,
        line: 72,
        message: "Council fund share must have a value of 1000 satoshis"
      },
      {
        ip: 163,
        line: 79,
        message: "Investor's share must have the same token category, no nft"
      },
      {
        ip: 169,
        line: 80,
        message: "Investor's share must match the calculated share"
      },
      {
        ip: 175,
        line: 81,
        message: "Investor's share must have the correct locking bytecode"
      },
      {
        ip: 179,
        line: 82,
        message: "Investor's share must have a value of 1000 satoshis"
      },
      {
        ip: 205,
        line: 95,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 211,
        line: 97,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 217,
        line: 98,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 223,
        line: 99,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 230,
        line: 100,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 237,
        line: 101,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 255,
        line: 108,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 260,
        line: 110,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 265,
        line: 111,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 270,
        line: 112,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 276,
        line: 113,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 282,
        line: 114,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 299,
        line: 120,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 304,
        line: 122,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 309,
        line: 123,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 314,
        line: 124,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 320,
        line: 125,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 326,
        line: 126,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 343,
        line: 132,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 348,
        line: 134,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 353,
        line: 135,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 358,
        line: 136,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 364,
        line: 137,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 370,
        line: 138,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 387,
        line: 144,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 392,
        line: 146,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 397,
        line: 147,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 402,
        line: 148,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 408,
        line: 149,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 414,
        line: 150,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 431,
        line: 156,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 436,
        line: 158,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 441,
        line: 159,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 446,
        line: 160,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 452,
        line: 161,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 458,
        line: 162,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 475,
        line: 168,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 480,
        line: 170,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 485,
        line: 171,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 490,
        line: 172,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 496,
        line: 173,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 502,
        line: 174,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 519,
        line: 180,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 524,
        line: 182,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 529,
        line: 183,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 534,
        line: 184,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 540,
        line: 185,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 546,
        line: 186,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 563,
        line: 192,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 568,
        line: 194,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 573,
        line: 195,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 578,
        line: 196,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 584,
        line: 197,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 590,
        line: 198,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 607,
        line: 204,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 612,
        line: 206,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 617,
        line: 207,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 622,
        line: 208,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 628,
        line: 209,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 634,
        line: 210,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 651,
        line: 216,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 656,
        line: 218,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 661,
        line: 219,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 666,
        line: 220,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 672,
        line: 221,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 678,
        line: 222,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 695,
        line: 228,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 700,
        line: 230,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 705,
        line: 231,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 710,
        line: 232,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 716,
        line: 233,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 722,
        line: 234,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 739,
        line: 240,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 744,
        line: 242,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 749,
        line: 243,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 754,
        line: 244,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 760,
        line: 245,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 766,
        line: 246,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 783,
        line: 252,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 788,
        line: 254,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 793,
        line: 255,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 798,
        line: 256,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 804,
        line: 257,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 810,
        line: 258,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 827,
        line: 264,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 832,
        line: 266,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 837,
        line: 267,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 842,
        line: 268,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 848,
        line: 269,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 854,
        line: 270,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 871,
        line: 276,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 876,
        line: 278,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 881,
        line: 279,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 886,
        line: 280,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 892,
        line: 281,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 898,
        line: 282,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 915,
        line: 288,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 920,
        line: 290,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 925,
        line: 291,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 930,
        line: 292,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 936,
        line: 293,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 942,
        line: 294,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 959,
        line: 300,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 964,
        line: 302,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 969,
        line: 303,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 974,
        line: 304,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 980,
        line: 305,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 986,
        line: 306,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 1003,
        line: 312,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 1008,
        line: 314,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 1013,
        line: 315,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 1018,
        line: 316,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 1024,
        line: 317,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 1030,
        line: 318,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 1047,
        line: 324,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 1052,
        line: 326,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 1057,
        line: 327,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 1062,
        line: 328,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 1068,
        line: 329,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 1074,
        line: 330,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 1091,
        line: 336,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 1096,
        line: 338,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 1101,
        line: 339,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 1106,
        line: 340,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 1112,
        line: 341,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 1118,
        line: 342,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 1143,
        line: 358,
        message: "Active input index must be 0"
      },
      {
        ip: 1146,
        line: 359,
        message: "Migration requires exactly 3 inputs"
      },
      {
        ip: 1149,
        line: 360,
        message: "Migration requires exactly 3 outputs"
      },
      {
        ip: 1154,
        line: 362,
        message: "New locking bytecode must be provided for the issuance fund output"
      },
      {
        ip: 1159,
        line: 363,
        message: "Token category must remain the same"
      },
      {
        ip: 1164,
        line: 364,
        message: "Token amount must remain the same"
      },
      {
        ip: 1169,
        line: 365,
        message: "NFT commitment must remain the same"
      },
      {
        ip: 1174,
        line: 366,
        message: "Output value must remain the same"
      },
      {
        ip: 1182,
        line: 369,
        message: "Second input must have the same token category as the first input"
      },
      {
        ip: 1188,
        line: 370,
        message: "Second input must have 'none' capability"
      },
      {
        ip: 1192,
        line: 371,
        message: "Second input must have 'admin' commitment"
      },
      {
        ip: 1198,
        line: 372,
        message: "Locking bytecode must remain the same for second output"
      },
      {
        ip: 1207,
        line: 387,
        message: "Active input index must be 0"
      },
      {
        ip: 1210,
        line: 388,
        message: "Dissolve requires exactly 3 inputs"
      },
      {
        ip: 1213,
        line: 389,
        message: "Dissolve requires exactly 2 outputs"
      },
      {
        ip: 1218,
        line: 391,
        message: "Locking bytecode must be the same as admin p2pkh input"
      },
      {
        ip: 1223,
        line: 392,
        message: "Token category must remain the same"
      },
      {
        ip: 1228,
        line: 393,
        message: "Token amount must remain the same"
      },
      {
        ip: 1233,
        line: 394,
        message: "NFT commitment must remain the same"
      },
      {
        ip: 1239,
        line: 395,
        message: "Output value must remain the same"
      },
      {
        ip: 1247,
        line: 411,
        message: "Active input index must be 0"
      },
      {
        ip: 1250,
        line: 412,
        message: "Donation requires exactly 3 inputs"
      },
      {
        ip: 1254,
        line: 413,
        message: "Donation requires more than 1 output"
      },
      {
        ip: 1258,
        line: 414,
        message: "Donation requires less than 4 outputs"
      },
      {
        ip: 1263,
        line: 416,
        message: "Locking bytecode must remain the same"
      },
      {
        ip: 1268,
        line: 417,
        message: "Token category must remain the same"
      },
      {
        ip: 1274,
        line: 418,
        message: "Token amount must increase"
      },
      {
        ip: 1279,
        line: 419,
        message: "NFT commitment must remain the same"
      },
      {
        ip: 1285,
        line: 420,
        message: "Output value must remain the same"
      }
    ]
  },
  compiler: {
    name: "cashc",
    version: "0.11.0-next.4"
  },
  updatedAt: "2025-06-15T17:46:40.953Z"
} as const;