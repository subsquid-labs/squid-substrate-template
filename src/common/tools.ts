/* eslint-disable @typescript-eslint/no-explicit-any */
import * as ss58 from '@subsquid/ss58'
import { CurrencyId } from '../types/generated/v63'
import { decodeHex } from '@subsquid/util-internal-hex'
import config from '../config'

export const ss58codec = ss58.codec(config.prefix)

export function getOriginAccountId(origin: any) {
    // eslint-disable-next-line sonarjs/no-small-switch
    if (!origin) return undefined
    switch (origin.__kind) {
        case 'system':
            // eslint-disable-next-line sonarjs/no-nested-switch, sonarjs/no-small-switch
            switch (origin.value.__kind) {
                case 'Signed':
                    return ss58codec.encode(decodeHex(origin.value.value))
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

export function encodeId(id: Uint8Array) {
    return ss58.codec(config.prefix).encode(id)
}
