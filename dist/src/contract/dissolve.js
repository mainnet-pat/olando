import { Contract, SignatureTemplate, TransactionBuilder } from "cashscript";
import IssuanceFundArtifact from "../../artifacts/IssuanceFund.artifact";
import { addressToLockScript, findAuthGuard, toTokenAddress } from "../utils";
// Dissolves the IssuanceFund contract back into the auth guard, transferring all tokens to the auth guard and BCH to the user
// It is initiated by the user holding the auth key
// It produces a partially signed multisig transaction that needs to be signed by other multisig members with `addMultisigSignature`
export const dissolveIssuanceFund = async ({ address, privKey, provider, olandoCategory, councilMultisigContract, adminMultisigContract, signatures, send = true, }) => {
    const aliceSigTemplate = new SignatureTemplate(privKey);
    const userUtxos = await provider.getUtxos(address);
    const issuanceFundContract = new Contract(IssuanceFundArtifact, [addressToLockScript(councilMultisigContract.address), addressToLockScript(adminMultisigContract.address)], { provider, addressType: 'p2sh20' });
    const authGuard = await findAuthGuard({
        predeployment: false,
        provider,
        authKeyHolderAddress: address,
        olandoCategory: olandoCategory,
    });
    if (!authGuard) {
        throw new Error('No valid auth guard pair found in the wallet');
    }
    const contractUtxo = (await provider.getUtxos(issuanceFundContract.address)).find(u => u.token?.category === olandoCategory &&
        u.token?.nft?.capability === 'mutable' &&
        u.token.nft.commitment.length === 16);
    const adminUtxo = (await provider.getUtxos(adminMultisigContract.address)).find(u => u.satoshis === 1000n);
    // funding utxo
    const fundingUtxo = userUtxos.find(u => u.token === undefined &&
        u.satoshis >= 10000n);
    if (!fundingUtxo) {
        throw new Error(`No funding UTXO found for ${address}`);
    }
    const builder = new TransactionBuilder({ provider })
        .addInput(authGuard.authGuardUtxo, authGuard.authGuardContract.unlock.unlockWithNft(true))
        .addInput(authGuard.authKeyUtxo, aliceSigTemplate.unlockP2PKH())
        .addInput(adminUtxo, adminMultisigContract.unlock.spend(...signatures, 0n))
        .addInput(contractUtxo, issuanceFundContract.unlock.dissolveIntoAuthguard())
        .addInput(fundingUtxo, aliceSigTemplate.unlockP2PKH())
        .addOutput({
        to: authGuard.authGuardContract.tokenAddress,
        amount: authGuard.authGuardUtxo.satoshis,
        token: {
            ...authGuard.authGuardUtxo.token,
            amount: authGuard.authGuardUtxo.token.amount + contractUtxo.token.amount,
            nft: {
                ...authGuard.authGuardUtxo.token.nft,
                capability: 'mutable',
                commitment: '',
            }
        },
    })
        .addOutput({
        to: toTokenAddress(address),
        amount: authGuard.authKeyUtxo.satoshis,
        token: {
            ...authGuard.authKeyUtxo.token,
        },
    });
    const txSize = builder.build().length / 2;
    const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
        builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
    builder.addOutput({
        to: address,
        amount: change - BigInt(txSize) - 100n, // BCH change
        token: undefined,
    });
    // {
    //   const txSize = builder.build().length / 2;
    //   const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
    //     builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
    //   console.log(`Transaction size: ${txSize} bytes, change: ${change} satoshis, fee/byte ${Number(change) / txSize}`);
    // }
    if (send) {
        const result = await builder.send();
        return result.hex;
    }
    return builder.build();
};
//# sourceMappingURL=dissolve.js.map