import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    bsc_mainnet: {
      url: process.env.BSC_MAINNET_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    eth_mainnet: {
        url: process.env.ETHEREUM_MAINNET_URL || "",
        accounts:
          process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    polygon_mainnet: {
      url: process.env.POLYGON_MAINNET_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    cronos: {
      url: process.env.CRONOS_MAINNET_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    fantom_mainnet: {
      url: process.env.FANTOM_MAINNET_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    avalanche_mainnet: {
      url: process.env.AVALANCHE_MAINNET_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    arb_mainnet: {
      url: process.env.ARB_MAINNET_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    base_mainnet: {
      url: process.env.BASE_MAINNET_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: process.env.BASESCAN_API_KEY,
    //apiKey: process.env.BSCSCAN_API_KEY,
    //apiKey: process.env.ETHERSCAN_API_KEY,
    //apiKey: process.env.POLYGON_API_KEY,
    //apiKey: process.env.AVALANCHE_API_KEY,
    //apiKey: process.env.OPERA_API_KEY,
    // apiKey: process.env.ARBISCAN_API_KEY,
    //apiKey: process.env.CRONOSCAN_API_KEY,
    // customChains: [
    //     {
    //         network: "cronos",
    //         chainId: 25,
    //         urls: {
    //             apiURL: "https://api.cronoscan.com/api",
    //             browserURL: "https://cronoscan.com/"
    //         },
    //     },
    // ],
    // custom for base
    customChains: [
      {
          network: "base",
          chainId: 8453,
          urls: {
              apiURL: "https://api.basescan.org/api",
              browserURL: "https://basescan.org/"
          },
      },
  ],
  },
};

export default config;
