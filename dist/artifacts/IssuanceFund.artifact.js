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
    bytecode: "OP_2 OP_PICK OP_0 OP_NUMEQUAL OP_IF OP_TXINPUTCOUNT OP_4 OP_GREATERTHANOREQUAL OP_VERIFY OP_TXOUTPUTCOUNT OP_5 OP_GREATERTHANOREQUAL OP_VERIFY OP_TXOUTPUTCOUNT OP_TXINPUTCOUNT OP_1ADD OP_NUMEQUALVERIFY OP_INPUTINDEX OP_UTXOTOKENCOMMITMENT OP_4 OP_SPLIT OP_DROP OP_BIN2NUM OP_INPUTINDEX OP_UTXOTOKENCOMMITMENT OP_4 OP_SPLIT OP_NIP OP_BIN2NUM OP_TXLOCKTIME OP_LESSTHAN OP_VERIFY OP_TXINPUTCOUNT OP_1SUB OP_OUTPUTTOKENAMOUNT 388e7792702803 OP_DUP OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_SUB 00ca9a3b OP_TXLOCKTIME OP_5 OP_PICK OP_SUB OP_3 OP_2 OP_PICK OP_SWAP OP_ROT OP_MUL OP_ADD OP_DUP OP_MUL OP_OVER OP_DIV OP_3 OP_ROLL OP_2 OP_PICK OP_3 OP_PICK OP_4 OP_PICK OP_MUL OP_3 OP_ROLL OP_DIV OP_SUB OP_MUL OP_SWAP OP_DIV 64 OP_TXINPUTCOUNT OP_1SUB OP_OUTPUTTOKENAMOUNT OP_MUL 5f OP_DIV OP_9 OP_MUL OP_10 OP_DIV OP_SWAP OP_ROT OP_SUB OP_LESSTHANOREQUAL OP_VERIFY OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENAMOUNT OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_2 OP_PICK OP_SUB OP_NUMEQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_INPUTINDEX OP_OUTPUTBYTECODE OP_INPUTINDEX OP_UTXOBYTECODE OP_EQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENCOMMITMENT OP_ROT OP_TXLOCKTIME OP_CAT OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY 20 OP_SPLIT OP_DROP OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENAMOUNT OP_OVER OP_NUMEQUALVERIFY OP_1 OP_OUTPUTBYTECODE OP_ROT OP_EQUALVERIFY OP_1 OP_OUTPUTVALUE e803 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_2 OP_SUB OP_DUP OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY 20 OP_SPLIT OP_DROP OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_ROT OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_1 OP_UTXOBYTECODE OP_EQUALVERIFY OP_OUTPUTVALUE e803 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_1SUB OP_OUTPUTTOKENCATEGORY OP_0 OP_EQUALVERIFY 88ac67c0d1c0ce88c25288c0cdc0c788c0c6c0d095c0c6c0cc9490539502e80396c0cc7c94c0d3957ca268 1a OP_INPUTINDEX OP_1ADD OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_3 OP_PICK OP_SPLIT OP_NIP OP_4 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_4 OP_PICK OP_SPLIT OP_NIP OP_5 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_5 OP_PICK OP_SPLIT OP_NIP OP_6 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_6 OP_PICK OP_SPLIT OP_NIP OP_7 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_7 OP_PICK OP_SPLIT OP_NIP OP_8 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_8 OP_PICK OP_SPLIT OP_NIP OP_9 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_9 OP_PICK OP_SPLIT OP_NIP OP_10 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_10 OP_PICK OP_SPLIT OP_NIP OP_11 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_11 OP_PICK OP_SPLIT OP_NIP OP_12 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_12 OP_PICK OP_SPLIT OP_NIP OP_13 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_13 OP_PICK OP_SPLIT OP_NIP OP_14 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_14 OP_PICK OP_SPLIT OP_NIP OP_15 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_15 OP_PICK OP_SPLIT OP_NIP OP_16 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_16 OP_PICK OP_SPLIT OP_NIP 11 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 11 OP_PICK OP_SPLIT OP_NIP 12 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 12 OP_PICK OP_SPLIT OP_NIP 13 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 13 OP_PICK OP_SPLIT OP_NIP 14 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 14 OP_PICK OP_SPLIT OP_NIP 15 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 15 OP_PICK OP_SPLIT OP_NIP 16 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 16 OP_PICK OP_SPLIT OP_NIP 17 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 17 OP_PICK OP_SPLIT OP_NIP 18 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_1 OP_ELSE OP_2 OP_PICK OP_1 OP_NUMEQUAL OP_IF OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_0 OP_OUTPUTBYTECODE OP_4 OP_ROLL OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_1 OP_UTXOBYTECODE OP_ROT OP_EQUALVERIFY OP_1 OP_OUTPUTBYTECODE OP_3 OP_ROLL OP_EQUALVERIFY OP_1 OP_OUTPUTVALUE OP_1 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_1 OP_OUTPUTTOKENCATEGORY OP_1 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENAMOUNT OP_1 OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY OP_1 OP_OUTPUTTOKENCOMMITMENT OP_1 OP_UTXOTOKENCOMMITMENT OP_EQUAL OP_NIP OP_NIP OP_ELSE OP_2 OP_PICK OP_2 OP_NUMEQUAL OP_IF OP_INPUTINDEX OP_3 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_5 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_0 OP_OUTPUTBYTECODE OP_0 OP_UTXOBYTECODE OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_1 OP_CAT OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_3 OP_UTXOTOKENAMOUNT OP_ADD OP_NUMEQUALVERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_1 OP_OUTPUTBYTECODE OP_1 OP_UTXOBYTECODE OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENCATEGORY OP_1 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENAMOUNT OP_1 OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY OP_1 OP_OUTPUTTOKENCOMMITMENT OP_1 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_1 OP_OUTPUTVALUE OP_1 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_2 OP_UTXOBYTECODE OP_ROT OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_3 OP_UTXOTOKENCATEGORY OP_EQUAL OP_NIP OP_NIP OP_ELSE OP_ROT OP_3 OP_NUMEQUALVERIFY OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_1 OP_GREATERTHAN OP_VERIFY OP_TXOUTPUTCOUNT OP_4 OP_LESSTHAN OP_VERIFY OP_0 OP_OUTPUTBYTECODE OP_0 OP_UTXOBYTECODE OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_GREATERTHAN OP_VERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT 388e7792702803 OP_LESSTHANOREQUAL OP_NIP OP_NIP OP_ENDIF OP_ENDIF OP_ENDIF",
    source: "// Olando Community Issuance Fund Contract\n// Each time an investor buys tokens from the cauldron pool, the contract emits extra tokens to the council.\n// The contract is deployed with a fixed supply of 8,888,888,888.88 tokens.\n// The contract emits tokens based on the time since deployment and the amount of tokens bought so far.\n// The contract can be migrated to a new issuance or dissolved to release tokens to the admin.\n\n// NOTE: we are making use of nLocktime, which is MTP (Median Time Past) based.\n// We adjust the passed nLocktime by -2h to make the transactions immediately spendable.\ncontract IssuanceFund(bytes councilFundLockingBytecode, bytes adminLockingBytecode) {\n\n  // invest into Olando ecosystem by buying tokens from the cauldron pool\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input, NFT commitment: 4bytes deployment time + 4bytes last interaction time\n  //   1: investors BCH input to balance the council's OLA share payout\n  //   2..N: cauldron pool inputs\n  //   N+1: investment BCH, no tokens\n  //  outputs:\n  //   0: issuance fund output, NFT commitment: 4bytes deployment time + 4bytes new interaction time (tx.locktime)\n  //   1: council OLA share output, see notes for amounts\n  //   2..N: cauldron pool outputs, same properties as inputs but with reduced token amount\n  //   N+1: investors OLA share output, see notes for amounts\n  //   N+2: BCH change output\n  //\n  // Notes: if the issuance cap is not hit at the time of interaction, then ola bought from cauldron by investor\n  // are augmented with 90% of the tokens bought, the OLA amounts are added together and split in half.\n  // If the issuance cap is hit the contract execution fails, suggesting the investor to buy less tokens.\n  function issue() {\n    // first rough check for presence of a cauldron trade\n    require(tx.inputs.length >= 4, \"Issue transaction must have at least 4 inputs\");\n    require(tx.outputs.length >= 5, \"Issue transaction must have at least 5 outputs\");\n    require(tx.outputs.length == tx.inputs.length + 1, \"Issue transaction must have one more output than inputs\");\n\n    int deploymentTime = int(tx.inputs[this.activeInputIndex].nftCommitment.split(4)[0]);\n    int lastInteractionTime = int(tx.inputs[this.activeInputIndex].nftCommitment.split(4)[1]);\n    require(tx.locktime > lastInteractionTime, \"Current time is before last interaction time\");\n\n    int cauldronTradeAdjustedTokenAmount = tx.outputs[tx.inputs.length - 1].tokenAmount; // 95% of the cauldron pool token-buy output\n\n    int intialSupply = 8888888888888_88; // with 2 decimals\n    int issued = intialSupply - tx.inputs[this.activeInputIndex].tokenAmount;\n\n    int SCALE = 1_000_000_000; // 1e9 for scaling\n    int t = tx.locktime - deploymentTime; // time in seconds since deploymentTime\n\n    int k = 3; // 3E-9 scaled by 1e9\n    int denom = SCALE + k * t; // (1 + 3E-9 * t) * 1e9\n    int denomSquared = denom * denom / SCALE; // (1 + 3E-9 * t)^2 * 1e9\n    int currentEmissionCap = intialSupply * (SCALE - SCALE * SCALE / denomSquared) / SCALE;\n\n    // use inputs.length to find the cauldron token-buy output, since last ouput could be a bch change\n    // here we already assume that the cauldron pool output got only 95% of the tokens bought, the other 5% are forwarded to council fund\n    int tokensBought = 100 * tx.outputs[tx.inputs.length - 1].tokenAmount / 95;\n    int issue = tokensBought * 9 / 10; // 90% of tokens bought\n\n    require(issue <= currentEmissionCap - issued, \"Issue amount exceeds current emission cap\");\n\n    // constrain the input 0 and output 0 to be the issuance fund\n    require(this.activeInputIndex == 0, \"Active input index must be 0 for issuance contract\");\n\n    require(tx.outputs[this.activeInputIndex].tokenAmount == (tx.inputs[this.activeInputIndex].tokenAmount - cauldronTradeAdjustedTokenAmount), \"Wrong amount of tokens issued\");\n    require(tx.outputs[this.activeInputIndex].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory, \"Can not change token category\");\n    require(tx.outputs[this.activeInputIndex].lockingBytecode == tx.inputs[this.activeInputIndex].lockingBytecode, \"Can not change locking bytecode\");\n    require(tx.outputs[this.activeInputIndex].nftCommitment == bytes(deploymentTime) + bytes(tx.locktime), \"NFT commitment must be updated with current time\");\n\n    // constrain the output 1 to be the council fund share\n    require(tx.outputs[1].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory.split(32)[0], \"Council fund share must have the same token category, no nft\");\n    require(tx.outputs[1].tokenAmount == cauldronTradeAdjustedTokenAmount, \"Council fund share must match the calculated fund share\");\n    require(tx.outputs[1].lockingBytecode == councilFundLockingBytecode, \"Council fund share must have the correct locking bytecode\");\n    require(tx.outputs[1].value == 1000, \"Council fund share must have a value of 1000 satoshis\");\n\n    // constrain the output N+1 to be the investor's share\n    int investorShareIndex = tx.outputs.length - 2;\n    require(tx.outputs[investorShareIndex].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory.split(32)[0], \"Investor's share must have the same token category, no nft\");\n    require(tx.outputs[investorShareIndex].tokenAmount == cauldronTradeAdjustedTokenAmount, \"Investor's share must match the calculated share\");\n    require(tx.outputs[investorShareIndex].lockingBytecode == tx.inputs[1].lockingBytecode, \"Investor's share must have the correct locking bytecode\");\n    require(tx.outputs[investorShareIndex].value == 1000, \"Investor's share must have a value of 1000 satoshis\");\n\n    // constrain the output N+2 (last output) to be pure bch change\n    int changeOutputIndex = tx.outputs.length - 1;\n    require(tx.outputs[changeOutputIndex].tokenCategory == 0x, \"Change output must have no token category\");\n\n    // constrain the cauldron inputs and outputs 2..N\n    bytes cauldronPoolContractSignature = 0x88ac67c0d1c0ce88c25288c0cdc0c788c0c6c0d095c0c6c0cc9490539502e80396c0cc7c94c0d3957ca268; // partial signature of cauldron pool contract\n    int cauldronPoolContractSignatureSplit = 26; // split the signature at this byte index\n\n    int index = this.activeInputIndex + 1;\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n// #region 20 more cauldron pool input-output checks\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n// #endregion\n  }\n\n  // migrate contract to a new instance of issuance fund contract or change admin locking bytecode\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input\n  //   1: admin input\n  //   2: funding input\n  //  outputs:\n  //   0: issuance fund output. all same properties but new locking bytecode\n  //   1: admin output, same as input\n  //   2: bch change output\n  function migrate(bytes newLockingBytecode, bytes newAdminLockingBytecode) {\n    // constrain the general transaction shape\n    require(this.activeInputIndex == 0, \"Active input index must be 0\");\n    require(tx.inputs.length == 3, \"Migration requires exactly 3 inputs\");\n    require(tx.outputs.length == 3, \"Migration requires exactly 3 outputs\");\n\n    // constrain the issuance fund input and output\n    require(tx.outputs[0].lockingBytecode == newLockingBytecode, \"New locking bytecode must be provided for the issuance fund output\");\n    require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[0].tokenAmount == tx.inputs[0].tokenAmount, \"Token amount must remain the same\");\n    require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n    // preserve admin input\n    require(tx.inputs[1].lockingBytecode == adminLockingBytecode, \"Admin input must have the correct locking bytecode\");\n    require(tx.outputs[1].lockingBytecode == newAdminLockingBytecode, \"New admin locking bytecode must be provided for the admin output\");\n    require(tx.outputs[1].value == tx.inputs[1].value, \"Output value must remain the same for admin output\");\n    require(tx.outputs[1].tokenCategory == tx.inputs[1].tokenCategory, \"Token category must remain the same for admin output\");\n    require(tx.outputs[1].tokenAmount == tx.inputs[1].tokenAmount, \"Token amount must remain the same for admin output\");\n    require(tx.outputs[1].nftCommitment == tx.inputs[1].nftCommitment, \"NFT commitment must remain the same for admin output\");\n\n    // bch change output is not burdened with any requirements and must be taken care of by the spender\n  }\n\n  // NOTE: excluded due to input size limitations of 1650 bytes\n  // // dissolve contract and release tokens to admin\n  // // tx layout:\n  // //  inputs:\n  // //   0: issuance fund input\n  // //   1: admin input\n  // //   2: funding input\n  // //  outputs:\n  // //   0: same properties as input 0 paid to admin locking bytecode\n  // //   1: bch change output\n  // function dissolve() {\n  //   // constrain the general transaction shape\n  //   require(this.activeInputIndex == 0, \"Active input index must be 0\");\n  //   require(tx.inputs.length == 3, \"Dissolve requires exactly 3 inputs\");\n  //   require(tx.outputs.length == 2, \"Dissolve requires exactly 2 outputs\");\n\n  //   // constrain the issuance fund input and output\n  //   require(tx.outputs[0].lockingBytecode == tx.inputs[1].lockingBytecode, \"Locking bytecode must be the same as admin input\");\n  //   require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n  //   require(tx.outputs[0].tokenAmount == tx.inputs[0].tokenAmount, \"Token amount must remain the same\");\n  //   require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n  //   require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n  //   // constrain the admin input, do not require it to be present in outputs\n  //   require(tx.inputs[1].lockingBytecode == adminLockingBytecode, \"Admin input must have the correct locking bytecode\");\n\n  //   // bch change output is not burdened with any requirements\n  // }\n\n  // dissolve contract and release tokens to admin\n  // tx layout:\n  //  inputs:\n  //   0: authguard\n  //   1: authkey\n  //   2: admin input\n  //   3: issuance fund input\n  //   4: funding input\n  //  outputs:\n  //   0: authguard output, receives mutable NFT from issuance fund input, commitment set to empty\n  //   1: authkey, no changes\n  //   2: bch change output\n  function dissolveIntoAuthguard() {\n    // constrain the general transaction shape\n    require(this.activeInputIndex == 3, \"Active input index must be 3\");\n    require(tx.inputs.length == 5, \"Dissolve requires exactly 5 inputs\");\n    require(tx.outputs.length == 3, \"Dissolve requires exactly 3 outputs\");\n\n    // constrain the authguard input and output\n    require(tx.outputs[0].lockingBytecode == tx.inputs[0].lockingBytecode, \"Locking bytecode must be the same as authguard input\");\n    require(tx.outputs[0].tokenCategory == (tx.inputs[0].tokenCategory + 0x01), \"Token category must remain the same, become mutable NFT\");\n    require(tx.outputs[0].tokenAmount == tx.inputs[0].tokenAmount + tx.inputs[3].tokenAmount, \"Token amount must be the sum of authguard and issuance fund inputs\");\n    require(tx.outputs[0].nftCommitment == 0x, \"NFT commitment must be empty for authguard output\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same for authguard output\");\n\n    // constrain the authkey input and output\n    require(tx.outputs[1].lockingBytecode == tx.inputs[1].lockingBytecode, \"Locking bytecode must be the same as authkey input\");\n    require(tx.outputs[1].tokenCategory == tx.inputs[1].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[1].tokenAmount == tx.inputs[1].tokenAmount, \"Token amount must remain the same\");\n    require(tx.outputs[1].nftCommitment == tx.inputs[1].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[1].value == tx.inputs[1].value, \"Output value must remain the same\");\n\n    // constrain the admin input, do not require it to be present in outputs\n    require(tx.inputs[2].lockingBytecode == adminLockingBytecode, \"Admin input must have the correct locking bytecode\");\n\n    // constrain the issuance fund input and output\n    require(tx.outputs[0].tokenCategory == tx.inputs[3].tokenCategory, \"Token category must remain the same\");\n\n    // bch change output is not burdened with any requirements\n  }\n\n  // donate to the issuance fund\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input\n  //   1: donation token input, strictly FT\n  //   2: funding input\n  //  outputs:\n  //   0: issuance fund output, no changes\n  //   [1]: token change if any\n  //   [2]: bch change if any\n  function donate() {\n    // constrain the general transaction shape\n    require(this.activeInputIndex == 0, \"Active input index must be 0\");\n    require(tx.inputs.length == 3, \"Donation requires exactly 3 inputs\");\n    require(tx.outputs.length > 1, \"Donation requires more than 1 output\");\n    require(tx.outputs.length < 4, \"Donation requires less than 4 outputs\");\n\n    // constrain the issuance fund input and output\n    require(tx.outputs[0].lockingBytecode == tx.inputs[0].lockingBytecode, \"Locking bytecode must remain the same\");\n    require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[0].tokenAmount > tx.inputs[0].tokenAmount, \"Token amount must increase\");\n    require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n    // prevent donation to overflow the max supply\n    require(tx.outputs[0].tokenAmount <= 8888888888888_88, \"Can not donate to exceed the max supply\");\n\n    // bch change output is not burdened with any requirements and must be taken care of by the spender\n  }\n}\n",
    debug: {
        bytecode: "5279009c63c354a269c455a269c4c38b9dc0cf547f7581c0cf547f7781c59f69c38cd307388e779270280376c0d0940400ca9a3bc55579945352797c7b959376957896537a52795379547995537a9694957c960164c38cd395015f9659955a967c7b94a169c0009dc0d3c0d05279949dc0d1c0ce88c0cdc0c788c0d27bc57e8851d1c0ce01207f758851d3789d51cd7b8851cc02e8039dc4529476d1c0ce01207f758876d37b9d76cd51c788cc02e8039dc48cd100882b88ac67c0d1c0ce88c25288c0cdc0c788c0c6c0d095c0c6c0cc9490539502e80396c0cc7c94c0d3957ca268011ac08b768b768bc39f6376ca53797f7754798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca54797f7755798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca55797f7756798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca56797f7757798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca57797f7758798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca58797f7759798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca59797f775a798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5a797f775b798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5b797f775c798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5c797f775d798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5d797f775e798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5e797f775f798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5f797f7760798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca60797f770111798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0111797f770112798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0112797f770113798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0113797f770114798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0114797f770115798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0115797f770116798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0116797f770117798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0117797f770118798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a069686d6d6d6d6d6d6d6d6d6d6d6d6d51675279519c63c0009dc3539dc4539d00cd547a8800d100ce8800d300d09d00d200cf8800cc00c69d51c77b8851cd537a8851cc51c69d51d151ce8851d351d09d51d251cf877777675279529c63c0539dc3559dc4539d00cd00c78800d100ce517e8800d300d053d0939d00d2008800cc00c69d51cd51c78851d151ce8851d351d09d51d251cf8851cc51c69d52c77b8800d153ce877777677b539dc0009dc3539dc451a069c4549f6900cd00c78800d100ce8800d300d0a06900d200cf8800cc00c69d00d307388e7792702803a17777686868",
        sourceMap: "28:2:360:3;;;;;30:12:30:28;:32::33;:12:::1;:4::84;31:12:31:29:0;:33::34;:12:::1;:4::86;32:12:32:29:0;:33::49;:::53:1;:4::114;34:39:34:60:0;:29::75:1;:82::83:0;:29::84:1;:::87;:25::88;35:44:35:65:0;:34::80:1;:87::88:0;:34::89:1;:::92;:30::93;36:12:36:23:0;:::45:1;:4::95;38:54:38:70:0;:::74:1;:43::87;40:23:40:39:0;41:17:41:29;:42::63;:32::76:1;:17;43:16:43:29:0;44:12:44:23;:26::40;;:12:::1;46::46:13:0;47:16:47:21;;:24::25;:28::29;:24:::1;:16;48:23:48:36:0;::::1;:39::44:0;:23:::1;49:29:49:41:0;;:45::50;;:53::58;;:61::66;;:53:::1;:69::81:0;;:53:::1;:45;:29::82;:85::90:0;:29:::1;53:23:53:26:0;:40::56;:::60:1;:29::73;:23;:76::78:0;:23:::1;54:31:54:32:0;:16:::1;:35::37:0;:16:::1;56:21:56:39:0;:42::48;:21:::1;:12;:4::95;59:12:59:33:0;:37::38;:4::94:1;61:23:61:44:0;:12::57:1;:72::93:0;:62::106:1;:109::141:0;;:62:::1;:4::177;62:23:62:44:0;:12::59:1;:73::94:0;:63::109:1;:4::144;63:23:63:44:0;:12::61:1;:75::96:0;:65::113:1;:4::150;64:23:64:44:0;:12::59:1;:69::83:0;:93::104;:63::105:1;:4::159;67:23:67:24:0;:12::39:1;:53::74:0;:43::89:1;:96::98:0;:43::99:1;:::102;:4::168;68:23:68:24:0;:12::37:1;:41::73:0;:4::134:1;69:23:69:24:0;:12::41:1;:45::71:0;:4::134:1;70:23:70:24:0;:12::31:1;:35::39:0;:4::98:1;73:29:73:46:0;:49::50;:29:::1;74:23:74:41:0;:12::56:1;:70::91:0;:60::106:1;:113::115:0;:60::116:1;:::119;:4::183;75:23:75:41:0;:12::54:1;:58::90:0;:4::144:1;76:23:76:41:0;:12::58:1;:72::73:0;:62::90:1;:4::151;77:12:77:48;:52::56:0;:4::113:1;80:28:80:45:0;:::49:1;81:12:81:55;:59::61:0;:4::108:1;84:42:84:130:0;85:45:85:47;87:16:87:37;:::41:1;88:12:88:17:0;:::21:1;89:8:89:13:0;:::17:1;:20::36:0;:8:::1;:38:98:5:0;90:24:90:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;92:25:92:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;93:25:93:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;94:25:94:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;95:24:95:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;96:25:96:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;97:25:97:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;89:38:98:5;101:12:101:17:0;:::21:1;102:8:102:13:0;:::17:1;:20::36:0;:8:::1;:38:111:5:0;103:24:103:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;105:25:105:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;106:25:106:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;107:25:107:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;108:24:108:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;109:25:109:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;110:25:110:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;102:38:111:5;113:12:113:17:0;:::21:1;114:8:114:13:0;:::17:1;:20::36:0;:8:::1;:38:124:5:0;116:24:116:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;118:25:118:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;119:25:119:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;120:25:120:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;121:24:121:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;122:25:122:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;123:25:123:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;114:38:124:5;126:12:126:17:0;:::21:1;127:8:127:13:0;:::17:1;:20::36:0;:8:::1;:38:137:5:0;129:24:129:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;131:25:131:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;132:25:132:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;133:25:133:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;134:24:134:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;135:25:135:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;136:25:136:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;127:38:137:5;139:12:139:17:0;:::21:1;140:8:140:13:0;:::17:1;:20::36:0;:8:::1;:38:150:5:0;142:24:142:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;144:25:144:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;145:25:145:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;146:25:146:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;147:24:147:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;148:25:148:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;149:25:149:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;140:38:150:5;152:12:152:17:0;:::21:1;153:8:153:13:0;:::17:1;:20::36:0;:8:::1;:38:163:5:0;155:24:155:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;157:25:157:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;158:25:158:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;159:25:159:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;160:24:160:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;161:25:161:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;162:25:162:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;153:38:163:5;165:12:165:17:0;:::21:1;166:8:166:13:0;:::17:1;:20::36:0;:8:::1;:38:176:5:0;168:24:168:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;170:25:170:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;171:25:171:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;172:25:172:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;173:24:173:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;174:25:174:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;175:25:175:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;166:38:176:5;178:12:178:17:0;:::21:1;179:8:179:13:0;:::17:1;:20::36:0;:8:::1;:38:189:5:0;181:24:181:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;183:25:183:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;184:25:184:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;185:25:185:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;186:24:186:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;187:25:187:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;188:25:188:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;179:38:189:5;191:12:191:17:0;:::21:1;192:8:192:13:0;:::17:1;:20::36:0;:8:::1;:38:202:5:0;194:24:194:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;196:25:196:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;197:25:197:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;198:25:198:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;199:24:199:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;200:25:200:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;201:25:201:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;192:38:202:5;204:12:204:17:0;:::21:1;205:8:205:13:0;:::17:1;:20::36:0;:8:::1;:38:215:5:0;207:24:207:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;209:25:209:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;210:25:210:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;211:25:211:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;212:24:212:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;213:25:213:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;214:25:214:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;205:38:215:5;217:12:217:17:0;:::21:1;218:8:218:13:0;:::17:1;:20::36:0;:8:::1;:38:228:5:0;220:24:220:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;222:25:222:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;223:25:223:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;224:25:224:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;225:24:225:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;226:25:226:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;227:25:227:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;218:38:228:5;230:12:230:17:0;:::21:1;231:8:231:13:0;:::17:1;:20::36:0;:8:::1;:38:241:5:0;233:24:233:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;235:25:235:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;236:25:236:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;237:25:237:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;238:24:238:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;239:25:239:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;240:25:240:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;231:38:241:5;243:12:243:17:0;:::21:1;244:8:244:13:0;:::17:1;:20::36:0;:8:::1;:38:254:5:0;246:24:246:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;248:25:248:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;249:25:249:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;250:25:250:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;251:24:251:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;252:25:252:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;253:25:253:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;244:38:254:5;256:12:256:17:0;:::21:1;257:8:257:13:0;:::17:1;:20::36:0;:8:::1;:38:267:5:0;259:24:259:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;261:25:261:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;262:25:262:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;263:25:263:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;264:24:264:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;265:25:265:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;266:25:266:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;257:38:267:5;269:12:269:17:0;:::21:1;270:8:270:13:0;:::17:1;:20::36:0;:8:::1;:38:280:5:0;272:24:272:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;274:25:274:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;275:25:275:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;276:25:276:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;277:24:277:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;278:25:278:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;279:25:279:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;270:38:280:5;282:12:282:17:0;:::21:1;283:8:283:13:0;:::17:1;:20::36:0;:8:::1;:38:293:5:0;285:24:285:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;287:25:287:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;288:25:288:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;289:25:289:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;290:24:290:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;291:25:291:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;292:25:292:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;283:38:293:5;295:12:295:17:0;:::21:1;296:8:296:13:0;:::17:1;:20::36:0;:8:::1;:38:306:5:0;298:24:298:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;300:25:300:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;301:25:301:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;302:25:302:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;303:24:303:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;304:25:304:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;305:25:305:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;296:38:306:5;308:12:308:17:0;:::21:1;309:8:309:13:0;:::17:1;:20::36:0;:8:::1;:38:319:5:0;311:24:311:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;313:25:313:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;314:25:314:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;315:25:315:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;316:24:316:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;317:25:317:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;318:25:318:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;309:38:319:5;321:12:321:17:0;:::21:1;322:8:322:13:0;:::17:1;:20::36:0;:8:::1;:38:332:5:0;324:24:324:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;326:25:326:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;327:25:327:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;328:25:328:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;329:24:329:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;330:25:330:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;331:25:331:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;322:38:332:5;334:12:334:17:0;:::21:1;335:8:335:13:0;:::17:1;:20::36:0;:8:::1;:38:345:5:0;337:24:337:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;339:25:339:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;340:25:340:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;341:25:341:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;342:24:342:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;343:25:343:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;344:25:344:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;335:38:345:5;347:12:347:17:0;:::21:1;348:8:348:13:0;:::17:1;:20::36:0;:8:::1;:38:358:5:0;350:24:350:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;352:25:352:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;353:25:353:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;354:25:354:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;355:24:355:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;356:25:356:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;357:25:357:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;348:38:358:5;28:2:360:3;;;;;;;;;;;;;;;372::394::0;;;;;374:12:374:33;:37::38;:4::72:1;375:12:375:28:0;:32::33;:4::74:1;376:12:376:29:0;:33::34;:4::76:1;379:23:379:24:0;:12::41:1;:45::63:0;;:4::135:1;380:23:380:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;381:23:381:24:0;:12::37:1;:51::52:0;:41::65:1;:4::104;382:23:382:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;383:23:383:24:0;:12::31:1;:45::46:0;:35::53:1;:4::92;386:22:386:23:0;:12::40:1;:44::64:0;:4::120:1;387:23:387:24:0;:12::41:1;:45::68:0;;:4::138:1;388:23:388:24:0;:12::31:1;:45::46:0;:35::53:1;:4::109;389:23:389:24:0;:12::39:1;:53::54:0;:43::69:1;:4::127;390:23:390:24:0;:12::37:1;:51::52:0;:41::65:1;:4::121;391:23:391:24:0;:12::39:1;:53::54:0;:43::69:1;:4::127;372:2:394:3;;;437::464::0;;;;;439:12:439:33;:37::38;:4::72:1;440:12:440:28:0;:32::33;:4::73:1;441:12:441:29:0;:33::34;:4::75:1;444:23:444:24:0;:12::41:1;:55::56:0;:45::73:1;:4::131;445:23:445:24:0;:12::39:1;:54::55:0;:44::70:1;:73::77:0;:44:::1;:4::139;446:23:446:24:0;:12::37:1;:51::52:0;:41::65:1;:78::79:0;:68::92:1;:41;:4::164;447:23:447:24:0;:12::39:1;:43::45:0;:4::100:1;448:23:448:24:0;:12::31:1;:45::46:0;:35::53:1;:4::113;451:23:451:24:0;:12::41:1;:55::56:0;:45::73:1;:4::129;452:23:452:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;453:23:453:24:0;:12::37:1;:51::52:0;:41::65:1;:4::104;454:23:454:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;455:23:455:24:0;:12::31:1;:45::46:0;:35::53:1;:4::92;458:22:458:23:0;:12::40:1;:44::64:0;:4::120:1;461:23:461:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;437:2:464:3;;;476::494::0;;;478:12:478:33;:37::38;:4::72:1;479:12:479:28:0;:32::33;:4::73:1;480:12:480:29:0;:32::33;:12:::1;:4::75;481:12:481:29:0;:32::33;:12:::1;:4::76;484:23:484:24:0;:12::41:1;:55::56:0;:45::73:1;:4::116;485:23:485:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;486:23:486:24:0;:12::37:1;:50::51:0;:40::64:1;:12;:4::96;487:23:487:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;488:23:488:24:0;:12::31:1;:45::46:0;:35::53:1;:4::92;491:23:491:24:0;:12::37:1;:41::57:0;:4::102:1;476:2:494:3;;9:0:495:1;;",
        logs: [
            {
                ip: 276,
                line: 115,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 276
                    }
                ]
            },
            {
                ip: 326,
                line: 128,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 326
                    }
                ]
            },
            {
                ip: 376,
                line: 141,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 376
                    }
                ]
            },
            {
                ip: 426,
                line: 154,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 426
                    }
                ]
            },
            {
                ip: 476,
                line: 167,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 476
                    }
                ]
            },
            {
                ip: 526,
                line: 180,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 526
                    }
                ]
            },
            {
                ip: 576,
                line: 193,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 576
                    }
                ]
            },
            {
                ip: 626,
                line: 206,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 626
                    }
                ]
            },
            {
                ip: 676,
                line: 219,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 676
                    }
                ]
            },
            {
                ip: 726,
                line: 232,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 726
                    }
                ]
            },
            {
                ip: 776,
                line: 245,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 776
                    }
                ]
            },
            {
                ip: 826,
                line: 258,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 826
                    }
                ]
            },
            {
                ip: 876,
                line: 271,
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
                ip: 926,
                line: 284,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 926
                    }
                ]
            },
            {
                ip: 976,
                line: 297,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 976
                    }
                ]
            },
            {
                ip: 1026,
                line: 310,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 1026
                    }
                ]
            },
            {
                ip: 1076,
                line: 323,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 1076
                    }
                ]
            },
            {
                ip: 1126,
                line: 336,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 1126
                    }
                ]
            },
            {
                ip: 1176,
                line: 349,
                data: [
                    "Checking cauldron pool input and output at index",
                    {
                        stackIndex: 0,
                        type: "int",
                        ip: 1176
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
                ip: 18,
                line: 32,
                message: "Issue transaction must have one more output than inputs"
            },
            {
                ip: 33,
                line: 36,
                message: "Current time is before last interaction time"
            },
            {
                ip: 89,
                line: 56,
                message: "Issue amount exceeds current emission cap"
            },
            {
                ip: 92,
                line: 59,
                message: "Active input index must be 0 for issuance contract"
            },
            {
                ip: 100,
                line: 61,
                message: "Wrong amount of tokens issued"
            },
            {
                ip: 105,
                line: 62,
                message: "Can not change token category"
            },
            {
                ip: 110,
                line: 63,
                message: "Can not change locking bytecode"
            },
            {
                ip: 116,
                line: 64,
                message: "NFT commitment must be updated with current time"
            },
            {
                ip: 124,
                line: 67,
                message: "Council fund share must have the same token category, no nft"
            },
            {
                ip: 128,
                line: 68,
                message: "Council fund share must match the calculated fund share"
            },
            {
                ip: 132,
                line: 69,
                message: "Council fund share must have the correct locking bytecode"
            },
            {
                ip: 136,
                line: 70,
                message: "Council fund share must have a value of 1000 satoshis"
            },
            {
                ip: 147,
                line: 74,
                message: "Investor's share must have the same token category, no nft"
            },
            {
                ip: 151,
                line: 75,
                message: "Investor's share must match the calculated share"
            },
            {
                ip: 156,
                line: 76,
                message: "Investor's share must have the correct locking bytecode"
            },
            {
                ip: 159,
                line: 77,
                message: "Investor's share must have a value of 1000 satoshis"
            },
            {
                ip: 164,
                line: 81,
                message: "Change output must have no token category"
            },
            {
                ip: 184,
                line: 90,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 189,
                line: 92,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 194,
                line: 93,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 199,
                line: 94,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 205,
                line: 95,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 211,
                line: 96,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 217,
                line: 97,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 234,
                line: 103,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 239,
                line: 105,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 244,
                line: 106,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 249,
                line: 107,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 255,
                line: 108,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 261,
                line: 109,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 267,
                line: 110,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 284,
                line: 116,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 289,
                line: 118,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 294,
                line: 119,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 299,
                line: 120,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 305,
                line: 121,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 311,
                line: 122,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 317,
                line: 123,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 334,
                line: 129,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 339,
                line: 131,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 344,
                line: 132,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 349,
                line: 133,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 355,
                line: 134,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 361,
                line: 135,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 367,
                line: 136,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 384,
                line: 142,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 389,
                line: 144,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 394,
                line: 145,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 399,
                line: 146,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 405,
                line: 147,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 411,
                line: 148,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 417,
                line: 149,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 434,
                line: 155,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 439,
                line: 157,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 444,
                line: 158,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 449,
                line: 159,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 455,
                line: 160,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 461,
                line: 161,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 467,
                line: 162,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 484,
                line: 168,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 489,
                line: 170,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 494,
                line: 171,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 499,
                line: 172,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 505,
                line: 173,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 511,
                line: 174,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 517,
                line: 175,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 534,
                line: 181,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 539,
                line: 183,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 544,
                line: 184,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 549,
                line: 185,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 555,
                line: 186,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 561,
                line: 187,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 567,
                line: 188,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 584,
                line: 194,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 589,
                line: 196,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 594,
                line: 197,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 599,
                line: 198,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 605,
                line: 199,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 611,
                line: 200,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 617,
                line: 201,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 634,
                line: 207,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 639,
                line: 209,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 644,
                line: 210,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 649,
                line: 211,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 655,
                line: 212,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 661,
                line: 213,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 667,
                line: 214,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 684,
                line: 220,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 689,
                line: 222,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 694,
                line: 223,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 699,
                line: 224,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 705,
                line: 225,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 711,
                line: 226,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 717,
                line: 227,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 734,
                line: 233,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 739,
                line: 235,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 744,
                line: 236,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 749,
                line: 237,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 755,
                line: 238,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 761,
                line: 239,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 767,
                line: 240,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 784,
                line: 246,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 789,
                line: 248,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 794,
                line: 249,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 799,
                line: 250,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 805,
                line: 251,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 811,
                line: 252,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 817,
                line: 253,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 834,
                line: 259,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 839,
                line: 261,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 844,
                line: 262,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 849,
                line: 263,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 855,
                line: 264,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 861,
                line: 265,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 867,
                line: 266,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 884,
                line: 272,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 889,
                line: 274,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 894,
                line: 275,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 899,
                line: 276,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 905,
                line: 277,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 911,
                line: 278,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 917,
                line: 279,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 934,
                line: 285,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 939,
                line: 287,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 944,
                line: 288,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 949,
                line: 289,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 955,
                line: 290,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 961,
                line: 291,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 967,
                line: 292,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 984,
                line: 298,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 989,
                line: 300,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 994,
                line: 301,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 999,
                line: 302,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 1005,
                line: 303,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 1011,
                line: 304,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 1017,
                line: 305,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 1034,
                line: 311,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 1039,
                line: 313,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 1044,
                line: 314,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 1049,
                line: 315,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 1055,
                line: 316,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 1061,
                line: 317,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 1067,
                line: 318,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 1084,
                line: 324,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 1089,
                line: 326,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 1094,
                line: 327,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 1099,
                line: 328,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 1105,
                line: 329,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 1111,
                line: 330,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 1117,
                line: 331,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 1134,
                line: 337,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 1139,
                line: 339,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 1144,
                line: 340,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 1149,
                line: 341,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 1155,
                line: 342,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 1161,
                line: 343,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 1167,
                line: 344,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 1184,
                line: 350,
                message: "Cauldron pool contract signature must match"
            },
            {
                ip: 1189,
                line: 352,
                message: "Cauldron pool token category must remain the same"
            },
            {
                ip: 1194,
                line: 353,
                message: "Cauldron pool token commitment must remain the same"
            },
            {
                ip: 1199,
                line: 354,
                message: "Cauldron pool token locking bytecode must remain the same"
            },
            {
                ip: 1205,
                line: 355,
                message: "Wrong unlocking bytecode length for cauldron pool input"
            },
            {
                ip: 1211,
                line: 356,
                message: "Cauldron pool token amount must be less than input amount"
            },
            {
                ip: 1217,
                line: 357,
                message: "Cauldron pool satoshi output value must be greater than input value"
            },
            {
                ip: 1241,
                line: 374,
                message: "Active input index must be 0"
            },
            {
                ip: 1244,
                line: 375,
                message: "Migration requires exactly 3 inputs"
            },
            {
                ip: 1247,
                line: 376,
                message: "Migration requires exactly 3 outputs"
            },
            {
                ip: 1252,
                line: 379,
                message: "New locking bytecode must be provided for the issuance fund output"
            },
            {
                ip: 1257,
                line: 380,
                message: "Token category must remain the same"
            },
            {
                ip: 1262,
                line: 381,
                message: "Token amount must remain the same"
            },
            {
                ip: 1267,
                line: 382,
                message: "NFT commitment must remain the same"
            },
            {
                ip: 1272,
                line: 383,
                message: "Output value must remain the same"
            },
            {
                ip: 1276,
                line: 386,
                message: "Admin input must have the correct locking bytecode"
            },
            {
                ip: 1281,
                line: 387,
                message: "New admin locking bytecode must be provided for the admin output"
            },
            {
                ip: 1286,
                line: 388,
                message: "Output value must remain the same for admin output"
            },
            {
                ip: 1291,
                line: 389,
                message: "Token category must remain the same for admin output"
            },
            {
                ip: 1296,
                line: 390,
                message: "Token amount must remain the same for admin output"
            },
            {
                ip: 1302,
                line: 391,
                message: "NFT commitment must remain the same for admin output"
            },
            {
                ip: 1312,
                line: 439,
                message: "Active input index must be 3"
            },
            {
                ip: 1315,
                line: 440,
                message: "Dissolve requires exactly 5 inputs"
            },
            {
                ip: 1318,
                line: 441,
                message: "Dissolve requires exactly 3 outputs"
            },
            {
                ip: 1323,
                line: 444,
                message: "Locking bytecode must be the same as authguard input"
            },
            {
                ip: 1330,
                line: 445,
                message: "Token category must remain the same, become mutable NFT"
            },
            {
                ip: 1338,
                line: 446,
                message: "Token amount must be the sum of authguard and issuance fund inputs"
            },
            {
                ip: 1342,
                line: 447,
                message: "NFT commitment must be empty for authguard output"
            },
            {
                ip: 1347,
                line: 448,
                message: "Output value must remain the same for authguard output"
            },
            {
                ip: 1352,
                line: 451,
                message: "Locking bytecode must be the same as authkey input"
            },
            {
                ip: 1357,
                line: 452,
                message: "Token category must remain the same"
            },
            {
                ip: 1362,
                line: 453,
                message: "Token amount must remain the same"
            },
            {
                ip: 1367,
                line: 454,
                message: "NFT commitment must remain the same"
            },
            {
                ip: 1372,
                line: 455,
                message: "Output value must remain the same"
            },
            {
                ip: 1376,
                line: 458,
                message: "Admin input must have the correct locking bytecode"
            },
            {
                ip: 1382,
                line: 461,
                message: "Token category must remain the same"
            },
            {
                ip: 1390,
                line: 478,
                message: "Active input index must be 0"
            },
            {
                ip: 1393,
                line: 479,
                message: "Donation requires exactly 3 inputs"
            },
            {
                ip: 1397,
                line: 480,
                message: "Donation requires more than 1 output"
            },
            {
                ip: 1401,
                line: 481,
                message: "Donation requires less than 4 outputs"
            },
            {
                ip: 1406,
                line: 484,
                message: "Locking bytecode must remain the same"
            },
            {
                ip: 1411,
                line: 485,
                message: "Token category must remain the same"
            },
            {
                ip: 1417,
                line: 486,
                message: "Token amount must increase"
            },
            {
                ip: 1422,
                line: 487,
                message: "NFT commitment must remain the same"
            },
            {
                ip: 1427,
                line: 488,
                message: "Output value must remain the same"
            },
            {
                ip: 1432,
                line: 491,
                message: "Can not donate to exceed the max supply"
            }
        ]
    },
    compiler: {
        name: "cashc",
        version: "0.11.0"
    },
    updatedAt: "2025-06-26T15:07:38.493Z"
};
//# sourceMappingURL=IssuanceFund.artifact.js.map