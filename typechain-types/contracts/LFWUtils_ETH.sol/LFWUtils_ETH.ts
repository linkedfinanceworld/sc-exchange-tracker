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

export interface LFWUtils_ETHInterface extends utils.Interface {
  functions: {
    "getAaveStakingInfo(address,address)": FunctionFragment;
    "getConvexStakingInfo(address,address)": FunctionFragment;
    "getLidoStakingInfo(address,address)": FunctionFragment;
    "getShibaStakingInfo(address,address)": FunctionFragment;
    "getSushiFarmingV1Info(uint256,address)": FunctionFragment;
    "getSushiFarmingV2Info(uint256,address)": FunctionFragment;
    "getSushiStakingInfo(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getAaveStakingInfo"
      | "getConvexStakingInfo"
      | "getLidoStakingInfo"
      | "getShibaStakingInfo"
      | "getSushiFarmingV1Info"
      | "getSushiFarmingV2Info"
      | "getSushiStakingInfo"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getAaveStakingInfo",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getConvexStakingInfo",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getLidoStakingInfo",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getShibaStakingInfo",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSushiFarmingV1Info",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSushiFarmingV2Info",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSushiStakingInfo",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAaveStakingInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getConvexStakingInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLidoStakingInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getShibaStakingInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSushiFarmingV1Info",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSushiFarmingV2Info",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSushiStakingInfo",
    data: BytesLike
  ): Result;

  events: {};
}

export interface LFWUtils_ETH extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LFWUtils_ETHInterface;

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
    getAaveStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { stakingInfo: BigNumber[] }>;

    getConvexStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { stakingInfo: BigNumber[] }>;

    getLidoStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { stakingInfo: BigNumber[] }>;

    getShibaStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { stakingInfo: BigNumber }>;

    getSushiFarmingV1Info(
      _pId: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], string[]] & {
        farmingInfo: BigNumber[];
        farmingData: string[];
      }
    >;

    getSushiFarmingV2Info(
      _pId: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], string[]] & {
        farmingInfo: BigNumber[];
        farmingData: string[];
      }
    >;

    getSushiStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { stakingInfo: BigNumber }>;
  };

  getAaveStakingInfo(
    _scAddress: PromiseOrValue<string>,
    _userAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getConvexStakingInfo(
    _scAddress: PromiseOrValue<string>,
    _userAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getLidoStakingInfo(
    _scAddress: PromiseOrValue<string>,
    _userAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getShibaStakingInfo(
    _scAddress: PromiseOrValue<string>,
    _userAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSushiFarmingV1Info(
    _pId: PromiseOrValue<BigNumberish>,
    _userAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber[], string[]] & {
      farmingInfo: BigNumber[];
      farmingData: string[];
    }
  >;

  getSushiFarmingV2Info(
    _pId: PromiseOrValue<BigNumberish>,
    _userAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber[], string[]] & {
      farmingInfo: BigNumber[];
      farmingData: string[];
    }
  >;

  getSushiStakingInfo(
    _scAddress: PromiseOrValue<string>,
    _userAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    getAaveStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getConvexStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getLidoStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getShibaStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSushiFarmingV1Info(
      _pId: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], string[]] & {
        farmingInfo: BigNumber[];
        farmingData: string[];
      }
    >;

    getSushiFarmingV2Info(
      _pId: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], string[]] & {
        farmingInfo: BigNumber[];
        farmingData: string[];
      }
    >;

    getSushiStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getAaveStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getConvexStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLidoStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getShibaStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSushiFarmingV1Info(
      _pId: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSushiFarmingV2Info(
      _pId: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSushiStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAaveStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getConvexStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLidoStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getShibaStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSushiFarmingV1Info(
      _pId: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSushiFarmingV2Info(
      _pId: PromiseOrValue<BigNumberish>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSushiStakingInfo(
      _scAddress: PromiseOrValue<string>,
      _userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
