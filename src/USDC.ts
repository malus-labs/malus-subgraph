import { Transfer } from "../generated/USDC/USDC";
import { Store } from "../generated/schema";
import { isDuplicateAddress } from "./utils";

export function handleTransfer(event: Transfer): void {
    let toStore = Store.load(event.params.to.toHexString());
    let fromStore = Store.load(event.params.from.toHexString());
    let isSameStore = isDuplicateAddress(event.params.from.toHexString(), event.params.to.toHexString());

    if(!isSameStore) {
        if(toStore != null) { 
            if(event.params.from.toHexString().startsWith('0xa868f30d5163044a330aa0a15e92b7dc655eb26e') == false) {
                toStore.availableUSDC = toStore.availableUSDC.plus(event.params.value);
                toStore.save();
            }
        }
    
        if(fromStore != null) {
            fromStore.availableUSDC = fromStore.availableUSDC.minus(event.params.value);
            fromStore.save();
        }
    }
}