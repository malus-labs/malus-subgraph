import { crypto, ens, ByteArray } from "@graphprotocol/graph-ts"
import {
    NewOwner 
} from "../generated/ENSRegistry/EnsRegistry"
import { Domain } from "../generated/schema"

export function handleNewOwner(event: NewOwner): void {
  
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

// Helper for concatenating two byte arrays
export function concat(a: ByteArray, b: ByteArray): ByteArray {
    let out = new Uint8Array(a.length + b.length)
    for (let i = 0; i < a.length; i++) {
      out[i] = a[i]
    }
    for (let j = 0; j < b.length; j++) {
      out[a.length + j] = b[j]
    }
    return out as ByteArray
}