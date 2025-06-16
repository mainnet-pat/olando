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
  bytecode: "OP_OVER OP_0 OP_NUMEQUAL OP_IF OP_TXINPUTCOUNT OP_4 OP_GREATERTHANOREQUAL OP_VERIFY OP_TXOUTPUTCOUNT OP_5 OP_GREATERTHANOREQUAL OP_VERIFY OP_INPUTINDEX OP_UTXOTOKENCOMMITMENT OP_4 OP_SPLIT OP_DROP OP_BIN2NUM OP_INPUTINDEX OP_UTXOTOKENCOMMITMENT OP_4 OP_SPLIT OP_NIP OP_BIN2NUM OP_TXLOCKTIME OP_LESSTHAN OP_VERIFY OP_TXINPUTCOUNT OP_1SUB OP_OUTPUTTOKENAMOUNT 388e7792702803 OP_DUP OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_SUB 00ca9a3b OP_TXLOCKTIME OP_5 OP_PICK OP_SUB OP_3 OP_2 OP_PICK OP_SWAP OP_ROT OP_MUL OP_ADD OP_DUP OP_MUL OP_OVER OP_DIV OP_3 OP_ROLL OP_2 OP_PICK OP_3 OP_PICK OP_4 OP_PICK OP_MUL OP_3 OP_ROLL OP_DIV OP_SUB OP_MUL OP_SWAP OP_DIV 64 OP_TXINPUTCOUNT OP_1SUB OP_OUTPUTTOKENAMOUNT OP_MUL 5f OP_DIV OP_9 OP_MUL OP_10 OP_DIV OP_SWAP OP_ROT OP_SUB OP_LESSTHANOREQUAL OP_VERIFY OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_OVER OP_SUB OP_OVER OP_SUB OP_INPUTINDEX OP_OUTPUTTOKENAMOUNT OP_INPUTINDEX OP_OUTPUTTOKENAMOUNT OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_4 OP_PICK OP_SUB OP_4 OP_PICK OP_SUB OP_NUMEQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_INPUTINDEX OP_OUTPUTBYTECODE OP_INPUTINDEX OP_UTXOBYTECODE OP_EQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENCOMMITMENT OP_4 OP_ROLL OP_TXLOCKTIME OP_CAT OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY 20 OP_SPLIT OP_DROP OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENAMOUNT OP_3 OP_PICK OP_NUMEQUALVERIFY OP_1 OP_OUTPUTBYTECODE OP_4 OP_ROLL OP_EQUALVERIFY OP_1 OP_OUTPUTVALUE e803 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_2 OP_SUB OP_DUP OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY 20 OP_SPLIT OP_DROP OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_4 OP_ROLL OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_1 OP_UTXOBYTECODE OP_EQUALVERIFY OP_OUTPUTVALUE e803 OP_NUMEQUALVERIFY 88ac67c0d1c0ce88c25288c0cdc0c788c0c6c0d095c0c6c0cc9490539502e80396c0cc7c94c0d3957ca268 1a OP_INPUTINDEX OP_1ADD OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_3 OP_PICK OP_SPLIT OP_NIP OP_4 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_4 OP_PICK OP_SPLIT OP_NIP OP_5 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_5 OP_PICK OP_SPLIT OP_NIP OP_6 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_6 OP_PICK OP_SPLIT OP_NIP OP_7 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_7 OP_PICK OP_SPLIT OP_NIP OP_8 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_8 OP_PICK OP_SPLIT OP_NIP OP_9 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_9 OP_PICK OP_SPLIT OP_NIP OP_10 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_10 OP_PICK OP_SPLIT OP_NIP OP_11 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_11 OP_PICK OP_SPLIT OP_NIP OP_12 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_12 OP_PICK OP_SPLIT OP_NIP OP_13 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_13 OP_PICK OP_SPLIT OP_NIP OP_14 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_14 OP_PICK OP_SPLIT OP_NIP OP_15 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_15 OP_PICK OP_SPLIT OP_NIP OP_16 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_16 OP_PICK OP_SPLIT OP_NIP 11 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 11 OP_PICK OP_SPLIT OP_NIP 12 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 12 OP_PICK OP_SPLIT OP_NIP 13 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 13 OP_PICK OP_SPLIT OP_NIP 14 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 14 OP_PICK OP_SPLIT OP_NIP 15 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 15 OP_PICK OP_SPLIT OP_NIP 16 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 16 OP_PICK OP_SPLIT OP_NIP 17 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 17 OP_PICK OP_SPLIT OP_NIP 18 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_DROP OP_1 OP_ELSE OP_OVER OP_1 OP_NUMEQUAL OP_IF OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_0 OP_OUTPUTBYTECODE OP_3 OP_ROLL OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_1 OP_UTXOTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY 20 OP_SPLIT OP_DROP OP_EQUALVERIFY OP_1 OP_UTXOTOKENCATEGORY OP_SIZE OP_NIP 20 OP_NUMEQUALVERIFY OP_1 OP_UTXOTOKENCOMMITMENT 61646d696e OP_EQUALVERIFY OP_1 OP_OUTPUTBYTECODE OP_1 OP_UTXOBYTECODE OP_EQUAL OP_NIP OP_NIP OP_ELSE OP_OVER OP_2 OP_NUMEQUAL OP_IF OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_2 OP_NUMEQUALVERIFY OP_0 OP_OUTPUTBYTECODE OP_1 OP_UTXOBYTECODE OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUAL OP_NIP OP_NIP OP_ELSE OP_SWAP OP_3 OP_NUMEQUALVERIFY OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_1 OP_GREATERTHAN OP_VERIFY OP_TXOUTPUTCOUNT OP_4 OP_LESSTHAN OP_VERIFY OP_0 OP_OUTPUTBYTECODE OP_0 OP_UTXOBYTECODE OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_GREATERTHAN OP_VERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUAL OP_NIP OP_ENDIF OP_ENDIF OP_ENDIF",
  source: "// Olando Community Issuance Fund Contract\n// Each time an investor buys tokens from the cauldron pool, the contract emits extra tokens to the council.\n// The contract is deployed with a fixed supply of 8,888,888,888.88 tokens.\n// The contract emits tokens based on the time since deployment and the amount of tokens bought so far.\n// The contract can be migrated to a new issuance or dissolved to release tokens to the admin.\ncontract IssuanceFund(bytes councilFundLockingBytecode) {\n\n  // invest into Olando ecosystem by buying tokens from the cauldron pool\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input, NFT commitment: 4bytes deployment time + 4bytes last interaction time\n  //   1: investors BCH input to balance the council's OLA share payout\n  //   2..N: cauldron pool inputs\n  //   N+1: investment BCH, no tokens\n  //  outputs:\n  //   0: issuance fund output, NFT commitment: 4bytes deployment time + 4bytes new interaction time (tx.locktime)\n  //   1: council OLA share output, see notes for amounts\n  //   2..N: cauldron pool outputs, same properties as inputs but with reduced token amount\n  //   N+1: investors OLA share output, see notes for amounts\n  //   N+2: BCH change output\n  //\n  // Notes: if the issuance cap is not hit at the time of interaction, then ola bought from cauldron by investor\n  // are augmented with 90% of the tokens bought, the OLA amounts are added together and split in half.\n  // If the issuance cap is hit the contract execution fails, suggesting the investor to buy less tokens.\n  function issue() {\n    // first rough check for presence of a cauldron trade\n    require(tx.inputs.length >= 4, \"Issue transaction must have at least 4 inputs\");\n    require(tx.outputs.length >= 5, \"Issue transaction must have at least 5 outputs\");\n\n    int deploymentTime = int(tx.inputs[this.activeInputIndex].nftCommitment.split(4)[0]);\n    int lastInteractionTime = int(tx.inputs[this.activeInputIndex].nftCommitment.split(4)[1]);\n    require(tx.locktime > lastInteractionTime, \"Current time is before last interaction time\");\n\n    int cauldronTradeAdjustedTokenAmount = tx.outputs[tx.inputs.length - 1].tokenAmount; // 95% of the cauldron pool token-buy output\n\n    int intialSupply = 8888888888888_88; // with 2 decimals\n    int issued = intialSupply - tx.inputs[this.activeInputIndex].tokenAmount;\n\n    int SCALE = 1_000_000_000; // 1e9 for scaling\n    int t = tx.locktime - deploymentTime; // time in seconds since deploymentTime\n    console.log(t, \"time since start\");\n    int k = 3; // 3E-9 scaled by 1e9\n    int denom = SCALE + k * t; // (1 + 3E-9 * t) * 1e9\n    int denomSquared = denom * denom / SCALE; // (1 + 3E-9 * t)^2 * 1e9\n    int currentEmissionCap = intialSupply * (SCALE - SCALE * SCALE / denomSquared) / SCALE;\n    console.log(currentEmissionCap, \"current emission cap\");\n\n    // use inputs.length to find the cauldron token-buy output, since last ouput could be a bch change\n    // here we already assume that the cauldron pool output got only 95% of the tokens bought, the other 5% are forwarded to council fund\n    int tokensBought = 100 * tx.outputs[tx.inputs.length - 1].tokenAmount / 95;\n    int issue = tokensBought * 9 / 10; // 90% of tokens bought\n    console.log(\"tokensBought\", tokensBought, \"issue\", issue);\n    require(issue <= currentEmissionCap - issued, \"Issue amount exceeds current emission cap\");\n\n    // constrain the input 0 and output 0 to be the issuance fund\n    require(this.activeInputIndex == 0, \"Active input index must be 0 for issuance contract\");\n    int expected = tx.inputs[this.activeInputIndex].tokenAmount - cauldronTradeAdjustedTokenAmount - cauldronTradeAdjustedTokenAmount;\n    int actual = tx.outputs[this.activeInputIndex].tokenAmount;\n    console.log(expected, actual);\n    require(tx.outputs[this.activeInputIndex].tokenAmount == (tx.inputs[this.activeInputIndex].tokenAmount - cauldronTradeAdjustedTokenAmount - cauldronTradeAdjustedTokenAmount), \"Wrong amount of tokens issued\");\n    require(tx.outputs[this.activeInputIndex].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory, \"Can not change token category\");\n    require(tx.outputs[this.activeInputIndex].lockingBytecode == tx.inputs[this.activeInputIndex].lockingBytecode, \"Can not change locking bytecode\");\n    require(tx.outputs[this.activeInputIndex].nftCommitment == bytes(deploymentTime) + bytes(tx.locktime), \"NFT commitment must be updated with current time\");\n\n    // constrain the output 1 to be the council fund share\n    require(tx.outputs[1].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory.split(32)[0], \"Council fund share must have the same token category, no nft\");\n    require(tx.outputs[1].tokenAmount == cauldronTradeAdjustedTokenAmount, \"Council fund share must match the calculated fund share\");\n    require(tx.outputs[1].lockingBytecode == councilFundLockingBytecode, \"Council fund share must have the correct locking bytecode\");\n    require(tx.outputs[1].value == 1000, \"Council fund share must have a value of 1000 satoshis\");\n\n    // constrain the output N+1 to be the investor's share\n    int investorShareIndex = tx.outputs.length - 2;\n    require(tx.outputs[investorShareIndex].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory.split(32)[0], \"Investor's share must have the same token category, no nft\");\n    require(tx.outputs[investorShareIndex].tokenAmount == cauldronTradeAdjustedTokenAmount, \"Investor's share must match the calculated share\");\n    require(tx.outputs[investorShareIndex].lockingBytecode == tx.inputs[1].lockingBytecode, \"Investor's share must have the correct locking bytecode\");\n    require(tx.outputs[investorShareIndex].value == 1000, \"Investor's share must have a value of 1000 satoshis\");\n\n\n    // constrain the cauldron inputs and outputs 2..N\n    bytes cauldronPoolContractSignature = 0x88ac67c0d1c0ce88c25288c0cdc0c788c0c6c0d095c0c6c0cc9490539502e80396c0cc7c94c0d3957ca268; // partial signature of cauldron pool contract\n    int cauldronPoolContractSignatureSplit = 26; // split the signature at this byte index\n\n    int index = this.activeInputIndex + 1;\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n// #region 20 more cauldron pool input-output checks\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n// #endregion\n  }\n\n  // migrate contract to a new issuance fund contract\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input\n  //   1: admin NFT input\n  //   2: funding input\n  //  outputs:\n  //   0: issuance fund output. all same properties but new locking bytecode\n  //   1: admin NFT output, same as input\n  //   2: bch change output\n  function migrate(bytes newLockingBytecode) {\n    // contrain the general transaction shape\n    require(this.activeInputIndex == 0, \"Active input index must be 0\");\n    require(tx.inputs.length == 3, \"Migration requires exactly 3 inputs\");\n    require(tx.outputs.length == 3, \"Migration requires exactly 3 outputs\");\n\n    // constrain the issuance fund input and output\n    require(tx.outputs[0].lockingBytecode == newLockingBytecode, \"New locking bytecode must be provided for the issuance fund output\");\n    require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[0].tokenAmount == tx.inputs[0].tokenAmount, \"Token amount must remain the same\");\n    require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n    // preserve admin NFT: same category\n    require(tx.inputs[1].tokenCategory == tx.inputs[0].tokenCategory.split(32)[0], \"Second input must have the same token category as the first input\");\n    require(tx.inputs[1].tokenCategory.length == 32, \"Second input must have 'none' capability\");\n    require(tx.inputs[1].nftCommitment == 0x61646D696E, \"Second input must have 'admin' commitment\");\n    require(tx.outputs[1].lockingBytecode == tx.inputs[1].lockingBytecode, \"Locking bytecode must remain the same for second output\");\n\n    // bch change output is not burdened with any requirements and must be taken care of by the spender\n  }\n\n  // dissolve contract and release tokens to admin\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input\n  //   1: admin NFT input\n  //   2: funding input\n  //  outputs:\n  //   0: same properties as input 0 paid to admin p2pkh\n  //   1: bch change output\n  function dissolve() {\n    // constrain the general transaction shape\n    require(this.activeInputIndex == 0, \"Active input index must be 0\");\n    require(tx.inputs.length == 3, \"Dissolve requires exactly 3 inputs\");\n    require(tx.outputs.length == 2, \"Dissolve requires exactly 2 outputs\");\n\n    // constrain the issuance fund input and output\n    require(tx.outputs[0].lockingBytecode == tx.inputs[1].lockingBytecode, \"Locking bytecode must be the same as admin input\");\n    require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[0].tokenAmount == tx.inputs[0].tokenAmount, \"Token amount must remain the same\");\n    require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n    // bch change output is not burdened with any requirements\n  }\n\n  // donate to the issuance fund\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input\n  //   1: donation token input, strictly FT\n  //   2: funding input\n  //  outputs:\n  //   0: issuance fund output, no changes\n  //   [1]: token change if any\n  //   [2]: bch change if any\n  function donate() {\n    // constrain the general transaction shape\n    require(this.activeInputIndex == 0, \"Active input index must be 0\");\n    require(tx.inputs.length == 3, \"Donation requires exactly 3 inputs\");\n    require(tx.outputs.length > 1, \"Donation requires more than 1 output\");\n    require(tx.outputs.length < 4, \"Donation requires less than 4 outputs\");\n\n    // constrain the issuance fund input and output\n    require(tx.outputs[0].lockingBytecode == tx.inputs[0].lockingBytecode, \"Locking bytecode must remain the same\");\n    require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[0].tokenAmount > tx.inputs[0].tokenAmount, \"Token amount must increase\");\n    require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n    // bch change output is not burdened with any requirements and must be taken care of by the spender\n  }\n}\n",
  debug: {
    bytecode: "78009c63c354a269c455a269c0cf547f7581c0cf547f7781c59f69c38cd307388e779270280376c0d0940400ca9a3bc55579945352797c7b959376957896537a52795379547995537a9694957c960164c38cd395015f9659955a967c7b94a169c0009dc0d078947894c0d3c0d3c0d05479945479949dc0d1c0ce88c0cdc0c788c0d2547ac57e8851d1c0ce01207f758851d353799d51cd547a8851cc02e8039dc4529476d1c0ce01207f758876d3547a9d76cd51c788cc02e8039d2b88ac67c0d1c0ce88c25288c0cdc0c788c0c6c0d095c0c6c0cc9490539502e80396c0cc7c94c0d3957ca268011ac08b768b768bc39f6376ca53797f7754798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca54797f7755798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca55797f7756798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca56797f7757798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca57797f7758798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca58797f7759798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca59797f775a798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5a797f775b798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5b797f775c798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5c797f775d798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5d797f775e798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5e797f775f798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5f797f7760798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca60797f770111798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0111797f770112798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0112797f770113798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0113797f770114798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0114797f770115798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0115797f770116798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0116797f770117798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0117797f770118798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a069686d6d6d6d6d6d6d6d6d6d6d6d6d75516778519c63c0009dc3539dc4539d00cd537a8800d100ce8800d300d09d00d200cf8800cc00c69d51ce00ce01207f758851ce827701209d51cf0561646d696e8851cd51c78777776778529c63c0009dc3539dc4529d00cd51c78800d100ce8800d300d09d00d200cf8800cc00c69c7777677c539dc0009dc3539dc451a069c4549f6900cd00c78800d100ce8800d300d0a06900d200cf8800cc00c69c77686868",
    sourceMap: "25:2:358:3;;;;27:12:27:28;:32::33;:12:::1;:4::84;28:12:28:29:0;:33::34;:12:::1;:4::86;30:39:30:60:0;:29::75:1;:82::83:0;:29::84:1;:::87;:25::88;31:44:31:65:0;:34::80:1;:87::88:0;:34::89:1;:::92;:30::93;32:12:32:23:0;:::45:1;:4::95;34:54:34:70:0;:::74:1;:43::87;36:23:36:39:0;37:17:37:29;:42::63;:32::76:1;:17;39:16:39:29:0;40:12:40:23;:26::40;;:12:::1;42::42:13:0;43:16:43:21;;:24::25;:28::29;:24:::1;:16;44:23:44:36:0;::::1;:39::44:0;:23:::1;45:29:45:41:0;;:45::50;;:53::58;;:61::66;;:53:::1;:69::81:0;;:53:::1;:45;:29::82;:85::90:0;:29:::1;50:23:50:26:0;:40::56;:::60:1;:29::73;:23;:76::78:0;:23:::1;51:31:51:32:0;:16:::1;:35::37:0;:16:::1;53:21:53:39:0;:42::48;:21:::1;:12;:4::95;56:12:56:33:0;:37::38;:4::94:1;57:29:57:50:0;:19::63:1;:66::98:0;:19:::1;:101::133:0;:19:::1;58:28:58:49:0;:17::62:1;60:23:60:44:0;:12::57:1;:72::93:0;:62::106:1;:109::141:0;;:62:::1;:144::176:0;;:62:::1;:4::212;61:23:61:44:0;:12::59:1;:73::94:0;:63::109:1;:4::144;62:23:62:44:0;:12::61:1;:75::96:0;:65::113:1;:4::150;63:23:63:44:0;:12::59:1;:69::83:0;;:93::104;:63::105:1;:4::159;66:23:66:24:0;:12::39:1;:53::74:0;:43::89:1;:96::98:0;:43::99:1;:::102;:4::168;67:23:67:24:0;:12::37:1;:41::73:0;;:4::134:1;68:23:68:24:0;:12::41:1;:45::71:0;;:4::134:1;69:23:69:24:0;:12::31:1;:35::39:0;:4::98:1;72:29:72:46:0;:49::50;:29:::1;73:23:73:41:0;:12::56:1;:70::91:0;:60::106:1;:113::115:0;:60::116:1;:::119;:4::183;74:23:74:41:0;:12::54:1;:58::90:0;;:4::144:1;75:23:75:41:0;:12::58:1;:72::73:0;:62::90:1;:4::151;76:12:76:48;:52::56:0;:4::113:1;80:42:80:130:0;81:45:81:47;83:16:83:37;:::41:1;84:12:84:17:0;:::21:1;85:8:85:13:0;:::17:1;:20::36:0;:8:::1;:38:95:5:0;87:24:87:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;89:25:89:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;90:25:90:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;91:25:91:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;92:24:92:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;93:25:93:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;94:25:94:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;85:38:95:5;98:12:98:17:0;:::21:1;99:8:99:13:0;:::17:1;:20::36:0;:8:::1;:38:109:5:0;101:24:101:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;103:25:103:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;104:25:104:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;105:25:105:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;106:24:106:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;107:25:107:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;108:25:108:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;99:38:109:5;111:12:111:17:0;:::21:1;112:8:112:13:0;:::17:1;:20::36:0;:8:::1;:38:122:5:0;114:24:114:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;116:25:116:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;117:25:117:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;118:25:118:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;119:24:119:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;120:25:120:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;121:25:121:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;112:38:122:5;124:12:124:17:0;:::21:1;125:8:125:13:0;:::17:1;:20::36:0;:8:::1;:38:135:5:0;127:24:127:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;129:25:129:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;130:25:130:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;131:25:131:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;132:24:132:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;133:25:133:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;134:25:134:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;125:38:135:5;137:12:137:17:0;:::21:1;138:8:138:13:0;:::17:1;:20::36:0;:8:::1;:38:148:5:0;140:24:140:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;142:25:142:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;143:25:143:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;144:25:144:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;145:24:145:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;146:25:146:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;147:25:147:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;138:38:148:5;150:12:150:17:0;:::21:1;151:8:151:13:0;:::17:1;:20::36:0;:8:::1;:38:161:5:0;153:24:153:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;155:25:155:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;156:25:156:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;157:25:157:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;158:24:158:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;159:25:159:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;160:25:160:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;151:38:161:5;163:12:163:17:0;:::21:1;164:8:164:13:0;:::17:1;:20::36:0;:8:::1;:38:174:5:0;166:24:166:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;168:25:168:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;169:25:169:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;170:25:170:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;171:24:171:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;172:25:172:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;173:25:173:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;164:38:174:5;176:12:176:17:0;:::21:1;177:8:177:13:0;:::17:1;:20::36:0;:8:::1;:38:187:5:0;179:24:179:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;181:25:181:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;182:25:182:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;183:25:183:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;184:24:184:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;185:25:185:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;186:25:186:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;177:38:187:5;189:12:189:17:0;:::21:1;190:8:190:13:0;:::17:1;:20::36:0;:8:::1;:38:200:5:0;192:24:192:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;194:25:194:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;195:25:195:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;196:25:196:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;197:24:197:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;198:25:198:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;199:25:199:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;190:38:200:5;202:12:202:17:0;:::21:1;203:8:203:13:0;:::17:1;:20::36:0;:8:::1;:38:213:5:0;205:24:205:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;207:25:207:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;208:25:208:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;209:25:209:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;210:24:210:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;211:25:211:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;212:25:212:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;203:38:213:5;215:12:215:17:0;:::21:1;216:8:216:13:0;:::17:1;:20::36:0;:8:::1;:38:226:5:0;218:24:218:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;220:25:220:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;221:25:221:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;222:25:222:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;223:24:223:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;224:25:224:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;225:25:225:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;216:38:226:5;228:12:228:17:0;:::21:1;229:8:229:13:0;:::17:1;:20::36:0;:8:::1;:38:239:5:0;231:24:231:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;233:25:233:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;234:25:234:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;235:25:235:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;236:24:236:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;237:25:237:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;238:25:238:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;229:38:239:5;241:12:241:17:0;:::21:1;242:8:242:13:0;:::17:1;:20::36:0;:8:::1;:38:252:5:0;244:24:244:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;246:25:246:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;247:25:247:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;248:25:248:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;249:24:249:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;250:25:250:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;251:25:251:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;242:38:252:5;254:12:254:17:0;:::21:1;255:8:255:13:0;:::17:1;:20::36:0;:8:::1;:38:265:5:0;257:24:257:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;259:25:259:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;260:25:260:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;261:25:261:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;262:24:262:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;263:25:263:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;264:25:264:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;255:38:265:5;267:12:267:17:0;:::21:1;268:8:268:13:0;:::17:1;:20::36:0;:8:::1;:38:278:5:0;270:24:270:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;272:25:272:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;273:25:273:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;274:25:274:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;275:24:275:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;276:25:276:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;277:25:277:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;268:38:278:5;280:12:280:17:0;:::21:1;281:8:281:13:0;:::17:1;:20::36:0;:8:::1;:38:291:5:0;283:24:283:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;285:25:285:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;286:25:286:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;287:25:287:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;288:24:288:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;289:25:289:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;290:25:290:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;281:38:291:5;293:12:293:17:0;:::21:1;294:8:294:13:0;:::17:1;:20::36:0;:8:::1;:38:304:5:0;296:24:296:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;298:25:298:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;299:25:299:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;300:25:300:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;301:24:301:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;302:25:302:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;303:25:303:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;294:38:304:5;306:12:306:17:0;:::21:1;307:8:307:13:0;:::17:1;:20::36:0;:8:::1;:38:317:5:0;309:24:309:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;311:25:311:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;312:25:312:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;313:25:313:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;314:24:314:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;315:25:315:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;316:25:316:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;307:38:317:5;319:12:319:17:0;:::21:1;320:8:320:13:0;:::17:1;:20::36:0;:8:::1;:38:330:5:0;322:24:322:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;324:25:324:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;325:25:325:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;326:25:326:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;327:24:327:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;328:25:328:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;329:25:329:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;320:38:330:5;332:12:332:17:0;:::21:1;333:8:333:13:0;:::17:1;:20::36:0;:8:::1;:38:343:5:0;335:24:335:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;337:25:337:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;338:25:338:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;339:25:339:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;340:24:340:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;341:25:341:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;342:25:342:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;333:38:343:5;345:12:345:17:0;:::21:1;346:8:346:13:0;:::17:1;:20::36:0;:8:::1;:38:356:5:0;348:24:348:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;350:25:350:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;351:25:351:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;352:25:352:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;353:24:353:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;354:25:354:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;355:25:355:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;346:38:356:5;25:2:358:3;;;;;;;;;;;;;;;;370::390::0;;;;372:12:372:33;:37::38;:4::72:1;373:12:373:28:0;:32::33;:4::74:1;374:12:374:29:0;:33::34;:4::76:1;377:23:377:24:0;:12::41:1;:45::63:0;;:4::135:1;378:23:378:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;379:23:379:24:0;:12::37:1;:51::52:0;:41::65:1;:4::104;380:23:380:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;381:23:381:24:0;:12::31:1;:45::46:0;:35::53:1;:4::92;384:22:384:23:0;:12::38:1;:52::53:0;:42::68:1;:75::77:0;:42::78:1;:::81;:4::152;385:22:385:23:0;:12::38:1;:::45;;:49::51:0;:4::97:1;386:22:386:23:0;:12::38:1;:42::54:0;:4::101:1;387:23:387:24:0;:12::41:1;:55::56:0;:45::73:1;:12;370:2:390:3;;;401::415::0;;;;403:12:403:33;:37::38;:4::72:1;404:12:404:28:0;:32::33;:4::73:1;405:12:405:29:0;:33::34;:4::75:1;408:23:408:24:0;:12::41:1;:55::56:0;:45::73:1;:4::127;409:23:409:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;410:23:410:24:0;:12::37:1;:51::52:0;:41::65:1;:4::104;411:23:411:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;412:23:412:24:0;:12::31:1;:45::46:0;:35::53:1;:12;401:2:415:3;;;427::442::0;;;429:12:429:33;:37::38;:4::72:1;430:12:430:28:0;:32::33;:4::73:1;431:12:431:29:0;:32::33;:12:::1;:4::75;432:12:432:29:0;:32::33;:12:::1;:4::76;435:23:435:24:0;:12::41:1;:55::56:0;:45::73:1;:4::116;436:23:436:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;437:23:437:24:0;:12::37:1;:50::51:0;:40::64:1;:12;:4::96;438:23:438:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;439:23:439:24:0;:12::31:1;:45::46:0;:35::53:1;:12;427:2:442:3;6:0:443:1;;",
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
        line: 59,
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
        ip: 180,
        line: 86,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 180
          }
        ]
      },
      {
        ip: 230,
        line: 100,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 230
          }
        ]
      },
      {
        ip: 280,
        line: 113,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 280
          }
        ]
      },
      {
        ip: 330,
        line: 126,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 330
          }
        ]
      },
      {
        ip: 380,
        line: 139,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 380
          }
        ]
      },
      {
        ip: 430,
        line: 152,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 430
          }
        ]
      },
      {
        ip: 480,
        line: 165,
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
        ip: 530,
        line: 178,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 530
          }
        ]
      },
      {
        ip: 580,
        line: 191,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 580
          }
        ]
      },
      {
        ip: 630,
        line: 204,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 630
          }
        ]
      },
      {
        ip: 680,
        line: 217,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 680
          }
        ]
      },
      {
        ip: 730,
        line: 230,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 730
          }
        ]
      },
      {
        ip: 780,
        line: 243,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 780
          }
        ]
      },
      {
        ip: 830,
        line: 256,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 830
          }
        ]
      },
      {
        ip: 880,
        line: 269,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 880
          }
        ]
      },
      {
        ip: 930,
        line: 282,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 930
          }
        ]
      },
      {
        ip: 980,
        line: 295,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 980
          }
        ]
      },
      {
        ip: 1030,
        line: 308,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 1030
          }
        ]
      },
      {
        ip: 1080,
        line: 321,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 1080
          }
        ]
      },
      {
        ip: 1130,
        line: 334,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 1130
          }
        ]
      },
      {
        ip: 1180,
        line: 347,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 1180
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
        line: 56,
        message: "Active input index must be 0 for issuance contract"
      },
      {
        ip: 105,
        line: 60,
        message: "Wrong amount of tokens issued"
      },
      {
        ip: 110,
        line: 61,
        message: "Can not change token category"
      },
      {
        ip: 115,
        line: 62,
        message: "Can not change locking bytecode"
      },
      {
        ip: 122,
        line: 63,
        message: "NFT commitment must be updated with current time"
      },
      {
        ip: 130,
        line: 66,
        message: "Council fund share must have the same token category, no nft"
      },
      {
        ip: 135,
        line: 67,
        message: "Council fund share must match the calculated fund share"
      },
      {
        ip: 140,
        line: 68,
        message: "Council fund share must have the correct locking bytecode"
      },
      {
        ip: 144,
        line: 69,
        message: "Council fund share must have a value of 1000 satoshis"
      },
      {
        ip: 155,
        line: 73,
        message: "Investor's share must have the same token category, no nft"
      },
      {
        ip: 160,
        line: 74,
        message: "Investor's share must match the calculated share"
      },
      {
        ip: 165,
        line: 75,
        message: "Investor's share must have the correct locking bytecode"
      },
      {
        ip: 168,
        line: 76,
        message: "Investor's share must have a value of 1000 satoshis"
      },
      {
        ip: 188,
        line: 87,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 193,
        line: 89,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 198,
        line: 90,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 203,
        line: 91,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 209,
        line: 92,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 215,
        line: 93,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 221,
        line: 94,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 238,
        line: 101,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 243,
        line: 103,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 248,
        line: 104,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 253,
        line: 105,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 259,
        line: 106,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 265,
        line: 107,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 271,
        line: 108,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 288,
        line: 114,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 293,
        line: 116,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 298,
        line: 117,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 303,
        line: 118,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 309,
        line: 119,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 315,
        line: 120,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 321,
        line: 121,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 338,
        line: 127,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 343,
        line: 129,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 348,
        line: 130,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 353,
        line: 131,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 359,
        line: 132,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 365,
        line: 133,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 371,
        line: 134,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 388,
        line: 140,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 393,
        line: 142,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 398,
        line: 143,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 403,
        line: 144,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 409,
        line: 145,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 415,
        line: 146,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 421,
        line: 147,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 438,
        line: 153,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 443,
        line: 155,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 448,
        line: 156,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 453,
        line: 157,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 459,
        line: 158,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 465,
        line: 159,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 471,
        line: 160,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 488,
        line: 166,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 493,
        line: 168,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 498,
        line: 169,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 503,
        line: 170,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 509,
        line: 171,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 515,
        line: 172,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 521,
        line: 173,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 538,
        line: 179,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 543,
        line: 181,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 548,
        line: 182,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 553,
        line: 183,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 559,
        line: 184,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 565,
        line: 185,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 571,
        line: 186,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 588,
        line: 192,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 593,
        line: 194,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 598,
        line: 195,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 603,
        line: 196,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 609,
        line: 197,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 615,
        line: 198,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 621,
        line: 199,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 638,
        line: 205,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 643,
        line: 207,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 648,
        line: 208,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 653,
        line: 209,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 659,
        line: 210,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 665,
        line: 211,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 671,
        line: 212,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 688,
        line: 218,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 693,
        line: 220,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 698,
        line: 221,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 703,
        line: 222,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 709,
        line: 223,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 715,
        line: 224,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 721,
        line: 225,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 738,
        line: 231,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 743,
        line: 233,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 748,
        line: 234,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 753,
        line: 235,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 759,
        line: 236,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 765,
        line: 237,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 771,
        line: 238,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 788,
        line: 244,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 793,
        line: 246,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 798,
        line: 247,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 803,
        line: 248,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 809,
        line: 249,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 815,
        line: 250,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 821,
        line: 251,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 838,
        line: 257,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 843,
        line: 259,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 848,
        line: 260,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 853,
        line: 261,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 859,
        line: 262,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 865,
        line: 263,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 871,
        line: 264,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 888,
        line: 270,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 893,
        line: 272,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 898,
        line: 273,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 903,
        line: 274,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 909,
        line: 275,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 915,
        line: 276,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 921,
        line: 277,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 938,
        line: 283,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 943,
        line: 285,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 948,
        line: 286,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 953,
        line: 287,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 959,
        line: 288,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 965,
        line: 289,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 971,
        line: 290,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 988,
        line: 296,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 993,
        line: 298,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 998,
        line: 299,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 1003,
        line: 300,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 1009,
        line: 301,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 1015,
        line: 302,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 1021,
        line: 303,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 1038,
        line: 309,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 1043,
        line: 311,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 1048,
        line: 312,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 1053,
        line: 313,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 1059,
        line: 314,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 1065,
        line: 315,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 1071,
        line: 316,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 1088,
        line: 322,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 1093,
        line: 324,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 1098,
        line: 325,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 1103,
        line: 326,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 1109,
        line: 327,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 1115,
        line: 328,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 1121,
        line: 329,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 1138,
        line: 335,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 1143,
        line: 337,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 1148,
        line: 338,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 1153,
        line: 339,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 1159,
        line: 340,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 1165,
        line: 341,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 1171,
        line: 342,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 1188,
        line: 348,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 1193,
        line: 350,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 1198,
        line: 351,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 1203,
        line: 352,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 1209,
        line: 353,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 1215,
        line: 354,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 1221,
        line: 355,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 1245,
        line: 372,
        message: "Active input index must be 0"
      },
      {
        ip: 1248,
        line: 373,
        message: "Migration requires exactly 3 inputs"
      },
      {
        ip: 1251,
        line: 374,
        message: "Migration requires exactly 3 outputs"
      },
      {
        ip: 1256,
        line: 377,
        message: "New locking bytecode must be provided for the issuance fund output"
      },
      {
        ip: 1261,
        line: 378,
        message: "Token category must remain the same"
      },
      {
        ip: 1266,
        line: 379,
        message: "Token amount must remain the same"
      },
      {
        ip: 1271,
        line: 380,
        message: "NFT commitment must remain the same"
      },
      {
        ip: 1276,
        line: 381,
        message: "Output value must remain the same"
      },
      {
        ip: 1284,
        line: 384,
        message: "Second input must have the same token category as the first input"
      },
      {
        ip: 1290,
        line: 385,
        message: "Second input must have 'none' capability"
      },
      {
        ip: 1294,
        line: 386,
        message: "Second input must have 'admin' commitment"
      },
      {
        ip: 1300,
        line: 387,
        message: "Locking bytecode must remain the same for second output"
      },
      {
        ip: 1309,
        line: 403,
        message: "Active input index must be 0"
      },
      {
        ip: 1312,
        line: 404,
        message: "Dissolve requires exactly 3 inputs"
      },
      {
        ip: 1315,
        line: 405,
        message: "Dissolve requires exactly 2 outputs"
      },
      {
        ip: 1320,
        line: 408,
        message: "Locking bytecode must be the same as admin input"
      },
      {
        ip: 1325,
        line: 409,
        message: "Token category must remain the same"
      },
      {
        ip: 1330,
        line: 410,
        message: "Token amount must remain the same"
      },
      {
        ip: 1335,
        line: 411,
        message: "NFT commitment must remain the same"
      },
      {
        ip: 1341,
        line: 412,
        message: "Output value must remain the same"
      },
      {
        ip: 1349,
        line: 429,
        message: "Active input index must be 0"
      },
      {
        ip: 1352,
        line: 430,
        message: "Donation requires exactly 3 inputs"
      },
      {
        ip: 1356,
        line: 431,
        message: "Donation requires more than 1 output"
      },
      {
        ip: 1360,
        line: 432,
        message: "Donation requires less than 4 outputs"
      },
      {
        ip: 1365,
        line: 435,
        message: "Locking bytecode must remain the same"
      },
      {
        ip: 1370,
        line: 436,
        message: "Token category must remain the same"
      },
      {
        ip: 1376,
        line: 437,
        message: "Token amount must increase"
      },
      {
        ip: 1381,
        line: 438,
        message: "NFT commitment must remain the same"
      },
      {
        ip: 1387,
        line: 439,
        message: "Output value must remain the same"
      }
    ]
  },
  compiler: {
    name: "cashc",
    version: "0.11.0-next.4"
  },
  updatedAt: "2025-06-16T12:04:18.050Z"
} as const;