import { bigIntToVmNumber, binToHex, cashAddressToLockingBytecode, CashAddressType, decodeCashAddress, encodeCashAddress, hash160, hexToBin, numberToBinUint32BE, padMinimallyEncodedVmNumber, secp256k1, utf8ToBin, vmNumberToBigInt } from '@bitauth/libauth';
import IssuanceFundArtifact from '../artifacts/IssuanceFund.artifact.js';
import FakeCauldronArtifact from '../artifacts/FakeCauldron.artifact.js';
import CouncilFund from '../artifacts/CouncilFund.artifact.js';
import { BaseUnlocker, Contract, MockNetworkProvider, SignatureTemplate, TransactionBuilder, Unlocker, Utxo, randomUtxo } from 'cashscript';
import 'cashscript/jest';

export const padVmNumber = (num: bigint, length: number) => {
  return padMinimallyEncodedVmNumber(bigIntToVmNumber(num), length).slice(0, length);
}

const vmToBigInt = (vmNumber: string) => {
  return vmNumberToBigInt(hexToBin(vmNumber), { requireMinimalEncoding: false }) as bigint;
}

export function addressToLockScript(address: string): Uint8Array {
  const result = cashAddressToLockingBytecode(address);
  if (typeof result === 'string') throw new Error(result);

  return result.bytecode;
}

