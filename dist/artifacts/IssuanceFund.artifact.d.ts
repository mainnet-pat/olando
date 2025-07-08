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
    readonly bytecode: "OP_2 OP_PICK OP_0 OP_NUMEQUAL OP_IF OP_TXINPUTCOUNT OP_4 OP_GREATERTHANOREQUAL OP_VERIFY OP_TXOUTPUTCOUNT OP_5 OP_GREATERTHANOREQUAL OP_VERIFY OP_TXOUTPUTCOUNT OP_TXINPUTCOUNT OP_1ADD OP_NUMEQUALVERIFY OP_INPUTINDEX OP_UTXOTOKENCOMMITMENT OP_4 OP_SPLIT OP_DROP OP_BIN2NUM OP_INPUTINDEX OP_UTXOTOKENCOMMITMENT OP_4 OP_SPLIT OP_NIP OP_BIN2NUM OP_TXLOCKTIME OP_LESSTHAN OP_VERIFY OP_TXINPUTCOUNT OP_1SUB OP_OUTPUTTOKENAMOUNT 380ee8f5ce00 OP_DUP OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_SUB 00ca9a3b OP_TXLOCKTIME OP_5 OP_PICK OP_SUB OP_3 OP_2 OP_PICK OP_SWAP OP_ROT OP_MUL OP_ADD OP_DUP OP_MUL OP_OVER OP_DIV OP_3 OP_ROLL OP_2 OP_PICK OP_3 OP_PICK OP_4 OP_PICK OP_MUL OP_3 OP_ROLL OP_DIV OP_SUB OP_MUL OP_SWAP OP_DIV 64 OP_TXINPUTCOUNT OP_1SUB OP_OUTPUTTOKENAMOUNT OP_MUL 5f OP_DIV OP_DUP OP_9 OP_MUL OP_10 OP_DIV OP_1ADD OP_DUP OP_3 OP_ROLL OP_4 OP_ROLL OP_SUB OP_LESSTHANOREQUAL OP_VERIFY OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENAMOUNT OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_ROT OP_SUB OP_NUMEQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_INPUTINDEX OP_OUTPUTBYTECODE OP_INPUTINDEX OP_UTXOBYTECODE OP_EQUALVERIFY OP_INPUTINDEX OP_OUTPUTTOKENCOMMITMENT OP_3 OP_ROLL OP_TXLOCKTIME OP_CAT OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY 20 OP_SPLIT OP_DROP OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENAMOUNT OP_2 OP_PICK OP_NUMEQUALVERIFY OP_1 OP_OUTPUTBYTECODE OP_3 OP_ROLL OP_EQUALVERIFY OP_1 OP_OUTPUTVALUE e803 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_2 OP_SUB OP_DUP OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY 20 OP_SPLIT OP_DROP OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_3 OP_ROLL OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_1 OP_UTXOBYTECODE OP_EQUALVERIFY OP_OUTPUTVALUE e803 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_1SUB OP_OUTPUTTOKENCATEGORY OP_0 OP_EQUALVERIFY 88ac67c0d1c0ce88c25288c0cdc0c788c0c6c0d095c0c6c0cc9490539502e80396c0cc7c94c0d3957ca268 1a OP_INPUTINDEX OP_1ADD OP_0 OP_OVER OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_2DUP OP_UTXOTOKENAMOUNT OP_ADD OP_OVER OP_OUTPUTTOKENAMOUNT OP_SUB OP_ROT OP_DROP OP_SWAP OP_DUP OP_INPUTBYTECODE OP_4 OP_PICK OP_SPLIT OP_NIP OP_5 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_2 OP_PICK OP_OVER OP_UTXOTOKENAMOUNT OP_ADD OP_OVER OP_OUTPUTTOKENAMOUNT OP_SUB OP_3 OP_ROLL OP_DROP OP_SWAP OP_TOALTSTACK OP_SWAP OP_FROMALTSTACK OP_DUP OP_INPUTBYTECODE OP_5 OP_PICK OP_SPLIT OP_NIP OP_6 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_3 OP_PICK OP_OVER OP_UTXOTOKENAMOUNT OP_ADD OP_OVER OP_OUTPUTTOKENAMOUNT OP_SUB OP_4 OP_ROLL OP_DROP OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_FROMALTSTACK OP_FROMALTSTACK OP_DUP OP_INPUTBYTECODE OP_6 OP_PICK OP_SPLIT OP_NIP OP_7 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_4 OP_PICK OP_OVER OP_UTXOTOKENAMOUNT OP_ADD OP_OVER OP_OUTPUTTOKENAMOUNT OP_SUB OP_5 OP_ROLL OP_DROP OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_DUP OP_INPUTBYTECODE OP_7 OP_PICK OP_SPLIT OP_NIP OP_8 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_5 OP_PICK OP_OVER OP_UTXOTOKENAMOUNT OP_ADD OP_OVER OP_OUTPUTTOKENAMOUNT OP_SUB OP_6 OP_ROLL OP_DROP OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_DUP OP_INPUTBYTECODE OP_8 OP_PICK OP_SPLIT OP_NIP OP_9 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_6 OP_PICK OP_OVER OP_UTXOTOKENAMOUNT OP_ADD OP_OVER OP_OUTPUTTOKENAMOUNT OP_SUB OP_7 OP_ROLL OP_DROP OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_DUP OP_INPUTBYTECODE OP_9 OP_PICK OP_SPLIT OP_NIP OP_10 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_7 OP_PICK OP_OVER OP_UTXOTOKENAMOUNT OP_ADD OP_OVER OP_OUTPUTTOKENAMOUNT OP_SUB OP_8 OP_ROLL OP_DROP OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_DUP OP_INPUTBYTECODE OP_10 OP_PICK OP_SPLIT OP_NIP OP_11 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_8 OP_PICK OP_OVER OP_UTXOTOKENAMOUNT OP_ADD OP_OVER OP_OUTPUTTOKENAMOUNT OP_SUB OP_9 OP_ROLL OP_DROP OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_DUP OP_INPUTBYTECODE OP_11 OP_PICK OP_SPLIT OP_NIP OP_12 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_9 OP_PICK OP_OVER OP_UTXOTOKENAMOUNT OP_ADD OP_OVER OP_OUTPUTTOKENAMOUNT OP_SUB OP_10 OP_ROLL OP_DROP OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_DUP OP_INPUTBYTECODE OP_12 OP_PICK OP_SPLIT OP_NIP OP_13 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_DUP OP_1ADD OP_DUP OP_1ADD OP_TXINPUTCOUNT OP_LESSTHAN OP_IF OP_10 OP_PICK OP_OVER OP_UTXOTOKENAMOUNT OP_ADD OP_OVER OP_OUTPUTTOKENAMOUNT OP_SUB OP_11 OP_ROLL OP_DROP OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_FROMALTSTACK OP_DUP OP_INPUTBYTECODE OP_13 OP_PICK OP_SPLIT OP_NIP OP_14 OP_PICK OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCATEGORY OP_OVER OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_DUP OP_OUTPUTTOKENCOMMITMENT OP_OVER OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_DUP OP_OUTPUTBYTECODE OP_OVER OP_UTXOBYTECODE OP_EQUALVERIFY OP_DUP OP_INPUTBYTECODE OP_SIZE OP_NIP 45 OP_NUMEQUALVERIFY OP_DUP OP_OUTPUTTOKENAMOUNT OP_OVER OP_UTXOTOKENAMOUNT OP_LESSTHAN OP_VERIFY OP_DUP OP_OUTPUTVALUE OP_OVER OP_UTXOVALUE OP_GREATERTHAN OP_VERIFY OP_ENDIF OP_10 OP_ROLL OP_14 OP_ROLL OP_SUB OP_2 OP_LESSTHAN OP_VERIFY OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_2DROP OP_DROP OP_1 OP_ELSE OP_2 OP_PICK OP_1 OP_NUMEQUAL OP_IF OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_0 OP_OUTPUTBYTECODE OP_4 OP_ROLL OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_1 OP_UTXOBYTECODE OP_ROT OP_EQUALVERIFY OP_1 OP_OUTPUTBYTECODE OP_3 OP_ROLL OP_EQUALVERIFY OP_1 OP_OUTPUTVALUE OP_1 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_1 OP_OUTPUTTOKENCATEGORY OP_1 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENAMOUNT OP_1 OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY OP_1 OP_OUTPUTTOKENCOMMITMENT OP_1 OP_UTXOTOKENCOMMITMENT OP_EQUAL OP_NIP OP_NIP OP_ELSE OP_2 OP_PICK OP_2 OP_NUMEQUAL OP_IF OP_INPUTINDEX OP_3 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_5 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_0 OP_OUTPUTBYTECODE OP_0 OP_UTXOBYTECODE OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_1 OP_CAT OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_3 OP_UTXOTOKENAMOUNT OP_ADD OP_NUMEQUALVERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_1 OP_OUTPUTBYTECODE OP_1 OP_UTXOBYTECODE OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENCATEGORY OP_1 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_1 OP_OUTPUTTOKENAMOUNT OP_1 OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY OP_1 OP_OUTPUTTOKENCOMMITMENT OP_1 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_1 OP_OUTPUTVALUE OP_1 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_2 OP_UTXOBYTECODE OP_ROT OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_3 OP_UTXOTOKENCATEGORY OP_EQUAL OP_NIP OP_NIP OP_ELSE OP_ROT OP_3 OP_NUMEQUALVERIFY OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY OP_TXINPUTCOUNT OP_3 OP_NUMEQUALVERIFY OP_TXOUTPUTCOUNT OP_1 OP_GREATERTHAN OP_VERIFY OP_TXOUTPUTCOUNT OP_4 OP_LESSTHAN OP_VERIFY OP_0 OP_OUTPUTBYTECODE OP_0 OP_UTXOBYTECODE OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_UTXOTOKENCATEGORY OP_EQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT OP_0 OP_UTXOTOKENAMOUNT OP_GREATERTHAN OP_VERIFY OP_0 OP_OUTPUTTOKENCOMMITMENT OP_0 OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY OP_0 OP_OUTPUTVALUE OP_0 OP_UTXOVALUE OP_NUMEQUALVERIFY OP_0 OP_OUTPUTTOKENAMOUNT 380ee8f5ce00 OP_LESSTHANOREQUAL OP_NIP OP_NIP OP_ENDIF OP_ENDIF OP_ENDIF";
    readonly source: "// Olando Community Issuance Fund Contract\n// Each time an investor buys tokens from the cauldron pool, the contract emits extra tokens to the council.\n// The contract is deployed with a fixed supply of 8,888,888,888.88 tokens.\n// The contract emits tokens based on the time since deployment and the amount of tokens bought so far.\n// The contract can be migrated to a new issuance or dissolved to release tokens to the admin.\n\n// NOTE: we are making use of nLocktime, which is MTP (Median Time Past) based.\n// We adjust the passed nLocktime by -2h to make the transactions immediately spendable.\ncontract IssuanceFund(bytes councilFundLockingBytecode, bytes adminLockingBytecode) {\n\n  // invest into Olando ecosystem by buying tokens from the cauldron pool\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input, NFT commitment: 4bytes deployment time + 4bytes last interaction time\n  //   1: investors BCH input to balance the council's OLA share payout\n  //   2..N: cauldron pool inputs\n  //   N+1: investment BCH, no tokens\n  //  outputs:\n  //   0: issuance fund output, NFT commitment: 4bytes deployment time + 4bytes new interaction time (tx.locktime)\n  //   1: council OLA share output, see notes for amounts\n  //   2..N: cauldron pool outputs, same properties as inputs but with reduced token amount\n  //   N+1: investors OLA share output, see notes for amounts\n  //   N+2: BCH change output\n  //\n  // Notes: if the issuance cap is not hit at the time of interaction, then ola bought from cauldron by investor\n  // are augmented with 90% of the tokens bought, the OLA amounts are added together and split in half.\n  // If the issuance cap is hit the contract execution fails, suggesting the investor to buy less tokens.\n  function issue() {\n    // first rough check for presence of a cauldron trade\n    require(tx.inputs.length >= 4, \"Issue transaction must have at least 4 inputs\");\n    require(tx.outputs.length >= 5, \"Issue transaction must have at least 5 outputs\");\n    require(tx.outputs.length == tx.inputs.length + 1, \"Issue transaction must have one more output than inputs\");\n\n    int deploymentTime = int(tx.inputs[this.activeInputIndex].nftCommitment.split(4)[0]);\n    int lastInteractionTime = int(tx.inputs[this.activeInputIndex].nftCommitment.split(4)[1]);\n    require(tx.locktime > lastInteractionTime, \"Current time is before last interaction time\");\n\n    int cauldronTradeAdjustedTokenAmount = tx.outputs[tx.inputs.length - 1].tokenAmount; // 95% of the cauldron pool token-buy output\n\n    // the issuance formula is: min_stash_amount(t) = 1 - 1 / (1 + 3E-9 * t)² * max_supply\n    int intialSupply = 8888888888_88; // 8888 millions as per v0.3 whitepaper\n    int issued = intialSupply - tx.inputs[this.activeInputIndex].tokenAmount;\n\n    int SCALE = 1_000_000_000; // 1e9 for scaling\n    int t = tx.locktime - deploymentTime; // time in seconds since deploymentTime\n\n    int k = 3; // 3E-9 scaled by 1e9\n    int denom = SCALE + k * t; // (1 + 3E-9 * t) * 1e9\n    int denomSquared = denom * denom / SCALE; // (1 + 3E-9 * t)^2 * 1e9\n    int currentEmissionCap = intialSupply * (SCALE - SCALE * SCALE / denomSquared) / SCALE;\n\n    // use inputs.length to find the cauldron token-buy output, since last ouput could be a bch change\n    // here we already assume that the cauldron pool output got only 95% of the tokens bought, the other 5% are forwarded to council fund\n    int tokensBought = 100 * tx.outputs[tx.inputs.length - 1].tokenAmount / 95;\n    int issue = tokensBought * 9 / 10 + 1; // 90% of tokens bought\n\n    require(issue <= currentEmissionCap - issued, \"Issue amount exceeds current emission cap\");\n\n    // constrain the input 0 and output 0 to be the issuance fund\n    require(this.activeInputIndex == 0, \"Active input index must be 0 for issuance contract\");\n\n    require(tx.outputs[this.activeInputIndex].tokenAmount == (tx.inputs[this.activeInputIndex].tokenAmount - issue), \"Wrong amount of tokens issued\");\n    require(tx.outputs[this.activeInputIndex].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory, \"Can not change token category\");\n    require(tx.outputs[this.activeInputIndex].lockingBytecode == tx.inputs[this.activeInputIndex].lockingBytecode, \"Can not change locking bytecode\");\n    require(tx.outputs[this.activeInputIndex].nftCommitment == bytes(deploymentTime) + bytes(tx.locktime), \"NFT commitment must be updated with current time\");\n\n    // constrain the output 1 to be the council fund share\n    require(tx.outputs[1].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory.split(32)[0], \"Council fund share must have the same token category, no nft\");\n    require(tx.outputs[1].tokenAmount == cauldronTradeAdjustedTokenAmount, \"Council fund share must match the calculated fund share\");\n    require(tx.outputs[1].lockingBytecode == councilFundLockingBytecode, \"Council fund share must have the correct locking bytecode\");\n    require(tx.outputs[1].value == 1000, \"Council fund share must have a value of 1000 satoshis\");\n\n    // constrain the output N+1 to be the investor's share\n    int investorShareIndex = tx.outputs.length - 2;\n    require(tx.outputs[investorShareIndex].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory.split(32)[0], \"Investor's share must have the same token category, no nft\");\n    require(tx.outputs[investorShareIndex].tokenAmount == cauldronTradeAdjustedTokenAmount, \"Investor's share must match the calculated share\");\n    require(tx.outputs[investorShareIndex].lockingBytecode == tx.inputs[1].lockingBytecode, \"Investor's share must have the correct locking bytecode\");\n    require(tx.outputs[investorShareIndex].value == 1000, \"Investor's share must have a value of 1000 satoshis\");\n\n    // constrain the output N+2 (last output) to be pure bch change\n    int changeOutputIndex = tx.outputs.length - 1;\n    require(tx.outputs[changeOutputIndex].tokenCategory == 0x, \"Change output must have no token category\");\n\n    // constrain the cauldron inputs and outputs 2..N\n    bytes cauldronPoolContractSignature = 0x88ac67c0d1c0ce88c25288c0cdc0c788c0c6c0d095c0c6c0cc9490539502e80396c0cc7c94c0d3957ca268; // partial signature of cauldron pool contract\n    int cauldronPoolContractSignatureSplit = 26; // split the signature at this byte index\n\n    int index = this.activeInputIndex + 1;\n    int cauldronTokenBalance = 0;\n// #region 10 cauldron pool input-output checks\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      cauldronTokenBalance = cauldronTokenBalance + tx.inputs[index].tokenAmount - tx.outputs[index].tokenAmount;\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      cauldronTokenBalance = cauldronTokenBalance + tx.inputs[index].tokenAmount - tx.outputs[index].tokenAmount;\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      cauldronTokenBalance = cauldronTokenBalance + tx.inputs[index].tokenAmount - tx.outputs[index].tokenAmount;\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      cauldronTokenBalance = cauldronTokenBalance + tx.inputs[index].tokenAmount - tx.outputs[index].tokenAmount;\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      cauldronTokenBalance = cauldronTokenBalance + tx.inputs[index].tokenAmount - tx.outputs[index].tokenAmount;\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      cauldronTokenBalance = cauldronTokenBalance + tx.inputs[index].tokenAmount - tx.outputs[index].tokenAmount;\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      cauldronTokenBalance = cauldronTokenBalance + tx.inputs[index].tokenAmount - tx.outputs[index].tokenAmount;\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      cauldronTokenBalance = cauldronTokenBalance + tx.inputs[index].tokenAmount - tx.outputs[index].tokenAmount;\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      cauldronTokenBalance = cauldronTokenBalance + tx.inputs[index].tokenAmount - tx.outputs[index].tokenAmount;\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n\n    index = index + 1; // cauldron pool token output\n    if (index + 1 < tx.inputs.length) {\n      console.log(\"Checking cauldron pool input and output at index\", index);\n      cauldronTokenBalance = cauldronTokenBalance + tx.inputs[index].tokenAmount - tx.outputs[index].tokenAmount;\n      require(tx.inputs[index].unlockingBytecode.split(cauldronPoolContractSignatureSplit)[1] == cauldronPoolContractSignature, \"Cauldron pool contract signature must match\");\n\n      require(tx.outputs[index].tokenCategory == tx.inputs[index].tokenCategory, \"Cauldron pool token category must remain the same\");\n      require(tx.outputs[index].nftCommitment == tx.inputs[index].nftCommitment, \"Cauldron pool token commitment must remain the same\");\n      require(tx.outputs[index].lockingBytecode == tx.inputs[index].lockingBytecode, \"Cauldron pool token locking bytecode must remain the same\");\n      require(tx.inputs[index].unlockingBytecode.length == 69, \"Wrong unlocking bytecode length for cauldron pool input\");\n      require(tx.outputs[index].tokenAmount < tx.inputs[index].tokenAmount, \"Cauldron pool token amount must be less than input amount\");\n      require(tx.outputs[index].value > tx.inputs[index].value, \"Cauldron pool satoshi output value must be greater than input value\");\n    }\n// #endregion\n    require((cauldronTokenBalance - tokensBought) < 2, \"Cauldron pool token balance must be less than 2 tokens after the trade\");\n  }\n\n  // migrate contract to a new instance of issuance fund contract or change admin locking bytecode\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input\n  //   1: admin input\n  //   2: funding input\n  //  outputs:\n  //   0: issuance fund output. all same properties but new locking bytecode\n  //   1: admin output, same as input\n  //   2: bch change output\n  function migrate(bytes newLockingBytecode, bytes newAdminLockingBytecode) {\n    // constrain the general transaction shape\n    require(this.activeInputIndex == 0, \"Active input index must be 0\");\n    require(tx.inputs.length == 3, \"Migration requires exactly 3 inputs\");\n    require(tx.outputs.length == 3, \"Migration requires exactly 3 outputs\");\n\n    // constrain the issuance fund input and output\n    require(tx.outputs[0].lockingBytecode == newLockingBytecode, \"New locking bytecode must be provided for the issuance fund output\");\n    require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[0].tokenAmount == tx.inputs[0].tokenAmount, \"Token amount must remain the same\");\n    require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n    // preserve admin input\n    require(tx.inputs[1].lockingBytecode == adminLockingBytecode, \"Admin input must have the correct locking bytecode\");\n    require(tx.outputs[1].lockingBytecode == newAdminLockingBytecode, \"New admin locking bytecode must be provided for the admin output\");\n    require(tx.outputs[1].value == tx.inputs[1].value, \"Output value must remain the same for admin output\");\n    require(tx.outputs[1].tokenCategory == tx.inputs[1].tokenCategory, \"Token category must remain the same for admin output\");\n    require(tx.outputs[1].tokenAmount == tx.inputs[1].tokenAmount, \"Token amount must remain the same for admin output\");\n    require(tx.outputs[1].nftCommitment == tx.inputs[1].nftCommitment, \"NFT commitment must remain the same for admin output\");\n\n    // bch change output is not burdened with any requirements and must be taken care of by the spender\n  }\n\n  // NOTE: excluded due to input size limitations of 1650 bytes\n  // // dissolve contract and release tokens to admin\n  // // tx layout:\n  // //  inputs:\n  // //   0: issuance fund input\n  // //   1: admin input\n  // //   2: funding input\n  // //  outputs:\n  // //   0: same properties as input 0 paid to admin locking bytecode\n  // //   1: bch change output\n  // function dissolve() {\n  //   // constrain the general transaction shape\n  //   require(this.activeInputIndex == 0, \"Active input index must be 0\");\n  //   require(tx.inputs.length == 3, \"Dissolve requires exactly 3 inputs\");\n  //   require(tx.outputs.length == 2, \"Dissolve requires exactly 2 outputs\");\n\n  //   // constrain the issuance fund input and output\n  //   require(tx.outputs[0].lockingBytecode == tx.inputs[1].lockingBytecode, \"Locking bytecode must be the same as admin input\");\n  //   require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n  //   require(tx.outputs[0].tokenAmount == tx.inputs[0].tokenAmount, \"Token amount must remain the same\");\n  //   require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n  //   require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n  //   // constrain the admin input, do not require it to be present in outputs\n  //   require(tx.inputs[1].lockingBytecode == adminLockingBytecode, \"Admin input must have the correct locking bytecode\");\n\n  //   // bch change output is not burdened with any requirements\n  // }\n\n  // dissolve contract and release tokens to admin\n  // tx layout:\n  //  inputs:\n  //   0: authguard\n  //   1: authkey\n  //   2: admin input\n  //   3: issuance fund input\n  //   4: funding input\n  //  outputs:\n  //   0: authguard output, receives mutable NFT from issuance fund input, commitment set to empty\n  //   1: authkey, no changes\n  //   2: bch change output\n  function dissolveIntoAuthguard() {\n    // constrain the general transaction shape\n    require(this.activeInputIndex == 3, \"Active input index must be 3\");\n    require(tx.inputs.length == 5, \"Dissolve requires exactly 5 inputs\");\n    require(tx.outputs.length == 3, \"Dissolve requires exactly 3 outputs\");\n\n    // constrain the authguard input and output\n    require(tx.outputs[0].lockingBytecode == tx.inputs[0].lockingBytecode, \"Locking bytecode must be the same as authguard input\");\n    require(tx.outputs[0].tokenCategory == (tx.inputs[0].tokenCategory + 0x01), \"Token category must remain the same, become mutable NFT\");\n    require(tx.outputs[0].tokenAmount == tx.inputs[0].tokenAmount + tx.inputs[3].tokenAmount, \"Token amount must be the sum of authguard and issuance fund inputs\");\n    require(tx.outputs[0].nftCommitment == 0x, \"NFT commitment must be empty for authguard output\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same for authguard output\");\n\n    // constrain the authkey input and output\n    require(tx.outputs[1].lockingBytecode == tx.inputs[1].lockingBytecode, \"Locking bytecode must be the same as authkey input\");\n    require(tx.outputs[1].tokenCategory == tx.inputs[1].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[1].tokenAmount == tx.inputs[1].tokenAmount, \"Token amount must remain the same\");\n    require(tx.outputs[1].nftCommitment == tx.inputs[1].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[1].value == tx.inputs[1].value, \"Output value must remain the same\");\n\n    // constrain the admin input, do not require it to be present in outputs\n    require(tx.inputs[2].lockingBytecode == adminLockingBytecode, \"Admin input must have the correct locking bytecode\");\n\n    // constrain the issuance fund input and output\n    require(tx.outputs[0].tokenCategory == tx.inputs[3].tokenCategory, \"Token category must remain the same\");\n\n    // bch change output is not burdened with any requirements\n  }\n\n  // donate to the issuance fund\n  // tx layout:\n  //  inputs:\n  //   0: issuance fund input\n  //   1: donation token input, strictly FT\n  //   2: funding input\n  //  outputs:\n  //   0: issuance fund output, no changes\n  //   [1]: token change if any\n  //   [2]: bch change if any\n  function donate() {\n    // constrain the general transaction shape\n    require(this.activeInputIndex == 0, \"Active input index must be 0\");\n    require(tx.inputs.length == 3, \"Donation requires exactly 3 inputs\");\n    require(tx.outputs.length > 1, \"Donation requires more than 1 output\");\n    require(tx.outputs.length < 4, \"Donation requires less than 4 outputs\");\n\n    // constrain the issuance fund input and output\n    require(tx.outputs[0].lockingBytecode == tx.inputs[0].lockingBytecode, \"Locking bytecode must remain the same\");\n    require(tx.outputs[0].tokenCategory == tx.inputs[0].tokenCategory, \"Token category must remain the same\");\n    require(tx.outputs[0].tokenAmount > tx.inputs[0].tokenAmount, \"Token amount must increase\");\n    require(tx.outputs[0].nftCommitment == tx.inputs[0].nftCommitment, \"NFT commitment must remain the same\");\n    require(tx.outputs[0].value == tx.inputs[0].value, \"Output value must remain the same\");\n\n    // prevent donation to overflow the max supply\n    require(tx.outputs[0].tokenAmount <= 8888888888_88, \"Can not donate to exceed the max supply\");\n    // bch change output is not burdened with any requirements and must be taken care of by the spender\n  }\n}\n";
    readonly debug: {
        readonly bytecode: "5279009c63c354a269c455a269c4c38b9dc0cf547f7581c0cf547f7781c59f69c38cd306380ee8f5ce0076c0d0940400ca9a3bc55579945352797c7b959376957896537a52795379547995537a9694957c960164c38cd395015f967659955a968b76537a547a94a169c0009dc0d3c0d07b949dc0d1c0ce88c0cdc0c788c0d2537ac57e8851d1c0ce01207f758851d352799d51cd537a8851cc02e8039dc4529476d1c0ce01207f758876d3537a9d76cd51c788cc02e8039dc48cd100882b88ac67c0d1c0ce88c25288c0cdc0c788c0c6c0d095c0c6c0cc9490539502e80396c0cc7c94c0d3957ca268011ac08b00788b768bc39f636ed09378d3947b757c76ca54797f7755798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f63527978d09378d394537a757c6b7c6c76ca55797f7756798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f63537978d09378d394547a757c6b7c6b7c6c6c76ca56797f7757798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f63547978d09378d394557a757c6b7c6b7c6b7c6c6c6c76ca57797f7758798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f63557978d09378d394567a757c6b7c6b7c6b7c6b7c6c6c6c6c76ca58797f7759798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f63567978d09378d394577a757c6b7c6b7c6b7c6b7c6b7c6c6c6c6c6c76ca59797f775a798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f63577978d09378d394587a757c6b7c6b7c6b7c6b7c6b7c6b7c6c6c6c6c6c6c76ca5a797f775b798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f63587978d09378d394597a757c6b7c6b7c6b7c6b7c6b7c6b7c6b7c6c6c6c6c6c6c6c76ca5b797f775c798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f63597978d09378d3945a7a757c6b7c6b7c6b7c6b7c6b7c6b7c6b7c6b7c6c6c6c6c6c6c6c6c76ca5c797f775d798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a06968768b768bc39f635a7978d09378d3945b7a757c6b7c6b7c6b7c6b7c6b7c6b7c6b7c6b7c6b7c6c6c6c6c6c6c6c6c6c76ca5d797f775e798876d178ce8876d278cf8876cd78c78876ca827701459d76d378d09f6976cc78c6a069685a7a5e7a94529f696d6d6d6d6d6d6d7551675279519c63c0009dc3539dc4539d00cd547a8800d100ce8800d300d09d00d200cf8800cc00c69d51c77b8851cd537a8851cc51c69d51d151ce8851d351d09d51d251cf877777675279529c63c0539dc3559dc4539d00cd00c78800d100ce517e8800d300d053d0939d00d2008800cc00c69d51cd51c78851d151ce8851d351d09d51d251cf8851cc51c69d52c77b8800d153ce877777677b539dc0009dc3539dc451a069c4549f6900cd00c78800d100ce8800d300d0a06900d200cf8800cc00c69d00d306380ee8f5ce00a17777686868";
        readonly sourceMap: "28:2:231:3;;;;;30:12:30:28;:32::33;:12:::1;:4::84;31:12:31:29:0;:33::34;:12:::1;:4::86;32:12:32:29:0;:33::49;:::53:1;:4::114;34:39:34:60:0;:29::75:1;:82::83:0;:29::84:1;:::87;:25::88;35:44:35:65:0;:34::80:1;:87::88:0;:34::89:1;:::92;:30::93;36:12:36:23:0;:::45:1;:4::95;38:54:38:70:0;:::74:1;:43::87;41:23:41:36:0;42:17:42:29;:42::63;:32::76:1;:17;44:16:44:29:0;45:12:45:23;:26::40;;:12:::1;47::47:13:0;48:16:48:21;;:24::25;:28::29;:24:::1;:16;49:23:49:36:0;::::1;:39::44:0;:23:::1;50:29:50:41:0;;:45::50;;:53::58;;:61::66;;:53:::1;:69::81:0;;:53:::1;:45;:29::82;:85::90:0;:29:::1;54:23:54:26:0;:40::56;:::60:1;:29::73;:23;:76::78:0;:23:::1;55:16:55:28:0;:31::32;:16:::1;:35::37:0;:16:::1;:::41;57:12:57:17:0;:21::39;;:42::48;;:21:::1;:12;:4::95;60:12:60:33:0;:37::38;:4::94:1;62:23:62:44:0;:12::57:1;:72::93:0;:62::106:1;:109::114:0;:62:::1;:4::150;63:23:63:44:0;:12::59:1;:73::94:0;:63::109:1;:4::144;64:23:64:44:0;:12::61:1;:75::96:0;:65::113:1;:4::150;65:23:65:44:0;:12::59:1;:69::83:0;;:93::104;:63::105:1;:4::159;68:23:68:24:0;:12::39:1;:53::74:0;:43::89:1;:96::98:0;:43::99:1;:::102;:4::168;69:23:69:24:0;:12::37:1;:41::73:0;;:4::134:1;70:23:70:24:0;:12::41:1;:45::71:0;;:4::134:1;71:23:71:24:0;:12::31:1;:35::39:0;:4::98:1;74:29:74:46:0;:49::50;:29:::1;75:23:75:41:0;:12::56:1;:70::91:0;:60::106:1;:113::115:0;:60::116:1;:::119;:4::183;76:23:76:41:0;:12::54:1;:58::90:0;;:4::144:1;77:23:77:41:0;:12::58:1;:72::73:0;:62::90:1;:4::151;78:12:78:48;:52::56:0;:4::113:1;81:28:81:45:0;:::49:1;82:12:82:55;:59::61:0;:4::108:1;85:42:85:130:0;86:45:86:47;88:16:88:37;:::41:1;89:31:89:32:0;91:12:91:17;:::21:1;92:8:92:13:0;:::17:1;:20::36:0;:8:::1;:38:102:5:0;93:29:93:67;:52::80:1;:29;:94::99:0;:83::112:1;:29;:6::113;;;94:24:94:29:0;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;96:25:96:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;97:25:97:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;98:25:98:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;99:24:99:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;100:25:100:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;101:25:101:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;92:38:102:5;104:12:104:17:0;:::21:1;105:8:105:13:0;:::17:1;:20::36:0;:8:::1;:38:116:5:0;107:29:107:49;;:62::67;:52::80:1;:29;:94::99:0;:83::112:1;:29;:6::113;;;;;;;108:24:108:29:0;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;110:25:110:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;111:25:111:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;112:25:112:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;113:24:113:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;114:25:114:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;115:25:115:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;105:38:116:5;118:12:118:17:0;:::21:1;119:8:119:13:0;:::17:1;:20::36:0;:8:::1;:38:130:5:0;121:29:121:49;;:62::67;:52::80:1;:29;:94::99:0;:83::112:1;:29;:6::113;;;;;;;;;;122:24:122:29:0;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;124:25:124:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;125:25:125:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;126:25:126:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;127:24:127:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;128:25:128:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;129:25:129:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;119:38:130:5;132:12:132:17:0;:::21:1;133:8:133:13:0;:::17:1;:20::36:0;:8:::1;:38:144:5:0;135:29:135:49;;:62::67;:52::80:1;:29;:94::99:0;:83::112:1;:29;:6::113;;;;;;;;;;;;;136:24:136:29:0;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;138:25:138:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;139:25:139:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;140:25:140:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;141:24:141:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;142:25:142:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;143:25:143:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;133:38:144:5;146:12:146:17:0;:::21:1;147:8:147:13:0;:::17:1;:20::36:0;:8:::1;:38:158:5:0;149:29:149:49;;:62::67;:52::80:1;:29;:94::99:0;:83::112:1;:29;:6::113;;;;;;;;;;;;;;;;150:24:150:29:0;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;152:25:152:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;153:25:153:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;154:25:154:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;155:24:155:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;156:25:156:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;157:25:157:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;147:38:158:5;160:12:160:17:0;:::21:1;161:8:161:13:0;:::17:1;:20::36:0;:8:::1;:38:172:5:0;163:29:163:49;;:62::67;:52::80:1;:29;:94::99:0;:83::112:1;:29;:6::113;;;;;;;;;;;;;;;;;;;164:24:164:29:0;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;166:25:166:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;167:25:167:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;168:25:168:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;169:24:169:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;170:25:170:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;171:25:171:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;161:38:172:5;174:12:174:17:0;:::21:1;175:8:175:13:0;:::17:1;:20::36:0;:8:::1;:38:186:5:0;177:29:177:49;;:62::67;:52::80:1;:29;:94::99:0;:83::112:1;:29;:6::113;;;;;;;;;;;;;;;;;;;;;;178:24:178:29:0;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;180:25:180:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;181:25:181:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;182:25:182:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;183:24:183:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;184:25:184:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;185:25:185:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;175:38:186:5;188:12:188:17:0;:::21:1;189:8:189:13:0;:::17:1;:20::36:0;:8:::1;:38:200:5:0;191:29:191:49;;:62::67;:52::80:1;:29;:94::99:0;:83::112:1;:29;:6::113;;;;;;;;;;;;;;;;;;;;;;;;;192:24:192:29:0;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;194:25:194:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;195:25:195:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;196:25:196:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;197:24:197:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;198:25:198:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;199:25:199:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;189:38:200:5;202:12:202:17:0;:::21:1;203:8:203:13:0;:::17:1;:20::36:0;:8:::1;:38:214:5:0;205:29:205:49;;:62::67;:52::80:1;:29;:94::99:0;:83::112:1;:29;:6::113;;;;;;;;;;;;;;;;;;;;;;;;;;;;206:24:206:29:0;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;208:25:208:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;209:25:209:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;210:25:210:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;211:24:211:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;212:25:212:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;213:25:213:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;203:38:214:5;216:12:216:17:0;:::21:1;217:8:217:13:0;:::17:1;:20::36:0;:8:::1;:38:228:5:0;219:29:219:49;;:62::67;:52::80:1;:29;:94::99:0;:83::112:1;:29;:6::113;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;220:24:220:29:0;:14::48:1;:55::89:0;;:14::90:1;:::93;:97::126:0;;:6::175:1;222:25:222:30:0;:14::45:1;:59::64:0;:49::79:1;:6::134;223:25:223:30:0;:14::45:1;:59::64:0;:49::79:1;:6::136;224:25:224:30:0;:14::47:1;:61::66:0;:51::83:1;:6::146;225:24:225:29:0;:14::48:1;:::55;;:59::61:0;:6::122:1;226:25:226:30:0;:14::43:1;:56::61:0;:46::74:1;:14;:6::137;227:25:227:30:0;:14::37:1;:50::55:0;:40::62:1;:14;:6::135;217:38:228:5;230:13:230:33:0;;:36::48;;:13:::1;:52::53:0;:12:::1;:4::129;28:2:231:3;;;;;;;;;;243::265::0;;;;;245:12:245:33;:37::38;:4::72:1;246:12:246:28:0;:32::33;:4::74:1;247:12:247:29:0;:33::34;:4::76:1;250:23:250:24:0;:12::41:1;:45::63:0;;:4::135:1;251:23:251:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;252:23:252:24:0;:12::37:1;:51::52:0;:41::65:1;:4::104;253:23:253:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;254:23:254:24:0;:12::31:1;:45::46:0;:35::53:1;:4::92;257:22:257:23:0;:12::40:1;:44::64:0;:4::120:1;258:23:258:24:0;:12::41:1;:45::68:0;;:4::138:1;259:23:259:24:0;:12::31:1;:45::46:0;:35::53:1;:4::109;260:23:260:24:0;:12::39:1;:53::54:0;:43::69:1;:4::127;261:23:261:24:0;:12::37:1;:51::52:0;:41::65:1;:4::121;262:23:262:24:0;:12::39:1;:53::54:0;:43::69:1;:4::127;243:2:265:3;;;308::335::0;;;;;310:12:310:33;:37::38;:4::72:1;311:12:311:28:0;:32::33;:4::73:1;312:12:312:29:0;:33::34;:4::75:1;315:23:315:24:0;:12::41:1;:55::56:0;:45::73:1;:4::131;316:23:316:24:0;:12::39:1;:54::55:0;:44::70:1;:73::77:0;:44:::1;:4::139;317:23:317:24:0;:12::37:1;:51::52:0;:41::65:1;:78::79:0;:68::92:1;:41;:4::164;318:23:318:24:0;:12::39:1;:43::45:0;:4::100:1;319:23:319:24:0;:12::31:1;:45::46:0;:35::53:1;:4::113;322:23:322:24:0;:12::41:1;:55::56:0;:45::73:1;:4::129;323:23:323:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;324:23:324:24:0;:12::37:1;:51::52:0;:41::65:1;:4::104;325:23:325:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;326:23:326:24:0;:12::31:1;:45::46:0;:35::53:1;:4::92;329:22:329:23:0;:12::40:1;:44::64:0;:4::120:1;332:23:332:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;308:2:335:3;;;347::364::0;;;349:12:349:33;:37::38;:4::72:1;350:12:350:28:0;:32::33;:4::73:1;351:12:351:29:0;:32::33;:12:::1;:4::75;352:12:352:29:0;:32::33;:12:::1;:4::76;355:23:355:24:0;:12::41:1;:55::56:0;:45::73:1;:4::116;356:23:356:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;357:23:357:24:0;:12::37:1;:50::51:0;:40::64:1;:12;:4::96;358:23:358:24:0;:12::39:1;:53::54:0;:43::69:1;:4::110;359:23:359:24:0;:12::31:1;:45::46:0;:35::53:1;:4::92;362:23:362:24:0;:12::37:1;:41::54:0;:4::99:1;347:2:364:3;;9:0:365:1;;";
        readonly logs: readonly [{
            readonly ip: 244;
            readonly line: 106;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 244;
            }];
        }, {
            readonly ip: 309;
            readonly line: 120;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 309;
            }];
        }, {
            readonly ip: 377;
            readonly line: 134;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 377;
            }];
        }, {
            readonly ip: 448;
            readonly line: 148;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 448;
            }];
        }, {
            readonly ip: 522;
            readonly line: 162;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 522;
            }];
        }, {
            readonly ip: 599;
            readonly line: 176;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 599;
            }];
        }, {
            readonly ip: 679;
            readonly line: 190;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 679;
            }];
        }, {
            readonly ip: 762;
            readonly line: 204;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 762;
            }];
        }, {
            readonly ip: 848;
            readonly line: 218;
            readonly data: readonly ["Checking cauldron pool input and output at index", {
                readonly stackIndex: 0;
                readonly type: "int";
                readonly ip: 848;
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
            readonly ip: 94;
            readonly line: 57;
            readonly message: "Issue amount exceeds current emission cap";
        }, {
            readonly ip: 97;
            readonly line: 60;
            readonly message: "Active input index must be 0 for issuance contract";
        }, {
            readonly ip: 104;
            readonly line: 62;
            readonly message: "Wrong amount of tokens issued";
        }, {
            readonly ip: 109;
            readonly line: 63;
            readonly message: "Can not change token category";
        }, {
            readonly ip: 114;
            readonly line: 64;
            readonly message: "Can not change locking bytecode";
        }, {
            readonly ip: 121;
            readonly line: 65;
            readonly message: "NFT commitment must be updated with current time";
        }, {
            readonly ip: 129;
            readonly line: 68;
            readonly message: "Council fund share must have the same token category, no nft";
        }, {
            readonly ip: 134;
            readonly line: 69;
            readonly message: "Council fund share must match the calculated fund share";
        }, {
            readonly ip: 139;
            readonly line: 70;
            readonly message: "Council fund share must have the correct locking bytecode";
        }, {
            readonly ip: 143;
            readonly line: 71;
            readonly message: "Council fund share must have a value of 1000 satoshis";
        }, {
            readonly ip: 154;
            readonly line: 75;
            readonly message: "Investor's share must have the same token category, no nft";
        }, {
            readonly ip: 159;
            readonly line: 76;
            readonly message: "Investor's share must match the calculated share";
        }, {
            readonly ip: 164;
            readonly line: 77;
            readonly message: "Investor's share must have the correct locking bytecode";
        }, {
            readonly ip: 167;
            readonly line: 78;
            readonly message: "Investor's share must have a value of 1000 satoshis";
        }, {
            readonly ip: 172;
            readonly line: 82;
            readonly message: "Change output must have no token category";
        }, {
            readonly ip: 202;
            readonly line: 94;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 207;
            readonly line: 96;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 212;
            readonly line: 97;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 217;
            readonly line: 98;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 223;
            readonly line: 99;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 229;
            readonly line: 100;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 235;
            readonly line: 101;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 267;
            readonly line: 108;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 272;
            readonly line: 110;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 277;
            readonly line: 111;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 282;
            readonly line: 112;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 288;
            readonly line: 113;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 294;
            readonly line: 114;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 300;
            readonly line: 115;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 335;
            readonly line: 122;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 340;
            readonly line: 124;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 345;
            readonly line: 125;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 350;
            readonly line: 126;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 356;
            readonly line: 127;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 362;
            readonly line: 128;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 368;
            readonly line: 129;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 406;
            readonly line: 136;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 411;
            readonly line: 138;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 416;
            readonly line: 139;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 421;
            readonly line: 140;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 427;
            readonly line: 141;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 433;
            readonly line: 142;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 439;
            readonly line: 143;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 480;
            readonly line: 150;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 485;
            readonly line: 152;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 490;
            readonly line: 153;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 495;
            readonly line: 154;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 501;
            readonly line: 155;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 507;
            readonly line: 156;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 513;
            readonly line: 157;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 557;
            readonly line: 164;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 562;
            readonly line: 166;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 567;
            readonly line: 167;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 572;
            readonly line: 168;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 578;
            readonly line: 169;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 584;
            readonly line: 170;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 590;
            readonly line: 171;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 637;
            readonly line: 178;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 642;
            readonly line: 180;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 647;
            readonly line: 181;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 652;
            readonly line: 182;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 658;
            readonly line: 183;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 664;
            readonly line: 184;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 670;
            readonly line: 185;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 720;
            readonly line: 192;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 725;
            readonly line: 194;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 730;
            readonly line: 195;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 735;
            readonly line: 196;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 741;
            readonly line: 197;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 747;
            readonly line: 198;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 753;
            readonly line: 199;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 806;
            readonly line: 206;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 811;
            readonly line: 208;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 816;
            readonly line: 209;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 821;
            readonly line: 210;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 827;
            readonly line: 211;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 833;
            readonly line: 212;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 839;
            readonly line: 213;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 895;
            readonly line: 220;
            readonly message: "Cauldron pool contract signature must match";
        }, {
            readonly ip: 900;
            readonly line: 222;
            readonly message: "Cauldron pool token category must remain the same";
        }, {
            readonly ip: 905;
            readonly line: 223;
            readonly message: "Cauldron pool token commitment must remain the same";
        }, {
            readonly ip: 910;
            readonly line: 224;
            readonly message: "Cauldron pool token locking bytecode must remain the same";
        }, {
            readonly ip: 916;
            readonly line: 225;
            readonly message: "Wrong unlocking bytecode length for cauldron pool input";
        }, {
            readonly ip: 922;
            readonly line: 226;
            readonly message: "Cauldron pool token amount must be less than input amount";
        }, {
            readonly ip: 928;
            readonly line: 227;
            readonly message: "Cauldron pool satoshi output value must be greater than input value";
        }, {
            readonly ip: 937;
            readonly line: 230;
            readonly message: "Cauldron pool token balance must be less than 2 tokens after the trade";
        }, {
            readonly ip: 955;
            readonly line: 245;
            readonly message: "Active input index must be 0";
        }, {
            readonly ip: 958;
            readonly line: 246;
            readonly message: "Migration requires exactly 3 inputs";
        }, {
            readonly ip: 961;
            readonly line: 247;
            readonly message: "Migration requires exactly 3 outputs";
        }, {
            readonly ip: 966;
            readonly line: 250;
            readonly message: "New locking bytecode must be provided for the issuance fund output";
        }, {
            readonly ip: 971;
            readonly line: 251;
            readonly message: "Token category must remain the same";
        }, {
            readonly ip: 976;
            readonly line: 252;
            readonly message: "Token amount must remain the same";
        }, {
            readonly ip: 981;
            readonly line: 253;
            readonly message: "NFT commitment must remain the same";
        }, {
            readonly ip: 986;
            readonly line: 254;
            readonly message: "Output value must remain the same";
        }, {
            readonly ip: 990;
            readonly line: 257;
            readonly message: "Admin input must have the correct locking bytecode";
        }, {
            readonly ip: 995;
            readonly line: 258;
            readonly message: "New admin locking bytecode must be provided for the admin output";
        }, {
            readonly ip: 1000;
            readonly line: 259;
            readonly message: "Output value must remain the same for admin output";
        }, {
            readonly ip: 1005;
            readonly line: 260;
            readonly message: "Token category must remain the same for admin output";
        }, {
            readonly ip: 1010;
            readonly line: 261;
            readonly message: "Token amount must remain the same for admin output";
        }, {
            readonly ip: 1016;
            readonly line: 262;
            readonly message: "NFT commitment must remain the same for admin output";
        }, {
            readonly ip: 1026;
            readonly line: 310;
            readonly message: "Active input index must be 3";
        }, {
            readonly ip: 1029;
            readonly line: 311;
            readonly message: "Dissolve requires exactly 5 inputs";
        }, {
            readonly ip: 1032;
            readonly line: 312;
            readonly message: "Dissolve requires exactly 3 outputs";
        }, {
            readonly ip: 1037;
            readonly line: 315;
            readonly message: "Locking bytecode must be the same as authguard input";
        }, {
            readonly ip: 1044;
            readonly line: 316;
            readonly message: "Token category must remain the same, become mutable NFT";
        }, {
            readonly ip: 1052;
            readonly line: 317;
            readonly message: "Token amount must be the sum of authguard and issuance fund inputs";
        }, {
            readonly ip: 1056;
            readonly line: 318;
            readonly message: "NFT commitment must be empty for authguard output";
        }, {
            readonly ip: 1061;
            readonly line: 319;
            readonly message: "Output value must remain the same for authguard output";
        }, {
            readonly ip: 1066;
            readonly line: 322;
            readonly message: "Locking bytecode must be the same as authkey input";
        }, {
            readonly ip: 1071;
            readonly line: 323;
            readonly message: "Token category must remain the same";
        }, {
            readonly ip: 1076;
            readonly line: 324;
            readonly message: "Token amount must remain the same";
        }, {
            readonly ip: 1081;
            readonly line: 325;
            readonly message: "NFT commitment must remain the same";
        }, {
            readonly ip: 1086;
            readonly line: 326;
            readonly message: "Output value must remain the same";
        }, {
            readonly ip: 1090;
            readonly line: 329;
            readonly message: "Admin input must have the correct locking bytecode";
        }, {
            readonly ip: 1096;
            readonly line: 332;
            readonly message: "Token category must remain the same";
        }, {
            readonly ip: 1104;
            readonly line: 349;
            readonly message: "Active input index must be 0";
        }, {
            readonly ip: 1107;
            readonly line: 350;
            readonly message: "Donation requires exactly 3 inputs";
        }, {
            readonly ip: 1111;
            readonly line: 351;
            readonly message: "Donation requires more than 1 output";
        }, {
            readonly ip: 1115;
            readonly line: 352;
            readonly message: "Donation requires less than 4 outputs";
        }, {
            readonly ip: 1120;
            readonly line: 355;
            readonly message: "Locking bytecode must remain the same";
        }, {
            readonly ip: 1125;
            readonly line: 356;
            readonly message: "Token category must remain the same";
        }, {
            readonly ip: 1131;
            readonly line: 357;
            readonly message: "Token amount must increase";
        }, {
            readonly ip: 1136;
            readonly line: 358;
            readonly message: "NFT commitment must remain the same";
        }, {
            readonly ip: 1141;
            readonly line: 359;
            readonly message: "Output value must remain the same";
        }, {
            readonly ip: 1146;
            readonly line: 362;
            readonly message: "Can not donate to exceed the max supply";
        }];
    };
    readonly compiler: {
        readonly name: "cashc";
        readonly version: "0.11.0";
    };
    readonly updatedAt: "2025-07-01T06:00:38.721Z";
};
export default _default;
