import { ens } from "@graphprotocol/graph-ts"
import {
    NewOwner,
    NewTTL
} from "../generated/ENSRegistry/EnsRegistry"
import { Store } from "../generated/schema"

/*
export function handleTransfer(event: Transfer): void {
    let node = event.params.node.toHexString();
    let store = Store.load(event.params.owner.toHexString());
    let ensName = Ens.load(node);

    if(ensName == null && store != null) {
        store.ensName = node;
        ensName.store = store.id;
    }
    else if(ensName != null && store != null){

    }
    else if(ensName != null && store == null) {

    }
    else {
        //Does not concern subgraph..
    }
  }
  */
