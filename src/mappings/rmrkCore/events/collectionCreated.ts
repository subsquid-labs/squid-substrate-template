import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getCollectionCreatedData } from './getters'
import { getNftCollection } from '../../../common/db/getters'
import { storage } from '../../../storage'

import { StorageNotExistsWarn, ObjectExistsWarn } from '../../../common/errors'
import { NftCollection } from '../../../model/generated/nftCollection.model'
import { addressCodec } from '../../../common/tools'
import { upsertIdentity } from '../../../common/db/identity'


async function handleCollectionCreatedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const collectionId = getCollectionCreatedData(ctx, event)

    if (await getNftCollection(ctx.store, collectionId.toString())) {
        ctx.log.warn(ObjectExistsWarn(name, 'Collection', collectionId))
        return
    }
    const collectionData = await storage.rmrkCore.getCollectionStorageData(ctx, block.header, collectionId)
    if (!collectionData) {
        ctx.log.warn(StorageNotExistsWarn(name, 'Collection', collectionId.toString()))
        return
    }

    let issuer = addressCodec.encode(collectionData.issuer)
    let issuerIdentity = await upsertIdentity(ctx.store, issuer, null)

    let col = new NftCollection()
    col.id = collectionId.toString()
    col.issuer = issuerIdentity
    col.metadata = collectionData.metadata.toString()
    col.max = collectionData.max
    col.symbol = collectionData.symbol.toString()
    await ctx.store.save(col)
}

export { handleCollectionCreatedEvent }
