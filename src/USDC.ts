import { Transfer } from "../generated/USDC/USDC"
import { Store } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
    let toStore = Store.load(event.params.to.toHexString());
    let fromStore = Store.load(event.params.from.toHexString());

    if(toStore != null) { 
        if(event.params.from.toHexString().startsWith('0x3b01442fd5b455e2e9a9a4a2ede10df6371a44ff') == false) {
            toStore.availableUSDC = toStore.availableUSDC.plus(event.params.value);
            toStore.save();
        }
    }

    if(fromStore != null) {
        fromStore.availableUSDC = fromStore.availableUSDC.minus(event.params.value);
        fromStore.save();
    }
}