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
        domain.isVerified = true;
        if(store != null) {
            store.isVerified = true;
        }
    }
    else {
        domain.isVerified = false;
        if(store != null) {
            store.isVerified = false;
        }
    }
    store.save();
    domain.save();
}