import { crypto, ByteArray} from "@graphprotocol/graph-ts"

import {
    NameRegistered as NameRegisteredEvent,
    Transfer as TransferEvent,
  } from "../generated/BaseRegistrar/BaseRegistrar"
  
import {
    NameRegistered as ControllerNameRegisteredEvent,
} from "../generated/EthRegistrarController/EthRegistrarController"

import { Store, Domain } from "../generated/schema"

import { uint256ToByteArray, byteArrayFromHex, concat } from "./utils"

var rootNode:ByteArray = byteArrayFromHex("93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae");


export function handleNameRegistered(event: NameRegisteredEvent): void {
    let label = uint256ToByteArray(event.params.id)
    let domain = new Domain(crypto.keccak256(concat(rootNode, label)).toHexString());
    domain.save();
}

export function handleNameRegisteredByController(event: ControllerNameRegisteredEvent): void {
    let domain = Domain.load(crypto.keccak256(concat(rootNode, event.params.label)).toHexString());

    if(domain == null) {
        domain = new Domain(crypto.keccak256(concat(rootNode, event.params.label)).toHexString());
    }

    if(domain.labelName !== event.params.name) {
      domain.labelName = event.params.name
      domain.name = event.params.name + '.eth'
      domain.save()
    }
}

export function handleNameTransferred(event: TransferEvent): void {
    let label = uint256ToByteArray(event.params.tokenId);
    let domain = Domain.load(crypto.keccak256(concat(rootNode, label)).toHexString());

    if(domain == null) {
        return;
    } 

    if(event.params.to.toHexString() == '0x0000000000000000000000000000000000000000') {
        let store =  Store.load(domain.store);
        
        if(store != null) {
            store.ensName = null;
            domain.store = null;
            store.save();
            domain.save();
        }
    }
}


