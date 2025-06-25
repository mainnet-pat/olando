import { bigIntToVmNumber, binToHex, cashAddressToLockingBytecode, decodeCashAddress, encodeCashAddress, hexToBin, padMinimallyEncodedVmNumber, vmNumberToBigInt } from "@bitauth/libauth";
import { Contract, encodeFunctionArgument } from "cashscript";
import AuthGuardArtifact from "../artifacts/AuthGuard.artifact.js";
import CauldronPoolArtifact from "../artifacts/CauldronPool.artifact.js";
import IssuanceFundArtifact from "../artifacts/IssuanceFund.artifact.js";
export const min = (...args) => args.reduce((m, e) => e < m ? e : m);
export const require = (predicate, message) => {
    if (!predicate) {
        throw new Error(message);
    }
};
export const padVmNumber = (num, length) => {
    return padMinimallyEncodedVmNumber(bigIntToVmNumber(num), length).slice(0, length);
};
export const vmToBigInt = (vmNumber) => {
    return vmNumberToBigInt(hexToBin(vmNumber), { requireMinimalEncoding: false });
};
export function addressToLockScript(address) {
    const result = cashAddressToLockingBytecode(address);
    if (typeof result === 'string')
        throw new Error(result);
    return result.bytecode;
}
export const toCashAddress = (address) => {
    const decoded = decodeCashAddress(address);
    if (typeof decoded === 'string') {
        throw new Error(decoded);
    }
    return encodeCashAddress({
        ...decoded,
        prefix: address.split(':')[0],
        type: decoded.type.replace('WithTokens', ''),
    }).address;
};
export const toTokenAddress = (address) => {
    const decoded = decodeCashAddress(address);
    if (typeof decoded === 'string') {
        throw new Error(decoded);
    }
    return encodeCashAddress({
        ...decoded,
        prefix: decoded.prefix,
        type: decoded.type.replace('WithTokens', '') + 'WithTokens',
    }).address;
};
export const olandoCategory = '7fa887fd4eac015478b95392c4984721fbe3060223c30b342d43cc06817f07f6';
let contractIndex = 0; // Used to differentiate contract names in tests
export const replaceArtifactPlaceholders = (artifact, parameters) => {
    const artifactCopy = { ...artifact };
    const argumentTypes = [...artifactCopy.constructorInputs, ...Object.values(artifactCopy.abi).map(f => f.inputs).flat()].reduce((acc, input) => {
        acc[input.name] = input.type;
        return acc;
    }, {});
    Object.entries(parameters).forEach(([key, value]) => {
        artifactCopy.bytecode = artifactCopy.bytecode.replaceAll(`<${key}>`, binToHex(encodeFunctionArgument(value, argumentTypes[key] ?? "bytes")));
    });
    artifactCopy.contractName = artifactCopy.contractName + ` #${contractIndex++}`;
    if (artifactCopy.bytecode.includes('<')) {
        throw new Error(`Not all placeholders in artifact ${artifactCopy.contractName} were replaced. Remaining placeholders: ${artifactCopy.bytecode.match(/<[^>]+>/g)?.join(', ')}`);
    }
    return artifactCopy;
};
export const getCauldronPoolContractInstance = (provider, poolOwnerPublicKeyHash160) => {
    const cauldronArtifact = replaceArtifactPlaceholders(CauldronPoolArtifact, {
        pool_owner_public_key_hash160: poolOwnerPublicKeyHash160,
    });
    return new Contract(cauldronArtifact, [], { provider, ignoreFunctionSelector: true });
};
// if we are at predeployment stage, we will look for auth guard with mutable capability and empty commitment
// after the deployment the authguard will not have the NFT, as it will be moved to the issuance contract
export const findAuthGuard = async ({ predeployment, provider, authKeyHolderAddress, olandoCategory }) => {
    const userUtxos = await provider.getUtxos(authKeyHolderAddress);
    const authKeyCandidates = userUtxos.filter(utxo => utxo.token?.amount === 0n &&
        utxo.token?.nft?.capability === 'none' &&
        utxo.token.nft.commitment === '00');
    for (const authKeyCandidate of authKeyCandidates) {
        const authGuardContract = new Contract(AuthGuardArtifact, [binToHex(hexToBin(authKeyCandidate.token.category).reverse())], { provider, addressType: "p2sh20" });
        const contractUtxos = await provider.getUtxos(authGuardContract.address);
        const authGuardCandidate = contractUtxos.find(contractUtxo => contractUtxo.token &&
            contractUtxo.token.category === olandoCategory &&
            contractUtxo.token.amount >= 888888888888888n && // 2 decimals
            predeployment ? (contractUtxo.token.nft?.capability === 'mutable' &&
            contractUtxo.token.nft?.commitment === '') : true);
        if (authGuardCandidate) {
            return { authGuardContract, authGuardUtxo: authGuardCandidate, authKeyUtxo: authKeyCandidate };
        }
    }
    ;
};
export const getIssuanceContract = ({ provider, councilMultisigContract, adminMultisigContract, }) => {
    return new Contract(IssuanceFundArtifact, [addressToLockScript(councilMultisigContract.address), addressToLockScript(adminMultisigContract.address)], { provider, addressType: 'p2sh20' });
};
//# sourceMappingURL=utils.js.map