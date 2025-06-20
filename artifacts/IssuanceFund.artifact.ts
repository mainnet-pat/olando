export default {
  contractName: "IssuanceFund",
  constructorInputs: [
    {
      name: "councilFundLockingBytecode",
      type: "bytes"
    },
    {
      name: "adminLockingBytecode",
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
        },
        {
          name: "newAdminLockingBytecode",
          type: "bytes"
        }
      ]
    },
    {
      name: "dissolveIntoAuthguard",
      inputs: []
    },
    {
      name: "donate",
      inputs: []
    }
  ],
  bytecode: "OP_2 OP_PICK OP_0 OP_NUMEQUAL OP_IF OP_TXINPUTCOUNT OP_4 OP_GREATERTHANOREQUAL OP_VERIFY OP_TXOUTPUTCOUNT OP_5 OP_GREATERTHANOREQUAL OP_VERIFY OP_INPUTINDEX OP_UTXOTOKENCOMMITMENT OP_4 OP_SPLIT OP_DROP OP_BIN2NUM OP_INPUTINDEX OP_UTXOTOKENCOMMITMENT OP_4 OP_SPLIT OP_NIP OP_BIN2NUM OP_TXLOCKTIME OP_LESSTHAN OP_VERIFY OP_TXINPUTCOUNT OP_1SUB OP_OUTPUTTOKENAMOUNT 388e7792702803 OP_DUP OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_SUB 00ca9a3b OP_TXLOCKTIME OP_5 OP_PICK OP_SUB OP_3 OP_2 OP_PICK OP_SWAP OP_ROT OP_MUL OP_ADD OP_DUP OP_MUL OP_OVER OP_DIV OP_3 OP_ROLL OP_2 OP_PICK OP_3 OP_PICK OP_4 OP_PICK OP_MUL OP_3 OP_ROLL OP_DIV OP_SUB OP_MUL OP_SWAP OP_DIV 64 OP_TXINPUTCOUNT OP_1SUB OP_OUTPUTTOKENAMOUNT OP_MUL 5f OP_DIV OP_9 OP_MUL OP_10 OP_DIV OP_SWAP OP_ROT OP_SUB OP_LESSTHANOREQUAL OP_VERIFY OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_OVER OP_SUB OP_OVER OP_SUB OP_INPUTINDEX OP_OUTPUTTOKENAMOUNT OP_INPUTINDEX OP_OUTPUTTOKENAMOUNT OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_4 OP_PICK OP_SUB OP_4 OP_PICK OP_SUB OP_NUMEQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_INPUTINDEX OP_OUTPUTBYTECODE OP_INPUTINDEX OP_UTXOBYTECODE OP_EQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENCOMMITMENT OP_4 OP_ROLL OP_TXLOCKTIME OP_CAT OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY 20 OP_SPLIT OP_DROP OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENAMOUNT OP_3 OP_PICK OP_NUMEQUALVERIFY OP_1 OP_OUTPUTBYTECODE OP_4 OP_ROLL OP_EQUALVERIFY OP_1 OP_OUTPUTVALUE e803 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_2 OP_SUB OP_DUP OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY 20 OP_SPLIT OP_DROP OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_4 OP_ROLL OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_1 OP_UTXOBYTECODE OP_EQUALVERIFY OP_OUTPUTVALUE e803 OP_NUMEQUALVERIFY 88ac67c0d1c0ce88c25288c0cdc0c788c0c6c0d095c0c6c0cc9490539502e80396c0cc7c94c0d3957ca268 1a OP_INPUTINDEX OP_1ADD OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_3 OP_PICK OP_SPLIT OP_NIP OP_4 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_4 OP_PICK OP_SPLIT OP_NIP OP_5 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_5 OP_PICK OP_SPLIT OP_NIP OP_6 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_6 OP_PICK OP_SPLIT OP_NIP OP_7 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_7 OP_PICK OP_SPLIT OP_NIP OP_8 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_8 OP_PICK OP_SPLIT OP_NIP OP_9 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_9 OP_PICK OP_SPLIT OP_NIP OP_10 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_10 OP_PICK OP_SPLIT OP_NIP OP_11 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_11 OP_PICK OP_SPLIT OP_NIP OP_12 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_12 OP_PICK OP_SPLIT OP_NIP OP_13 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_13 OP_PICK OP_SPLIT OP_NIP OP_14 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_14 OP_PICK OP_SPLIT OP_NIP OP_15 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_15 OP_PICK OP_SPLIT OP_NIP OP_16 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_16 OP_PICK OP_SPLIT OP_NIP 11 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 11 OP_PICK OP_SPLIT OP_NIP 12 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 12 OP_PICK OP_SPLIT OP_NIP 13 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 13 OP_PICK OP_SPLIT OP_NIP 14 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 14 OP_PICK OP_SPLIT OP_NIP 15 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 15 OP_PICK OP_SPLIT OP_NIP 16 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 16 OP_PICK OP_SPLIT OP_NIP 17 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 17 OP_PICK OP_SPLIT OP_NIP 18 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_1 OP_ELSE OP_2 OP_PICK OP_1 OP_NUMEQUAL OP_IF OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_0 OP_OUTPUTBYTECODE OP_4 OP_ROLL OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_1 OP_UTXOBYTECODE OP_ROT OP_EQUALVERIFY OP_1 OP_OUTPUTBYTECODE OP_3 OP_ROLL OP_EQUALVERIFY OP_1 OP_OUTPUTVALUE OP_1 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_1 OP_OUTPUTTOKENCATEGORY OP_1 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENAMOUNT OP_1 OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY OP_1 OP_OUTPUTTOKENCOMMITMENT OP_1 OP_UTXOTOKENCOMMITMENT OP_EQUAL OP_NIP OP_NIP OP_ELSE OP_2 OP_PICK OP_2 OP_NUMEQUAL OP_IF OP_INPUTINDEX OP_3 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_5 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_0 OP_OUTPUTBYTECODE OP_0 OP_UTXOBYTECODE OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_1 OP_CAT OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_3 OP_UTXOTOKENAMOUNT OP_ADD OP_NUMEQUALVERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_1 OP_OUTPUTBYTECODE OP_1 OP_UTXOBYTECODE OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENCATEGORY OP_1 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENAMOUNT OP_1 OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY OP_1 OP_OUTPUTTOKENCOMMITMENT OP_1 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_1 OP_OUTPUTVALUE OP_1 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_2 OP_UTXOBYTECODE OP_ROT OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_3 OP_UTXOTOKENCATEGORY OP_EQUAL OP_NIP OP_NIP OP_ELSE OP_ROT OP_3 OP_NUMEQUALVERIFY OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_1 OP_GREATERTHAN OP_VERIFY OP_TXOUTPUTCOUNT OP_4 OP_LESSTHAN OP_VERIFY OP_0 OP_OUTPUTBYTECODE OP_0 OP_UTXOBYTECODE OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_GREATERTHAN OP_VERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUAL OP_NIP OP_NIP OP_ENDIF OP_ENDIF OP_ENDIF",
  source: "// Olando Community Issuance Fund Contract\n// Each time an investor buys tokens from the cauldron pool, the contract emits extra tokens to the council.\n// The contract is deployed with a fixed supply of 8,888,888,888.88 tokens.\n// The contract emits tokens based on the time since deployment and the amount of tokens bought so far.\n// The contract can be migrated to a new issuance or dissolved to release tokens to the admin.\ncontract IssuanceFund(bytes councilFundLockingBytecode, bytes adminLockingBytecode) {\n\n  // invest into Olando ecosystem by buying tokens from the cauldron pool\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input, NFT commitment: 4bytes deployment time + 4bytes last interaction time\n  //   1: investors BCH input to balance the council's OLA share payout\n  //   2..N: cauldron pool inputs\n  //   N+1: investment BCH, no tokens\n  //  outputs:\n  //   0: issuance fund output, NFT commitment: 4bytes deployment time + 4bytes new interaction time (tx.locktime)\n  //   1: council OLA share output, see notes for amounts\n  //   2..N: cauldron pool outputs, same properties as inputs but with reduced token amount\n  //   N+1: investors OLA share output, see notes for amounts\n  //   N+2: BCH change output\n  //\n  // Notes: if the issuance cap is not hit at the time of interaction, then ola bought from cauldron by investor\n  // are augmented with 90% of the tokens bought, the OLA amounts are added together and split in half.\n  // If the issuance cap is hit the contract execution fails, suggesting the investor to buy less tokens.\n  function issue() {\n    // first rough check for presence of a cauldron trade\n    require(tx.inputs.length >= 4, \"Issue transaction must have at least 4 inputs\");\n    require(tx.outputs.length >= 5, \"Issue transaction must have at least 5 outputs\");\n\n    int deploymentTime = int(tx.inputs[this.activeInputIndex].nftCommitment.split(4)[0]);\n    int lastInteractionTime = int(tx.inputs[this.activeInputIndex].nftCommitment.split(4)[1]);\n    require(tx.locktime > lastInteractionTime, \"Current time is before last interaction time\");\n\n    int cauldronTradeAdjustedTokenAmount = tx.outputs[tx.inputs.length - 1].tokenAmount; // 95% of the cauldron pool token-buy output\n\n    int intialSupply = 8888888888888_88; // with 2 decimals\n    int issued = intialSupply - tx.inputs[this.activeInputIndex].tokenAmount;\n\n    int SCALE = 1_000_000_000; // 1e9 for scaling\n    int t = tx.locktime - deploymentTime; // time in seconds since deploymentTime\n    console.log(t, \"time since start\");\n    int k = 3; // 3E-9 scaled by 1e9\n    int denom = SCALE + k * t; // (1 + 3E-9 * t) * 1e9\n    int denomSquared = denom * denom / SCALE; // (1 + 3E-9 * t)^2 * 1e9\n    int currentEmissionCap = intialSupply * (SCALE - SCALE * SCALE / denomSquared) / SCALE;\n    console.log(currentEmissionCap, \"current emission cap\");\n\n    // use inputs.length to find the cauldron token-buy output, since last ouput could be a bch change\n    // here we already assume that the cauldron pool output got only 95% of the tokens bought, the other 5% are forwarded to council fund\n    int tokensBought = 100 * tx.outputs[tx.inputs.length - 1].tokenAmount / 95;\n    int issue = tokensBought * 9 / 10; // 90% of tokens bought\n    console.log(\"tokensBought\", tokensBought, \"issue\", issue);\n    require(issue <= currentEmissionCap - issued, \"Issue amount exceeds current emission cap\");\n\n    // constrain the input 0 and output 0 to be the issuance fund\n    require(this.activeInputIndex == 0, \"Active input index must be 0 for issuance contract\");\n    int expected = tx.inputs[this.activeInputIndex].tokenAmount - cauldronTradeAdjustedTokenAmount - cauldronTradeAdjustedTokenAmount;\n    int actual = tx.outputs[this.activeInputIndex].tokenAmount;\n    console.log(expected, actual);\n    require(tx.outputs[this.activeInputIndex].tokenAmount == (tx.inputs[this.activeInputIndex].tokenAmount - cauldronTradeAdjustedTokenAmount - cauldronTradeAdjustedTokenAmount), \"Wrong amount of tokens issued\");\n    require(tx.outputs[this.activeInputIndex].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory, \"Can not change token category\");\n    require(tx.outputs[this.activeInputIndex].lockingBytecode == tx.inputs[this.activeInputIndex].lockingBytecode, \"Can not change locking bytecode\");\n    require(tx.outputs[this.activeInputIndex].nftCommitment == bytes(deploymentTime) + bytes(tx.locktime), \"NFT commitment must be updated with current time\");\n\n    // constrain the output 1 to be the council fund share\n    require(tx.outputs[1].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory.split(32)[0], \"Council fund share must have the same token category, no nft\");\n    require(tx.outputs[1].tokenAmount == cauldronTradeAdjustedTokenAmount, \"Council fund share must match the calculated fund share\");\n    require(tx.outputs[1].lockingBytecode == councilFundLockingBytecode, \"Council fund share must have the correct locking bytecode\");\n    require(tx.outputs[1].value == 1000, \"Council fund share must have a value of 1000 satoshis\");\n\n    // constrain the output N+1 to be the investor's share\n    int investorShareIndex = tx.outputs.length - 2;\n    require(tx.outputs[investorShareIndex].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory.split(32)[0], \"Investor's share must have the same token category, no nft\");\n    require(tx.outputs[investorShareIndex].tokenAmount == cauldronTradeAdjustedTokenAmount, \"Investor's share must match the calculated share\");\n    require(tx.outputs[investorShareIndex].lockingBytecode == tx.inputs[1].lockingBytecode, \"Investor's share must have the correct locking bytecode\");\n    require(tx.outputs[investorShareIndex].value == 1000, \"Investor's share must have a value of 1000 satoshis\");\n\n\n    // constrain the cauldron inputs and outputs 2..N\n    bytes cauldronPoolContractSignature = 0x88ac67c0d1c0ce88c25288c0cdc0c788c0c6c0d095c0c6c0cc9490539502e80396c0cc7c94c0d3957ca268; // partial signature of cauldron pool contract\n    int cauldronPoolContractSignatureSplit = 26; // split the signature at this byte index\n\n    int index = this.activeInputIndex + 1;\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n// #region 20 more cauldron pool input-output checks\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n// #endregion\n  }\n\n  // migrate contract to a new instance of issuance fund contract or change admin locking bytecode\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input\n  //   1: admin input\n  //   2: funding input\n  //  outputs:\n  //   0: issuance fund output. all same properties but new locking bytecode\n  //   1: admin output, same as input\n  //   2: bch change output\n  function migrate(bytes newLockingBytecode, bytes newAdminLockingBytecode) {\n    // constrain the general transaction shape\n    require(this.activeInputIndex == 0, \"Active input index must be 0\");\n    require(tx.inputs.length == 3, \"Migration requires exactly 3 inputs\");\n    require(tx.outputs.length == 3, \"Migration requires exactly 3 outputs\");\n\n    // constrain the issuance fund input and output\n    require(tx.outputs[0].lockingBytecode == newLockingBytecode, \"New locking bytecode must be provided for the issuance fund output\");\n    require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[0].tokenAmount == tx.inputs[0].tokenAmount, \"Token amount must remain the same\");\n    require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n    // preserve admin input\n    require(tx.inputs[1].lockingBytecode == adminLockingBytecode, \"Admin input must have the correct locking bytecode\");\n    require(tx.outputs[1].lockingBytecode == newAdminLockingBytecode, \"New admin locking bytecode must be provided for the admin output\");\n    require(tx.outputs[1].value == tx.inputs[1].value, \"Output value must remain the same for admin output\");\n    require(tx.outputs[1].tokenCategory == tx.inputs[1].tokenCategory, \"Token category must remain the same for admin output\");\n    require(tx.outputs[1].tokenAmount == tx.inputs[1].tokenAmount, \"Token amount must remain the same for admin output\");\n    require(tx.outputs[1].nftCommitment == tx.inputs[1].nftCommitment, \"NFT commitment must remain the same for admin output\");\n\n    // bch change output is not burdened with any requirements and must be taken care of by the spender\n  }\n\n  // NOTE: excluded due to input size limitations of 1650 bytes\n  // // dissolve contract and release tokens to admin\n  // // tx layout:\n  // //  inputs:\n  // //   0: issuance fund input\n  // //   1: admin input\n  // //   2: funding input\n  // //  outputs:\n  // //   0: same properties as input 0 paid to admin locking bytecode\n  // //   1: bch change output\n  // function dissolve() {\n  //   // constrain the general transaction shape\n  //   require(this.activeInputIndex == 0, \"Active input index must be 0\");\n  //   require(tx.inputs.length == 3, \"Dissolve requires exactly 3 inputs\");\n  //   require(tx.outputs.length == 2, \"Dissolve requires exactly 2 outputs\");\n\n  //   // constrain the issuance fund input and output\n  //   require(tx.outputs[0].lockingBytecode == tx.inputs[1].lockingBytecode, \"Locking bytecode must be the same as admin input\");\n  //   require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n  //   require(tx.outputs[0].tokenAmount == tx.inputs[0].tokenAmount, \"Token amount must remain the same\");\n  //   require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n  //   require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n  //   // constrain the admin input, do not require it to be present in outputs\n  //   require(tx.inputs[1].lockingBytecode == adminLockingBytecode, \"Admin input must have the correct locking bytecode\");\n\n  //   // bch change output is not burdened with any requirements\n  // }\n\n  // dissolve contract and release tokens to admin\n  // tx layout:\n  //  inputs:\n  //   0: authguard\n  //   1: authkey\n  //   2: admin input\n  //   3: issuance fund input\n  //   4: funding input\n  //  outputs:\n  //   0: authguard output, receives mutable NFT from issuance fund input, commitment set to empty\n  //   1: authkey, no changes\n  //   2: bch change output\n  function dissolveIntoAuthguard() {\n    // constrain the general transaction shape\n    require(this.activeInputIndex == 3, \"Active input index must be 3\");\n    require(tx.inputs.length == 5, \"Dissolve requires exactly 5 inputs\");\n    require(tx.outputs.length == 3, \"Dissolve requires exactly 3 outputs\");\n\n    // constrain the authguard input and output\n    require(tx.outputs[0].lockingBytecode == tx.inputs[0].lockingBytecode, \"Locking bytecode must be the same as authguard input\");\n    require(tx.outputs[0].tokenCategory == (tx.inputs[0].tokenCategory + 0x01), \"Token category must remain the same, become mutable NFT\");\n    require(tx.outputs[0].tokenAmount == tx.inputs[0].tokenAmount + tx.inputs[3].tokenAmount, \"Token amount must be the sum of authguard and issuance fund inputs\");\n    require(tx.outputs[0].nftCommitment == 0x, \"NFT commitment must be empty for authguard output\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same for authguard output\");\n\n    // constrain the authkey input and output\n    require(tx.outputs[1].lockingBytecode == tx.inputs[1].lockingBytecode, \"Locking bytecode must be the same as authkey input\");\n    require(tx.outputs[1].tokenCategory == tx.inputs[1].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[1].tokenAmount == tx.inputs[1].tokenAmount, \"Token amount must remain the same\");\n    require(tx.outputs[1].nftCommitment == tx.inputs[1].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[1].value == tx.inputs[1].value, \"Output value must remain the same\");\n\n    // constrain the admin input, do not require it to be present in outputs\n    require(tx.inputs[2].lockingBytecode == adminLockingBytecode, \"Admin input must have the correct locking bytecode\");\n\n    // constrain the issuance fund input and output\n    require(tx.outputs[0].tokenCategory == tx.inputs[3].tokenCategory, \"Token category must remain the same\");\n\n    // bch change output is not burdened with any requirements\n  }\n\n  // donate to the issuance fund\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input\n  //   1: donation token input, strictly FT\n  //   2: funding input\n  //  outputs:\n  //   0: issuance fund output, no changes\n  //   [1]: token change if any\n  //   [2]: bch change if any\n  function donate() {\n    // constrain the general transaction shape\n    require(this.activeInputIndex == 0, \"Active input index must be 0\");\n    require(tx.inputs.length == 3, \"Donation requires exactly 3 inputs\");\n    require(tx.outputs.length > 1, \"Donation requires more than 1 output\");\n    require(tx.outputs.length < 4, \"Donation requires less than 4 outputs\");\n\n    // constrain the issuance fund input and output\n    require(tx.outputs[0].lockingBytecode == tx.inputs[0].lockingBytecode, \"Locking bytecode must remain the same\");\n    require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[0].tokenAmount > tx.inputs[0].tokenAmount, \"Token amount must increase\");\n    require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n    // bch change output is not burdened with any requirements and must be taken care of by the spender\n  }\n}\n",
  debug: {
    bytecode: "5279009c63c354a269c455a269c0cf547f7581c0cf547f7781c59f69c38cd307388e779270280376c0d0940400ca9a3bc55579945352797c7b959376957896537a52795379547995537a9694957c960164c38cd395015f9659955a967c7b94a169c0009dc0d078947894c0d3c0d3c0d05479945479949dc0d1c0ce88c0cdc0c788c0d2547ac57e8851d1c0ce01207f758851d353799d51cd547a8851cc02e8039dc4529476d1c0ce01207f758876d3547a9d76cd51c788cc02e8039d2b88ac67c0d1c0ce88c25288c0cdc0c788c0c6c0d095c0c6c0cc9490539502e80396c0cc7c94c0d3957ca268011ac08b768b768bc39f6376ca53797f7754798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca54797f7755798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca55797f7756798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca56797f7757798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca57797f7758798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca58797f7759798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca59797f775a798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5a797f775b798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5b797f775c798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5c797f775d798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5d797f775e798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5e797f775f798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5f797f7760798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca60797f770111798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0111797f770112798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0112797f770113798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0113797f770114798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0114797f770115798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0115797f770116798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0116797f770117798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0117797f770118798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a069686d6d6d6d6d6d6d6d6d6d6d6d6d6d51675279519c63c0009dc3539dc4539d00cd547a8800d100ce8800d300d09d00d200cf8800cc00c69d51c77b8851cd537a8851cc51c69d51d151ce8851d351d09d51d251cf877777675279529c63c0539dc3559dc4539d00cd00c78800d100ce517e8800d300d053d0939d00d2008800cc00c69d51cd51c78851d151ce8851d351d09d51d251cf8851cc51c69d52c77b8800d153ce877777677b539dc0009dc3539dc451a069c4549f6900cd00c78800d100ce8800d300d0a06900d200cf8800cc00c69c7777686868",
    sourceMap: "25:2:358:3;;;;;27:12:27:28;:32::33;:12:::1;:4::84;28:12:28:29:0;:33::34;:12:::1;:4::86;30:39:30:60:0;:29::75:1;:82::83:0;:29::84:1;:::87;:25::88;31:44:31:65:0;:34::80:1;:87::88:0;:34::89:1;:::92;:30::93;32:12:32:23:0;:::45:1;:4::95;34:54:34:70:0;:::74:1;:43::87;36:23:36:39:0;37:17:37:29;:42::63;:32::76:1;:17;39:16:39:29:0;40:12:40:23;:26::40;;:12:::1;42::42:13:0;43:16:43:21;;:24::25;:28::29;:24:::1;:16;44:23:44:36:0;::::1;:39::44:0;:23:::1;45:29:45:41:0;;:45::50;;:53::58;;:61::66;;:53:::1;:69::81:0;;:53:::1;:45;:29::82;:85::90:0;:29:::1;50:23:50:26:0;:40::56;:::60:1;:29::73;:23;:76::78:0;:23:::1;51:31:51:32:0;:16:::1;:35::37:0;:16:::1;53:21:53:39:0;:42::48;:21:::1;:12;:4::95;56:12:56:33:0;:37::38;:4::94:1;57:29:57:50:0;:19::63:1;:66::98:0;:19:::1;:101::133:0;:19:::1;58:28:58:49:0;:17::62:1;60:23:60:44:0;:12::57:1;:72::93:0;:62::106:1;:109::141:0;;:62:::1;:144::176:0;;:62:::1;:4::212;61:23:61:44:0;:12::59:1;:73::94:0;:63::109:1;:4::144;62:23:62:44:0;:12::61:1;:75::96:0;:65::113:1;:4::150;63:23:63:44:0;:12::59:1;:69::83:0;;:93::104;:63::105:1;:4::159;66:23:66:24:0;:12::39:1;:53::74:0;:43::89:1;:96::98:0;:43::99:1;:::102;:4::168;67:23:67:24:0;:12::37:1;:41::73:0;;:4::134:1;68:23:68:24:0;:12::41:1;:45::71:0;;:4::134:1;69:23:69:24:0;:12::31:1;:35::39:0;:4::98:1;72:29:72:46:0;:49::50;:29:::1;73:23:73:41:0;:12::56:1;:70::91:0;:60::106:1;:113::115:0;:60::116:1;:::119;:4::183;74:23:74:41:0;:12::54:1;:58::90:0;;:4::144:1;75:23:75:41:0;:12::58:1;:72::73:0;:62::90:1;:4::151;76:12:76:48;:52::56:0;:4::113:1;80:42:80:130:0;81:45:81:47;83:16:83:37;:::41:1;84:12:84:17:0;:::21:1;85:8:85:13:0;:::17:1;:20::36:0;:8:::1;:38:95:5:0;87:24:87:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;89:25:89:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;90:25:90:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;91:25:91:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;92:24:92:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;93:25:93:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;94:25:94:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;85:38:95:5;98:12:98:17:0;:::21:1;99:8:99:13:0;:::17:1;:20::36:0;:8:::1;:38:109:5:0;101:24:101:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;103:25:103:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;104:25:104:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;105:25:105:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;106:24:106:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;107:25:107:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;108:25:108:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;99:38:109:5;111:12:111:17:0;:::21:1;112:8:112:13:0;:::17:1;:20::36:0;:8:::1;:38:122:5:0;114:24:114:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;116:25:116:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;117:25:117:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;118:25:118:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;119:24:119:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;120:25:120:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;121:25:121:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;112:38:122:5;124:12:124:17:0;:::21:1;125:8:125:13:0;:::17:1;:20::36:0;:8:::1;:38:135:5:0;127:24:127:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;129:25:129:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;130:25:130:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;131:25:131:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;132:24:132:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;133:25:133:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;134:25:134:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;125:38:135:5;137:12:137:17:0;:::21:1;138:8:138:13:0;:::17:1;:20::36:0;:8:::1;:38:148:5:0;140:24:140:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;142:25:142:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;143:25:143:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;144:25:144:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;145:24:145:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;146:25:146:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;147:25:147:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;138:38:148:5;150:12:150:17:0;:::21:1;151:8:151:13:0;:::17:1;:20::36:0;:8:::1;:38:161:5:0;153:24:153:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;155:25:155:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;156:25:156:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;157:25:157:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;158:24:158:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;159:25:159:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;160:25:160:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;151:38:161:5;163:12:163:17:0;:::21:1;164:8:164:13:0;:::17:1;:20::36:0;:8:::1;:38:174:5:0;166:24:166:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;168:25:168:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;169:25:169:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;170:25:170:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;171:24:171:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;172:25:172:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;173:25:173:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;164:38:174:5;176:12:176:17:0;:::21:1;177:8:177:13:0;:::17:1;:20::36:0;:8:::1;:38:187:5:0;179:24:179:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;181:25:181:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;182:25:182:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;183:25:183:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;184:24:184:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;185:25:185:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;186:25:186:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;177:38:187:5;189:12:189:17:0;:::21:1;190:8:190:13:0;:::17:1;:20::36:0;:8:::1;:38:200:5:0;192:24:192:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;194:25:194:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;195:25:195:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;196:25:196:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;197:24:197:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;198:25:198:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;199:25:199:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;190:38:200:5;202:12:202:17:0;:::21:1;203:8:203:13:0;:::17:1;:20::36:0;:8:::1;:38:213:5:0;205:24:205:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;207:25:207:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;208:25:208:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;209:25:209:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;210:24:210:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;211:25:211:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;212:25:212:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;203:38:213:5;215:12:215:17:0;:::21:1;216:8:216:13:0;:::17:1;:20::36:0;:8:::1;:38:226:5:0;218:24:218:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;220:25:220:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;221:25:221:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;222:25:222:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;223:24:223:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;224:25:224:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;225:25:225:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;216:38:226:5;228:12:228:17:0;:::21:1;229:8:229:13:0;:::17:1;:20::36:0;:8:::1;:38:239:5:0;231:24:231:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;233:25:233:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;234:25:234:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;235:25:235:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;236:24:236:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;237:25:237:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;238:25:238:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;229:38:239:5;241:12:241:17:0;:::21:1;242:8:242:13:0;:::17:1;:20::36:0;:8:::1;:38:252:5:0;244:24:244:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;246:25:246:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;247:25:247:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;248:25:248:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;249:24:249:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;250:25:250:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;251:25:251:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;242:38:252:5;254:12:254:17:0;:::21:1;255:8:255:13:0;:::17:1;:20::36:0;:8:::1;:38:265:5:0;257:24:257:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;259:25:259:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;260:25:260:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;261:25:261:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;262:24:262:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;263:25:263:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;264:25:264:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;255:38:265:5;267:12:267:17:0;:::21:1;268:8:268:13:0;:::17:1;:20::36:0;:8:::1;:38:278:5:0;270:24:270:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;272:25:272:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;273:25:273:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;274:25:274:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;275:24:275:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;276:25:276:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;277:25:277:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;268:38:278:5;280:12:280:17:0;:::21:1;281:8:281:13:0;:::17:1;:20::36:0;:8:::1;:38:291:5:0;283:24:283:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;285:25:285:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;286:25:286:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;287:25:287:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;288:24:288:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;289:25:289:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;290:25:290:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;281:38:291:5;293:12:293:17:0;:::21:1;294:8:294:13:0;:::17:1;:20::36:0;:8:::1;:38:304:5:0;296:24:296:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;298:25:298:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;299:25:299:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;300:25:300:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;301:24:301:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;302:25:302:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;303:25:303:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;294:38:304:5;306:12:306:17:0;:::21:1;307:8:307:13:0;:::17:1;:20::36:0;:8:::1;:38:317:5:0;309:24:309:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;311:25:311:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;312:25:312:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;313:25:313:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;314:24:314:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;315:25:315:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;316:25:316:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;307:38:317:5;319:12:319:17:0;:::21:1;320:8:320:13:0;:::17:1;:20::36:0;:8:::1;:38:330:5:0;322:24:322:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;324:25:324:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;325:25:325:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;326:25:326:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;327:24:327:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;328:25:328:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;329:25:329:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;320:38:330:5;332:12:332:17:0;:::21:1;333:8:333:13:0;:::17:1;:20::36:0;:8:::1;:38:343:5:0;335:24:335:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;337:25:337:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;338:25:338:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;339:25:339:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;340:24:340:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;341:25:341:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;342:25:342:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;333:38:343:5;345:12:345:17:0;:::21:1;346:8:346:13:0;:::17:1;:20::36:0;:8:::1;:38:356:5:0;348:24:348:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;350:25:350:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;351:25:351:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;352:25:352:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;353:24:353:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;354:25:354:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;355:25:355:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;346:38:356:5;25:2:358:3;;;;;;;;;;;;;;;;370::392::0;;;;;372:12:372:33;:37::38;:4::72:1;373:12:373:28:0;:32::33;:4::74:1;374:12:374:29:0;:33::34;:4::76:1;377:23:377:24:0;:12::41:1;:45::63:0;;:4::135:1;378:23:378:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;379:23:379:24:0;:12::37:1;:51::52:0;:41::65:1;:4::104;380:23:380:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;381:23:381:24:0;:12::31:1;:45::46:0;:35::53:1;:4::92;384:22:384:23:0;:12::40:1;:44::64:0;:4::120:1;385:23:385:24:0;:12::41:1;:45::68:0;;:4::138:1;386:23:386:24:0;:12::31:1;:45::46:0;:35::53:1;:4::109;387:23:387:24:0;:12::39:1;:53::54:0;:43::69:1;:4::127;388:23:388:24:0;:12::37:1;:51::52:0;:41::65:1;:4::121;389:23:389:24:0;:12::39:1;:53::54:0;:43::69:1;:4::127;370:2:392:3;;;435::462::0;;;;;437:12:437:33;:37::38;:4::72:1;438:12:438:28:0;:32::33;:4::73:1;439:12:439:29:0;:33::34;:4::75:1;442:23:442:24:0;:12::41:1;:55::56:0;:45::73:1;:4::131;443:23:443:24:0;:12::39:1;:54::55:0;:44::70:1;:73::77:0;:44:::1;:4::139;444:23:444:24:0;:12::37:1;:51::52:0;:41::65:1;:78::79:0;:68::92:1;:41;:4::164;445:23:445:24:0;:12::39:1;:43::45:0;:4::100:1;446:23:446:24:0;:12::31:1;:45::46:0;:35::53:1;:4::113;449:23:449:24:0;:12::41:1;:55::56:0;:45::73:1;:4::129;450:23:450:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;451:23:451:24:0;:12::37:1;:51::52:0;:41::65:1;:4::104;452:23:452:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;453:23:453:24:0;:12::31:1;:45::46:0;:35::53:1;:4::92;456:22:456:23:0;:12::40:1;:44::64:0;:4::120:1;459:23:459:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;435:2:462:3;;;474::489::0;;;476:12:476:33;:37::38;:4::72:1;477:12:477:28:0;:32::33;:4::73:1;478:12:478:29:0;:32::33;:12:::1;:4::75;479:12:479:29:0;:32::33;:12:::1;:4::76;482:23:482:24:0;:12::41:1;:55::56:0;:45::73:1;:4::116;483:23:483:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;484:23:484:24:0;:12::37:1;:50::51:0;:40::64:1;:12;:4::96;485:23:485:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;486:23:486:24:0;:12::31:1;:45::46:0;:35::53:1;:4::92;474:2:489:3;;6:0:490:1;;",
    logs: [
      {
        ip: 43,
        line: 41,
        data: [
          {
            stackIndex: 0,
            type: "int",
            ip: 43
          },
          "time since start"
        ]
      },
      {
        ip: 70,
        line: 46,
        data: [
          {
            stackIndex: 0,
            type: "int",
            ip: 70
          },
          "current emission cap"
        ]
      },
      {
        ip: 81,
        line: 52,
        data: [
          "tokensBought",
          {
            type: "int",
            stackIndex: 0,
            ip: 77
          },
          "issue",
          {
            stackIndex: 0,
            type: "int",
            ip: 81
          }
        ]
      },
      {
        ip: 97,
        line: 59,
        data: [
          {
            stackIndex: 1,
            type: "int",
            ip: 97
          },
          {
            stackIndex: 0,
            type: "int",
            ip: 97
          }
        ]
      },
      {
        ip: 182,
        line: 86,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 182
          }
        ]
      },
      {
        ip: 232,
        line: 100,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 232
          }
        ]
      },
      {
        ip: 282,
        line: 113,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 282
          }
        ]
      },
      {
        ip: 332,
        line: 126,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 332
          }
        ]
      },
      {
        ip: 382,
        line: 139,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 382
          }
        ]
      },
      {
        ip: 432,
        line: 152,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 432
          }
        ]
      },
      {
        ip: 482,
        line: 165,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 482
          }
        ]
      },
      {
        ip: 532,
        line: 178,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 532
          }
        ]
      },
      {
        ip: 582,
        line: 191,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 582
          }
        ]
      },
      {
        ip: 632,
        line: 204,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 632
          }
        ]
      },
      {
        ip: 682,
        line: 217,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 682
          }
        ]
      },
      {
        ip: 732,
        line: 230,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 732
          }
        ]
      },
      {
        ip: 782,
        line: 243,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 782
          }
        ]
      },
      {
        ip: 832,
        line: 256,
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
        ip: 882,
        line: 269,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 882
          }
        ]
      },
      {
        ip: 932,
        line: 282,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 932
          }
        ]
      },
      {
        ip: 982,
        line: 295,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 982
          }
        ]
      },
      {
        ip: 1032,
        line: 308,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 1032
          }
        ]
      },
      {
        ip: 1082,
        line: 321,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 1082
          }
        ]
      },
      {
        ip: 1132,
        line: 334,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 1132
          }
        ]
      },
      {
        ip: 1182,
        line: 347,
        data: [
          "Checking cauldron pool input and output at index",
          {
            stackIndex: 0,
            type: "int",
            ip: 1182
          }
        ]
      }
    ],
    requires: [
      {
        ip: 10,
        line: 27,
        message: "Issue transaction must have at least 4 inputs"
      },
      {
        ip: 14,
        line: 28,
        message: "Issue transaction must have at least 5 outputs"
      },
      {
        ip: 29,
        line: 32,
        message: "Current time is before last interaction time"
      },
      {
        ip: 85,
        line: 53,
        message: "Issue amount exceeds current emission cap"
      },
      {
        ip: 88,
        line: 56,
        message: "Active input index must be 0 for issuance contract"
      },
      {
        ip: 107,
        line: 60,
        message: "Wrong amount of tokens issued"
      },
      {
        ip: 112,
        line: 61,
        message: "Can not change token category"
      },
      {
        ip: 117,
        line: 62,
        message: "Can not change locking bytecode"
      },
      {
        ip: 124,
        line: 63,
        message: "NFT commitment must be updated with current time"
      },
      {
        ip: 132,
        line: 66,
        message: "Council fund share must have the same token category, no nft"
      },
      {
        ip: 137,
        line: 67,
        message: "Council fund share must match the calculated fund share"
      },
      {
        ip: 142,
        line: 68,
        message: "Council fund share must have the correct locking bytecode"
      },
      {
        ip: 146,
        line: 69,
        message: "Council fund share must have a value of 1000 satoshis"
      },
      {
        ip: 157,
        line: 73,
        message: "Investor's share must have the same token category, no nft"
      },
      {
        ip: 162,
        line: 74,
        message: "Investor's share must match the calculated share"
      },
      {
        ip: 167,
        line: 75,
        message: "Investor's share must have the correct locking bytecode"
      },
      {
        ip: 170,
        line: 76,
        message: "Investor's share must have a value of 1000 satoshis"
      },
      {
        ip: 190,
        line: 87,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 195,
        line: 89,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 200,
        line: 90,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 205,
        line: 91,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 211,
        line: 92,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 217,
        line: 93,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 223,
        line: 94,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 240,
        line: 101,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 245,
        line: 103,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 250,
        line: 104,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 255,
        line: 105,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 261,
        line: 106,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 267,
        line: 107,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 273,
        line: 108,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 290,
        line: 114,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 295,
        line: 116,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 300,
        line: 117,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 305,
        line: 118,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 311,
        line: 119,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 317,
        line: 120,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 323,
        line: 121,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 340,
        line: 127,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 345,
        line: 129,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 350,
        line: 130,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 355,
        line: 131,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 361,
        line: 132,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 367,
        line: 133,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 373,
        line: 134,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 390,
        line: 140,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 395,
        line: 142,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 400,
        line: 143,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 405,
        line: 144,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 411,
        line: 145,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 417,
        line: 146,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 423,
        line: 147,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 440,
        line: 153,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 445,
        line: 155,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 450,
        line: 156,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 455,
        line: 157,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 461,
        line: 158,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 467,
        line: 159,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 473,
        line: 160,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 490,
        line: 166,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 495,
        line: 168,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 500,
        line: 169,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 505,
        line: 170,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 511,
        line: 171,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 517,
        line: 172,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 523,
        line: 173,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 540,
        line: 179,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 545,
        line: 181,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 550,
        line: 182,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 555,
        line: 183,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 561,
        line: 184,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 567,
        line: 185,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 573,
        line: 186,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 590,
        line: 192,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 595,
        line: 194,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 600,
        line: 195,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 605,
        line: 196,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 611,
        line: 197,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 617,
        line: 198,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 623,
        line: 199,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 640,
        line: 205,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 645,
        line: 207,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 650,
        line: 208,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 655,
        line: 209,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 661,
        line: 210,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 667,
        line: 211,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 673,
        line: 212,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 690,
        line: 218,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 695,
        line: 220,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 700,
        line: 221,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 705,
        line: 222,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 711,
        line: 223,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 717,
        line: 224,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 723,
        line: 225,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 740,
        line: 231,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 745,
        line: 233,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 750,
        line: 234,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 755,
        line: 235,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 761,
        line: 236,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 767,
        line: 237,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 773,
        line: 238,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 790,
        line: 244,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 795,
        line: 246,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 800,
        line: 247,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 805,
        line: 248,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 811,
        line: 249,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 817,
        line: 250,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 823,
        line: 251,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 840,
        line: 257,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 845,
        line: 259,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 850,
        line: 260,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 855,
        line: 261,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 861,
        line: 262,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 867,
        line: 263,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 873,
        line: 264,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 890,
        line: 270,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 895,
        line: 272,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 900,
        line: 273,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 905,
        line: 274,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 911,
        line: 275,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 917,
        line: 276,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 923,
        line: 277,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 940,
        line: 283,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 945,
        line: 285,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 950,
        line: 286,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 955,
        line: 287,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 961,
        line: 288,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 967,
        line: 289,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 973,
        line: 290,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 990,
        line: 296,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 995,
        line: 298,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 1000,
        line: 299,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 1005,
        line: 300,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 1011,
        line: 301,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 1017,
        line: 302,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 1023,
        line: 303,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 1040,
        line: 309,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 1045,
        line: 311,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 1050,
        line: 312,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 1055,
        line: 313,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 1061,
        line: 314,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 1067,
        line: 315,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 1073,
        line: 316,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 1090,
        line: 322,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 1095,
        line: 324,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 1100,
        line: 325,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 1105,
        line: 326,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 1111,
        line: 327,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 1117,
        line: 328,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 1123,
        line: 329,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 1140,
        line: 335,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 1145,
        line: 337,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 1150,
        line: 338,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 1155,
        line: 339,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 1161,
        line: 340,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 1167,
        line: 341,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 1173,
        line: 342,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 1190,
        line: 348,
        message: "Cauldron pool contract signature must match"
      },
      {
        ip: 1195,
        line: 350,
        message: "Cauldron pool token category must remain the same"
      },
      {
        ip: 1200,
        line: 351,
        message: "Cauldron pool token commitment must remain the same"
      },
      {
        ip: 1205,
        line: 352,
        message: "Cauldron pool token locking bytecode must remain the same"
      },
      {
        ip: 1211,
        line: 353,
        message: "Wrong unlocking bytecode length for cauldron pool input"
      },
      {
        ip: 1217,
        line: 354,
        message: "Cauldron pool token amount must be less than input amount"
      },
      {
        ip: 1223,
        line: 355,
        message: "Cauldron pool satoshi output value must be greater than input value"
      },
      {
        ip: 1248,
        line: 372,
        message: "Active input index must be 0"
      },
      {
        ip: 1251,
        line: 373,
        message: "Migration requires exactly 3 inputs"
      },
      {
        ip: 1254,
        line: 374,
        message: "Migration requires exactly 3 outputs"
      },
      {
        ip: 1259,
        line: 377,
        message: "New locking bytecode must be provided for the issuance fund output"
      },
      {
        ip: 1264,
        line: 378,
        message: "Token category must remain the same"
      },
      {
        ip: 1269,
        line: 379,
        message: "Token amount must remain the same"
      },
      {
        ip: 1274,
        line: 380,
        message: "NFT commitment must remain the same"
      },
      {
        ip: 1279,
        line: 381,
        message: "Output value must remain the same"
      },
      {
        ip: 1283,
        line: 384,
        message: "Admin input must have the correct locking bytecode"
      },
      {
        ip: 1288,
        line: 385,
        message: "New admin locking bytecode must be provided for the admin output"
      },
      {
        ip: 1293,
        line: 386,
        message: "Output value must remain the same for admin output"
      },
      {
        ip: 1298,
        line: 387,
        message: "Token category must remain the same for admin output"
      },
      {
        ip: 1303,
        line: 388,
        message: "Token amount must remain the same for admin output"
      },
      {
        ip: 1309,
        line: 389,
        message: "NFT commitment must remain the same for admin output"
      },
      {
        ip: 1319,
        line: 437,
        message: "Active input index must be 3"
      },
      {
        ip: 1322,
        line: 438,
        message: "Dissolve requires exactly 5 inputs"
      },
      {
        ip: 1325,
        line: 439,
        message: "Dissolve requires exactly 3 outputs"
      },
      {
        ip: 1330,
        line: 442,
        message: "Locking bytecode must be the same as authguard input"
      },
      {
        ip: 1337,
        line: 443,
        message: "Token category must remain the same, become mutable NFT"
      },
      {
        ip: 1345,
        line: 444,
        message: "Token amount must be the sum of authguard and issuance fund inputs"
      },
      {
        ip: 1349,
        line: 445,
        message: "NFT commitment must be empty for authguard output"
      },
      {
        ip: 1354,
        line: 446,
        message: "Output value must remain the same for authguard output"
      },
      {
        ip: 1359,
        line: 449,
        message: "Locking bytecode must be the same as authkey input"
      },
      {
        ip: 1364,
        line: 450,
        message: "Token category must remain the same"
      },
      {
        ip: 1369,
        line: 451,
        message: "Token amount must remain the same"
      },
      {
        ip: 1374,
        line: 452,
        message: "NFT commitment must remain the same"
      },
      {
        ip: 1379,
        line: 453,
        message: "Output value must remain the same"
      },
      {
        ip: 1383,
        line: 456,
        message: "Admin input must have the correct locking bytecode"
      },
      {
        ip: 1389,
        line: 459,
        message: "Token category must remain the same"
      },
      {
        ip: 1397,
        line: 476,
        message: "Active input index must be 0"
      },
      {
        ip: 1400,
        line: 477,
        message: "Donation requires exactly 3 inputs"
      },
      {
        ip: 1404,
        line: 478,
        message: "Donation requires more than 1 output"
      },
      {
        ip: 1408,
        line: 479,
        message: "Donation requires less than 4 outputs"
      },
      {
        ip: 1413,
        line: 482,
        message: "Locking bytecode must remain the same"
      },
      {
        ip: 1418,
        line: 483,
        message: "Token category must remain the same"
      },
      {
        ip: 1424,
        line: 484,
        message: "Token amount must increase"
      },
      {
        ip: 1429,
        line: 485,
        message: "NFT commitment must remain the same"
      },
      {
        ip: 1435,
        line: 486,
        message: "Output value must remain the same"
      }
    ]
  },
  compiler: {
    name: "cashc",
    version: "0.11.0"
  },
  updatedAt: "2025-06-20T13:00:44.547Z"
} as const;