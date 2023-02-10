/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISpookyStakingInterface,
  ISpookyStakingInterfaceInterface,
} from "../../../contracts/LFWUtils_Fantom.sol/ISpookyStakingInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "BOOBalance",
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

export class ISpookyStakingInterface__factory {
  static readonly abi = _abi;
  static createInterface(): ISpookyStakingInterfaceInterface {
    return new utils.Interface(_abi) as ISpookyStakingInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISpookyStakingInterface {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ISpookyStakingInterface;
  }
}