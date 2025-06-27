import { binToHex, decodeAuthenticationInstructions, decodeTransaction, hexToBin, lockingBytecodeToCashAddress } from "@bitauth/libauth";
import { HashType, SignatureAlgorithm, SignatureTemplate, TransactionBuilder } from "cashscript";
import { getNetworkPrefix } from "cashscript/dist/utils";
// Adds a multisig signature to a partially signed transaction hex
export const addMultisigSignature = async ({ partiallySignedTxHex, privateKey, provider, adminMultisigContract, multisigInputIndex, send = true, }) => {
    const partiallySignedTx = decodeTransaction(hexToBin(partiallySignedTxHex));
    if (typeof partiallySignedTx === "string") {
        throw new Error(`Failed to decode transaction: ${partiallySignedTx}`);
    }
    const ourSigTemplate = new SignatureTemplate(privateKey, HashType.SIGHASH_ALL, SignatureAlgorithm.ECDSA);
    let signature;
    const instructions = decodeAuthenticationInstructions(partiallySignedTx.inputs[multisigInputIndex].unlockingBytecode);
    if (instructions[1].data.every((byte) => byte === 0)) {
        signature = instructions[2].data;
    }
    else {
        signature = instructions[1].data;
    }
    const txMap = {};
    for (const input of partiallySignedTx.inputs) {
        const prevTxId = binToHex(input.outpointTransactionHash);
        if (!txMap[prevTxId]) {
            const txHex = await provider.getRawTransaction(prevTxId);
            const tx = decodeTransaction(hexToBin(txHex));
            if (typeof tx === "string") {
                throw new Error(`Failed to decode transaction: ${tx}`);
            }
            txMap[prevTxId] = tx;
        }
    }
    const builder = new TransactionBuilder({ provider });
    for (const [index, input] of partiallySignedTx.inputs.entries()) {
        const txid = binToHex(input.outpointTransactionHash);
        const output = txMap[txid].outputs[input.outpointIndex];
        const utxo = {
            satoshis: output.valueSatoshis,
            txid: txid,
            vout: input.outpointIndex,
            token: output.token ? {
                category: binToHex(output.token.category),
                amount: output.token.amount,
                nft: output.token.nft ? {
                    capability: output.token.nft.capability,
                    commitment: binToHex(output.token.nft.commitment),
                } : undefined,
            } : undefined,
        };
        if (index === multisigInputIndex) {
            builder.addInput(utxo, adminMultisigContract.unlock.spend(signature, ourSigTemplate, 0n));
        }
        else {
            // raw unlocker
            builder.addInput(utxo, {
                generateLockingBytecode: () => Uint8Array.from([]), // Placeholder, as we are not locking;
                generateUnlockingBytecode: (options) => input.unlockingBytecode,
            });
        }
    }
    for (const output of partiallySignedTx.outputs) {
        const encodeResult = lockingBytecodeToCashAddress({
            bytecode: output.lockingBytecode,
            prefix: getNetworkPrefix(provider.network),
            tokenSupport: output.token !== undefined,
        });
        builder.addOutput({
            to: encodeResult.address,
            amount: output.valueSatoshis,
            token: output.token ? {
                category: binToHex(output.token.category),
                amount: output.token.amount,
                nft: output.token.nft ? {
                    capability: output.token.nft.capability,
                    commitment: binToHex(output.token.nft.commitment),
                } : undefined,
            } : undefined,
        });
    }
    if (send) {
        try {
            const result = await builder.send();
            return result.hex;
        }
        catch (error) {
            // swap signatures if the validation fails with NULLFAIL
            if (error instanceof Error && error.message.includes("NULLFAIL")) {
                builder.inputs[multisigInputIndex].unlocker = adminMultisigContract.unlock.spend(ourSigTemplate, signature, 0n);
                const result = await builder.send();
                return result.hex;
            }
        }
    }
    return builder.build();
};
//# sourceMappingURL=multisig.js.map