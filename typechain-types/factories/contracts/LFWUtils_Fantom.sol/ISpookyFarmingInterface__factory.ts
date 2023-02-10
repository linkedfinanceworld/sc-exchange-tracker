/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISpookyFarmingInterface,
  ISpookyFarmingInterfaceInterface,
} from "../../../contracts/LFWUtils_Fantom.sol/ISpookyFarmingInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pId",
        type: "uint256",
      },
    ],
    name: "lpToken",
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
        internalType: "uint256",
        name: "_pId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingBOO",
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
        internalType: "uint256",
        name: "_pId",
        type: "uint256",
      },
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

export class ISpookyFarmingInterface__factory {
  static readonly abi = _abi;
  static createInterface(): ISpookyFarmingInterfaceInterface {
    return new utils.Interface(_abi) as ISpookyFarmingInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISpookyFarmingInterface {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ISpookyFarmingInterface;
  }
}
