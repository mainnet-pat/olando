import { MockNetworkProvider, randomUtxo } from "cashscript";
import { buildSwapTransaction } from "../src/swap.js";
import { aliceAddress, MockWallet } from "./shared.js";
import { olandoCategory } from "../src/utils.js";

describe('test mock swaps', () => {
  it('should mock a swap', async () => {
    const provider = new MockNetworkProvider();
    provider.addUtxo(aliceAddress, randomUtxo({
      satoshis: 100_000_000n, // 1 BCH
    }));

    const wallet = await MockWallet(provider);
    const { tradeTxList: proposedTxs } = await buildSwapTransaction(1000000n, wallet, olandoCategory);

    expect(proposedTxs.length).toBeGreaterThan(0);
  });
});
