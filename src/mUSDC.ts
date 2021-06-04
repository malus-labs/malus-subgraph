import { BigInt } from "@graphprotocol/graph-ts"
import {
  CollateralReliefUpdated,
  ExtensionUpdated,
  OwnerUpdated,
  CollateralUpdated,
  StakeUpdated,
  StoreCreated,
  Transfer,
} from "../generated/mUSDC/mUSDC"

import { Store, User, CollateralRelief } from "../generated/schema"

export function handleStoreCreated(event: StoreCreated): void {
  let user = User.load(event.params.owner.toHexString());

  if(user == null) {
    user = new User(event.params.owner.toHexString());
    user.save();
  }

  let store = new Store(event.params.store.toHex());
  let zeroValue = new BigInt(0);
  store.address = event.params.store.toHexString();
  store.owner = user.id;
  store.availableAUSDC = zeroValue;
  store.availableUSDC = zeroValue;
  store.isVerified = false;
  store.stake = zeroValue;
  store.collateral = zeroValue;
  store.collateralRelief = zeroValue;
  store.creationDate = event.params.creationDate;
  store.country = "";
  store.city = "";
  store.street = "";
  store.website = "";
  store.type = "";
  store.zipcode = "";
  store.save();
}

export function handleOwnerUpdated(event: OwnerUpdated): void {
  let user = User.load(event.params.newOwner.toHexString());

  if(user == null) {
    user = new User(event.params.newOwner.toHexString());
    user.save();
  }

  let store = Store.load(event.params.store.toHexString());
  store.owner = user.id;
  store.save();
}

export function handleCollateralUpdated(event: CollateralUpdated): void {
  let store = Store.load(event.params.store.toHexString());
  store.collateral = event.params.collateral;
  store.save();
}

export function handleStakeUpdated(event: StakeUpdated): void {
  let store = Store.load(event.params.store.toHexString());
  let stakeLeftOver = store.stake as BigInt;
  let zeroValue = new BigInt(0);

  if(event.params.stake == zeroValue) {
    store.availableAUSDC = store.availableAUSDC.plus(stakeLeftOver);
    store.stake = zeroValue;
  }
  else {
    store.availableAUSDC = store.availableAUSDC.minus(event.params.stake);
    store.stake =  store.stake.plus(event.params.stake);
  }
  store.save();
}

export function handleExtensionUpdated(event: ExtensionUpdated): void {
  let store = Store.load(event.params.store.toHexString());
  store.extension = event.params.extension;
  store.save();
}

export function handleCollateralReliefUpdated(event: CollateralReliefUpdated): void {
  let id = getCollateralReliefID(event.params.store.toHexString(), event.params.rate.toHexString()); 
  let collateralRelief = CollateralRelief.load(id);

  if(collateralRelief == null) {
    collateralRelief = new CollateralRelief(id);
  }

  let store = Store.load(event.params.store.toHexString());
  let a = store.collateralRelief;
  let b = event.params.collateralRelief;
  
  if(event.params.didAdd == true) {
    store.collateralRelief = a.plus(b);
  }
  else {
    store.collateralRelief = a.minus(b);
  }
  store.save();
  
  collateralRelief.rate = event.params.rate;
  collateralRelief.amount = event.params.collateralRelief;
  collateralRelief.store = store.id;
  collateralRelief.save();
}

export function handleTransfer(event: Transfer): void {
  let toStore = Store.load(event.params._to.toHexString());
  let fromStore = Store.load(event.params._from.toHexString());
  let amountPaid = (event.params._amount.times(BigInt.fromI32(10000))).div(BigInt.fromI32(700));

  if(toStore != null) {
    toStore.collateral = toStore.collateral.minus(event.params._amount);
    toStore.availableAUSDC = toStore.availableAUSDC.plus(event.params._amount);
    toStore.save();
  }

  if(fromStore != null) {
    fromStore.stake = fromStore.stake.minus(event.params._amount);
    fromStore.availableUSDC = fromStore.availableUSDC.plus(amountPaid);
    fromStore.save();
  }
}

function getCollateralReliefID(store: string, rate: string): string {
  return store.concat(rate);
}
