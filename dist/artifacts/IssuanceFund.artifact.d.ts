declare const _default: {
    readonly contractName: "IssuanceFund";
    readonly constructorInputs: readonly [{
        readonly name: "councilFundLockingBytecode";
        readonly type: "bytes";
    }, {
        readonly name: "adminLockingBytecode";
        readonly type: "bytes";
    }];
    readonly abi: readonly [{
        readonly name: "issue";
        readonly inputs: readonly [];
    }, {
        readonly name: "migrate";
        readonly inputs: readonly [{
            readonly name: "newLockingBytecode";
            readonly type: "bytes";
        }, {
            readonly name: "newAdminLockingBytecode";
            readonly type: "bytes";
        }];
    }, {
        readonly name: "dissolveIntoAuthguard";
        readonly inputs: readonly [];
    }, {
        readonly name: "donate";
        readonly inputs: readonly [];
    }];
    readonly bytecode: "OP_2 OP_PICK OP_0 OP_NUMEQUAL OP_IF OP_TXINPUTCOUNT OP_4 OP_GREATERTHANOREQUAL OP_VERIFY OP_TXOUTPUTCOUNT OP_5 OP_GREATERTHANOREQUAL OP_VERIFY OP_TXOUTPUTCOUNT OP_TXINPUTCOUNT OP_1ADD OP_NUMEQUALVERIFY OP_INPUTINDEX OP_UTXOTOKENCOMMITMENT OP_4 OP_SPLIT OP_DROP OP_BIN2NUM OP_INPUTINDEX OP_UTXOTOKENCOMMITMENT OP_4 OP_SPLIT OP_NIP OP_BIN2NUM OP_TXLOCKTIME OP_LESSTHAN OP_VERIFY OP_TXINPUTCOUNT OP_1SUB OP_OUTPUTTOKENAMOUNT 388e7792702803 OP_DUP OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_SUB 00ca9a3b OP_TXLOCKTIME OP_5 OP_PICK OP_SUB OP_3 OP_2 OP_PICK OP_SWAP OP_ROT OP_MUL OP_ADD OP_DUP OP_MUL OP_OVER OP_DIV OP_3 OP_ROLL OP_2 OP_PICK OP_3 OP_PICK OP_4 OP_PICK OP_MUL OP_3 OP_ROLL OP_DIV OP_SUB OP_MUL OP_SWAP OP_DIV 64 OP_TXINPUTCOUNT OP_1SUB OP_OUTPUTTOKENAMOUNT OP_MUL 5f OP_DIV OP_9 OP_MUL OP_10 OP_DIV OP_SWAP OP_ROT OP_SUB OP_LESSTHANOREQUAL OP_VERIFY OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENAMOUNT OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_2 OP_PICK OP_SUB OP_NUMEQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_INPUTINDEX OP_OUTPUTBYTECODE OP_INPUTINDEX OP_UTXOBYTECODE OP_EQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENCOMMITMENT OP_ROT OP_TXLOCKTIME OP_CAT OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY 20 OP_SPLIT OP_DROP OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENAMOUNT OP_OVER OP_NUMEQUALVERIFY OP_1 OP_OUTPUTBYTECODE OP_ROT OP_EQUALVERIFY OP_1 OP_OUTPUTVALUE e803 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_2 OP_SUB OP_DUP OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY 20 OP_SPLIT OP_DROP OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_ROT OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_1 OP_UTXOBYTECODE OP_EQUALVERIFY OP_OUTPUTVALUE e803 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_1SUB OP_OUTPUTTOKENCATEGORY OP_0 OP_EQUALVERIFY 88ac67c0d1c0ce88c25288c0cdc0c788c0c6c0d095c0c6c0cc9490539502e80396c0cc7c94c0d3957ca268 1a OP_INPUTINDEX OP_1ADD OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_3 OP_PICK OP_SPLIT OP_NIP OP_4 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_4 OP_PICK OP_SPLIT OP_NIP OP_5 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_5 OP_PICK OP_SPLIT OP_NIP OP_6 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_6 OP_PICK OP_SPLIT OP_NIP OP_7 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_7 OP_PICK OP_SPLIT OP_NIP OP_8 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_8 OP_PICK OP_SPLIT OP_NIP OP_9 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_9 OP_PICK OP_SPLIT OP_NIP OP_10 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_10 OP_PICK OP_SPLIT OP_NIP OP_11 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_11 OP_PICK OP_SPLIT OP_NIP OP_12 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_12 OP_PICK OP_SPLIT OP_NIP OP_13 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_13 OP_PICK OP_SPLIT OP_NIP OP_14 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_14 OP_PICK OP_SPLIT OP_NIP OP_15 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_15 OP_PICK OP_SPLIT OP_NIP OP_16 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE OP_16 OP_PICK OP_SPLIT OP_NIP 11 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 11 OP_PICK OP_SPLIT OP_NIP 12 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 12 OP_PICK OP_SPLIT OP_NIP 13 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 13 OP_PICK OP_SPLIT OP_NIP 14 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 14 OP_PICK OP_SPLIT OP_NIP 15 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 15 OP_PICK OP_SPLIT OP_NIP 16 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 16 OP_PICK OP_SPLIT OP_NIP 17 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_DUP OP_INPUTBYTECODE 17 OP_PICK OP_SPLIT OP_NIP 18 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_1 OP_ELSE OP_2 OP_PICK OP_1 OP_NUMEQUAL OP_IF OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_0 OP_OUTPUTBYTECODE OP_4 OP_ROLL OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_1 OP_UTXOBYTECODE OP_ROT OP_EQUALVERIFY OP_1 OP_OUTPUTBYTECODE OP_3 OP_ROLL OP_EQUALVERIFY OP_1 OP_OUTPUTVALUE OP_1 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_1 OP_OUTPUTTOKENCATEGORY OP_1 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENAMOUNT OP_1 OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY OP_1 OP_OUTPUTTOKENCOMMITMENT OP_1 OP_UTXOTOKENCOMMITMENT OP_EQUAL OP_NIP OP_NIP OP_ELSE OP_2 OP_PICK OP_2 OP_NUMEQUAL OP_IF OP_INPUTINDEX OP_3 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_5 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_0 OP_OUTPUTBYTECODE OP_0 OP_UTXOBYTECODE OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_1 OP_CAT OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_3 OP_UTXOTOKENAMOUNT OP_ADD OP_NUMEQUALVERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_1 OP_OUTPUTBYTECODE OP_1 OP_UTXOBYTECODE OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENCATEGORY OP_1 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENAMOUNT OP_1 OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY OP_1 OP_OUTPUTTOKENCOMMITMENT OP_1 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_1 OP_OUTPUTVALUE OP_1 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_2 OP_UTXOBYTECODE OP_ROT OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_3 OP_UTXOTOKENCATEGORY OP_EQUAL OP_NIP OP_NIP OP_ELSE OP_ROT OP_3 OP_NUMEQUALVERIFY OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_1 OP_GREATERTHAN OP_VERIFY OP_TXOUTPUTCOUNT OP_4 OP_LESSTHAN OP_VERIFY OP_0 OP_OUTPUTBYTECODE OP_0 OP_UTXOBYTECODE OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_GREATERTHAN OP_VERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT 388e7792702803 OP_LESSTHANOREQUAL OP_NIP OP_NIP OP_ENDIF OP_ENDIF OP_ENDIF";
    readonly source: "// Olando Community Issuance Fund Contract\n// Each time an investor buys tokens from the cauldron pool, the contract emits extra tokens to the council.\n// The contract is deployed with a fixed supply of 8,888,888,888.88 tokens.\n// The contract emits tokens based on the time since deployment and the amount of tokens bought so far.\n// The contract can be migrated to a new issuance or dissolved to release tokens to the admin.\n\n// NOTE: we are making use of nLocktime, which is MTP (Median Time Past) based.\n// We adjust the passed nLocktime by -2h to make the transactions immediately spendable.\ncontract IssuanceFund(bytes councilFundLockingBytecode, bytes adminLockingBytecode) {\n\n  // invest into Olando ecosystem by buying tokens from the cauldron pool\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input, NFT commitment: 4bytes deployment time + 4bytes last interaction time\n  //   1: investors BCH input to balance the council's OLA share payout\n  //   2..N: cauldron pool inputs\n  //   N+1: investment BCH, no tokens\n  //  outputs:\n  //   0: issuance fund output, NFT commitment: 4bytes deployment time + 4bytes new interaction time (tx.locktime)\n  //   1: council OLA share output, see notes for amounts\n  //   2..N: cauldron pool outputs, same properties as inputs but with reduced token amount\n  //   N+1: investors OLA share output, see notes for amounts\n  //   N+2: BCH change output\n  //\n  // Notes: if the issuance cap is not hit at the time of interaction, then ola bought from cauldron by investor\n  // are augmented with 90% of the tokens bought, the OLA amounts are added together and split in half.\n  // If the issuance cap is hit the contract execution fails, suggesting the investor to buy less tokens.\n  function issue() {\n    // first rough check for presence of a cauldron trade\n    require(tx.inputs.length >= 4, \"Issue transaction must have at least 4 inputs\");\n    require(tx.outputs.length >= 5, \"Issue transaction must have at least 5 outputs\");\n    require(tx.outputs.length == tx.inputs.length + 1, \"Issue transaction must have one more output than inputs\");\n\n    int deploymentTime = int(tx.inputs[this.activeInputIndex].nftCommitment.split(4)[0]);\n    int lastInteractionTime = int(tx.inputs[this.activeInputIndex].nftCommitment.split(4)[1]);\n    require(tx.locktime > lastInteractionTime, \"Current time is before last interaction time\");\n\n    int cauldronTradeAdjustedTokenAmount = tx.outputs[tx.inputs.length - 1].tokenAmount; // 95% of the cauldron pool token-buy output\n\n    int intialSupply = 8888888888888_88; // with 2 decimals\n    int issued = intialSupply - tx.inputs[this.activeInputIndex].tokenAmount;\n\n    int SCALE = 1_000_000_000; // 1e9 for scaling\n    int t = tx.locktime - deploymentTime; // time in seconds since deploymentTime\n\n    int k = 3; // 3E-9 scaled by 1e9\n    int denom = SCALE + k * t; // (1 + 3E-9 * t) * 1e9\n    int denomSquared = denom * denom / SCALE; // (1 + 3E-9 * t)^2 * 1e9\n    int currentEmissionCap = intialSupply * (SCALE - SCALE * SCALE / denomSquared) / SCALE;\n\n    // use inputs.length to find the cauldron token-buy output, since last ouput could be a bch change\n    // here we already assume that the cauldron pool output got only 95% of the tokens bought, the other 5% are forwarded to council fund\n    int tokensBought = 100 * tx.outputs[tx.inputs.length - 1].tokenAmount / 95;\n    int issue = tokensBought * 9 / 10; // 90% of tokens bought\n\n    require(issue <= currentEmissionCap - issued, \"Issue amount exceeds current emission cap\");\n\n    // constrain the input 0 and output 0 to be the issuance fund\n    require(this.activeInputIndex == 0, \"Active input index must be 0 for issuance contract\");\n\n    require(tx.outputs[this.activeInputIndex].tokenAmount == (tx.inputs[this.activeInputIndex].tokenAmount - cauldronTradeAdjustedTokenAmount), \"Wrong amount of tokens issued\");\n    require(tx.outputs[this.activeInputIndex].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory, \"Can not change token category\");\n    require(tx.outputs[this.activeInputIndex].lockingBytecode == tx.inputs[this.activeInputIndex].lockingBytecode, \"Can not change locking bytecode\");\n    require(tx.outputs[this.activeInputIndex].nftCommitment == bytes(deploymentTime) + bytes(tx.locktime), \"NFT commitment must be updated with current time\");\n\n    // constrain the output 1 to be the council fund share\n    require(tx.outputs[1].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory.split(32)[0], \"Council fund share must have the same token category, no nft\");\n    require(tx.outputs[1].tokenAmount == cauldronTradeAdjustedTokenAmount, \"Council fund share must match the calculated fund share\");\n    require(tx.outputs[1].lockingBytecode == councilFundLockingBytecode, \"Council fund share must have the correct locking bytecode\");\n    require(tx.outputs[1].value == 1000, \"Council fund share must have a value of 1000 satoshis\");\n\n    // constrain the output N+1 to be the investor's share\n    int investorShareIndex = tx.outputs.length - 2;\n    require(tx.outputs[investorShareIndex].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory.split(32)[0], \"Investor's share must have the same token category, no nft\");\n    require(tx.outputs[investorShareIndex].tokenAmount == cauldronTradeAdjustedTokenAmount, \"Investor's share must match the calculated share\");\n    require(tx.outputs[investorShareIndex].lockingBytecode == tx.inputs[1].lockingBytecode, \"Investor's share must have the correct locking bytecode\");\n    require(tx.outputs[investorShareIndex].value == 1000, \"Investor's share must have a value of 1000 satoshis\");\n\n    // constrain the output N+2 (last output) to be pure bch change\n    int changeOutputIndex = tx.outputs.length - 1;\n    require(tx.outputs[changeOutputIndex].tokenCategory == 0x, \"Change output must have no token category\");\n\n    // constrain the cauldron inputs and outputs 2..N\n    bytes cauldronPoolContractSignature = 0x88ac67c0d1c0ce88c25288c0cdc0c788c0c6c0d095c0c6c0cc9490539502e80396c0cc7c94c0d3957ca268; // partial signature of cauldron pool contract\n    int cauldronPoolContractSignatureSplit = 26; // split the signature at this byte index\n\n    int index = this.activeInputIndex + 1;\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n// #region 20 more cauldron pool input-output checks\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n// #endregion\n  }\n\n  // migrate contract to a new instance of issuance fund contract or change admin locking bytecode\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input\n  //   1: admin input\n  //   2: funding input\n  //  outputs:\n  //   0: issuance fund output. all same properties but new locking bytecode\n  //   1: admin output, same as input\n  //   2: bch change output\n  function migrate(bytes newLockingBytecode, bytes newAdminLockingBytecode) {\n    // constrain the general transaction shape\n    require(this.activeInputIndex == 0, \"Active input index must be 0\");\n    require(tx.inputs.length == 3, \"Migration requires exactly 3 inputs\");\n    require(tx.outputs.length == 3, \"Migration requires exactly 3 outputs\");\n\n    // constrain the issuance fund input and output\n    require(tx.outputs[0].lockingBytecode == newLockingBytecode, \"New locking bytecode must be provided for the issuance fund output\");\n    require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[0].tokenAmount == tx.inputs[0].tokenAmount, \"Token amount must remain the same\");\n    require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n    // preserve admin input\n    require(tx.inputs[1].lockingBytecode == adminLockingBytecode, \"Admin input must have the correct locking bytecode\");\n    require(tx.outputs[1].lockingBytecode == newAdminLockingBytecode, \"New admin locking bytecode must be provided for the admin output\");\n    require(tx.outputs[1].value == tx.inputs[1].value, \"Output value must remain the same for admin output\");\n    require(tx.outputs[1].tokenCategory == tx.inputs[1].tokenCategory, \"Token category must remain the same for admin output\");\n    require(tx.outputs[1].tokenAmount == tx.inputs[1].tokenAmount, \"Token amount must remain the same for admin output\");\n    require(tx.outputs[1].nftCommitment == tx.inputs[1].nftCommitment, \"NFT commitment must remain the same for admin output\");\n\n    // bch change output is not burdened with any requirements and must be taken care of by the spender\n  }\n\n  // NOTE: excluded due to input size limitations of 1650 bytes\n  // // dissolve contract and release tokens to admin\n  // // tx layout:\n  // //  inputs:\n  // //   0: issuance fund input\n  // //   1: admin input\n  // //   2: funding input\n  // //  outputs:\n  // //   0: same properties as input 0 paid to admin locking bytecode\n  // //   1: bch change output\n  // function dissolve() {\n  //   // constrain the general transaction shape\n  //   require(this.activeInputIndex == 0, \"Active input index must be 0\");\n  //   require(tx.inputs.length == 3, \"Dissolve requires exactly 3 inputs\");\n  //   require(tx.outputs.length == 2, \"Dissolve requires exactly 2 outputs\");\n\n  //   // constrain the issuance fund input and output\n  //   require(tx.outputs[0].lockingBytecode == tx.inputs[1].lockingBytecode, \"Locking bytecode must be the same as admin input\");\n  //   require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n  //   require(tx.outputs[0].tokenAmount == tx.inputs[0].tokenAmount, \"Token amount must remain the same\");\n  //   require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n  //   require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n  //   // constrain the admin input, do not require it to be present in outputs\n  //   require(tx.inputs[1].lockingBytecode == adminLockingBytecode, \"Admin input must have the correct locking bytecode\");\n\n  //   // bch change output is not burdened with any requirements\n  // }\n\n  // dissolve contract and release tokens to admin\n  // tx layout:\n  //  inputs:\n  //   0: authguard\n  //   1: authkey\n  //   2: admin input\n  //   3: issuance fund input\n  //   4: funding input\n  //  outputs:\n  //   0: authguard output, receives mutable NFT from issuance fund input, commitment set to empty\n  //   1: authkey, no changes\n  //   2: bch change output\n  function dissolveIntoAuthguard() {\n    // constrain the general transaction shape\n    require(this.activeInputIndex == 3, \"Active input index must be 3\");\n    require(tx.inputs.length == 5, \"Dissolve requires exactly 5 inputs\");\n    require(tx.outputs.length == 3, \"Dissolve requires exactly 3 outputs\");\n\n    // constrain the authguard input and output\n    require(tx.outputs[0].lockingBytecode == tx.inputs[0].lockingBytecode, \"Locking bytecode must be the same as authguard input\");\n    require(tx.outputs[0].tokenCategory == (tx.inputs[0].tokenCategory + 0x01), \"Token category must remain the same, become mutable NFT\");\n    require(tx.outputs[0].tokenAmount == tx.inputs[0].tokenAmount + tx.inputs[3].tokenAmount, \"Token amount must be the sum of authguard and issuance fund inputs\");\n    require(tx.outputs[0].nftCommitment == 0x, \"NFT commitment must be empty for authguard output\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same for authguard output\");\n\n    // constrain the authkey input and output\n    require(tx.outputs[1].lockingBytecode == tx.inputs[1].lockingBytecode, \"Locking bytecode must be the same as authkey input\");\n    require(tx.outputs[1].tokenCategory == tx.inputs[1].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[1].tokenAmount == tx.inputs[1].tokenAmount, \"Token amount must remain the same\");\n    require(tx.outputs[1].nftCommitment == tx.inputs[1].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[1].value == tx.inputs[1].value, \"Output value must remain the same\");\n\n    // constrain the admin input, do not require it to be present in outputs\n    require(tx.inputs[2].lockingBytecode == adminLockingBytecode, \"Admin input must have the correct locking bytecode\");\n\n    // constrain the issuance fund input and output\n    require(tx.outputs[0].tokenCategory == tx.inputs[3].tokenCategory, \"Token category must remain the same\");\n\n    // bch change output is not burdened with any requirements\n  }\n\n  // donate to the issuance fund\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input\n  //   1: donation token input, strictly FT\n  //   2: funding input\n  //  outputs:\n  //   0: issuance fund output, no changes\n  //   [1]: token change if any\n  //   [2]: bch change if any\n  function donate() {\n    // constrain the general transaction shape\n    require(this.activeInputIndex == 0, \"Active input index must be 0\");\n    require(tx.inputs.length == 3, \"Donation requires exactly 3 inputs\");\n    require(tx.outputs.length > 1, \"Donation requires more than 1 output\");\n    require(tx.outputs.length < 4, \"Donation requires less than 4 outputs\");\n\n    // constrain the issuance fund input and output\n    require(tx.outputs[0].lockingBytecode == tx.inputs[0].lockingBytecode, \"Locking bytecode must remain the same\");\n    require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[0].tokenAmount > tx.inputs[0].tokenAmount, \"Token amount must increase\");\n    require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n    // prevent donation to overflow the max supply\n    require(tx.outputs[0].tokenAmount <= 8888888888888_88, \"Can not donate to exceed the max supply\");\n\n    // bch change output is not burdened with any requirements and must be taken care of by the spender\n  }\n}\n";
    readonly debug: {
        readonly bytecode: "5279009c63c354a269c455a269c4c38b9dc0cf547f7581c0cf547f7781c59f69c38cd307388e779270280376c0d0940400ca9a3bc55579945352797c7b959376957896537a52795379547995537a9694957c960164c38cd395015f9659955a967c7b94a169c0009dc0d3c0d05279949dc0d1c0ce88c0cdc0c788c0d27bc57e8851d1c0ce01207f758851d3789d51cd7b8851cc02e8039dc4529476d1c0ce01207f758876d37b9d76cd51c788cc02e8039dc48cd100882b88ac67c0d1c0ce88c25288c0cdc0c788c0c6c0d095c0c6c0cc9490539502e80396c0cc7c94c0d3957ca268011ac08b768b768bc39f6376ca53797f7754798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca54797f7755798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca55797f7756798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca56797f7757798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca57797f7758798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca58797f7759798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca59797f775a798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5a797f775b798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5b797f775c798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5c797f775d798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5d797f775e798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5e797f775f798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca5f797f7760798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca60797f770111798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0111797f770112798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0112797f770113798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0113797f770114798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0114797f770115798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0115797f770116798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0116797f770117798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f6376ca0117797f770118798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a069686d6d6d6d6d6d6d6d6d6d6d6d6d51675279519c63c0009dc3539dc4539d00cd547a8800d100ce8800d300d09d00d200cf8800cc00c69d51c77b8851cd537a8851cc51c69d51d151ce8851d351d09d51d251cf877777675279529c63c0539dc3559dc4539d00cd00c78800d100ce517e8800d300d053d0939d00d2008800cc00c69d51cd51c78851d151ce8851d351d09d51d251cf8851cc51c69d52c77b8800d153ce877777677b539dc0009dc3539dc451a069c4549f6900cd00c78800d100ce8800d300d0a06900d200cf8800cc00c69d00d307388e7792702803a17777686868";
        readonly sourceMap: "28:2:360:3;;;;;30:12:30:28;:32::33;:12:::1;:4::84;31:12:31:29:0;:33::34;:12:::1;:4::86;32:12:32:29:0;:33::49;:::53:1;:4::114;34:39:34:60:0;:29::75:1;:82::83:0;:29::84:1;:::87;:25::88;35:44:35:65:0;:34::80:1;:87::88:0;:34::89:1;:::92;:30::93;36:12:36:23:0;:::45:1;:4::95;38:54:38:70:0;:::74:1;:43::87;40:23:40:39:0;41:17:41:29;:42::63;:32::76:1;:17;43:16:43:29:0;44:12:44:23;:26::40;;:12:::1;46::46:13:0;47:16:47:21;;:24::25;:28::29;:24:::1;:16;48:23:48:36:0;::::1;:39::44:0;:23:::1;49:29:49:41:0;;:45::50;;:53::58;;:61::66;;:53:::1;:69::81:0;;:53:::1;:45;:29::82;:85::90:0;:29:::1;53:23:53:26:0;:40::56;:::60:1;:29::73;:23;:76::78:0;:23:::1;54:31:54:32:0;:16:::1;:35::37:0;:16:::1;56:21:56:39:0;:42::48;:21:::1;:12;:4::95;59:12:59:33:0;:37::38;:4::94:1;61:23:61:44:0;:12::57:1;:72::93:0;:62::106:1;:109::141:0;;:62:::1;:4::177;62:23:62:44:0;:12::59:1;:73::94:0;:63::109:1;:4::144;63:23:63:44:0;:12::61:1;:75::96:0;:65::113:1;:4::150;64:23:64:44:0;:12::59:1;:69::83:0;:93::104;:63::105:1;:4::159;67:23:67:24:0;:12::39:1;:53::74:0;:43::89:1;:96::98:0;:43::99:1;:::102;:4::168;68:23:68:24:0;:12::37:1;:41::73:0;:4::134:1;69:23:69:24:0;:12::41:1;:45::71:0;:4::134:1;70:23:70:24:0;:12::31:1;:35::39:0;:4::98:1;73:29:73:46:0;:49::50;:29:::1;74:23:74:41:0;:12::56:1;:70::91:0;:60::106:1;:113::115:0;:60::116:1;:::119;:4::183;75:23:75:41:0;:12::54:1;:58::90:0;:4::144:1;76:23:76:41:0;:12::58:1;:72::73:0;:62::90:1;:4::151;77:12:77:48;:52::56:0;:4::113:1;80:28:80:45:0;:::49:1;81:12:81:55;:59::61:0;:4::108:1;84:42:84:130:0;85:45:85:47;87:16:87:37;:::41:1;88:12:88:17:0;:::21:1;89:8:89:13:0;:::17:1;:20::36:0;:8:::1;:38:98:5:0;90:24:90:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;92:25:92:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;93:25:93:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;94:25:94:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;95:24:95:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;96:25:96:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;97:25:97:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;89:38:98:5;101:12:101:17:0;:::21:1;102:8:102:13:0;:::17:1;:20::36:0;:8:::1;:38:111:5:0;103:24:103:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;105:25:105:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;106:25:106:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;107:25:107:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;108:24:108:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;109:25:109:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;110:25:110:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;102:38:111:5;113:12:113:17:0;:::21:1;114:8:114:13:0;:::17:1;:20::36:0;:8:::1;:38:124:5:0;116:24:116:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;118:25:118:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;119:25:119:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;120:25:120:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;121:24:121:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;122:25:122:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;123:25:123:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;114:38:124:5;126:12:126:17:0;:::21:1;127:8:127:13:0;:::17:1;:20::36:0;:8:::1;:38:137:5:0;129:24:129:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;131:25:131:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;132:25:132:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;133:25:133:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;134:24:134:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;135:25:135:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;136:25:136:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;127:38:137:5;139:12:139:17:0;:::21:1;140:8:140:13:0;:::17:1;:20::36:0;:8:::1;:38:150:5:0;142:24:142:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;144:25:144:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;145:25:145:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;146:25:146:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;147:24:147:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;148:25:148:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;149:25:149:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;140:38:150:5;152:12:152:17:0;:::21:1;153:8:153:13:0;:::17:1;:20::36:0;:8:::1;:38:163:5:0;155:24:155:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;157:25:157:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;158:25:158:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;159:25:159:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;160:24:160:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;161:25:161:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;162:25:162:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;153:38:163:5;165:12:165:17:0;:::21:1;166:8:166:13:0;:::17:1;:20::36:0;:8:::1;:38:176:5:0;168:24:168:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;170:25:170:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;171:25:171:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;172:25:172:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;173:24:173:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;174:25:174:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;175:25:175:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;166:38:176:5;178:12:178:17:0;:::21:1;179:8:179:13:0;:::17:1;:20::36:0;:8:::1;:38:189:5:0;181:24:181:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;183:25:183:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;184:25:184:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;185:25:185:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;186:24:186:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;187:25:187:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;188:25:188:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;179:38:189:5;191:12:191:17:0;:::21:1;192:8:192:13:0;:::17:1;:20::36:0;:8:::1;:38:202:5:0;194:24:194:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;196:25:196:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;197:25:197:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;198:25:198:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;199:24:199:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;200:25:200:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;201:25:201:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;192:38:202:5;204:12:204:17:0;:::21:1;205:8:205:13:0;:::17:1;:20::36:0;:8:::1;:38:215:5:0;207:24:207:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;209:25:209:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;210:25:210:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;211:25:211:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;212:24:212:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;213:25:213:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;214:25:214:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;205:38:215:5;217:12:217:17:0;:::21:1;218:8:218:13:0;:::17:1;:20::36:0;:8:::1;:38:228:5:0;220:24:220:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;222:25:222:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;223:25:223:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;224:25:224:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;225:24:225:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;226:25:226:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;227:25:227:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;218:38:228:5;230:12:230:17:0;:::21:1;231:8:231:13:0;:::17:1;:20::36:0;:8:::1;:38:241:5:0;233:24:233:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;235:25:235:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;236:25:236:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;237:25:237:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;238:24:238:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;239:25:239:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;240:25:240:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;231:38:241:5;243:12:243:17:0;:::21:1;244:8:244:13:0;:::17:1;:20::36:0;:8:::1;:38:254:5:0;246:24:246:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;248:25:248:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;249:25:249:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;250:25:250:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;251:24:251:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;252:25:252:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;253:25:253:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;244:38:254:5;256:12:256:17:0;:::21:1;257:8:257:13:0;:::17:1;:20::36:0;:8:::1;:38:267:5:0;259:24:259:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;261:25:261:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;262:25:262:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;263:25:263:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;264:24:264:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;265:25:265:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;266:25:266:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;257:38:267:5;269:12:269:17:0;:::21:1;270:8:270:13:0;:::17:1;:20::36:0;:8:::1;:38:280:5:0;272:24:272:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;274:25:274:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;275:25:275:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;276:25:276:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;277:24:277:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;278:25:278:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;279:25:279:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;270:38:280:5;282:12:282:17:0;:::21:1;283:8:283:13:0;:::17:1;:20::36:0;:8:::1;:38:293:5:0;285:24:285:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;287:25:287:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;288:25:288:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;289:25:289:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;290:24:290:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;291:25:291:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;292:25:292:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;283:38:293:5;295:12:295:17:0;:::21:1;296:8:296:13:0;:::17:1;:20::36:0;:8:::1;:38:306:5:0;298:24:298:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;300:25:300:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;301:25:301:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;302:25:302:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;303:24:303:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;304:25:304:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;305:25:305:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;296:38:306:5;308:12:308:17:0;:::21:1;309:8:309:13:0;:::17:1;:20::36:0;:8:::1;:38:319:5:0;311:24:311:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;313:25:313:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;314:25:314:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;315:25:315:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;316:24:316:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;317:25:317:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;318:25:318:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;309:38:319:5;321:12:321:17:0;:::21:1;322:8:322:13:0;:::17:1;:20::36:0;:8:::1;:38:332:5:0;324:24:324:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;326:25:326:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;327:25:327:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;328:25:328:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;329:24:329:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;330:25:330:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;331:25:331:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;322:38:332:5;334:12:334:17:0;:::21:1;335:8:335:13:0;:::17:1;:20::36:0;:8:::1;:38:345:5:0;337:24:337:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;339:25:339:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;340:25:340:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;341:25:341:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;342:24:342:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;343:25:343:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;344:25:344:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;335:38:345:5;347:12:347:17:0;:::21:1;348:8:348:13:0;:::17:1;:20::36:0;:8:::1;:38:358:5:0;350:24:350:29;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;352:25:352:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;353:25:353:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;354:25:354:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;355:24:355:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;356:25:356:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;357:25:357:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;348:38:358:5;28:2:360:3;;;;;;;;;;;;;;;372::394::0;;;;;374:12:374:33;:37::38;:4::72:1;375:12:375:28:0;:32::33;:4::74:1;376:12:376:29:0;:33::34;:4::76:1;379:23:379:24:0;:12::41:1;:45::63:0;;:4::135:1;380:23:380:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;381:23:381:24:0;:12::37:1;:51::52:0;:41::65:1;:4::104;382:23:382:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;383:23:383:24:0;:12::31:1;:45::46:0;:35::53:1;:4::92;386:22:386:23:0;:12::40:1;:44::64:0;:4::120:1;387:23:387:24:0;:12::41:1;:45::68:0;;:4::138:1;388:23:388:24:0;:12::31:1;:45::46:0;:35::53:1;:4::109;389:23:389:24:0;:12::39:1;:53::54:0;:43::69:1;:4::127;390:23:390:24:0;:12::37:1;:51::52:0;:41::65:1;:4::121;391:23:391:24:0;:12::39:1;:53::54:0;:43::69:1;:4::127;372:2:394:3;;;437::464::0;;;;;439:12:439:33;:37::38;:4::72:1;440:12:440:28:0;:32::33;:4::73:1;441:12:441:29:0;:33::34;:4::75:1;444:23:444:24:0;:12::41:1;:55::56:0;:45::73:1;:4::131;445:23:445:24:0;:12::39:1;:54::55:0;:44::70:1;:73::77:0;:44:::1;:4::139;446:23:446:24:0;:12::37:1;:51::52:0;:41::65:1;:78::79:0;:68::92:1;:41;:4::164;447:23:447:24:0;:12::39:1;:43::45:0;:4::100:1;448:23:448:24:0;:12::31:1;:45::46:0;:35::53:1;:4::113;451:23:451:24:0;:12::41:1;:55::56:0;:45::73:1;:4::129;452:23:452:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;453:23:453:24:0;:12::37:1;:51::52:0;:41::65:1;:4::104;454:23:454:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;455:23:455:24:0;:12::31:1;:45::46:0;:35::53:1;:4::92;458:22:458:23:0;:12::40:1;:44::64:0;:4::120:1;461:23:461:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;437:2:464:3;;;476::494::0;;;478:12:478:33;:37::38;:4::72:1;479:12:479:28:0;:32::33;:4::73:1;480:12:480:29:0;:32::33;:12:::1;:4::75;481:12:481:29:0;:32::33;:12:::1;:4::76;484:23:484:24:0;:12::41:1;:55::56:0;:45::73:1;:4::116;485:23:485:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;486:23:486:24:0;:12::37:1;:50::51:0;:40::64:1;:12;:4::96;487:23:487:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;488:23:488:24:0;:12::31:1;:45::46:0;:35::53:1;:4::92;491:23:491:24:0;:12::37:1;:41::57:0;:4::102:1;476:2:494:3;;9:0:495:1;;";
        readonly logs: readonly [{
            readonly ip: 276;
            readonly line: 115;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 276;
            }];
        }, {
            readonly ip: 326;
            readonly line: 128;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 326;
            }];
        }, {
            readonly ip: 376;
            readonly line: 141;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 376;
            }];
        }, {
            readonly ip: 426;
            readonly line: 154;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 426;
            }];
        }, {
            readonly ip: 476;
            readonly line: 167;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 476;
            }];
        }, {
            readonly ip: 526;
            readonly line: 180;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 526;
            }];
        }, {
            readonly ip: 576;
            readonly line: 193;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 576;
            }];
        }, {
            readonly ip: 626;
            readonly line: 206;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 626;
            }];
        }, {
            readonly ip: 676;
            readonly line: 219;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 676;
            }];
        }, {
            readonly ip: 726;
            readonly line: 232;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 726;
            }];
        }, {
            readonly ip: 776;
            readonly line: 245;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 776;
            }];
        }, {
            readonly ip: 826;
            readonly line: 258;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 826;
            }];
        }, {
            readonly ip: 876;
            readonly line: 271;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 876;
            }];
        }, {
            readonly ip: 926;
            readonly line: 284;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 926;
            }];
        }, {
            readonly ip: 976;
            readonly line: 297;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 976;
            }];
        }, {
            readonly ip: 1026;
            readonly line: 310;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 1026;
            }];
        }, {
            readonly ip: 1076;
            readonly line: 323;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 1076;
            }];
        }, {
            readonly ip: 1126;
            readonly line: 336;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 1126;
            }];
        }, {
            readonly ip: 1176;
            readonly line: 349;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 1176;
            }];
        }];
        readonly requires: readonly [{
            readonly ip: 10;
            readonly line: 30;
            readonly message: "Issue transaction must have at least 4 inputs";
        }, {
            readonly ip: 14;
            readonly line: 31;
            readonly message: "Issue transaction must have at least 5 outputs";
        }, {
            readonly ip: 18;
            readonly line: 32;
            readonly message: "Issue transaction must have one more output than inputs";
        }, {
            readonly ip: 33;
            readonly line: 36;
            readonly message: "Current time is before last interaction time";
        }, {
            readonly ip: 89;
            readonly line: 56;
            readonly message: "Issue amount exceeds current emission cap";
        }, {
            readonly ip: 92;
            readonly line: 59;
            readonly message: "Active input index must be 0 for issuance contract";
        }, {
            readonly ip: 100;
            readonly line: 61;
            readonly message: "Wrong amount of tokens issued";
        }, {
            readonly ip: 105;
            readonly line: 62;
            readonly message: "Can not change token category";
        }, {
            readonly ip: 110;
            readonly line: 63;
            readonly message: "Can not change locking bytecode";
        }, {
            readonly ip: 116;
            readonly line: 64;
            readonly message: "NFT commitment must be updated with current time";
        }, {
            readonly ip: 124;
            readonly line: 67;
            readonly message: "Council fund share must have the same token category, no nft";
        }, {
            readonly ip: 128;
            readonly line: 68;
            readonly message: "Council fund share must match the calculated fund share";
        }, {
            readonly ip: 132;
            readonly line: 69;
            readonly message: "Council fund share must have the correct locking bytecode";
        }, {
            readonly ip: 136;
            readonly line: 70;
            readonly message: "Council fund share must have a value of 1000 satoshis";
        }, {
            readonly ip: 147;
            readonly line: 74;
            readonly message: "Investor's share must have the same token category, no nft";
        }, {
            readonly ip: 151;
            readonly line: 75;
            readonly message: "Investor's share must match the calculated share";
        }, {
            readonly ip: 156;
            readonly line: 76;
            readonly message: "Investor's share must have the correct locking bytecode";
        }, {
            readonly ip: 159;
            readonly line: 77;
            readonly message: "Investor's share must have a value of 1000 satoshis";
        }, {
            readonly ip: 164;
            readonly line: 81;
            readonly message: "Change output must have no token category";
        }, {
            readonly ip: 184;
            readonly line: 90;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 189;
            readonly line: 92;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 194;
            readonly line: 93;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 199;
            readonly line: 94;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 205;
            readonly line: 95;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 211;
            readonly line: 96;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 217;
            readonly line: 97;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 234;
            readonly line: 103;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 239;
            readonly line: 105;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 244;
            readonly line: 106;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 249;
            readonly line: 107;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 255;
            readonly line: 108;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 261;
            readonly line: 109;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 267;
            readonly line: 110;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 284;
            readonly line: 116;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 289;
            readonly line: 118;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 294;
            readonly line: 119;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 299;
            readonly line: 120;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 305;
            readonly line: 121;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 311;
            readonly line: 122;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 317;
            readonly line: 123;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 334;
            readonly line: 129;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 339;
            readonly line: 131;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 344;
            readonly line: 132;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 349;
            readonly line: 133;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 355;
            readonly line: 134;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 361;
            readonly line: 135;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 367;
            readonly line: 136;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 384;
            readonly line: 142;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 389;
            readonly line: 144;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 394;
            readonly line: 145;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 399;
            readonly line: 146;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 405;
            readonly line: 147;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 411;
            readonly line: 148;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 417;
            readonly line: 149;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 434;
            readonly line: 155;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 439;
            readonly line: 157;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 444;
            readonly line: 158;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 449;
            readonly line: 159;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 455;
            readonly line: 160;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 461;
            readonly line: 161;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 467;
            readonly line: 162;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 484;
            readonly line: 168;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 489;
            readonly line: 170;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 494;
            readonly line: 171;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 499;
            readonly line: 172;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 505;
            readonly line: 173;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 511;
            readonly line: 174;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 517;
            readonly line: 175;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 534;
            readonly line: 181;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 539;
            readonly line: 183;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 544;
            readonly line: 184;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 549;
            readonly line: 185;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 555;
            readonly line: 186;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 561;
            readonly line: 187;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 567;
            readonly line: 188;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 584;
            readonly line: 194;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 589;
            readonly line: 196;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 594;
            readonly line: 197;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 599;
            readonly line: 198;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 605;
            readonly line: 199;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 611;
            readonly line: 200;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 617;
            readonly line: 201;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 634;
            readonly line: 207;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 639;
            readonly line: 209;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 644;
            readonly line: 210;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 649;
            readonly line: 211;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 655;
            readonly line: 212;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 661;
            readonly line: 213;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 667;
            readonly line: 214;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 684;
            readonly line: 220;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 689;
            readonly line: 222;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 694;
            readonly line: 223;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 699;
            readonly line: 224;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 705;
            readonly line: 225;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 711;
            readonly line: 226;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 717;
            readonly line: 227;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 734;
            readonly line: 233;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 739;
            readonly line: 235;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 744;
            readonly line: 236;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 749;
            readonly line: 237;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 755;
            readonly line: 238;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 761;
            readonly line: 239;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 767;
            readonly line: 240;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 784;
            readonly line: 246;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 789;
            readonly line: 248;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 794;
            readonly line: 249;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 799;
            readonly line: 250;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 805;
            readonly line: 251;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 811;
            readonly line: 252;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 817;
            readonly line: 253;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 834;
            readonly line: 259;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 839;
            readonly line: 261;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 844;
            readonly line: 262;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 849;
            readonly line: 263;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 855;
            readonly line: 264;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 861;
            readonly line: 265;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 867;
            readonly line: 266;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 884;
            readonly line: 272;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 889;
            readonly line: 274;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 894;
            readonly line: 275;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 899;
            readonly line: 276;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 905;
            readonly line: 277;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 911;
            readonly line: 278;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 917;
            readonly line: 279;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 934;
            readonly line: 285;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 939;
            readonly line: 287;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 944;
            readonly line: 288;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 949;
            readonly line: 289;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 955;
            readonly line: 290;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 961;
            readonly line: 291;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 967;
            readonly line: 292;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 984;
            readonly line: 298;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 989;
            readonly line: 300;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 994;
            readonly line: 301;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 999;
            readonly line: 302;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 1005;
            readonly line: 303;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 1011;
            readonly line: 304;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 1017;
            readonly line: 305;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 1034;
            readonly line: 311;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 1039;
            readonly line: 313;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 1044;
            readonly line: 314;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 1049;
            readonly line: 315;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 1055;
            readonly line: 316;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 1061;
            readonly line: 317;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 1067;
            readonly line: 318;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 1084;
            readonly line: 324;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 1089;
            readonly line: 326;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 1094;
            readonly line: 327;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 1099;
            readonly line: 328;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 1105;
            readonly line: 329;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 1111;
            readonly line: 330;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 1117;
            readonly line: 331;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 1134;
            readonly line: 337;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 1139;
            readonly line: 339;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 1144;
            readonly line: 340;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 1149;
            readonly line: 341;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 1155;
            readonly line: 342;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 1161;
            readonly line: 343;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 1167;
            readonly line: 344;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 1184;
            readonly line: 350;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 1189;
            readonly line: 352;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 1194;
            readonly line: 353;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 1199;
            readonly line: 354;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 1205;
            readonly line: 355;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 1211;
            readonly line: 356;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 1217;
            readonly line: 357;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 1241;
            readonly line: 374;
            readonly message: "Active input index must be 0";
        }, {
            readonly ip: 1244;
            readonly line: 375;
            readonly message: "Migration requires exactly 3 inputs";
        }, {
            readonly ip: 1247;
            readonly line: 376;
            readonly message: "Migration requires exactly 3 outputs";
        }, {
            readonly ip: 1252;
            readonly line: 379;
            readonly message: "New locking bytecode must be provided for the issuance fund output";
        }, {
            readonly ip: 1257;
            readonly line: 380;
            readonly message: "Token category must remain the same";
        }, {
            readonly ip: 1262;
            readonly line: 381;
            readonly message: "Token amount must remain the same";
        }, {
            readonly ip: 1267;
            readonly line: 382;
            readonly message: "NFT commitment must remain the same";
        }, {
            readonly ip: 1272;
            readonly line: 383;
            readonly message: "Output value must remain the same";
        }, {
            readonly ip: 1276;
            readonly line: 386;
            readonly message: "Admin input must have the correct locking bytecode";
        }, {
            readonly ip: 1281;
            readonly line: 387;
            readonly message: "New admin locking bytecode must be provided for the admin output";
        }, {
            readonly ip: 1286;
            readonly line: 388;
            readonly message: "Output value must remain the same for admin output";
        }, {
            readonly ip: 1291;
            readonly line: 389;
            readonly message: "Token category must remain the same for admin output";
        }, {
            readonly ip: 1296;
            readonly line: 390;
            readonly message: "Token amount must remain the same for admin output";
        }, {
            readonly ip: 1302;
            readonly line: 391;
            readonly message: "NFT commitment must remain the same for admin output";
        }, {
            readonly ip: 1312;
            readonly line: 439;
            readonly message: "Active input index must be 3";
        }, {
            readonly ip: 1315;
            readonly line: 440;
            readonly message: "Dissolve requires exactly 5 inputs";
        }, {
            readonly ip: 1318;
            readonly line: 441;
            readonly message: "Dissolve requires exactly 3 outputs";
        }, {
            readonly ip: 1323;
            readonly line: 444;
            readonly message: "Locking bytecode must be the same as authguard input";
        }, {
            readonly ip: 1330;
            readonly line: 445;
            readonly message: "Token category must remain the same, become mutable NFT";
        }, {
            readonly ip: 1338;
            readonly line: 446;
            readonly message: "Token amount must be the sum of authguard and issuance fund inputs";
        }, {
            readonly ip: 1342;
            readonly line: 447;
            readonly message: "NFT commitment must be empty for authguard output";
        }, {
            readonly ip: 1347;
            readonly line: 448;
            readonly message: "Output value must remain the same for authguard output";
        }, {
            readonly ip: 1352;
            readonly line: 451;
            readonly message: "Locking bytecode must be the same as authkey input";
        }, {
            readonly ip: 1357;
            readonly line: 452;
            readonly message: "Token category must remain the same";
        }, {
            readonly ip: 1362;
            readonly line: 453;
            readonly message: "Token amount must remain the same";
        }, {
            readonly ip: 1367;
            readonly line: 454;
            readonly message: "NFT commitment must remain the same";
        }, {
            readonly ip: 1372;
            readonly line: 455;
            readonly message: "Output value must remain the same";
        }, {
            readonly ip: 1376;
            readonly line: 458;
            readonly message: "Admin input must have the correct locking bytecode";
        }, {
            readonly ip: 1382;
            readonly line: 461;
            readonly message: "Token category must remain the same";
        }, {
            readonly ip: 1390;
            readonly line: 478;
            readonly message: "Active input index must be 0";
        }, {
            readonly ip: 1393;
            readonly line: 479;
            readonly message: "Donation requires exactly 3 inputs";
        }, {
            readonly ip: 1397;
            readonly line: 480;
            readonly message: "Donation requires more than 1 output";
        }, {
            readonly ip: 1401;
            readonly line: 481;
            readonly message: "Donation requires less than 4 outputs";
        }, {
            readonly ip: 1406;
            readonly line: 484;
            readonly message: "Locking bytecode must remain the same";
        }, {
            readonly ip: 1411;
            readonly line: 485;
            readonly message: "Token category must remain the same";
        }, {
            readonly ip: 1417;
            readonly line: 486;
            readonly message: "Token amount must increase";
        }, {
            readonly ip: 1422;
            readonly line: 487;
            readonly message: "NFT commitment must remain the same";
        }, {
            readonly ip: 1427;
            readonly line: 488;
            readonly message: "Output value must remain the same";
        }, {
            readonly ip: 1432;
            readonly line: 491;
            readonly message: "Can not donate to exceed the max supply";
        }];
    };
    readonly compiler: {
        readonly name: "cashc";
        readonly version: "0.11.0";
    };
    readonly updatedAt: "2025-06-26T15:07:38.493Z";
};
export default _default;
