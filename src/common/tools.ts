/* eslint-disable @typescript-eslint/no-explicit-any */
import * as ss58 from '@subsquid/ss58'
import { AccountIdOrCollectionNftTuple, CurrencyId } from '../types/generated/v63'
import { decodeHex } from '@subsquid/util-internal-hex'
import config from '../config'

export const addressCodec = ss58.codec(config.prefix)

export function getOriginAccountId(origin: any) {
    // eslint-disable-next-line sonarjs/no-small-switch
    if (!origin) return undefined
    switch (origin.__kind) {
        case 'system':
            // eslint-disable-next-line sonarjs/no-nested-switch, sonarjs/no-small-switch
            switch (origin.value.__kind) {
                case 'Signed':
                    return addressCodec.encode(decodeHex(origin.value.value))
                default:
                    return undefined
            }
        default:
            return undefined
    }
}

export function getCurrencyValue(currency: CurrencyId) {
    if (currency.__kind == 'Token') {
        return currency.value.__kind
    } else {
        return currency.value.toString()
    }
}

export function getNftOwnerValue(owner: AccountIdOrCollectionNftTuple) {
    // The owner of the NFT, can be either an Account or a tuple (CollectionId, NftId)
    if (owner.__kind == 'CollectionAndNftTuple') {
        return owner.value.toString()
    } else {
        return addressCodec.encode(owner.value)
    }
}

export function encodeId(id: Uint8Array) {
    return ss58.codec(config.prefix).encode(id)
}

export const arrayToHexString = (hash: Uint8Array) => `0x${Buffer.from(hash).toString('hex')}`

export const slugify = (text: string) => {
    return text
      .toString()                   // Cast to string (optional)
      .normalize('NFKD')            // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
      .toLowerCase()                // Convert the string to lowercase letters
      .trim()                       // Remove whitespace from both sides of a string (optional)
      .replace(/\s+/g, '-')         // Replace spaces with -
      .replace(/[^\w\-]+/g, '')     // Remove all non-word chars
      .replace(/\_/g,'-')           // Replace _ with -
      .replace(/\-\-+/g, '-')       // Replace multiple - with single -
      .replace(/\-$/g, '');         // Remove trailing -
  }