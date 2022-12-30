import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getNftMintedData } from './getters'
import { getNftCollection } from '../../../common/db/getters'
import { storage } from '../../../storage'

import { StorageNotExistsWarn, ObjectNotExistsWarn } from '../../../common/errors'
import { getNftOwnerValue } from '../../../common/tools'
import { Nft } from '../../../model/generated/nft.model'


async function handleNftMintedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const [ owner, collectionId, nftId ] = getNftMintedData(ctx, event)

    let collection = await getNftCollection(ctx.store, collectionId.toString())
    if (!collection) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Collection', collectionId))
        return
    }
    const nftData = await storage.rmrkCore.getNftStorageData(ctx, block.header, nftId, collectionId)
    if (!nftData) {
        ctx.log.warn(StorageNotExistsWarn(name, 'Nft', collectionId.toString() + ' - ' + nftId.toString()))
        return
    }

    let nft = new Nft()
    nft.id = nftId.toString()
    nft.owner = getNftOwnerValue(owner)
    nft.metadata = nftData.metadata.toString()
    nft.equipped = nftData.equipped
    nft.pending = nftData.pending
    nft.transferable = nftData.transferable
    nft.collection = collection

    await ctx.store.save(nft)
}

export { handleNftMintedEvent }
