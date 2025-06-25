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
    bytecode: "OP_2 OP_PICK OP_0 OP_NUMEQUAL OP_IF OP_TXINPUTCOUNT OP_4 OP_GREATERTHANOREQUAL OP_VERIFY OP_TXOUTPUTCOUNT OP_5 OP_GREATERTHANOREQUAL OP_VERIFY OP_INPUTINDEX OP_UTXOTOKENCOMMITMENT OP_4 OP_SPLIT OP_DROP OP_BIN2NUM OP_INPUTINDEX OP_UTXOTOKENCOMMITMENT OP_4 OP_SPLIT OP_NIP OP_BIN2NUM OP_TXLOCKTIME OP_LESSTHAN OP_VERIFY OP_TXINPUTCOUNT OP_1SUB OP_OUTPUTTOKENAMOUNT 388e7792702803 OP_DUP OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_SUB 00ca9a3b OP_TXLOCKTIME OP_5 OP_PICK OP_SUB OP_3 OP_2 OP_PICK OP_SWAP OP_ROT OP_MUL OP_ADD OP_DUP OP_MUL OP_OVER OP_DIV OP_3 OP_ROLL OP_2 OP_PICK OP_3 OP_PICK OP_4 OP_PICK OP_MUL OP_3 OP_ROLL OP_DIV OP_SUB OP_MUL OP_SWAP OP_DIV 64 OP_TXINPUTCOUNT OP_1SUB OP_OUTPUTTOKENAMOUNT OP_MUL 5f OP_DIV OP_9 OP_MUL OP_10 OP_DIV OP_SWAP OP_ROT OP_SUB OP_LESSTHANOREQUAL OP_VERIFY OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENAMOUNT OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_2 OP_PICK OP_SUB OP_2 OP_PICK OP_SUB OP_NUMEQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_INPUTINDEX OP_OUTPUTBYTECODE OP_INPUTINDEX OP_UTXOBYTECODE OP_EQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENCOMMITMENT OP_ROT OP_TXLOCKTIME OP_CAT OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY 20 OP_SPLIT OP_DROP OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENAMOUNT OP_OVER OP_NUMEQUALVERIFY OP_1 OP_OUTPUTBYTECODE OP_ROT OP_EQUALVERIFY OP_1 OP_OUTPUTVALUE e803 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_2 OP_SUB OP_DUP OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY 20 OP_SPLIT OP_DROP OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_ROT OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_1 OP_UTXOBYTECODE OP_EQUALVERIFY OP_OUTPUTVALUE e803 OP_NUMEQUALVERIFY 88ac67c0d1c0ce88c25288c0cdc0c788c0c6c0d095c0c6c0cc9490539502e80396c0cc7c94c0d3957ca268 1a OP_INPUTINDEX OP_1ADD OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_3 OP_PICK OP_SPLIT OP_NIP OP_4 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_4 OP_PICK OP_SPLIT OP_NIP OP_5 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_5 OP_PICK OP_SPLIT OP_NIP OP_6 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_6 OP_PICK OP_SPLIT OP_NIP OP_7 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_7 OP_PICK OP_SPLIT OP_NIP OP_8 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_8 OP_PICK OP_SPLIT OP_NIP OP_9 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_9 OP_PICK OP_SPLIT OP_NIP OP_10 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_10 OP_PICK OP_SPLIT OP_NIP OP_11 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_11 OP_PICK OP_SPLIT OP_NIP OP_12 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_12 OP_PICK OP_SPLIT OP_NIP OP_13 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_13 OP_PICK OP_SPLIT OP_NIP OP_14 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_14 OP_PICK OP_SPLIT OP_NIP OP_15 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_15 OP_PICK OP_SPLIT OP_NIP OP_16 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_16 OP_PICK OP_SPLIT OP_NIP 11 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 11 OP_PICK OP_SPLIT OP_NIP 12 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 12 OP_PICK OP_SPLIT OP_NIP 13 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 13 OP_PICK OP_SPLIT OP_NIP 14 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 14 OP_PICK OP_SPLIT OP_NIP 15 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 15 OP_PICK OP_SPLIT OP_NIP 16 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 16 OP_PICK OP_SPLIT OP_NIP 17 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 17 OP_PICK OP_SPLIT OP_NIP 18 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_1 OP_ELSE OP_2 OP_PICK OP_1 OP_NUMEQUAL OP_IF OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_0 OP_OUTPUTBYTECODE OP_4 OP_ROLL OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_1 OP_UTXOBYTECODE OP_ROT OP_EQUALVERIFY OP_1 OP_OUTPUTBYTECODE OP_3 OP_ROLL OP_EQUALVERIFY OP_1 OP_OUTPUTVALUE OP_1 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_1 OP_OUTPUTTOKENCATEGORY OP_1 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENAMOUNT OP_1 OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY OP_1 OP_OUTPUTTOKENCOMMITMENT OP_1 OP_UTXOTOKENCOMMITMENT OP_EQUAL OP_NIP OP_NIP OP_ELSE OP_2 OP_PICK OP_2 OP_NUMEQUAL OP_IF OP_INPUTINDEX OP_3 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_5 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_0 OP_OUTPUTBYTECODE OP_0 OP_UTXOBYTECODE OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_1 OP_CAT OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_3 OP_UTXOTOKENAMOUNT OP_ADD OP_NUMEQUALVERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_1 OP_OUTPUTBYTECODE OP_1 OP_UTXOBYTECODE OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENCATEGORY OP_1 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENAMOUNT OP_1 OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY OP_1 OP_OUTPUTTOKENCOMMITMENT OP_1 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_1 OP_OUTPUTVALUE OP_1 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_2 OP_UTXOBYTECODE OP_ROT OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_3 OP_UTXOTOKENCATEGORY OP_EQUAL OP_NIP OP_NIP OP_ELSE OP_ROT OP_3 OP_NUMEQUALVERIFY OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_1 OP_GREATERTHAN OP_VERIFY OP_TXOUTPUTCOUNT OP_4 OP_LESSTHAN OP_VERIFY OP_0 OP_OUTPUTBYTECODE OP_0 OP_UTXOBYTECODE OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_GREATERTHAN OP_VERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUAL OP_NIP OP_NIP OP_ENDIF OP_ENDIF OP_ENDIF",
    source: "// Olando Community Issuance Fund Contract\n// Each time an investor buys tokens from the cauldron pool, the contract emits extra tokens to the council.\n// The contract is deployed with a fixed supply of 8,888,888,888.88 tokens.\n// The contract emits tokens based on the time since deployment and the amount of tokens bought so far.\n// The contract can be migrated to a new issuance or dissolved to release tokens to the admin.\n\n// NOTE: we are making use of nLocktime, which is MTP (Median Time Past) based.\n// We adjust the passed nLocktime by -2h to make the transactions immediately spendable.\ncontract IssuanceFund(bytes councilFundLockingBytecode, bytes adminLockingBytecode) {\n\n  // invest into Olando ecosystem by buying tokens from the cauldron pool\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input, NFT commitment: 4bytes deployment time + 4bytes last interaction time\n  //   1: investors BCH input to balance the council's OLA share payout\n  //   2..N: cauldron pool inputs\n  //   N+1: investment BCH, no tokens\n  //  outputs:\n  //   0: issuance fund output, NFT commitment: 4bytes deployment time + 4bytes new interaction time (tx.locktime)\n  //   1: council OLA share output, see notes for amounts\n  //   2..N: cauldron pool outputs, same properties as inputs but with reduced token amount\n  //   N+1: investors OLA share output, see notes for amounts\n  //   N+2: BCH change output\n  //\n  // Notes: if the issuance cap is not hit at the time of interaction, then ola bought from cauldron by investor\n  // are augmented with 90% of the tokens bought, the OLA amounts are added together and split in half.\n  // If the issuance cap is hit the contract execution fails, suggesting the investor to buy less tokens.\n  function issue() {\n    // first rough check for presence of a cauldron trade\n    require(tx.inputs.length >= 4, \"Issue transaction must have at least 4 inputs\");\n    require(tx.outputs.length >= 5, \"Issue transaction must have at least 5 outputs\");\n\n    int deploymentTime = int(tx.inputs[this.activeInputIndex].nftCommitment.split(4)[0]);\n    int lastInteractionTime = int(tx.inputs[this.activeInputIndex].nftCommitment.split(4)[1]);\n    require(tx.locktime > lastInteractionTime, \"Current time is before last interaction time\");\n\n    int cauldronTradeAdjustedTokenAmount = tx.outputs[tx.inputs.length - 1].tokenAmount; // 95% of the cauldron pool token-buy output\n\n    int intialSupply = 8888888888888_88; // with 2 decimals\n    int issued = intialSupply - tx.inputs[this.activeInputIndex].tokenAmount;\n\n    int SCALE = 1_000_000_000; // 1e9 for scaling\n    int t = tx.locktime - deploymentTime; // time in seconds since deploymentTime\n\n    int k = 3; // 3E-9 scaled by 1e9\n    int denom = SCALE + k * t; // (1 + 3E-9 * t) * 1e9\n    int denomSquared = denom * denom / SCALE; // (1 + 3E-9 * t)^2 * 1e9\n    int currentEmissionCap = intialSupply * (SCALE - SCALE * SCALE / denomSquared) / SCALE;\n\n    // use inputs.length to find the cauldron token-buy output, since last ouput could be a bch change\n    // here we already assume that the cauldron pool output got only 95% of the tokens bought, the other 5% are forwarded to council fund\n    int tokensBought = 100 * tx.outputs[tx.inputs.length - 1].tokenAmount / 95;\n    int issue = tokensBought * 9 / 10; // 90% of tokens bought\n\n    require(issue <= currentEmissionCap - issued, \"Issue amount exceeds current emission cap\");\n\n    // constrain the input 0 and output 0 to be the issuance fund\n    require(this.activeInputIndex == 0, \"Active input index must be 0 for issuance contract\");\n\n    require(tx.outputs[this.activeInputIndex].tokenAmount == (tx.inputs[this.activeInputIndex].tokenAmount - cauldronTradeAdjustedTokenAmount - cauldronTradeAdjustedTokenAmount), \"Wrong amount of tokens issued\");\n    require(tx.outputs[this.activeInputIndex].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory, \"Can not change token category\");\n    require(tx.outputs[this.activeInputIndex].lockingBytecode == tx.inputs[this.activeInputIndex].lockingBytecode, \"Can not change locking bytecode\");\n    require(tx.outputs[this.activeInputIndex].nftCommitment == bytes(deploymentTime) + bytes(tx.locktime), \"NFT commitment must be updated with current time\");\n\n    // constrain the output 1 to be the council fund share\n    require(tx.outputs[1].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory.split(32)[0], \"Council fund share must have the same token category, no nft\");\n    require(tx.outputs[1].tokenAmount == cauldronTradeAdjustedTokenAmount, \"Council fund share must match the calculated fund share\");\n    require(tx.outputs[1].lockingBytecode == councilFundLockingBytecode, \"Council fund share must have the correct locking bytecode\");\n    require(tx.outputs[1].value == 1000, \"Council fund share must have a value of 1000 satoshis\");\n\n    // constrain the output N+1 to be the investor's share\n    int investorShareIndex = tx.outputs.length - 2;\n    require(tx.outputs[investorShareIndex].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory.split(32)[0], \"Investor's share must have the same token category, no nft\");\n    require(tx.outputs[investorShareIndex].tokenAmount == cauldronTradeAdjustedTokenAmount, \"Investor's share must match the calculated share\");\n    require(tx.outputs[investorShareIndex].lockingBytecode == tx.inputs[1].lockingBytecode, \"Investor's share must have the correct locking bytecode\");\n    require(tx.outputs[investorShareIndex].value == 1000, \"Investor's share must have a value of 1000 satoshis\");\n\n\n    // constrain the cauldron inputs and outputs 2..N\n    bytes cauldronPoolContractSignature = 0x88ac67c0d1c0ce88c25288c0cdc0c788c0c6c0d095c0c6c0cc9490539502e80396c0cc7c94c0d3957ca268; // partial signature of cauldron pool contract\n    int cauldronPoolContractSignatureSplit = 26; // split the signature at this byte index\n\n    int index = this.activeInputIndex + 1;\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n// #region 20 more cauldron pool input-output checks\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n// #endregion\n  }\n\n  // migrate contract to a new instance of issuance fund contract or change admin locking bytecode\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input\n  //   1: admin input\n  //   2: funding input\n  //  outputs:\n  //   0: issuance fund output. all same properties but new locking bytecode\n  //   1: admin output, same as input\n  //   2: bch change output\n  function migrate(bytes newLockingBytecode, bytes newAdminLockingBytecode) {\n    // constrain the general transaction shape\n    require(this.activeInputIndex == 0, \"Active input index must be 0\");\n    require(tx.inputs.length == 3, \"Migration requires exactly 3 inputs\");\n    require(tx.outputs.length == 3, \"Migration requires exactly 3 outputs\");\n\n    // constrain the issuance fund input and output\n    require(tx.outputs[0].lockingBytecode == newLockingBytecode, \"New locking bytecode must be provided for the issuance fund output\");\n    require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[0].tokenAmount == tx.inputs[0].tokenAmount, \"Token amount must remain the same\");\n    require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n    // preserve admin input\n    require(tx.inputs[1].lockingBytecode == adminLockingBytecode, \"Admin input must have the correct locking bytecode\");\n    require(tx.outputs[1].lockingBytecode == newAdminLockingBytecode, \"New admin locking bytecode must be provided for the admin output\");\n    require(tx.outputs[1].value == tx.inputs[1].value, \"Output value must remain the same for admin output\");\n    require(tx.outputs[1].tokenCategory == tx.inputs[1].tokenCategory, \"Token category must remain the same for admin output\");\n    require(tx.outputs[1].tokenAmount == tx.inputs[1].tokenAmount, \"Token amount must remain the same for admin output\");\n    require(tx.outputs[1].nftCommitment == tx.inputs[1].nftCommitment, \"NFT commitment must remain the same for admin output\");\n\n    // bch change output is not burdened with any requirements and must be taken care of by the spender\n  }\n\n  // NOTE: excluded due to input size limitations of 1650 bytes\n  // // dissolve contract and release tokens to admin\n  // // tx layout:\n  // //  inputs:\n  // //   0: issuance fund input\n  // //   1: admin input\n  // //   2: funding input\n  // //  outputs:\n  // //   0: same properties as input 0 paid to admin locking bytecode\n  // //   1: bch change output\n  // function dissolve() {\n  //   // constrain the general transaction shape\n  //   require(this.activeInputIndex == 0, \"Active input index must be 0\");\n  //   require(tx.inputs.length == 3, \"Dissolve requires exactly 3 inputs\");\n  //   require(tx.outputs.length == 2, \"Dissolve requires exactly 2 outputs\");\n\n  //   // constrain the issuance fund input and output\n  //   require(tx.outputs[0].lockingBytecode == tx.inputs[1].lockingBytecode, \"Locking bytecode must be the same as admin input\");\n  //   require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n  //   require(tx.outputs[0].tokenAmount == tx.inputs[0].tokenAmount, \"Token amount must remain the same\");\n  //   require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n  //   require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n  //   // constrain the admin input, do not require it to be present in outputs\n  //   require(tx.inputs[1].lockingBytecode == adminLockingBytecode, \"Admin input must have the correct locking bytecode\");\n\n  //   // bch change output is not burdened with any requirements\n  // }\n\n  // dissolve contract and release tokens to admin\n  // tx layout:\n  //  inputs:\n  //   0: authguard\n  //   1: authkey\n  //   2: admin input\n  //   3: issuance fund input\n  //   4: funding input\n  //  outputs:\n  //   0: authguard output, receives mutable NFT from issuance fund input, commitment set to empty\n  //   1: authkey, no changes\n  //   2: bch change output\n  function dissolveIntoAuthguard() {\n    // constrain the general transaction shape\n    require(this.activeInputIndex == 3, \"Active input index must be 3\");\n    require(tx.inputs.length == 5, \"Dissolve requires exactly 5 inputs\");\n    require(tx.outputs.length == 3, \"Dissolve requires exactly 3 outputs\");\n\n    // constrain the authguard input and output\n    require(tx.outputs[0].lockingBytecode == tx.inputs[0].lockingBytecode, \"Locking bytecode must be the same as authguard input\");\n    require(tx.outputs[0].tokenCategory == (tx.inputs[0].tokenCategory + 0x01), \"Token category must remain the same, become mutable NFT\");\n    require(tx.outputs[0].tokenAmount == tx.inputs[0].tokenAmount + tx.inputs[3].tokenAmount, \"Token amount must be the sum of authguard and issuance fund inputs\");\n    require(tx.outputs[0].nftCommitment == 0x, \"NFT commitment must be empty for authguard output\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same for authguard output\");\n\n    // constrain the authkey input and output\n    require(tx.outputs[1].lockingBytecode == tx.inputs[1].lockingBytecode, \"Locking bytecode must be the same as authkey input\");\n    require(tx.outputs[1].tokenCategory == tx.inputs[1].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[1].tokenAmount == tx.inputs[1].tokenAmount, \"Token amount must remain the same\");\n    require(tx.outputs[1].nftCommitment == tx.inputs[1].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[1].value == tx.inputs[1].value, \"Output value must remain the same\");\n\n    // constrain the admin input, do not require it to be present in outputs\n    require(tx.inputs[2].lockingBytecode == adminLockingBytecode, \"Admin input must have the correct locking bytecode\");\n\n    // constrain the issuance fund input and output\n    require(tx.outputs[0].tokenCategory == tx.inputs[3].tokenCategory, \"Token category must remain the same\");\n\n    // bch change output is not burdened with any requirements\n  }\n\n  // donate to the issuance fund\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input\n  //   1: donation token input, strictly FT\n  //   2: funding input\n  //  outputs:\n  //   0: issuance fund output, no changes\n  //   [1]: token change if any\n  //   [2]: bch change if any\n  function donate() {\n    // constrain the general transaction shape\n    require(this.activeInputIndex == 0, \"Active input index must be 0\");\n    require(tx.inputs.length == 3, \"Donation requires exactly 3 inputs\");\n    require(tx.outputs.length > 1, \"Donation requires more than 1 output\");\n    require(tx.outputs.length < 4, \"Donation requires less than 4 outputs\");\n\n    // constrain the issuance fund input and output\n    require(tx.outputs[0].lockingBytecode == tx.inputs[0].lockingBytecode, \"Locking bytecode must remain the same\");\n    require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[0].tokenAmount > tx.inputs[0].tokenAmount, \"Token amount must increase\");\n    require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n    // bch change output is not burdened with any requirements and must be taken care of by the spender\n  }\n}\n",
    debug: {
        bytecode: "5279009c63c354a269c455a269c0cf547f7581c0cf547f7781c59f69c38cd307388e779270280376c0d0940400ca9a3bc55579945352797c7b959376957896537a52795379547995537a9694957c960164c38cd395015f9659955a967c7b94a169c0009dc0d3c0d05279945279949dc0d1c0ce88c0cdc0c788c0d27bc57e8851d1c0ce01207f758851d3789d51cd7b8851cc02e8039dc4529476d1c0ce01207f758876d37b9d76cd51c788cc02e8039d2b88ac67c0d1c0ce88c25288c0cdc0c788c0c6c0d095c0c6c0cc9490539502e80396c0cc7c94c0d3957ca268011ac08b768b768bc39f6376ca53797f7754798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca54797f7755798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca55797f7756798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca56797f7757798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca57797f7758798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca58797f7759798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca59797f775a798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5a797f775b798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5b797f775c798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5c797f775d798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5d797f775e798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5e797f775f798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5f797f7760798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca60797f770111798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0111797f770112798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0112797f770113798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0113797f770114798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0114797f770115798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0115797f770116798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0116797f770117798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0117797f770118798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a069686d6d6d6d6d6d6d6d6d6d6d6d6d51675279519c63c0009dc3539dc4539d00cd547a8800d100ce8800d300d09d00d200cf8800cc00c69d51c77b8851cd537a8851cc51c69d51d151ce8851d351d09d51d251cf877777675279529c63c0539dc3559dc4539d00cd00c78800d100ce517e8800d300d053d0939d00d2008800cc00c69d51cd51c78851d151ce8851d351d09d51d251cf8851cc51c69d52c77b8800d153ce877777677b539dc0009dc3539dc451a069c4549f6900cd00c78800d100ce8800d300d0a06900d200cf8800cc00c69c7777686868",
        sourceMap: "28:2:356:3;;;;;30:12:30:28;:32::33;:12:::1;:4::84;31:12:31:29:0;:33::34;:12:::1;:4::86;33:39:33:60:0;:29::75:1;:82::83:0;:29::84:1;:::87;:25::88;34:44:34:65:0;:34::80:1;:87::88:0;:34::89:1;:::92;:30::93;35:12:35:23:0;:::45:1;:4::95;37:54:37:70:0;:::74:1;:43::87;39:23:39:39:0;40:17:40:29;:42::63;:32::76:1;:17;42:16:42:29:0;43:12:43:23;:26::40;;:12:::1;45::45:13:0;46:16:46:21;;:24::25;:28::29;:24:::1;:16;47:23:47:36:0;::::1;:39::44:0;:23:::1;48:29:48:41:0;;:45::50;;:53::58;;:61::66;;:53:::1;:69::81:0;;:53:::1;:45;:29::82;:85::90:0;:29:::1;52:23:52:26:0;:40::56;:::60:1;:29::73;:23;:76::78:0;:23:::1;53:31:53:32:0;:16:::1;:35::37:0;:16:::1;55:21:55:39:0;:42::48;:21:::1;:12;:4::95;58:12:58:33:0;:37::38;:4::94:1;60:23:60:44:0;:12::57:1;:72::93:0;:62::106:1;:109::141:0;;:62:::1;:144::176:0;;:62:::1;:4::212;61:23:61:44:0;:12::59:1;:73::94:0;:63::109:1;:4::144;62:23:62:44:0;:12::61:1;:75::96:0;:65::113:1;:4::150;63:23:63:44:0;:12::59:1;:69::83:0;:93::104;:63::105:1;:4::159;66:23:66:24:0;:12::39:1;:53::74:0;:43::89:1;:96::98:0;:43::99:1;:::102;:4::168;67:23:67:24:0;:12::37:1;:41::73:0;:4::134:1;68:23:68:24:0;:12::41:1;:45::71:0;:4::134:1;69:23:69:24:0;:12::31:1;:35::39:0;:4::98:1;72:29:72:46:0;:49::50;:29:::1;73:23:73:41:0;:12::56:1;:70::91:0;:60::106:1;:113::115:0;:60::116:1;:::119;:4::183;74:23:74:41:0;:12::54:1;:58::90:0;:4::144:1;75:23:75:41:0;:12::58:1;:72::73:0;:62::90:1;:4::151;76:12:76:48;:52::56:0;:4::113:1;80:42:80:130:0;81:45:81:47;83:16:83:37;:::41:1;84:12:84:17:0;:::21:1;85:8:85:13:0;:::17:1;:20::36:0;:8:::1;:38:94:5:0;86:24:86:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;88:25:88:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;89:25:89:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;90:25:90:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;91:24:91:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;92:25:92:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;93:25:93:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;85:38:94:5;97:12:97:17:0;:::21:1;98:8:98:13:0;:::17:1;:20::36:0;:8:::1;:38:107:5:0;99:24:99:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;101:25:101:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;102:25:102:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;103:25:103:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;104:24:104:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;105:25:105:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;106:25:106:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;98:38:107:5;109:12:109:17:0;:::21:1;110:8:110:13:0;:::17:1;:20::36:0;:8:::1;:38:120:5:0;112:24:112:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;114:25:114:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;115:25:115:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;116:25:116:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;117:24:117:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;118:25:118:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;119:25:119:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;110:38:120:5;122:12:122:17:0;:::21:1;123:8:123:13:0;:::17:1;:20::36:0;:8:::1;:38:133:5:0;125:24:125:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;127:25:127:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;128:25:128:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;129:25:129:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;130:24:130:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;131:25:131:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;132:25:132:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;123:38:133:5;135:12:135:17:0;:::21:1;136:8:136:13:0;:::17:1;:20::36:0;:8:::1;:38:146:5:0;138:24:138:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;140:25:140:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;141:25:141:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;142:25:142:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;143:24:143:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;144:25:144:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;145:25:145:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;136:38:146:5;148:12:148:17:0;:::21:1;149:8:149:13:0;:::17:1;:20::36:0;:8:::1;:38:159:5:0;151:24:151:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;153:25:153:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;154:25:154:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;155:25:155:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;156:24:156:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;157:25:157:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;158:25:158:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;149:38:159:5;161:12:161:17:0;:::21:1;162:8:162:13:0;:::17:1;:20::36:0;:8:::1;:38:172:5:0;164:24:164:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;166:25:166:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;167:25:167:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;168:25:168:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;169:24:169:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;170:25:170:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;171:25:171:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;162:38:172:5;174:12:174:17:0;:::21:1;175:8:175:13:0;:::17:1;:20::36:0;:8:::1;:38:185:5:0;177:24:177:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;179:25:179:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;180:25:180:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;181:25:181:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;182:24:182:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;183:25:183:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;184:25:184:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;175:38:185:5;187:12:187:17:0;:::21:1;188:8:188:13:0;:::17:1;:20::36:0;:8:::1;:38:198:5:0;190:24:190:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;192:25:192:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;193:25:193:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;194:25:194:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;195:24:195:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;196:25:196:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;197:25:197:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;188:38:198:5;200:12:200:17:0;:::21:1;201:8:201:13:0;:::17:1;:20::36:0;:8:::1;:38:211:5:0;203:24:203:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;205:25:205:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;206:25:206:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;207:25:207:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;208:24:208:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;209:25:209:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;210:25:210:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;201:38:211:5;213:12:213:17:0;:::21:1;214:8:214:13:0;:::17:1;:20::36:0;:8:::1;:38:224:5:0;216:24:216:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;218:25:218:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;219:25:219:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;220:25:220:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;221:24:221:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;222:25:222:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;223:25:223:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;214:38:224:5;226:12:226:17:0;:::21:1;227:8:227:13:0;:::17:1;:20::36:0;:8:::1;:38:237:5:0;229:24:229:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;231:25:231:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;232:25:232:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;233:25:233:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;234:24:234:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;235:25:235:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;236:25:236:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;227:38:237:5;239:12:239:17:0;:::21:1;240:8:240:13:0;:::17:1;:20::36:0;:8:::1;:38:250:5:0;242:24:242:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;244:25:244:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;245:25:245:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;246:25:246:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;247:24:247:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;248:25:248:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;249:25:249:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;240:38:250:5;252:12:252:17:0;:::21:1;253:8:253:13:0;:::17:1;:20::36:0;:8:::1;:38:263:5:0;255:24:255:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;257:25:257:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;258:25:258:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;259:25:259:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;260:24:260:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;261:25:261:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;262:25:262:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;253:38:263:5;265:12:265:17:0;:::21:1;266:8:266:13:0;:::17:1;:20::36:0;:8:::1;:38:276:5:0;268:24:268:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;270:25:270:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;271:25:271:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;272:25:272:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;273:24:273:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;274:25:274:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;275:25:275:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;266:38:276:5;278:12:278:17:0;:::21:1;279:8:279:13:0;:::17:1;:20::36:0;:8:::1;:38:289:5:0;281:24:281:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;283:25:283:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;284:25:284:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;285:25:285:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;286:24:286:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;287:25:287:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;288:25:288:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;279:38:289:5;291:12:291:17:0;:::21:1;292:8:292:13:0;:::17:1;:20::36:0;:8:::1;:38:302:5:0;294:24:294:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;296:25:296:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;297:25:297:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;298:25:298:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;299:24:299:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;300:25:300:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;301:25:301:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;292:38:302:5;304:12:304:17:0;:::21:1;305:8:305:13:0;:::17:1;:20::36:0;:8:::1;:38:315:5:0;307:24:307:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;309:25:309:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;310:25:310:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;311:25:311:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;312:24:312:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;313:25:313:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;314:25:314:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;305:38:315:5;317:12:317:17:0;:::21:1;318:8:318:13:0;:::17:1;:20::36:0;:8:::1;:38:328:5:0;320:24:320:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;322:25:322:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;323:25:323:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;324:25:324:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;325:24:325:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;326:25:326:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;327:25:327:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;318:38:328:5;330:12:330:17:0;:::21:1;331:8:331:13:0;:::17:1;:20::36:0;:8:::1;:38:341:5:0;333:24:333:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;335:25:335:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;336:25:336:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;337:25:337:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;338:24:338:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;339:25:339:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;340:25:340:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;331:38:341:5;343:12:343:17:0;:::21:1;344:8:344:13:0;:::17:1;:20::36:0;:8:::1;:38:354:5:0;346:24:346:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;348:25:348:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;349:25:349:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;350:25:350:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;351:24:351:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;352:25:352:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;353:25:353:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;344:38:354:5;28:2:356:3;;;;;;;;;;;;;;;368::390::0;;;;;370:12:370:33;:37::38;:4::72:1;371:12:371:28:0;:32::33;:4::74:1;372:12:372:29:0;:33::34;:4::76:1;375:23:375:24:0;:12::41:1;:45::63:0;;:4::135:1;376:23:376:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;377:23:377:24:0;:12::37:1;:51::52:0;:41::65:1;:4::104;378:23:378:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;379:23:379:24:0;:12::31:1;:45::46:0;:35::53:1;:4::92;382:22:382:23:0;:12::40:1;:44::64:0;:4::120:1;383:23:383:24:0;:12::41:1;:45::68:0;;:4::138:1;384:23:384:24:0;:12::31:1;:45::46:0;:35::53:1;:4::109;385:23:385:24:0;:12::39:1;:53::54:0;:43::69:1;:4::127;386:23:386:24:0;:12::37:1;:51::52:0;:41::65:1;:4::121;387:23:387:24:0;:12::39:1;:53::54:0;:43::69:1;:4::127;368:2:390:3;;;433::460::0;;;;;435:12:435:33;:37::38;:4::72:1;436:12:436:28:0;:32::33;:4::73:1;437:12:437:29:0;:33::34;:4::75:1;440:23:440:24:0;:12::41:1;:55::56:0;:45::73:1;:4::131;441:23:441:24:0;:12::39:1;:54::55:0;:44::70:1;:73::77:0;:44:::1;:4::139;442:23:442:24:0;:12::37:1;:51::52:0;:41::65:1;:78::79:0;:68::92:1;:41;:4::164;443:23:443:24:0;:12::39:1;:43::45:0;:4::100:1;444:23:444:24:0;:12::31:1;:45::46:0;:35::53:1;:4::113;447:23:447:24:0;:12::41:1;:55::56:0;:45::73:1;:4::129;448:23:448:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;449:23:449:24:0;:12::37:1;:51::52:0;:41::65:1;:4::104;450:23:450:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;451:23:451:24:0;:12::31:1;:45::46:0;:35::53:1;:4::92;454:22:454:23:0;:12::40:1;:44::64:0;:4::120:1;457:23:457:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;433:2:460:3;;;472::487::0;;;474:12:474:33;:37::38;:4::72:1;475:12:475:28:0;:32::33;:4::73:1;476:12:476:29:0;:32::33;:12:::1;:4::75;477:12:477:29:0;:32::33;:12:::1;:4::76;480:23:480:24:0;:12::41:1;:55::56:0;:45::73:1;:4::116;481:23:481:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;482:23:482:24:0;:12::37:1;:50::51:0;:40::64:1;:12;:4::96;483:23:483:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;484:23:484:24:0;:12::31:1;:45::46:0;:35::53:1;:4::92;472:2:487:3;;9:0:488:1;;",
        logs: [
            {
                ip: 270,
                line: 111,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 270
                    }
                ]
            },
            {
                ip: 320,
                line: 124,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 320
                    }
                ]
            },
            {
                ip: 370,
                line: 137,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 370
                    }
                ]
            },
            {
                ip: 420,
                line: 150,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 420
                    }
                ]
            },
            {
                ip: 470,
                line: 163,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 470
                    }
                ]
            },
            {
                ip: 520,
                line: 176,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 520
                    }
                ]
            },
            {
                ip: 570,
                line: 189,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 570
                    }
                ]
            },
            {
                ip: 620,
                line: 202,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 620
                    }
                ]
            },
            {
                ip: 670,
                line: 215,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 670
                    }
                ]
            },
            {
                ip: 720,
                line: 228,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 720
                    }
                ]
            },
            {
                ip: 770,
                line: 241,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 770
                    }
                ]
            },
            {
                ip: 820,
                line: 254,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 820
                    }
                ]
            },
            {
                ip: 870,
                line: 267,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 870
                    }
                ]
            },
            {
                ip: 920,
                line: 280,
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
                ip: 970,
                line: 293,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 970
                    }
                ]
            },
            {
                ip: 1020,
                line: 306,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 1020
                    }
                ]
            },
            {
                ip: 1070,
                line: 319,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 1070
                    }
                ]
            },
            {
                ip: 1120,
                line: 332,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 1120
                    }
                ]
            },
            {
                ip: 1170,
                line: 345,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 1170
                    }
                ]
            }
        ],
        requires: [
            {
                ip: 10,
                line: 30,
                message: "Issue transaction must have at least 4 inputs"
            },
            {
                ip: 14,
                line: 31,
                message: "Issue transaction must have at least 5 outputs"
            },
            {
                ip: 29,
                line: 35,
                message: "Current time is before last interaction time"
            },
            {
                ip: 85,
                line: 55,
                message: "Issue amount exceeds current emission cap"
            },
            {
                ip: 88,
                line: 58,
                message: "Active input index must be 0 for issuance contract"
            },
            {
                ip: 99,
                line: 60,
                message: "Wrong amount of tokens issued"
            },
            {
                ip: 104,
                line: 61,
                message: "Can not change token category"
            },
            {
                ip: 109,
                line: 62,
                message: "Can not change locking bytecode"
            },
            {
                ip: 115,
                line: 63,
                message: "NFT commitment must be updated with current time"
            },
            {
                ip: 123,
                line: 66,
                message: "Council fund share must have the same token category, no nft"
            },
            {
                ip: 127,
                line: 67,
                message: "Council fund share must match the calculated fund share"
            },
            {
                ip: 131,
                line: 68,
                message: "Council fund share must have the correct locking bytecode"
            },
            {
                ip: 135,
                line: 69,
                message: "Council fund share must have a value of 1000 satoshis"
            },
            {
                ip: 146,
                line: 73,
                message: "Investor's share must have the same token category, no nft"
            },
            {
                ip: 150,
                line: 74,
                message: "Investor's share must match the calculated share"
            },
            {
                ip: 155,
                line: 75,
                message: "Investor's share must have the correct locking bytecode"
            },
            {
                ip: 158,
                line: 76,
                message: "Investor's share must have a value of 1000 satoshis"
            },
            {
                ip: 178,
                line: 86,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 183,
                line: 88,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 188,
                line: 89,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 193,
                line: 90,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 199,
                line: 91,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 205,
                line: 92,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 211,
                line: 93,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 228,
                line: 99,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 233,
                line: 101,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 238,
                line: 102,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 243,
                line: 103,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 249,
                line: 104,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 255,
                line: 105,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 261,
                line: 106,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 278,
                line: 112,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 283,
                line: 114,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 288,
                line: 115,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 293,
                line: 116,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 299,
                line: 117,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 305,
                line: 118,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 311,
                line: 119,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 328,
                line: 125,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 333,
                line: 127,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 338,
                line: 128,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 343,
                line: 129,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 349,
                line: 130,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 355,
                line: 131,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 361,
                line: 132,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 378,
                line: 138,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 383,
                line: 140,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 388,
                line: 141,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 393,
                line: 142,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 399,
                line: 143,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 405,
                line: 144,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 411,
                line: 145,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 428,
                line: 151,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 433,
                line: 153,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 438,
                line: 154,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 443,
                line: 155,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 449,
                line: 156,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 455,
                line: 157,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 461,
                line: 158,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 478,
                line: 164,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 483,
                line: 166,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 488,
                line: 167,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 493,
                line: 168,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 499,
                line: 169,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 505,
                line: 170,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 511,
                line: 171,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 528,
                line: 177,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 533,
                line: 179,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 538,
                line: 180,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 543,
                line: 181,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 549,
                line: 182,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 555,
                line: 183,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 561,
                line: 184,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 578,
                line: 190,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 583,
                line: 192,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 588,
                line: 193,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 593,
                line: 194,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 599,
                line: 195,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 605,
                line: 196,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 611,
                line: 197,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 628,
                line: 203,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 633,
                line: 205,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 638,
                line: 206,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 643,
                line: 207,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 649,
                line: 208,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 655,
                line: 209,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 661,
                line: 210,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 678,
                line: 216,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 683,
                line: 218,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 688,
                line: 219,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 693,
                line: 220,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 699,
                line: 221,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 705,
                line: 222,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 711,
                line: 223,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 728,
                line: 229,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 733,
                line: 231,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 738,
                line: 232,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 743,
                line: 233,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 749,
                line: 234,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 755,
                line: 235,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 761,
                line: 236,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 778,
                line: 242,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 783,
                line: 244,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 788,
                line: 245,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 793,
                line: 246,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 799,
                line: 247,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 805,
                line: 248,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 811,
                line: 249,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 828,
                line: 255,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 833,
                line: 257,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 838,
                line: 258,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 843,
                line: 259,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 849,
                line: 260,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 855,
                line: 261,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 861,
                line: 262,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 878,
                line: 268,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 883,
                line: 270,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 888,
                line: 271,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 893,
                line: 272,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 899,
                line: 273,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 905,
                line: 274,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 911,
                line: 275,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 928,
                line: 281,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 933,
                line: 283,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 938,
                line: 284,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 943,
                line: 285,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 949,
                line: 286,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 955,
                line: 287,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 961,
                line: 288,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 978,
                line: 294,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 983,
                line: 296,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 988,
                line: 297,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 993,
                line: 298,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 999,
                line: 299,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 1005,
                line: 300,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 1011,
                line: 301,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 1028,
                line: 307,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 1033,
                line: 309,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 1038,
                line: 310,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 1043,
                line: 311,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 1049,
                line: 312,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 1055,
                line: 313,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 1061,
                line: 314,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 1078,
                line: 320,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 1083,
                line: 322,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 1088,
                line: 323,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 1093,
                line: 324,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 1099,
                line: 325,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 1105,
                line: 326,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 1111,
                line: 327,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 1128,
                line: 333,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 1133,
                line: 335,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 1138,
                line: 336,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 1143,
                line: 337,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 1149,
                line: 338,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 1155,
                line: 339,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 1161,
                line: 340,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 1178,
                line: 346,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 1183,
                line: 348,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 1188,
                line: 349,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 1193,
                line: 350,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 1199,
                line: 351,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 1205,
                line: 352,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 1211,
                line: 353,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 1235,
                line: 370,
                message: "Active input index must be 0"
            },
            {
                ip: 1238,
                line: 371,
                message: "Migration requires exactly 3 inputs"
            },
            {
                ip: 1241,
                line: 372,
                message: "Migration requires exactly 3 outputs"
            },
            {
                ip: 1246,
                line: 375,
                message: "New locking bytecode must be provided for the issuance fund output"
            },
            {
                ip: 1251,
                line: 376,
                message: "Token category must remain the same"
            },
            {
                ip: 1256,
                line: 377,
                message: "Token amount must remain the same"
            },
            {
                ip: 1261,
                line: 378,
                message: "NFT commitment must remain the same"
            },
            {
                ip: 1266,
                line: 379,
                message: "Output value must remain the same"
            },
            {
                ip: 1270,
                line: 382,
                message: "Admin input must have the correct locking bytecode"
            },
            {
                ip: 1275,
                line: 383,
                message: "New admin locking bytecode must be provided for the admin output"
            },
            {
                ip: 1280,
                line: 384,
                message: "Output value must remain the same for admin output"
            },
            {
                ip: 1285,
                line: 385,
                message: "Token category must remain the same for admin output"
            },
            {
                ip: 1290,
                line: 386,
                message: "Token amount must remain the same for admin output"
            },
            {
                ip: 1296,
                line: 387,
                message: "NFT commitment must remain the same for admin output"
            },
            {
                ip: 1306,
                line: 435,
                message: "Active input index must be 3"
            },
            {
                ip: 1309,
                line: 436,
                message: "Dissolve requires exactly 5 inputs"
            },
            {
                ip: 1312,
                line: 437,
                message: "Dissolve requires exactly 3 outputs"
            },
            {
                ip: 1317,
                line: 440,
                message: "Locking bytecode must be the same as authguard input"
            },
            {
                ip: 1324,
                line: 441,
                message: "Token category must remain the same, become mutable NFT"
            },
            {
                ip: 1332,
                line: 442,
                message: "Token amount must be the sum of authguard and issuance fund inputs"
            },
            {
                ip: 1336,
                line: 443,
                message: "NFT commitment must be empty for authguard output"
            },
            {
                ip: 1341,
                line: 444,
                message: "Output value must remain the same for authguard output"
            },
            {
                ip: 1346,
                line: 447,
                message: "Locking bytecode must be the same as authkey input"
            },
            {
                ip: 1351,
                line: 448,
                message: "Token category must remain the same"
            },
            {
                ip: 1356,
                line: 449,
                message: "Token amount must remain the same"
            },
            {
                ip: 1361,
                line: 450,
                message: "NFT commitment must remain the same"
            },
            {
                ip: 1366,
                line: 451,
                message: "Output value must remain the same"
            },
            {
                ip: 1370,
                line: 454,
                message: "Admin input must have the correct locking bytecode"
            },
            {
                ip: 1376,
                line: 457,
                message: "Token category must remain the same"
            },
            {
                ip: 1384,
                line: 474,
                message: "Active input index must be 0"
            },
            {
                ip: 1387,
                line: 475,
                message: "Donation requires exactly 3 inputs"
            },
            {
                ip: 1391,
                line: 476,
                message: "Donation requires more than 1 output"
            },
            {
                ip: 1395,
                line: 477,
                message: "Donation requires less than 4 outputs"
            },
            {
                ip: 1400,
                line: 480,
                message: "Locking bytecode must remain the same"
            },
            {
                ip: 1405,
                line: 481,
                message: "Token category must remain the same"
            },
            {
                ip: 1411,
                line: 482,
                message: "Token amount must increase"
            },
            {
                ip: 1416,
                line: 483,
                message: "NFT commitment must remain the same"
            },
            {
                ip: 1422,
                line: 484,
                message: "Output value must remain the same"
            }
        ]
    },
    compiler: {
        name: "cashc",
        version: "0.11.0"
    },
    updatedAt: "2025-06-20T13:59:09.019Z"
};
//# sourceMappingURL=IssuanceFund.artifact.js.map