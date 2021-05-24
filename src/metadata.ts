import { MetaDataUpdated } from "../generated/Metadata/Metadata"
import { Store, Domain } from "../generated/schema"

export function handleMetaDataUpdated(event: MetaDataUpdated): void { 
    let store = Store.load(event.params.store.toHexString());
    let metaData = event.params.metaData;
    let domain = Domain.load(metaData[0]);
  
    if(domain != null) {
      if(domain.store == store.id) {
        store.ensName = domain.id;
        store.name = domain.name;
        store.isVerified = domain.isVerified;
      }
    }
    else if(metaData[0] == "") {
      store.ensName = null;
      store.name = null;
      store.isVerified = false;
    }

    store.country = metaData[1];
    store.city = metaData[2];
    store.street = metaData[3];
    store.website = metaData[4];
    store.type = metaData[5];
    store.zipcode = metaData[6];
    store.save();
  }