import { Transfer } from "../generated/aUSDC/aUSDC"
import { Store } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
    /*
    let address = byteArrayFromHex("0xbcca60bb61934080951369a648fb03df4f96263c")
    let store_address = ethereum.Value.fromAddress(address);
    let call = new ethereum.SmartContractCall("AToken", address, "balanceOf", "0x70a08231", [store_address])
    let balance = ethereum.call(call);
    */
   
    let toStore = Store.load(event.params.to.toHexString());
    let fromStore = Store.load(event.params.from.toHexString());

    if(toStore != null && fromStore == null) {
        toStore.availableAUSDC = toStore.availableAUSDC.plus(event.params.value);
        toStore.save();
    }
}