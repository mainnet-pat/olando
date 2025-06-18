import 'cashscript/jest';
import { HashType, MockNetworkProvider, randomUtxo, SignatureAlgorithm, SignatureTemplate, TransactionBuilder } from "cashscript";
import { binToHex, utf8ToBin } from "mainnet-js";
import { olandoCategory, addressToLockScript, toTokenAddress } from "../../src";
import { aliceAddress, aliceSigTemplate, alicePriv, bobPriv, deployContractFromAuthGuard, getAdminMultisig2of3Contract } from "../shared";

describe('Migrating Contract', () => {
  it('test migrating contract, set council to be the same as admin', async () => {
    const provider = new MockNetworkProvider();

    const { issuanceFundContract } = await deployContractFromAuthGuard(provider);
    const newCouncilContract = getAdminMultisig2of3Contract(provider); // set council contract same as admin multisig
    const { issuanceFundContract: newIssuanceFundContract } = await deployContractFromAuthGuard(provider, newCouncilContract);
    const adminMultisigContract = getAdminMultisig2of3Contract(provider);

    const contractUtxo = (await provider.getUtxos(issuanceFundContract.address)).find(u =>
      u.token?.category === olandoCategory &&
      u.token?.nft?.capability === 'mutable' &&
      u.token.nft.commitment.length === 16
    )!;

    const adminUtxo = (await provider.getUtxos(adminMultisigContract.address)).find(u =>
      u.satoshis === 1000n,
    )!;

    // funding + cauldron token-buy bch input
    const fundingUtxo = randomUtxo({
      satoshis: 100_000_000n, // 1 BCH
    });
    provider.addUtxo(aliceAddress, fundingUtxo);

    const sigA = new SignatureTemplate(alicePriv, HashType.SIGHASH_ALL, SignatureAlgorithm.ECDSA);
    const sigB = new SignatureTemplate(bobPriv, HashType.SIGHASH_ALL, SignatureAlgorithm.ECDSA);

    const builder = new TransactionBuilder({ provider })
      .addInput(contractUtxo, issuanceFundContract.unlock.migrate(addressToLockScript(newIssuanceFundContract.address), addressToLockScript(adminMultisigContract.address)))
      .addInput(adminUtxo, adminMultisigContract.unlock.spend(sigA, sigB, 0n))
      .addInput(fundingUtxo, aliceSigTemplate.unlockP2PKH())
      .addOutput({
        to: toTokenAddress(newIssuanceFundContract.address),
        amount: contractUtxo.satoshis,
        token: {...contractUtxo.token!},
      })
      .addOutput({
        to: adminMultisigContract.address,
        amount: 1000n, // preserve admin multisig
      });

    const txSize = builder.build().length / 2;
    const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
      builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
    builder.addOutput({
      to: aliceAddress,
      amount: change - BigInt(txSize) - 100n, // BCH change
      token: undefined,
    });

    const result = builder.send();
    await expect(result).resolves.not.toThrow();

    {
      const txSize = builder.build().length / 2;
      const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
        builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
      console.log(`Transaction size: ${txSize} bytes, change: ${change} satoshis, fee/byte ${Number(change) / txSize}`);
    }
  });
});