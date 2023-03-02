import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getCollectionMaxSupplySetData } from './getters'
import { getNftCollection } from '../../../common/db/getters'

import { ObjectNotExistsWarn } from '../../../common/errors'


async function handleCollectionMaxSupplySetEvent(ctx: Context, block: Block, event: Event, name: string) {
    const [collectionId, maxSupply] = getCollectionMaxSupplySetData(ctx, event)

    let collection = await getNftCollection(ctx.store, collectionId.toString())
    if (!collection) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Collection', collectionId))
        return
    }

    collection.max = maxSupply

    await ctx.store.save(collection)
}

export { handleCollectionMaxSupplySetEvent }
