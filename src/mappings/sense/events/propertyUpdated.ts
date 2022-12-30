import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getPropertyUpdatedData } from './getters'
import { getSenseEntity } from '../../../common/db/getters'
import { storage } from '../../../storage'

import { addressCodec } from '../../../common/tools'
import { ObjectNotExistsWarn, StorageNotExistsWarn } from '../../../common/errors'


async function handlePropertyUpdatedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const eventData = getPropertyUpdatedData(ctx, event)
    let accountId = addressCodec.encode(eventData.accountId)

    let entity = await getSenseEntity(ctx.store, accountId)
    if (!entity) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'SenseEntity', accountId))
        return
    }

    // TODO: update Event with value instead of looking into a storage
    const storageData = await storage.sense.getEntityPropertyStorageData(ctx, block.header, eventData.propertyType, eventData.accountId)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(name, 'EntityProperty', accountId))
        return
    }

    if (eventData.propertyType.__kind == 'Experience') {
        entity.experience = storageData.value
    } else if (eventData.propertyType.__kind == 'Trust') {
        entity.trust = storageData.value
    } else if (eventData.propertyType.__kind == 'Reputation') {
        entity.reputation = storageData.value
    }

    await ctx.store.save(entity)
}

export { handlePropertyUpdatedEvent };
