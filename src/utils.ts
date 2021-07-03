import {  BigInt, ByteArray} from '@graphprotocol/graph-ts'

// Helper for concatenating two byte arrays
export  function concat(a: ByteArray, b: ByteArray): ByteArray {
    let out = new Uint8Array(a.length + b.length)
    for (let i = 0; i < a.length; i++) {
      out[i] = a[i]
    }
    for (let j = 0; j < b.length; j++) {
      out[a.length + j] = b[j]
    }
    return out as ByteArray
}

export function byteArrayFromHex(s: string): ByteArray {
    if(s.length % 2 !== 0) {
      throw new TypeError("Hex string must have an even number of characters")
    }
    let out = new Uint8Array(s.length / 2)
    for(var i = 0; i < s.length; i += 2) {
      out[i / 2] = parseInt(s.substring(i, i + 2), 16) as u32
    }
    return out as ByteArray;
}

export function uint256ToByteArray(i: BigInt): ByteArray {
    let hex = i.toHex().slice(2).padStart(64, '0')
    return byteArrayFromHex(hex)
}

export function isDuplicateAddress(from: string, to: string): boolean {
  return from.startsWith(to);
}