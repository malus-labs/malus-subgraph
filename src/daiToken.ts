/*
import {
    Transfer
} from "../generated/DaiToken/DaiToken"

import { Store } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
    let fromStore = Store.load(event.params._from.toHexString());
    let toStore = Store.load(event.params._to.toHexString());

    if(fromStore != null) {
        fromStore.availableDAI = fromStore.availableDAI.minus(event.params._amount);
        fromStore.save();
    }

    if(toStore != null) {
        toStore.availableDAI = toStore.availableDAI.plus(event.params._amount);
        toStore.save();
    }
}
*/