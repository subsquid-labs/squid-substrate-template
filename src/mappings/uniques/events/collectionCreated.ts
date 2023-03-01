import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getCollectionCreatedData } from './getters'
import { getNftCollection } from '../../../common/db/getters'

import { ObjectExistsWarn } from '../../../common/errors'
import { NftCollection } from '../../../model/generated/nftCollection.model'
import { addressCodec } from '../../../common/tools'
import { upsertIdentity } from '../../../common/db/identity'


async function handleCollectionCreatedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const [ owner, collectionId ] = getCollectionCreatedData(ctx, event)

    if (await getNftCollection(ctx.store, collectionId.toString())) {
        ctx.log.warn(ObjectExistsWarn(name, 'Collection', collectionId))
        return
    }

    let ownerString = addressCodec.encode(owner)
    let ownerIdentity = await upsertIdentity(ctx.store, ownerString, null)

    let col = new NftCollection()
    col.id = collectionId.toString()
    col.owner = ownerIdentity

    await ctx.store.save(col)
}

export { handleCollectionCreatedEvent }
