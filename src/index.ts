import { hexToBin, padMinimallyEncodedVmNumber, bigIntToVmNumber, vmNumberToBigInt, cashAddressToLockingBytecode, decodeCashAddress, encodeCashAddress, CashAddressType, binToHex } from "@bitauth/libauth";
import { Artifact, FunctionArgument, encodeFunctionArgument, MockNetworkProvider, Contract } from "cashscript";
import CauldronPoolArtifact from "../artifacts/CauldronPool.artifact.js";

export const padVmNumber = (num: bigint, length: number) => {
  return padMinimallyEncodedVmNumber(bigIntToVmNumber(num), length).slice(0, length);
}

export const vmToBigInt = (vmNumber: string) => {
  return vmNumberToBigInt(hexToBin(vmNumber), { requireMinimalEncoding: false }) as bigint;
}

export function addressToLockScript(address: string): Uint8Array {
  const result = cashAddressToLockingBytecode(address);
  if (typeof result === 'string') throw new Error(result);

  return result.bytecode;
}

export const toCashAddress = (address: string) => {
  const decoded = decodeCashAddress(address);
  if (typeof decoded === 'string') {
    throw new Error(decoded);
  }

  return encodeCashAddress({
    ...decoded,
    prefix: 'bchtest',
    type: decoded.type.replace('WithTokens', '') as CashAddressType,
  }).address;
}

export const toTokenAddress = (address: string) => {
  const decoded = decodeCashAddress(address);
  if (typeof decoded === 'string') {
    throw new Error(decoded);
  }

  return encodeCashAddress({
    ...decoded,
    prefix: 'bchtest',
    type: decoded.type + 'WithTokens' as CashAddressType,
  }).address;
}

export const olandoCategory = '7fa887fd4eac015478b95392c4984721fbe3060223c30b342d43cc06817f07f6';

let contractIndex = 0; // Used to differentiate contract names in tests
export const replaceArtifactPlaceholders = <T extends Artifact>(artifact: T, parameters: Record<string, FunctionArgument>): T => {
  const artifactCopy = {...artifact};
  const argumentTypes = [...artifactCopy.constructorInputs, ...Object.values(artifactCopy.abi).map(f => f.inputs).flat()].reduce((acc, input) => {
    acc[input.name] = input.type;
    return acc;
  }, {} as Record<string, string>);
  Object.entries(parameters).forEach(([key, value]) => {
    artifactCopy.bytecode = artifactCopy.bytecode.replaceAll(`<${key}>`, binToHex(encodeFunctionArgument(value, argumentTypes[key] ?? "bytes") as Uint8Array));
  });

  artifactCopy.contractName = artifactCopy.contractName + ` #${contractIndex++}`;

  if (artifactCopy.bytecode.includes('<')) {
    throw new Error(`Not all placeholders in artifact ${artifactCopy.contractName} were replaced. Remaining placeholders: ${artifactCopy.bytecode.match(/<[^>]+>/g)?.join(', ')}`);
  }

  return artifactCopy;
};

export const getCauldronPoolContractInstance = (provider: MockNetworkProvider, poolOwnerPublicKeyHash160: Uint8Array) => {
  const cauldronArtifact = replaceArtifactPlaceholders(CauldronPoolArtifact, {
    pool_owner_public_key_hash160: poolOwnerPublicKeyHash160,
  });
  return new Contract(cauldronArtifact, [], { provider, ignoreFunctionSelector: true });
}
