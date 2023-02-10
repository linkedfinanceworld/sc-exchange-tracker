/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IApeJungleFarmingInterface,
  IApeJungleFarmingInterfaceInterface,
} from "../../../contracts/LFWUtils_BSC.sol/IApeJungleFarmingInterface";

const _abi = [
  {
    inputs: [],
    name: "REWARD_TOKEN",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "STAKE_TOKEN",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IApeJungleFarmingInterface__factory {
  static readonly abi = _abi;
  static createInterface(): IApeJungleFarmingInterfaceInterface {
    return new utils.Interface(_abi) as IApeJungleFarmingInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IApeJungleFarmingInterface {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IApeJungleFarmingInterface;
  }
}