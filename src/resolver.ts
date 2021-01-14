import {
    AddrChanged as AddrChangedEvent
} from '../generated/Resolver/Resolver'

import { Store, Domain } from "../generated/schema"


export function handleAddrChanged(event: AddrChangedEvent): void {
    let domain = Domain.load(event.params.node.toHexString());

    if(domain != null) {
        let newStore = Store.load(event.params.a.toHexString());

        if(domain.store != null) {
            let oldStore = Store.load(domain.store);
            oldStore.ensName = null;
            oldStore.save();
        }

        if(newStore != null) {
            domain.store = newStore.id;
            domain.save();
        }
    }
}