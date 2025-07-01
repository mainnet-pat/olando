import { binToHex } from "@bitauth/libauth";
import { Contract, NetworkProvider, SignatureTemplate, TransactionBuilder } from "cashscript";
import IssuanceFundArtifact from '../../artifacts/IssuanceFund.artifact.js';
import Multisig_2of3Artifact from "../../artifacts/Multisig_2of3.artifact.js";
import { addressToLockScript, findAuthGuard, MaxTokenSupply, padVmNumber, toTokenAddress } from "../index.js";

// Deploys the IssuanceFund contract, transfers the mutable authguarded NFT to the IssuanceFund contract.
export const deployContractFromAuthGuard = async ({
  deployerAddress,
  deployerPriv,
  provider,
  councilContract,
  adminContract,
  olandoCategory,
  deploymentMtp,
} : {
  deployerAddress: string,
  deployerPriv: Uint8Array,
  provider: NetworkProvider,
  councilContract: Contract<typeof Multisig_2of3Artifact>,
  adminContract: Contract<typeof Multisig_2of3Artifact>,
  olandoCategory: string,
  deploymentMtp?: bigint,
}) => {
  const authGuard = await findAuthGuard({
    predeployment: true,
    provider,
    authKeyHolderAddress: deployerAddress,
    olandoCategory: olandoCategory,
  })

  if (!authGuard) {
    throw new Error('No valid auth guard pair found in the wallet');
  }

  const adminMultisig = adminContract;
  const councilFundContract = councilContract;

  const issuanceFundContract = new Contract(IssuanceFundArtifact, [addressToLockScript(councilFundContract.address), addressToLockScript(adminMultisig.address)], { provider, addressType: 'p2sh20' });
  const deploymentTime = deploymentMtp ?? BigInt(Math.floor(Date.now() / 1000) - 2 * 60 * 60); // Current time in seconds since epoch - 2h
  const lastInteractionTime = deploymentTime;

  const utxos = await provider.getUtxos(deployerAddress);

  const fundingUtxo = utxos.find(utxo => utxo.token === undefined && utxo.satoshis >= 100000n)!;

  const builder = new TransactionBuilder({ provider })
    .addInput(authGuard.authGuardUtxo, authGuard.authGuardContract.unlock.unlockWithNft(true))
    .addInput(authGuard.authKeyUtxo, new SignatureTemplate(deployerPriv).unlockP2PKH())
    .addInput(fundingUtxo, new SignatureTemplate(deployerPriv).unlockP2PKH())
    .addOutput({
      to: authGuard.authGuardContract.tokenAddress,
      amount: authGuard.authGuardUtxo.satoshis,
      token: {
        category: olandoCategory,
        amount: authGuard.authGuardUtxo.token!.amount - MaxTokenSupply, // 2 decimals
      }
    })
    .addOutput(
      authGuard.authKeyUtxo.token
        ? {
            to: toTokenAddress(deployerAddress),
            amount: authGuard.authKeyUtxo.satoshis,
            token: authGuard.authKeyUtxo.token,
          }
        : {
            to: toTokenAddress(deployerAddress),
            amount: authGuard.authKeyUtxo.satoshis,
          }
    )
    .addOutput({
      to: toTokenAddress(issuanceFundContract.address),
      amount: 1000n,
      token: {
        amount: MaxTokenSupply, // 2 decimals
        category: olandoCategory,
        nft: {
          capability: 'mutable',
          commitment: binToHex(Uint8Array.from([
            ...padVmNumber(BigInt(deploymentTime), 4),
            ...padVmNumber(BigInt(lastInteractionTime), 4),
          ])),
        }
      }
    })
    .addOutput({
      to: adminMultisig.address,
      amount: 1000n, // intentionally low amount to avoid this utxo being spent alone
    })
    .addOutput({
      to: deployerAddress,
      amount: fundingUtxo.satoshis - 3000n, // BCH change
    });

  // console.log(builder.build());

  const deploymentTransaction = await builder.send();

  console.log(`Issuance fund deployed at ${issuanceFundContract.address} with txid ${deploymentTransaction.txid}`);

  return { issuanceFundContract, councilFundContract };
}
