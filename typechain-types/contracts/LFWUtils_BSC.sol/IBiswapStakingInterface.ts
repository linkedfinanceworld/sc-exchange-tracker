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

export interface IBiswapStakingInterfaceInterface extends utils.Interface {
  functions: {
    "getCurrentDay()": FunctionFragment;
    "pools(uint256)": FunctionFragment;
    "userInfo(address,uint256)": FunctionFragment;
    "userPendingWithdraw(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getCurrentDay"
      | "pools"
      | "userInfo"
      | "userPendingWithdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getCurrentDay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pools",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "userInfo",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "userPendingWithdraw",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getCurrentDay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pools", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userPendingWithdraw",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IBiswapStakingInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBiswapStakingInterfaceInterface;

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
    getCurrentDay(overrides?: CallOverrides): Promise<[number]>;

    pools(
      _pId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        number,
        number,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
      ]
    >;

    userInfo(
      arg0: PromiseOrValue<string>,
      _pId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, number, boolean]>;

    userPendingWithdraw(
      _user: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number]>;
  };

  getCurrentDay(overrides?: CallOverrides): Promise<number>;

  pools(
    _pId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      number,
      number,
      number,
      number,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean
    ]
  >;

  userInfo(
    arg0: PromiseOrValue<string>,
    _pId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, number, boolean]>;

  userPendingWithdraw(
    _user: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<number>;

  callStatic: {
    getCurrentDay(overrides?: CallOverrides): Promise<number>;

    pools(
      _pId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        number,
        number,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
      ]
    >;

    userInfo(
      arg0: PromiseOrValue<string>,
      _pId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, number, boolean]>;

    userPendingWithdraw(
      _user: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<number>;
  };

  filters: {};

  estimateGas: {
    getCurrentDay(overrides?: CallOverrides): Promise<BigNumber>;

    pools(
      _pId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userInfo(
      arg0: PromiseOrValue<string>,
      _pId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userPendingWithdraw(
      _user: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getCurrentDay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pools(
      _pId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userInfo(
      arg0: PromiseOrValue<string>,
      _pId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userPendingWithdraw(
      _user: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
