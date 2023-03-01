import { Event } from '../../../types/generated/support'
import { Context } from '../../../processor'
import {
    UniquesCreatedEvent,
    UniquesIssuedEvent,
} from '../../../types/generated/events'
import { UnknownVersionError } from '../../../common/errors'


export function getNftMintedData(ctx: Context, ev: Event): [Uint8Array, number, number] {
    const event = new UniquesIssuedEvent(ctx, ev)
    if (event.isV70) {
        const { owner, collection, item } = event.asV70
        return [ owner, collection, item ]
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getCollectionCreatedData(ctx: Context, ev: Event): [Uint8Array, number] {
    const event = new UniquesCreatedEvent(ctx, ev)
    if (event.isV70) {
        const { owner, collection } = event.asV70
        return [ owner, collection ]
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
