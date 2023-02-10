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

export interface IApeSwapFarmingIntefaceInterface extends utils.Interface {
  functions: {
    "lpToken(uint256)": FunctionFragment;
    "pendingBanana(uint256,address)": FunctionFragment;
    "userInfo(uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "lpToken" | "pendingBanana" | "userInfo"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "lpToken",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingBanana",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "userInfo",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "lpToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingBanana",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;

  events: {};
}

export interface IApeSwapFarmingInteface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IApeSwapFarmingIntefaceInterface;

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
    lpToken(
      _pId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    pendingBanana(
      _pId: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    userInfo(
      _pId: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;
  };

  lpToken(
    _pId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  pendingBanana(
    _pId: PromiseOrValue<BigNumberish>,
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  userInfo(
    _pId: PromiseOrValue<BigNumberish>,
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  callStatic: {
    lpToken(
      _pId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    pendingBanana(
      _pId: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userInfo(
      _pId: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;
  };

  filters: {};

  estimateGas: {
    lpToken(
      _pId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingBanana(
      _pId: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userInfo(
      _pId: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    lpToken(
      _pId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingBanana(
      _pId: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userInfo(
      _pId: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}