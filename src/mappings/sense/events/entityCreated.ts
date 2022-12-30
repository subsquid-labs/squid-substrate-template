import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getEntityCreatedData } from './getters'
import { getSenseEntity } from '../../../common/db/getters'
import { storage } from '../../../storage'
import { SenseEntity } from '../../../model'
import { upsertIdentity } from '../../../common/db/identity'

import { addressCodec } from '../../../common/tools'
import { ObjectExistsWarn, StorageNotExistsWarn } from '../../../common/errors'


async function handleEntityCreatedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const eventData = getEntityCreatedData(ctx, event)
    let accountId = addressCodec.encode(eventData.accountId)

    if (await getSenseEntity(ctx.store, accountId)) {
        ctx.log.warn(ObjectExistsWarn(name, 'SenseEntity', accountId))
        return
    }

    const storageData = await storage.sense.getEntityStorageData(ctx, block.header, eventData.accountId)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(name, 'SenseEntity', accountId))
        return
    }

    let entity = new SenseEntity()
    entity.id = accountId
    entity.identity = await upsertIdentity(ctx.store, accountId, null)
    entity.experience = BigInt(0)
    entity.trust = BigInt(0)
    entity.reputation = BigInt(0)
    entity.createdAtBlock = storageData.created
    entity.updatedAtBlock = storageData.mutated

    // TODO: Check if cid is valid, fetch metadata from ipfs
    // let metadata = await fetchSenseEntityMetadata(storageData.cid.toString(), accountId)
    entity.cid = storageData.cid.toString()

    await ctx.store.save(entity)
}

export { handleEntityCreatedEvent };
