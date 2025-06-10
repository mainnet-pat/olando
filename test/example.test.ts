import artifact from '../artifacts/example.artifact.js';
import { Contract, MockNetworkProvider, TransactionBuilder, randomUtxo } from 'cashscript';
import 'cashscript/jest';

describe('test example contract functions', () => {
  it('should check for output logs and error messages', async () => {
    const provider = new MockNetworkProvider();
    const contract = new Contract(artifact, [1n], { provider });
    const contract2 = new Contract(artifact, [2n], { provider });

    // Create a contract Utxo
    const contractUtxo = randomUtxo();
    provider.addUtxo(contract.address, contractUtxo);

    const contractUtxo2 = randomUtxo();
    provider.addUtxo(contract2.address, contractUtxo2);

    const transactionWrongValuePassed = new TransactionBuilder({ provider })
      .addInput(contractUtxo, contract.unlock.test(0n))
      .addInput(contractUtxo2, contract2.unlock.test(0n))
      .addOutput({ to: contract.address, amount: 10000n });

    expect(transactionWrongValuePassed).toLog(/0 test/);
    expect(transactionWrongValuePassed).toFailRequireWith(/Wrong value passed/);

    const transactionRightValuePassed = new TransactionBuilder({ provider })
      .addInput(contractUtxo, contract.unlock.test(1n))
      .addInput(contractUtxo2, contract2.unlock.test(2n))
      .addOutput({ to: contract.address, amount: 10000n })
      .send();

    await expect(transactionRightValuePassed).resolves.not.toThrow();
  });
});
