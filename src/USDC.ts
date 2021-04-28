import { Transfer } from "../generated/USDC/USDC"
import { Store } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
    let toStore = Store.load(event.params.to.toHexString());
    let fromStore = Store.load(event.params.from.toHexString());

    if(toStore != null) {
        toStore.availableUSDC = toStore.availableAUSDC.plus(event.params.value);
        toStore.save();
    }

    if(fromStore != null) {
        fromStore.availableUSDC = toStore.availableAUSDC.minus(event.params.value);
        fromStore.save();
    }
}