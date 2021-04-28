import { Transfer } from "../generated/aUSDC/aUSDC"
import { Store } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
    let toStore = Store.load(event.params.dst.toHexString());
    let fromStore = Store.load(event.params.src.toHexString());

    if(toStore != null) {
        toStore.availableAUSDC = toStore.availableAUSDC.plus(event.params.wad);
        toStore.save();
    }

    if(fromStore != null) {
        fromStore.availableAUSDC = toStore.availableAUSDC.minus(event.params.wad);
        fromStore.save();
    }
}