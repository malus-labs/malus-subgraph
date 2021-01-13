import { crypto, ens} from "@graphprotocol/graph-ts"
import {
    NewOwner as NewOwnerEvent,
    Transfer as TransferEvent,
} from "../generated/ENSRegistry/EnsRegistry"

import { Store, Domain } from "../generated/schema"

import { concat } from "./utils"

export function handleNewOwner(event: NewOwnerEvent): void {
  
    let subnode = crypto.keccak256(concat(event.params.node, event.params.label)).toHexString()
    let domain = Domain.load(subnode);
    if(domain == null) {
      domain = new Domain(subnode)
    }
  
    if(domain.name == null) {
      // Get label and node names
      let label = ens.nameByHash(event.params.label.toHexString())
  
      if(label == null) {
        label = '[' + event.params.label.toHexString().slice(2) + ']'
      }
      if(event.params.node.toHexString() == '0x0000000000000000000000000000000000000000000000000000000000000000') {
        domain.name = label
      } else {
        let parent = Domain.load(event.params.node.toHexString())
        domain.name = label + '.' + parent.name
      }
    }

    domain.save()
}

export function handleTransfer(event: TransferEvent): void {
    let domain = Domain.load(event.params.node.toHexString());

    if(domain != null) {
        return;  
    }

    if(event.params.owner.toHexString() == '0x0000000000000000000000000000000000000000'){
        let store = Store.load(domain.store);
        
        if(store != null) {
            store.ensName = null;
            domain.store = null;
            store.save();
            domain.save();
        }
    }
}
