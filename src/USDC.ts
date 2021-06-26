import { Transfer } from "../generated/USDC/USDC"
import { Store } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
    let toStore = Store.load(event.params.to.toHexString());
    let fromStore = Store.load(event.params.from.toHexString());

    if(toStore != null) { 
        if(event.params.from.toHexString().startsWith('0x42daca14077244e09604544c8e7549c82069b9d6') == false) {
            toStore.availableUSDC = toStore.availableUSDC.plus(event.params.value);
            toStore.save();
        }
    }

    if(fromStore != null) {
        fromStore.availableUSDC = fromStore.availableUSDC.minus(event.params.value);
        fromStore.save();
    }
}