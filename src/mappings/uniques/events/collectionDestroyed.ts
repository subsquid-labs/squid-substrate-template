import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getCollectionDestroyedData } from './getters'
import { getNftCollection, getCollectionNfts, getBattlepassNfts } from '../../../common/db/getters'

import { ObjectNotExistsWarn } from '../../../common/errors'


async function handleCollectionDestroyedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const [ collectionId ] = getCollectionDestroyedData(ctx, event)

    let collection = await getNftCollection(ctx.store, collectionId.toString())
    if (!collection) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Collection', collectionId))
        return
    }
    
    let bp_nfts = await getBattlepassNfts(ctx.store, collectionId.toString())
    for (var bp_nft of bp_nfts) {
        ctx.store.remove(bp_nft);
    }

    let nfts = await getCollectionNfts(ctx.store, collectionId.toString())
    for (var nft of nfts) {
        ctx.store.remove(nft);
    }

    ctx.store.remove(collection)
}

export { handleCollectionDestroyedEvent }
