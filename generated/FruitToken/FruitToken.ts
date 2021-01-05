// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class BalanceUpdated extends ethereum.Event {
  get params(): BalanceUpdated__Params {
    return new BalanceUpdated__Params(this);
  }
}

export class BalanceUpdated__Params {
  _event: BalanceUpdated;

  constructor(event: BalanceUpdated) {
    this._event = event;
  }

  get store(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class CollateralGenerated extends ethereum.Event {
  get params(): CollateralGenerated__Params {
    return new CollateralGenerated__Params(this);
  }
}

export class CollateralGenerated__Params {
  _event: CollateralGenerated;

  constructor(event: CollateralGenerated) {
    this._event = event;
  }

  get store(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get collateral(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get stake(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get availableFunds(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class CollateralReleased extends ethereum.Event {
  get params(): CollateralReleased__Params {
    return new CollateralReleased__Params(this);
  }
}

export class CollateralReleased__Params {
  _event: CollateralReleased;

  constructor(event: CollateralReleased) {
    this._event = event;
  }

  get store(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get collateral(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get availableFunds(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class CollateralReliefUpdated extends ethereum.Event {
  get params(): CollateralReliefUpdated__Params {
    return new CollateralReliefUpdated__Params(this);
  }
}

export class CollateralReliefUpdated__Params {
  _event: CollateralReliefUpdated;

  constructor(event: CollateralReliefUpdated) {
    this._event = event;
  }

  get store(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get collateralRelief(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get availableFunds(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get rate(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class ExtensionUpdated extends ethereum.Event {
  get params(): ExtensionUpdated__Params {
    return new ExtensionUpdated__Params(this);
  }
}

export class ExtensionUpdated__Params {
  _event: ExtensionUpdated;

  constructor(event: ExtensionUpdated) {
    this._event = event;
  }

  get store(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get extension(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class MetaDataUpdated extends ethereum.Event {
  get params(): MetaDataUpdated__Params {
    return new MetaDataUpdated__Params(this);
  }
}

export class MetaDataUpdated__Params {
  _event: MetaDataUpdated;

  constructor(event: MetaDataUpdated) {
    this._event = event;
  }

  get store(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get metaData(): Array<string> {
    return this._event.parameters[1].value.toStringArray();
  }
}

export class OwnerUpdated extends ethereum.Event {
  get params(): OwnerUpdated__Params {
    return new OwnerUpdated__Params(this);
  }
}

export class OwnerUpdated__Params {
  _event: OwnerUpdated;

  constructor(event: OwnerUpdated) {
    this._event = event;
  }

  get store(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class StakeUpdated extends ethereum.Event {
  get params(): StakeUpdated__Params {
    return new StakeUpdated__Params(this);
  }
}

export class StakeUpdated__Params {
  _event: StakeUpdated;

  constructor(event: StakeUpdated) {
    this._event = event;
  }

  get store(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get stake(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get availableFunds(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class StoreCreated extends ethereum.Event {
  get params(): StoreCreated__Params {
    return new StoreCreated__Params(this);
  }
}

export class StoreCreated__Params {
  _event: StoreCreated;

  constructor(event: StoreCreated) {
    this._event = event;
  }

  get store(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get creationDate(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get _from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class FruitToken__mintResult {
  value0: boolean;
  value1: BigInt;

  constructor(value0: boolean, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class FruitToken extends ethereum.SmartContract {
  static bind(address: Address): FruitToken {
    return new FruitToken("FruitToken", address);
  }

  approve(_spender: Address, _amount: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_spender),
      ethereum.Value.fromUnsignedBigInt(_amount)
    ]);

    return result[0].toBoolean();
  }

  try_approve(
    _spender: Address,
    _amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_spender),
      ethereum.Value.fromUnsignedBigInt(_amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  mint(_customer: Address, _paymentReceived: BigInt): FruitToken__mintResult {
    let result = super.call("mint", "mint(address,uint256):(bool,uint256)", [
      ethereum.Value.fromAddress(_customer),
      ethereum.Value.fromUnsignedBigInt(_paymentReceived)
    ]);

    return new FruitToken__mintResult(
      result[0].toBoolean(),
      result[1].toBigInt()
    );
  }

  try_mint(
    _customer: Address,
    _paymentReceived: BigInt
  ): ethereum.CallResult<FruitToken__mintResult> {
    let result = super.tryCall("mint", "mint(address,uint256):(bool,uint256)", [
      ethereum.Value.fromAddress(_customer),
      ethereum.Value.fromUnsignedBigInt(_paymentReceived)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new FruitToken__mintResult(value[0].toBoolean(), value[1].toBigInt())
    );
  }

  transfer(_to: Address, _amount: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_to),
      ethereum.Value.fromUnsignedBigInt(_amount)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(_to: Address, _amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_to),
      ethereum.Value.fromUnsignedBigInt(_amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(_from: Address, _to: Address, _amount: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    _from: Address,
    _to: Address,
    _amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  withdraw(_amount: BigInt): boolean {
    let result = super.call("withdraw", "withdraw(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_amount)
    ]);

    return result[0].toBoolean();
  }

  try_withdraw(_amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("withdraw", "withdraw(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  allowance(_owner: Address, _spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(_owner), ethereum.Value.fromAddress(_spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(
    _owner: Address,
    _spender: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(_owner), ethereum.Value.fromAddress(_spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(_owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(_owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(_owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(_owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): BigInt {
    let result = super.call("decimals", "decimals():(uint256)", []);

    return result[0].toBigInt();
  }

  try_decimals(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("decimals", "decimals():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  feeCollector(): Address {
    let result = super.call("feeCollector", "feeCollector():(address)", []);

    return result[0].toAddress();
  }

  try_feeCollector(): ethereum.CallResult<Address> {
    let result = super.tryCall("feeCollector", "feeCollector():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getAvailableEth(_store: Address): BigInt {
    let result = super.call(
      "getAvailableEth",
      "getAvailableEth(address):(uint256)",
      [ethereum.Value.fromAddress(_store)]
    );

    return result[0].toBigInt();
  }

  try_getAvailableEth(_store: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getAvailableEth",
      "getAvailableEth(address):(uint256)",
      [ethereum.Value.fromAddress(_store)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getCollateral(_store: Address): BigInt {
    let result = super.call(
      "getCollateral",
      "getCollateral(address):(uint256)",
      [ethereum.Value.fromAddress(_store)]
    );

    return result[0].toBigInt();
  }

  try_getCollateral(_store: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCollateral",
      "getCollateral(address):(uint256)",
      [ethereum.Value.fromAddress(_store)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getcollateralRelief(_store: Address, _rate: BigInt): BigInt {
    let result = super.call(
      "getcollateralRelief",
      "getcollateralRelief(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_store),
        ethereum.Value.fromUnsignedBigInt(_rate)
      ]
    );

    return result[0].toBigInt();
  }

  try_getcollateralRelief(
    _store: Address,
    _rate: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getcollateralRelief",
      "getcollateralRelief(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_store),
        ethereum.Value.fromUnsignedBigInt(_rate)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getStake(_store: Address): BigInt {
    let result = super.call("getStake", "getStake(address):(uint256)", [
      ethereum.Value.fromAddress(_store)
    ]);

    return result[0].toBigInt();
  }

  try_getStake(_store: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getStake", "getStake(address):(uint256)", [
      ethereum.Value.fromAddress(_store)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isStoreValid(_store: Address): boolean {
    let result = super.call("isStoreValid", "isStoreValid(address):(bool)", [
      ethereum.Value.fromAddress(_store)
    ]);

    return result[0].toBoolean();
  }

  try_isStoreValid(_store: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isStoreValid", "isStoreValid(address):(bool)", [
      ethereum.Value.fromAddress(_store)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  malusToken(): Address {
    let result = super.call("malusToken", "malusToken():(address)", []);

    return result[0].toAddress();
  }

  try_malusToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("malusToken", "malusToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class AddStakeCall extends ethereum.Call {
  get inputs(): AddStakeCall__Inputs {
    return new AddStakeCall__Inputs(this);
  }

  get outputs(): AddStakeCall__Outputs {
    return new AddStakeCall__Outputs(this);
  }
}

export class AddStakeCall__Inputs {
  _call: AddStakeCall;

  constructor(call: AddStakeCall) {
    this._call = call;
  }

  get _store(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AddStakeCall__Outputs {
  _call: AddStakeCall;

  constructor(call: AddStakeCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get _spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get malusTokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _sender(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CollectFeeCall extends ethereum.Call {
  get inputs(): CollectFeeCall__Inputs {
    return new CollectFeeCall__Inputs(this);
  }

  get outputs(): CollectFeeCall__Outputs {
    return new CollectFeeCall__Outputs(this);
  }
}

export class CollectFeeCall__Inputs {
  _call: CollectFeeCall;

  constructor(call: CollectFeeCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CollectFeeCall__Outputs {
  _call: CollectFeeCall;

  constructor(call: CollectFeeCall) {
    this._call = call;
  }
}

export class DeployStoreCall extends ethereum.Call {
  get inputs(): DeployStoreCall__Inputs {
    return new DeployStoreCall__Inputs(this);
  }

  get outputs(): DeployStoreCall__Outputs {
    return new DeployStoreCall__Outputs(this);
  }
}

export class DeployStoreCall__Inputs {
  _call: DeployStoreCall;

  constructor(call: DeployStoreCall) {
    this._call = call;
  }
}

export class DeployStoreCall__Outputs {
  _call: DeployStoreCall;

  constructor(call: DeployStoreCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get _customer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _paymentReceived(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }

  get balance(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}

export class ProvideCollateralReliefCall extends ethereum.Call {
  get inputs(): ProvideCollateralReliefCall__Inputs {
    return new ProvideCollateralReliefCall__Inputs(this);
  }

  get outputs(): ProvideCollateralReliefCall__Outputs {
    return new ProvideCollateralReliefCall__Outputs(this);
  }
}

export class ProvideCollateralReliefCall__Inputs {
  _call: ProvideCollateralReliefCall;

  constructor(call: ProvideCollateralReliefCall) {
    this._call = call;
  }

  get _store(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _rate(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ProvideCollateralReliefCall__Outputs {
  _call: ProvideCollateralReliefCall;

  constructor(call: ProvideCollateralReliefCall) {
    this._call = call;
  }
}

export class RemoveCollateralReliefCall extends ethereum.Call {
  get inputs(): RemoveCollateralReliefCall__Inputs {
    return new RemoveCollateralReliefCall__Inputs(this);
  }

  get outputs(): RemoveCollateralReliefCall__Outputs {
    return new RemoveCollateralReliefCall__Outputs(this);
  }
}

export class RemoveCollateralReliefCall__Inputs {
  _call: RemoveCollateralReliefCall;

  constructor(call: RemoveCollateralReliefCall) {
    this._call = call;
  }

  get _store(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _rate(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class RemoveCollateralReliefCall__Outputs {
  _call: RemoveCollateralReliefCall;

  constructor(call: RemoveCollateralReliefCall) {
    this._call = call;
  }
}

export class RemoveStakeCall extends ethereum.Call {
  get inputs(): RemoveStakeCall__Inputs {
    return new RemoveStakeCall__Inputs(this);
  }

  get outputs(): RemoveStakeCall__Outputs {
    return new RemoveStakeCall__Outputs(this);
  }
}

export class RemoveStakeCall__Inputs {
  _call: RemoveStakeCall;

  constructor(call: RemoveStakeCall) {
    this._call = call;
  }

  get _store(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RemoveStakeCall__Outputs {
  _call: RemoveStakeCall;

  constructor(call: RemoveStakeCall) {
    this._call = call;
  }
}

export class SellCollateralCall extends ethereum.Call {
  get inputs(): SellCollateralCall__Inputs {
    return new SellCollateralCall__Inputs(this);
  }

  get outputs(): SellCollateralCall__Outputs {
    return new SellCollateralCall__Outputs(this);
  }
}

export class SellCollateralCall__Inputs {
  _call: SellCollateralCall;

  constructor(call: SellCollateralCall) {
    this._call = call;
  }

  get _fromStore(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _toStore(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _rate(): i32 {
    return this._call.inputValues[3].value.toI32();
  }
}

export class SellCollateralCall__Outputs {
  _call: SellCollateralCall;

  constructor(call: SellCollateralCall) {
    this._call = call;
  }
}

export class SetMetaDataCall extends ethereum.Call {
  get inputs(): SetMetaDataCall__Inputs {
    return new SetMetaDataCall__Inputs(this);
  }

  get outputs(): SetMetaDataCall__Outputs {
    return new SetMetaDataCall__Outputs(this);
  }
}

export class SetMetaDataCall__Inputs {
  _call: SetMetaDataCall;

  constructor(call: SetMetaDataCall) {
    this._call = call;
  }

  get _store(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _metaData(): Array<string> {
    return this._call.inputValues[1].value.toStringArray();
  }
}

export class SetMetaDataCall__Outputs {
  _call: SetMetaDataCall;

  constructor(call: SetMetaDataCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferCollateralCall extends ethereum.Call {
  get inputs(): TransferCollateralCall__Inputs {
    return new TransferCollateralCall__Inputs(this);
  }

  get outputs(): TransferCollateralCall__Outputs {
    return new TransferCollateralCall__Outputs(this);
  }
}

export class TransferCollateralCall__Inputs {
  _call: TransferCollateralCall;

  constructor(call: TransferCollateralCall) {
    this._call = call;
  }

  get _fromStore(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _toStore(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferCollateralCall__Outputs {
  _call: TransferCollateralCall;

  constructor(call: TransferCollateralCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class UpdateExtensionCall extends ethereum.Call {
  get inputs(): UpdateExtensionCall__Inputs {
    return new UpdateExtensionCall__Inputs(this);
  }

  get outputs(): UpdateExtensionCall__Outputs {
    return new UpdateExtensionCall__Outputs(this);
  }
}

export class UpdateExtensionCall__Inputs {
  _call: UpdateExtensionCall;

  constructor(call: UpdateExtensionCall) {
    this._call = call;
  }

  get _store(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _newExtension(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class UpdateExtensionCall__Outputs {
  _call: UpdateExtensionCall;

  constructor(call: UpdateExtensionCall) {
    this._call = call;
  }
}

export class UpdateStoreOwnerCall extends ethereum.Call {
  get inputs(): UpdateStoreOwnerCall__Inputs {
    return new UpdateStoreOwnerCall__Inputs(this);
  }

  get outputs(): UpdateStoreOwnerCall__Outputs {
    return new UpdateStoreOwnerCall__Outputs(this);
  }
}

export class UpdateStoreOwnerCall__Inputs {
  _call: UpdateStoreOwnerCall;

  constructor(call: UpdateStoreOwnerCall) {
    this._call = call;
  }

  get _store(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _newOwner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class UpdateStoreOwnerCall__Outputs {
  _call: UpdateStoreOwnerCall;

  constructor(call: UpdateStoreOwnerCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
