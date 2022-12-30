import { Event } from '../../../types/generated/support'
import { Context } from '../../../processor'
import {
    RmrkCoreNftMintedEvent,
    RmrkCoreCollectionCreatedEvent,
} from '../../../types/generated/events'
import { UnknownVersionError } from '../../../common/errors'
import { AccountIdOrCollectionNftTuple } from '../../../types/generated/v63'


export function getNftMintedData(ctx: Context, ev: Event): [AccountIdOrCollectionNftTuple, number, number] {
    const event = new RmrkCoreNftMintedEvent(ctx, ev)
    if (event.isV63) {
        const { owner, collectionId, nftId } = event.asV63
        return [ owner, collectionId, nftId ]
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getCollectionCreatedData(ctx: Context, ev: Event): number {
    const event = new RmrkCoreCollectionCreatedEvent(ctx, ev)
    if (event.isV63) {
        const { issuer, collectionId } = event.asV63
        return collectionId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
