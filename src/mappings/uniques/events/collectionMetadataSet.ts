import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getCollectionMetadataSetData } from './getters'
import { getNftCollection } from '../../../common/db/getters'

import { ObjectNotExistsWarn } from '../../../common/errors'


async function handleCollectionMetadataSetEvent(ctx: Context, block: Block, event: Event, name: string) {
    const [collectionId, metadata, isFrozen] = getCollectionMetadataSetData(ctx, event)

    let collection = await getNftCollection(ctx.store, collectionId.toString())
    if (!collection) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Collection', collectionId))
        return
    }

    collection.metadata = metadata.toString()
    collection.metadataIsFrozen = isFrozen

    await ctx.store.save(collection)
}

export { handleCollectionMetadataSetEvent }
