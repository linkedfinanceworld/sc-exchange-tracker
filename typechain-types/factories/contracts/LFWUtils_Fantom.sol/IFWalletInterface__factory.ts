/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IFWalletInterface,
  IFWalletInterfaceInterface,
} from "../../../contracts/LFWUtils_Fantom.sol/IFWalletInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_vId",
        type: "uint256",
      },
    ],
    name: "getStake",
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
    name: "lastValidatorID",
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
      {
        internalType: "uint256",
        name: "_vId",
        type: "uint256",
      },
    ],
    name: "pendingRewards",
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

export class IFWalletInterface__factory {
  static readonly abi = _abi;
  static createInterface(): IFWalletInterfaceInterface {
    return new utils.Interface(_abi) as IFWalletInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFWalletInterface {
    return new Contract(address, _abi, signerOrProvider) as IFWalletInterface;
  }
}