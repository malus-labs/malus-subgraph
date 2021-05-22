import { Transfer } from "../generated/aUSDC/aUSDC"
import { Store } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
    let toStore = Store.load(event.params._to.toHexString());
    let fromStore = Store.load(event.params._from.toHexString());

    if(toStore != null) {
        toStore.availableAUSDC = toStore.availableAUSDC.plus(event.params._amount);
        toStore.save();
    }

    if(fromStore != null) {
        fromStore.availableAUSDC = fromStore.availableAUSDC.minus(event.params._amount);
        fromStore.save();
    }
}