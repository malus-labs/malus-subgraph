import { BigInt } from "@graphprotocol/graph-ts"
import {
  BalanceUpdated,
  CollateralGenerated,
  CollateralReleased,
  CollateralReliefUpdated,
  ExtensionUpdated,
  MetaDataUpdated,
  OwnerUpdated,
  StakeUpdated,
  StoreCreated,
} from "../generated/FruitToken/FruitToken"
import { Store, User } from "../generated/schema"

export function handleStoreCreated(event: StoreCreated): void {
  let user = User.load(event.params.owner.toHexString());

  if(user == null) {
    user = new User(event.params.owner.toHexString());
    user.save();
  }

  let store = new Store(event.params.store.toHex());
  store.owner = user.id;
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

export function handleStakeUpdated(event: StakeUpdated): void {
  let store = Store.load(event.params.store.toHexString());
  store.availableETH = event.params.availableFunds;
  store.stake = event.params.stake;
  store.save();
}
/*
export function handleBalanceUpdated(event: BalanceUpdated): void {
  let store = Store.load(event.params.store.toHexString());
  store.availableETH = event.params.amount;
  store.save();
}
*/
/*
export function handleCollateralGenerated(event: CollateralGenerated): void {
  let store = Store.load(event.params.store.toHexString());
  store.availableETH = event.params.availableFunds;
  store.stake = event.params.stake;
  store.save();
}
*/

export function handleExtensionUpdated(event: ExtensionUpdated): void {
  let store = Store.load(event.params.store.toHexString());
  store.extension = event.params.extension;
  store.save();
}

/*
export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity._owner = event.params._owner
  entity._spender = event.params._spender

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.approve(...)
  // - contract.mint(...)
  // - contract.transfer(...)
  // - contract.transferFrom(...)
  // - contract.withdraw(...)
  // - contract.allowance(...)
  // - contract.balanceOf(...)
  // - contract.decimals(...)
  // - contract.feeCollector(...)
  // - contract.getAvailableEth(...)
  // - contract.getCollateral(...)
  // - contract.getcollateralRelief(...)
  // - contract.getStake(...)
  // - contract.isStoreValid(...)
  // - contract.malusToken(...)
  // - contract.name(...)
  // - contract.symbol(...)
  // - contract.totalSupply(...)
}

export function handleBalanceUpdated(event: BalanceUpdated): void {}

export function handleCollateralGenerated(event: CollateralGenerated): void {}

export function handleCollateralReleased(event: CollateralReleased): void {}

export function handleCollateralReliefUpdated(
  event: CollateralReliefUpdated
): void {}

export function handleExtensionUpdated(event: ExtensionUpdated): void {}

export function handleMetaDataUpdated(event: MetaDataUpdated): void {}

export function handleOwnerUpdated(event: OwnerUpdated): void {}

export function handleStakeUpdated(event: StakeUpdated): void {}

export function handleTransfer(event: Transfer): void {}
*/