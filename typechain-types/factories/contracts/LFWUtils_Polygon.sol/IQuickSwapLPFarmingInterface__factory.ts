/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IQuickSwapLPFarmingInterface,
  IQuickSwapLPFarmingInterfaceInterface,
} from "../../../contracts/LFWUtils_Polygon.sol/IQuickSwapLPFarmingInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "earned",
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
    inputs: [],
    name: "stakingToken",
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
];

export class IQuickSwapLPFarmingInterface__factory {
  static readonly abi = _abi;
  static createInterface(): IQuickSwapLPFarmingInterfaceInterface {
    return new utils.Interface(_abi) as IQuickSwapLPFarmingInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IQuickSwapLPFarmingInterface {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IQuickSwapLPFarmingInterface;
  }
}
