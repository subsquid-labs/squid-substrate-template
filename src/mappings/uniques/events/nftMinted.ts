import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getNftMintedData } from './getters'
import { getNftCollection } from '../../../common/db/getters'

import { ObjectNotExistsWarn } from '../../../common/errors'
import { addressCodec } from '../../../common/tools'
import { Nft } from '../../../model/generated/nft.model'
import { upsertIdentity } from '../../../common/db/identity'


async function handleNftMintedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const [ owner, collectionId, nftId ] = getNftMintedData(ctx, event)

    let collection = await getNftCollection(ctx.store, collectionId.toString())
    if (!collection) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Collection', collectionId))
        return
    }

    let ownerString = addressCodec.encode(owner)
    let ownerIdentity = await upsertIdentity(ctx.store, ownerString, null)

    let nft = new Nft()
    nft.id = nftId.toString()
    nft.owner = ownerIdentity
    nft.collection = collection

    await ctx.store.save(nft)
}

export { handleNftMintedEvent }