const toCashAddress = (address: string) => {
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

const toTokenAddress = (address: string) => {
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

const min = (...args: bigint[]) => args.reduce((m, e) => e < m ? e : m);

const alicePriv = hexToBin('1'.repeat(64));
const aliceSigTemplate = new SignatureTemplate(alicePriv);
export const alicePub = secp256k1.derivePublicKeyCompressed(alicePriv) as Uint8Array;
export const alicePkh = hash160(alicePub);
export const aliceAddress = encodeCashAddress({ prefix: 'bchtest', type: 'p2pkh', payload: alicePkh, throwErrors: true }).address;

const olandoCategory = '7fa887fd4eac015478b95392c4984721fbe3060223c30b342d43cc06817f07f6';

// 746376a9147cdb08cce4ac33085c758743e6514876bd51cab288ac67c0d1c0ce88c25288c0cdc0c788c0c6c0d095c0c6c0cc9490539502e80396c0cc7c94c0d3957ca268
export interface CauldronOlaUnlocker extends BaseUnlocker {
}

const createCauldronOlaUnlocker = (): CauldronOlaUnlocker => {

    const generateUnlockingBytecode = (): Uint8Array => {
      console.trace(123)
      return hexToBin("746376a9147cdb08cce4ac33085c758743e6514876bd51cab288ac67c0d1c0ce88c25288c0cdc0c788c0c6c0d095c0c6c0cc9490539502e80396c0cc7c94c0d3957ca268");
    };

    const generateLockingBytecode = (): Uint8Array => Uint8Array.from([]);

    return { generateUnlockingBytecode, generateLockingBytecode };
}

const deployContract = async (provider: MockNetworkProvider, salt: bigint = 0n) => {
  provider.addUtxo(aliceAddress, randomUtxo({
    satoshis: 100_000_000n, // 1 BCH
  }));

  provider.addUtxo(aliceAddress, randomUtxo({
    satoshis: 1000n, // 1 BCH
    token: {
      amount: 8_888_888_888_888_888_88n, // 2 decimals
      category: olandoCategory,
      nft: {
        capability: 'mutable',
        commitment: '',
      }
    }
  }));

  const councilFundContract = new Contract(CouncilFund, [salt], { provider, addressType: 'p2sh20' });

  const issuanceFundContract = new Contract(IssuanceFundArtifact, [addressToLockScript(councilFundContract.address)], { provider });
  const deploymentTime = 1749427200; // Mon Jun 09 2025 00:00:00 GMT+0000
  const lastInteractionTime = deploymentTime;

  const utxos = await provider.getUtxos(aliceAddress);

  const fundingUtxo = utxos.find(utxo => utxo.token === undefined && utxo.satoshis >= 100000n)!;

  const tokenFundingUtxo = utxos.find(utxo =>
    utxo.token?.category === olandoCategory &&
    utxo.token?.nft?.capability === 'mutable' &&
    utxo.token.nft.commitment.length === 0 &&
    utxo.token.amount > 8_888_888_888_888_88n)!;

  const deploymentTransaction = await new TransactionBuilder({ provider })
    .addInput(tokenFundingUtxo, new SignatureTemplate(alicePriv).unlockP2PKH())
    .addInput(fundingUtxo, new SignatureTemplate(alicePriv).unlockP2PKH())
    .addOutput({
      to: toTokenAddress(issuanceFundContract.address),
      amount: 1000n,
      token: {
        amount: 8_888_888_888_888_88n, // 2 decimals
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
      to: toTokenAddress(aliceAddress),
      amount: 1000n,
      token: {
        amount: 0n,
        category: olandoCategory,
        nft: {
          capability: 'none',
          commitment: binToHex(utf8ToBin('admin')),
        }
      }
    })
    .addOutput({
      to: aliceAddress,
      amount: fundingUtxo.satoshis - 3000n, // BCH change
      token: undefined,
    })
    .send();

  console.log(`Issuance fund deployed at ${issuanceFundContract.address} with txid ${deploymentTransaction.txid}`);

  return { issuanceFundContract, councilFundContract };
}

const setupCauldronPools = async (provider: MockNetworkProvider) => {
  // // txid ea18ec828267cf31a44530934528052089cca13d9e417102f4d08bc0665c9046
  // // in: 95.37135364 - 12062102
  // // in: 0.01157955 - none
  // // out: 95.37335216 - 12061850
  // // out: 0.000008 - 252
  // // out: 0.00956856
  // provider.addUtxo(toCashAddress("bitcoincash:pww87w869tuuzw4avtyxtlwhq32l25xkyy9n3xhzfelhj0d3vm8xx5auz6k7z"), randomUtxo({
  //   satoshis: 9537135364n, // 95.47209749 BCH
  //   token: {
  //     amount: 12062102n,
  //     category: olandoCategory,
  //   }
  // }));

  const fakeCauldron = new Contract(FakeCauldronArtifact, [], { provider });
  provider.addUtxo(fakeCauldron.address, randomUtxo({
    satoshis: 100000n,
    token: {
      amount: 3000n, // cauldron pool token output
      category: olandoCategory,
    }
  }));

  provider.addUtxo(fakeCauldron.address, randomUtxo({
    satoshis: 200000n,
    token: {
      amount: 4000n, // cauldron pool token output
      category: olandoCategory,
    }
  }));

  return { fakeCauldron }
}

describe('test contract functions', () => {
  it('test issuance function', async () => {
    const provider = new MockNetworkProvider();

    const { issuanceFundContract, councilFundContract } = await deployContract(provider);
    const { fakeCauldron: cauldron } = await setupCauldronPools(provider);

    const contractUtxo = (await provider.getUtxos(issuanceFundContract.address)).find(u =>
      u.token?.category === olandoCategory &&
      u.token?.nft?.capability === 'mutable' &&
      u.token.nft.commitment.length === 16
    )!;

    const deploymentTime = vmToBigInt(contractUtxo.token!.nft!.commitment.slice(0, 8));
    const lastInteractionTime = vmToBigInt(contractUtxo.token!.nft!.commitment.slice(8, 16));

    // funding + cauldron token-buy bch input
    const investmentUtxo = randomUtxo({
      satoshis: 100_000_000n, // 1 BCH
    });
    provider.addUtxo(aliceAddress, investmentUtxo);

    // a BCH-only utxo at index 1 to be used to balance the council output
    const councilUtxo = randomUtxo({
      satoshis: 100000n,
    });
    provider.addUtxo(aliceAddress, councilUtxo);

    const cauldronPoolUtxos = (await provider.getUtxos(cauldron.address));
    const cauldronTradeBoughtTokens = 1000n;

    const currentTime = BigInt(Math.floor(Date.now() / 1000)); // Current time in seconds since epoch

    const intialSupply = 8888888888888_88n; // with 2 decimals
    const emitted = intialSupply - contractUtxo.token!.amount;

    const SCALE = 1_000_000_000n; // 1e9 for scaling
    const t = currentTime - deploymentTime; // time in seconds since startTime
    console.log(t, "time since start");
    const k = 3n; // 3E-9 scaled by 1e9
    const denom = SCALE + k * t; // (1 + 3E-9 * t) * 1e9
    const denomSquared = denom * denom / SCALE; // (1 + 3E-9 * t)^2 * 1e9
    const currentEmissionCap = intialSupply * (SCALE - SCALE * SCALE / denomSquared) / SCALE;
    console.log(currentEmissionCap, "current emission cap");

    // use inputs.length to find the cauldron token-buy output, since last ouput could be a bch change
    const tokensBought = cauldronTradeBoughtTokens;

    const maxEmission = min(tokensBought, currentEmissionCap - emitted);
    const issue = tokensBought * 9n / 10n; // 90% of tokens bought
    let investorShare = (tokensBought + issue) / 2n;
    let fundShare = investorShare;
    if (maxEmission < tokensBought) {
      investorShare = 95n * maxEmission / 100n + tokensBought - maxEmission;
      fundShare = 95n * maxEmission / 100n; // 95% of current emission cap
    }
    const emitting = investorShare + fundShare;
    console.log("investorShare", investorShare, "fundShare", fundShare, "issue", issue, "tokensBought", tokensBought);

    const builder = new TransactionBuilder({ provider })
      .addInput(contractUtxo, issuanceFundContract.unlock.issue())
      .addInput(councilUtxo, aliceSigTemplate.unlockP2PKH())
      .addInput(cauldronPoolUtxos[0], cauldron.unlock.spend())
      .addInput(cauldronPoolUtxos[1], cauldron.unlock.spend())
      .addInput(investmentUtxo, aliceSigTemplate.unlockP2PKH())
      .addOutput({
        to: toTokenAddress(issuanceFundContract.address),
        amount: contractUtxo.satoshis,
        token: {
          ...contractUtxo.token!,
          amount: contractUtxo.token!.amount - emitting,
          nft: {
            capability: 'mutable',
            commitment: binToHex(Uint8Array.from([
              ...padVmNumber(BigInt(deploymentTime), 4),
              ...padVmNumber(BigInt(currentTime), 4),
            ])),
          },
        },
      })
      .addOutput({
        to: councilFundContract.tokenAddress,
        amount: 1000n,
        token: {
          category: olandoCategory,
          amount: fundShare, // council fund share
        }
      })
      .addOutput({
        to: cauldron.tokenAddress,
        amount: 200000n,
        token: {
          category: olandoCategory,
          nft: undefined,
          amount: 2500n, // cauldron pool token output
        },
      })
      .addOutput({
        to: cauldron.tokenAddress,
        amount: 400000n,
        token: {
          category: olandoCategory,
          nft: undefined,
          amount: 3500n, // cauldron pool token output
        },
      })
      .addOutput({
        to: toTokenAddress(aliceAddress),
        amount: 1000n,
          token: {
          category: contractUtxo.token!.category,
          nft: undefined,
          amount: investorShare,
        },
      })
      .setLocktime(Number(currentTime));

    const txSize = builder.build().length / 2;
    const change = builder.inputs.reduce((sum, input) => sum + input.satoshis, 0n) -
      builder.outputs.reduce((sum, output) => sum + (output.amount ?? 0n), 0n);
    builder.addOutput({
      to: aliceAddress,
      amount: change - BigInt(txSize) - 200n, // BCH change
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

  it('test migrating contract', async () => {
    const provider = new MockNetworkProvider();

    const { issuanceFundContract } = await deployContract(provider);
    const { issuanceFundContract: newIssuanceFundContract } = await deployContract(provider, 1n);

    const contractUtxo = (await provider.getUtxos(issuanceFundContract.address)).find(u =>
      u.token?.category === olandoCategory &&
      u.token?.nft?.capability === 'mutable' &&
      u.token.nft.commitment.length === 16
    )!;

    const adminUtxo = (await provider.getUtxos(aliceAddress)).find(u =>
      u.token?.category === olandoCategory &&
      u.token?.nft?.capability === 'none' &&
      u.token.nft.commitment === binToHex(utf8ToBin('admin'))
    )!;

    // funding + cauldron token-buy bch input
    const fundingUtxo = randomUtxo({
      satoshis: 100_000_000n, // 1 BCH
    });
    provider.addUtxo(aliceAddress, fundingUtxo);

    const builder = new TransactionBuilder({ provider })
      .addInput(contractUtxo, issuanceFundContract.unlock.migrate(addressToLockScript(newIssuanceFundContract.address)))
      .addInput(adminUtxo, aliceSigTemplate.unlockP2PKH())
      .addInput(fundingUtxo, aliceSigTemplate.unlockP2PKH())
      .addOutput({
        to: toTokenAddress(newIssuanceFundContract.address),
        amount: contractUtxo.satoshis,
        token: {...contractUtxo.token!},
      })
      .addOutput({
        to: toTokenAddress(aliceAddress),
        amount: 1000n,
        token: {...adminUtxo.token!}
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

  it('test dissolving contract', async () => {
    const provider = new MockNetworkProvider();

    const { issuanceFundContract } = await deployContract(provider);

    const contractUtxo = (await provider.getUtxos(issuanceFundContract.address)).find(u =>
      u.token?.category === olandoCategory &&
      u.token?.nft?.capability === 'mutable' &&
      u.token.nft.commitment.length === 16
    )!;

    const adminUtxo = (await provider.getUtxos(aliceAddress)).find(u =>
      u.token?.category === olandoCategory &&
      u.token?.nft?.capability === 'none' &&
      u.token.nft.commitment === binToHex(utf8ToBin('admin'))
    )!;

    // funding + cauldron token-buy bch input
    const fundingUtxo = randomUtxo({
      satoshis: 100_000_000n, // 1 BCH
    });
    provider.addUtxo(aliceAddress, fundingUtxo);

    const builder = new TransactionBuilder({ provider })
      .addInput(contractUtxo, issuanceFundContract.unlock.dissolve())
      .addInput(adminUtxo, aliceSigTemplate.unlockP2PKH())
      .addInput(fundingUtxo, aliceSigTemplate.unlockP2PKH())
      .addOutput({
        to: toTokenAddress(aliceAddress),
        amount: contractUtxo.satoshis,
        token: {...contractUtxo.token!},
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
