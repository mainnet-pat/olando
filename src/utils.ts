import { bigIntToVmNumber, binToHex, CashAddressNetworkPrefix, cashAddressToLockingBytecode, CashAddressType, decodeCashAddress, encodeCashAddress, hexToBin, padMinimallyEncodedVmNumber, vmNumberToBigInt } from "@bitauth/libauth";
import { Artifact, Contract, encodeFunctionArgument, FunctionArgument, MockNetworkProvider, NetworkProvider } from "cashscript";
import AuthGuardArtifact from "../artifacts/AuthGuard.artifact.js";
import CauldronPoolArtifact from "../artifacts/CauldronPool.artifact.js";
import IssuanceFundArtifact from "../artifacts/IssuanceFund.artifact.js";
import Multisig_2of3Artifact from "../artifacts/Multisig_2of3.artifact.js";

export const MaxTokenSupply = 8888888888_88n; // 8888 millions as per v0.3 whitepaper
export const AuthGuardInitialSupply = 8888888888888888_88n; // OLA genesis supply
export const min = (...args: bigint[]) => args.reduce((m, e) => e < m ? e : m);
export const require = (predicate: boolean, message: string) => {
  if (!predicate) {
    throw new Error(message);
  }
}

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
    prefix: address.split(':')[0] as CashAddressNetworkPrefix,
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
    prefix: decoded.prefix,
    type: decoded.type.replace('WithTokens', '') + 'WithTokens' as CashAddressType,
  }).address;
}

export const olandoCategory = 'd4c0b80d9ea541b8671b266c4b02abd4379b490378ffdd96bbcc18990032faf7';

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

export const getCauldronPoolContractInstance = (provider: NetworkProvider, poolOwnerPublicKeyHash160: Uint8Array) => {
  const cauldronArtifact = replaceArtifactPlaceholders(CauldronPoolArtifact, {
    pool_owner_public_key_hash160: poolOwnerPublicKeyHash160,
  });
  return new Contract(cauldronArtifact, [], { provider, ignoreFunctionSelector: true });
}

// if we are at predeployment stage, we will look for auth guard with mutable capability and empty commitment
// after the deployment the authguard will not have the NFT, as it will be moved to the issuance contract
export const findAuthGuard = async ({
    predeployment,
    provider,
    authKeyHolderAddress,
    olandoCategory
  } : {
    predeployment: boolean,
    provider: NetworkProvider,
    authKeyHolderAddress: string,
    olandoCategory: string
  }) => {
  const userUtxos = await provider.getUtxos(authKeyHolderAddress);
  const authKeyCandidates = userUtxos.filter(utxo =>
    utxo.token?.amount === 0n &&
    utxo.token?.nft?.capability === 'none' &&
    utxo.token.nft.commitment === '00'
  );

  for (const authKeyCandidate of authKeyCandidates) {
    const authGuardContract = new Contract(AuthGuardArtifact, [binToHex(hexToBin(authKeyCandidate.token!.category).reverse())], { provider, addressType: "p2sh20" });
    const contractUtxos = await provider.getUtxos(authGuardContract.address);
    const authGuardCandidate = contractUtxos.find(contractUtxo =>
      contractUtxo.token &&
      contractUtxo.token.category === olandoCategory &&
      contractUtxo.token.amount >= MaxTokenSupply && // 2 decimals
      predeployment ? (
        contractUtxo.token.nft?.capability === 'mutable' &&
        contractUtxo.token.nft?.commitment === ''
      ) : true
    );

    if (authGuardCandidate) {
      return { authGuardContract, authGuardUtxo: authGuardCandidate, authKeyUtxo: authKeyCandidate };
    }
  };
};

export const getIssuanceContract = ({
  provider,
  councilMultisigContract,
  adminMultisigContract,
} : {
  provider: NetworkProvider,
  councilMultisigContract: Contract<typeof Multisig_2of3Artifact>,
  adminMultisigContract: Contract<typeof Multisig_2of3Artifact>,
}) => {
  return new Contract(
    IssuanceFundArtifact,
    [addressToLockScript(councilMultisigContract.address), addressToLockScript(adminMultisigContract.address)],
    { provider, addressType: 'p2sh20' }
  );
}