import {
    Transfer
} from "../generated/MalusToken/MalusToken"

import { Store } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
    let fromStore = Store.load(event.params._from.toHexString());
    let toStore = Store.load(event.params._to.toHexString());

    if(fromStore != null) {
        fromStore.availableMUS = fromStore.availableMUS.minus(event.params._amount);
        fromStore.save();
    }

    if(toStore != null) {
        toStore.availableMUS = toStore.availableMUS.plus(event.params._amount);
        toStore.save();
    }
}