/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IGeistStakingInterface,
  IGeistStakingInterfaceInterface,
} from "../../../contracts/LFWUtils_Fantom.sol/IGeistStakingInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "rewards",
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
    name: "totalBalance",
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
];

export class IGeistStakingInterface__factory {
  static readonly abi = _abi;
  static createInterface(): IGeistStakingInterfaceInterface {
    return new utils.Interface(_abi) as IGeistStakingInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGeistStakingInterface {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IGeistStakingInterface;
  }
}
