import { Transfer } from "../generated/USDC/USDC"
import { Store } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
    let toStore = Store.load(event.params.to.toHexString());
    let fromStore = Store.load(event.params.from.toHexString());

    if(toStore != null) { 
        if(event.params.from.toHexString().startsWith('0xa28ce059dc1c3c98b0bacbd7621e1b23670715dd') == false) {
            toStore.availableUSDC = toStore.availableUSDC.plus(event.params.value);
            toStore.save();
        }
    }

    if(fromStore != null) {
        fromStore.availableUSDC = fromStore.availableUSDC.minus(event.params.value);
        fromStore.save();
    }
}