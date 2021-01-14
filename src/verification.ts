import {
    UpdateVerification
  } from "../generated/Verification/Verification"

import { Domain } from "../generated/schema"

export function handleUpdateVerification(event: UpdateVerification): void {
    let domain = Domain.load(event.params.node.toHexString());

    if(domain == null) {
        return;
    }

    if(event.params.didVerify == true) {
        domain.isVerified = true;
    }
    else {
        domain.isVerified = false;
    }
}