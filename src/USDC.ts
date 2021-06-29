import { Transfer } from "../generated/USDC/USDC"
import { Store } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
    let toStore = Store.load(event.params.to.toHexString());
    let fromStore = Store.load(event.params.from.toHexString());

    if(toStore != null) { 
        if(event.params.from.toHexString().startsWith('0xf1abca1841bc48c1ce758b4d1e1046ab9753a8ee') == false) {
            toStore.availableUSDC = toStore.availableUSDC.plus(event.params.value);
            toStore.save();
        }
    }

    if(fromStore != null) {
        fromStore.availableUSDC = fromStore.availableUSDC.minus(event.params.value);
        fromStore.save();
    }
}