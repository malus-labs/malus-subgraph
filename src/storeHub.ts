import { BigInt } from "@graphprotocol/graph-ts"
import {
  CollateralReliefUpdated,
  ExtensionUpdated,
  MetaDataUpdated,
  OwnerUpdated,
  StoreBalancesUpdated,
  StoreCreated,
} from "../generated/FruitToken/FruitToken"

import { Store, User, Domain, CollateralRelief } from "../generated/schema"

export function handleStoreCreated(event: StoreCreated): void {
  let user = User.load(event.params.owner.toHexString());

  if(user == null) {
    user = new User(event.params.owner.toHexString());
    user.save();
  }

  let store = new Store(event.params.store.toHex());
  let zeroValue = new BigInt(0);
  store.owner = user.id;
  store.availableETH = zeroValue;
  store.availableUSDC = zeroValue;
  store.availableMUS = zeroValue;
  store.stake = zeroValue;
  store.collateral = zeroValue;
  store.collateralRelief = zeroValue;
  store.creationDate = event.params.creationDate;
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

export function handleStoreBalancesUpdated(event: StoreBalancesUpdated): void {
  let store = Store.load(event.params.store.toHexString());
  store.availableETH = event.params.availableFunds;
  store.stake = event.params.stake;
  store.collateral = event.params.collateral;
  store.save();
}

export function handleExtensionUpdated(event: ExtensionUpdated): void {
  let store = Store.load(event.params.store.toHexString());
  store.extension = event.params.extension;
  store.save();
}

export function handleMetaDataUpdated(event: MetaDataUpdated): void {
  let store = Store.load(event.params.store.toHexString());
  let domain = Domain.load(event.params.metaData[0]);

  if(domain != null) {
    if(domain.store == store.id) {
      store.ensName = domain.id;
    }
  }
  store.country = event.params.metaData[1];
  store.city = event.params.metaData[2];
  store.street = event.params.metaData[3];
  store.website = event.params.metaData[4];
  store.type = event.params.metaData[5];
  store.zipcode = event.params.metaData[6];
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

function getCollateralReliefID(store: string, rate: string) {
  return store.concat(rate);
}