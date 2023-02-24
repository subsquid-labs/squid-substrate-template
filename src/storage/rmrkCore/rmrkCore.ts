import { UnknownVersionError } from '../../common/errors'
import {
    RmrkCoreCollectionsStorage,
    RmrkCoreNftsStorage
} from '../../types/generated/storage'
import { Block } from '../../types/generated/support'
import { Context } from '../../processor'
import { CollectionInfo } from '../../types/generated/v68'

export async function getCollectionStorageData(ctx: Context, block: Block, id: number): Promise<CollectionInfo | undefined> {
    const storage = new RmrkCoreCollectionsStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV68) {
        return await storage.getAsV68(id)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getNftStorageData(ctx: Context, block: Block, nftId: number, collectionId: number): 
    Promise<[Uint8Array, boolean, boolean] | undefined> {
    const storage = new RmrkCoreNftsStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV63) {
        let nft = await storage.getAsV63(collectionId, nftId)
        if (!nft) return undefined
        return [nft.metadata, nft.pending, nft.transferable]
    } else if (storage.isV68) {
        let nft = await storage.getAsV68(collectionId, nftId)
        if (!nft) return undefined
        return [nft.metadata, nft.pending, nft.transferable]
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}
