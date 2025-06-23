import { HashType, MockNetworkProvider, randomUtxo, SignatureAlgorithm, SignatureTemplate, TransactionBuilder } from "cashscript";
import { aliceAddress, alicePriv, bobPriv, getAdminMultisig2of3Contract } from "./shared.js";

describe("Multisig 2of3", () => {
  it("should create a multisig contract and spend from it", async () => {
    const provider = new MockNetworkProvider();

    const contract = getAdminMultisig2of3Contract(provider);
    provider.addUtxo(contract.address, randomUtxo());

    const sigA = new SignatureTemplate(alicePriv, HashType.SIGHASH_ALL, SignatureAlgorithm.ECDSA);
    const sigB = new SignatureTemplate(bobPriv, HashType.SIGHASH_ALL, SignatureAlgorithm.ECDSA);

    const contractUtxos = await provider.getUtxos(contract.address);
    const builder = new TransactionBuilder({ provider })
      .addInput(contractUtxos[0], contract.unlock.spend(sigA, sigB, 0n))
      .addOutput({
        to: aliceAddress,
        amount: 1000n,
      });

    await expect(builder.send()).resolves.not.toThrow();
  });

  it("should create a multisig contract and fail to spend from it", async () => {
    const provider = new MockNetworkProvider();

    const contract = getAdminMultisig2of3Contract(provider);
    provider.addUtxo(contract.address, randomUtxo());

    const sigA = new SignatureTemplate(alicePriv, HashType.SIGHASH_ALL, SignatureAlgorithm.ECDSA);
    const sigB = new SignatureTemplate(alicePriv, HashType.SIGHASH_ALL, SignatureAlgorithm.ECDSA);

    const contractUtxos = await provider.getUtxos(contract.address);
    const builder = new TransactionBuilder({ provider })
      .addInput(contractUtxos[0], contract.unlock.spend(sigA, sigB, 0n))
      .addOutput({
        to: aliceAddress,
        amount: 1000n,
      });

    await expect(builder.send()).rejects.toThrow();
  });
});