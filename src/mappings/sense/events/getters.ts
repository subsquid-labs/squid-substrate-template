import { Event } from '../../../types/generated/support'
import { Context } from '../../../processor'
import {
    SenseEntityCreatedEvent,
    SensePropertyUpdatedEvent
} from '../../../types/generated/events'
import { PropertyType } from '../../../types/generated/v63'
import { UnknownVersionError } from '../../../common/errors'


interface EntityCreatedData {
    accountId: Uint8Array,
    blockNumber: number
}

interface PropertyUpdatedData {
    propertyType: PropertyType,
    accountId: Uint8Array,
    blockNumber: number
}

export function getEntityCreatedData(ctx: Context, ev: Event): EntityCreatedData {
    const event = new SenseEntityCreatedEvent(ctx, ev)
    if (event.isV63) {
        const { accountId, blockNumber } = event.asV63
        return { accountId, blockNumber }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getPropertyUpdatedData(ctx: Context, ev: Event): PropertyUpdatedData {
    const event = new SensePropertyUpdatedEvent(ctx, ev)
    if (event.isV63) {
        const { propertyType, accountId, blockNumber } = event.asV63
        return { propertyType, accountId, blockNumber }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}