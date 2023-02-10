/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface LFWUtils_CronosInterface extends utils.Interface {
  functions: {
    "getCronaFarmingInfo(uint256,address)": FunctionFragment;
    "getCronaStakingInfo(address,address)": FunctionFragment;
    "getMMFarmingInfo(uint256,address)": FunctionFragment;
    "getMMStakingInfo(address,address)": FunctionFragment;
    "getTectonicStakingInfo(address,address)": FunctionFragment;
    "getVVSFarmingInfo(uint256,address)": FunctionFragment;
    "getVVSStakingInfo(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getCronaFarmingInfo"
      | "getCronaStakingInfo"
      | "getMMFarmingInfo"
      | "getMMStakingInfo"
      | "getTectonicStakingInfo"
      | "getVVSFarmingInfo"
      | "getVVSStakingInfo"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getCronaFarmingInfo",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getCronaStakingInfo",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getMMFarmingInfo",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getMMStakingInfo",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTectonicStakingInfo",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getVVSFarmingInfo",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getVVSStakingInfo",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getCronaFarmingInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCronaStakingInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMMFarmingInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMMStakingInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTectonicStakingInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVVSFarmingInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVVSStakingInfo",
    data: BytesLike
  ): Result;

  events: {};
}

export interface LFWUtils_Cronos extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LFWUtils_CronosInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getCronaFarmingInfo(
      _pId: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], string[]] & {
        farmingInfo: BigNumber[];
        farmingData: string[];
      }
    >;

    getCronaStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { stakingInfo: BigNumber[] }>;

    getMMFarmingInfo(
      _pId: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], string[]] & {
        farmingInfo: BigNumber[];
        farmingData: string[];
      }
    >;

    getMMStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { stakingInfo: BigNumber[] }>;

    getTectonicStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { stakingInfo: BigNumber[] }>;

    getVVSFarmingInfo(
      _pId: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], string[]] & {
        farmingInfo: BigNumber[];
        farmingData: string[];
      }
    >;

    getVVSStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { stakingInfo: BigNumber[] }>;
  };

  getCronaFarmingInfo(
    _pId: PromiseOrValue<BigNumberish>,
    _userAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber[], string[]] & {
      farmingInfo: BigNumber[];
      farmingData: string[];
    }
  >;

  getCronaStakingInfo(
    _scAddress: PromiseOrValue<string>,
    _userAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getMMFarmingInfo(
    _pId: PromiseOrValue<BigNumberish>,
    _userAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber[], string[]] & {
      farmingInfo: BigNumber[];
      farmingData: string[];
    }
  >;

  getMMStakingInfo(
    _scAddress: PromiseOrValue<string>,
    _userAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getTectonicStakingInfo(
    _scAddress: PromiseOrValue<string>,
    _userAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getVVSFarmingInfo(
    _pId: PromiseOrValue<BigNumberish>,
    _userAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber[], string[]] & {
      farmingInfo: BigNumber[];
      farmingData: string[];
    }
  >;

  getVVSStakingInfo(
    _scAddress: PromiseOrValue<string>,
    _userAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  callStatic: {
    getCronaFarmingInfo(
      _pId: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], string[]] & {
        farmingInfo: BigNumber[];
        farmingData: string[];
      }
    >;

    getCronaStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getMMFarmingInfo(
      _pId: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], string[]] & {
        farmingInfo: BigNumber[];
        farmingData: string[];
      }
    >;

    getMMStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getTectonicStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getVVSFarmingInfo(
      _pId: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], string[]] & {
        farmingInfo: BigNumber[];
        farmingData: string[];
      }
    >;

    getVVSStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {};

  estimateGas: {
    getCronaFarmingInfo(
      _pId: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCronaStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMMFarmingInfo(
      _pId: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMMStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTectonicStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVVSFarmingInfo(
      _pId: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVVSStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getCronaFarmingInfo(
      _pId: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCronaStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMMFarmingInfo(
      _pId: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMMStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTectonicStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVVSFarmingInfo(
      _pId: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVVSStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}