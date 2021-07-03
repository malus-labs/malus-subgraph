import { BigInt } from "@graphprotocol/graph-ts"
import {
  CollateralReliefUpdated,
  ExtensionUpdated,
  OwnerUpdated,
  CollateralTransfer,
  AtokenTransfer,
  StakeUpdated,
  StoreCreated,
  Transfer,
} from "../generated/mUSDC/mUSDC"
import { Store, User, CollateralRelief } from "../generated/schema";
import { isDuplicateAddress } from "./utils";

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


export function handleAtokenTransfer(event: AtokenTransfer): void {
  let toStore = Store.load(event.params.to.toHexString());
  let fromStore = Store.load(event.params.store.toHexString());
  let isSameStore = isDuplicateAddress(event.params.store.toHexString(), event.params.to.toHexString());

  if(!isSameStore) {
    fromStore.availableAUSDC = fromStore.availableAUSDC.minus(event.params.amount);
    fromStore.save();
    
    if(toStore != null) {
      toStore.availableAUSDC = toStore.availableAUSDC.plus(event.params.amount);
      toStore.save();
    }
  }
}


export function handleCollateralTransfer(event: CollateralTransfer): void {
  let fromStore = Store.load(event.params.store.toHexString());
  let toStore = Store.load(event.params.to.toHexString());
  let zeroValue = new BigInt(0);
  let isSameStore = isDuplicateAddress(event.params.store.toHexString(), event.params.to.toHexString());

  if(!isSameStore) {
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
}


export function handleStakeUpdated(event: StakeUpdated): void {
  let store = Store.load(event.params.store.toHexString());
  store.availableAUSDC = store.availableAUSDC.minus(event.params.stake);
  store.stake =  store.stake.plus(event.params.stake);
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
