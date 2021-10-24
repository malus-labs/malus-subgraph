import {
    AddrChanged as AddrChangedEvent
} from '../generated/Resolver/Resolver'

import { Store, Domain } from "../generated/schema"


export function handleAddrChanged(event: AddrChangedEvent): void {
    let domain = Domain.load(event.params.node.toHexString());
    let newStore = Store.load(event.params.a.toHexString());
    let oldStore = Store.load(domain.store);

    if(domain != null) {
        if(oldStore != null) {
            domain.store = null;
            domain.isVerified = false;
            oldStore.ensName = null;
            oldStore.name = null;
            oldStore.isVerified = false;
            oldStore.save();
        }

        if(newStore != null) {
            domain.store = newStore.id;
        }
        domain.save();
    }
}