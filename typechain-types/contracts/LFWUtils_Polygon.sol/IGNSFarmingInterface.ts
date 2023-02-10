/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface IGNSFarmingInterfaceInterface extends utils.Interface {
  functions: {
    "accTokensPerLp()": FunctionFragment;
    "lp()": FunctionFragment;
    "users(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "accTokensPerLp" | "lp" | "users"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "accTokensPerLp",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "users",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "accTokensPerLp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "users", data: BytesLike): Result;

  events: {};
}

export interface IGNSFarmingInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGNSFarmingInterfaceInterface;

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
    accTokensPerLp(overrides?: CallOverrides): Promise<[BigNumber]>;

    lp(overrides?: CallOverrides): Promise<[string]>;

    users(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, string, BigNumber]
    >;
  };

  accTokensPerLp(overrides?: CallOverrides): Promise<BigNumber>;

  lp(overrides?: CallOverrides): Promise<string>;

  users(
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, string, BigNumber]
  >;

  callStatic: {
    accTokensPerLp(overrides?: CallOverrides): Promise<BigNumber>;

    lp(overrides?: CallOverrides): Promise<string>;

    users(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, string, BigNumber]
    >;
  };

  filters: {};

  estimateGas: {
    accTokensPerLp(overrides?: CallOverrides): Promise<BigNumber>;

    lp(overrides?: CallOverrides): Promise<BigNumber>;

    users(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accTokensPerLp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    users(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}