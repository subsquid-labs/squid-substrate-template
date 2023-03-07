import { Event } from '../../../types/generated/support'
import { Context } from '../../../processor'
import {
    UniquesCreatedEvent,
    UniquesIssuedEvent,
    UniquesCollectionMetadataSetEvent,
    UniquesMetadataSetEvent,
    UniquesCollectionMaxSupplySetEvent,
    UniquesDestroyedEvent,
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

export function getCollectionMetadataSetData(ctx: Context, ev: Event): [number, Uint8Array, boolean] {
    const event = new UniquesCollectionMetadataSetEvent(ctx, ev)
    if (event.isV70) {
        const { collection, data, isFrozen } = event.asV70
        return [ collection, data, isFrozen ]
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getNftMetadataSetData(ctx: Context, ev: Event): [number, number, Uint8Array, boolean] {
    const event = new UniquesMetadataSetEvent(ctx, ev)
    if (event.isV70) {
        const { collection, item, data, isFrozen } = event.asV70
        return [ collection, item, data, isFrozen ]
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getCollectionMaxSupplySetData(ctx: Context, ev: Event): [number, number] {
    const event = new UniquesCollectionMaxSupplySetEvent(ctx, ev)
    if (event.isV70) {
        const { collection, maxSupply } = event.asV70
        return [ collection, maxSupply ]
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getCollectionDestroyedData(ctx: Context, ev: Event): [number] {
    const event = new UniquesDestroyedEvent(ctx, ev)
    if (event.isV70) {
        const { collection } = event.asV70
        return [ collection ]
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}