import {
    UpdateVerification
  } from "../generated/Verification/Verification"

import { Domain, Store } from "../generated/schema"

export function handleUpdateVerification(event: UpdateVerification): void {
    let domain = Domain.load(event.params.node.toHexString());
    let store = Store.load(domain.store);

    if(domain == null) {
        return;
    }

    if(event.params.didVerify == true) {
        if(store != null) {
            domain.isVerified = true;
            store.isVerified = true;
        }
    }
    else {
        if(store != null) {
            domain.isVerified = false;
            store.isVerified = false;
        }
    }
    store.save();
    domain.save();
}