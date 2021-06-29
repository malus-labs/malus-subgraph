import { BigInt } from "@graphprotocol/graph-ts"
import {
  CollateralReliefUpdated,
  CollateralTransfer,
  AtokenTransfer,
  StakeUpdated,
  Transfer,
} from "../generated/mUSDT/mUSDT"

import { Store, CollateralRelief } from "../generated/schema"


export function handleAtokenTransfer(event: AtokenTransfer): void {
  let toStore = Store.load(event.params.to.toHexString());
  let fromStore = Store.load(event.params.store.toHexString());

  fromStore.availableAUSDC = fromStore.availableAUSDC.minus(event.params.amount);
  fromStore.save();

  if(toStore != null) {
    toStore.availableAUSDC = toStore.availableAUSDC.plus(event.params.amount);
    toStore.save();
  }
}


export function handleCollateralTransfer(event: CollateralTransfer): void { //fix bug against double sends
  let fromStore = Store.load(event.params.store.toHexString()); 
  let toStore = Store.load(event.params.to.toHexString());
  let zeroValue = new BigInt(0);

  if(event.params.didTrade == false) {
    if(event.params.store.toHexString().startsWith('0x0000000000000000000000000000000000000000') == true) {
      let stakeLeftOver = toStore.stake as BigInt;

      toStore.availableAUSDC = toStore.availableAUSDC.plus(stakeLeftOver);
      toStore.collateral = toStore.collateral.plus(event.params.amount);
      toStore.stake = zeroValue;
      toStore.save(); 
    }
    else {
      fromStore.collateral = fromStore.collateral.minus(event.params.amount);
      toStore.collateral = toStore.collateral.plus(event.params.amount);
      fromStore.save();
      toStore.save();
    }
  }
  else {
    let amount = event.params.amount;
    let rate = event.params.rate;
    let lost = amount.times(rate).div(BigInt.fromI32(10000));
    let difference = amount.minus(lost);

    fromStore.collateral = fromStore.collateral.minus(amount);
    fromStore.availableAUSDC = fromStore.availableAUSDC.plus(difference);

    toStore.collateral = toStore.collateral.plus(amount);
    toStore.availableAUSDC = toStore.availableAUSDC.plus(lost);
    toStore.collateralRelief = toStore.collateralRelief.minus(amount);

    let id = getCollateralReliefID(event.params.to.toHexString(), rate.toHexString()); 
    let collateralRelief = CollateralRelief.load(id);
    collateralRelief.amount = zeroValue;

    fromStore.save();
    toStore.save();
    collateralRelief.save();
  }
}


export function handleStakeUpdated(event: StakeUpdated): void {
  let store = Store.load(event.params.store.toHexString());
  store.availableAUSDC = store.availableAUSDC.minus(event.params.stake);
  store.stake =  store.stake.plus(event.params.stake);
  store.save();
}


export function handleCollateralReliefUpdated(event: CollateralReliefUpdated): void {
  let id = getCollateralReliefID(event.params.store.toHexString(), event.params.rate.toHexString()); 
  let collateralRelief = CollateralRelief.load(id);

  if(collateralRelief == null) {
    let zeroValue = new BigInt(0);
    collateralRelief = new CollateralRelief(id);
    collateralRelief.rate = event.params.rate;
    collateralRelief.amount = zeroValue;
  }

  let store = Store.load(event.params.store.toHexString());
  collateralRelief.store = store.id;
  
  if(event.params.didAdd == true) {
    store.availableAUSDC = store.availableAUSDC.minus(event.params.amount);
    store.collateralRelief = store.collateralRelief.plus(event.params.amount);
    collateralRelief.amount = collateralRelief.amount.plus(event.params.amount);
  }
  else {
    store.availableAUSDC = store.availableAUSDC.plus(event.params.amount);
    store.collateralRelief = store.collateralRelief.minus(event.params.amount);
    collateralRelief.amount = collateralRelief.amount.minus(event.params.amount);
  }

  collateralRelief.save();
  store.save();
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
