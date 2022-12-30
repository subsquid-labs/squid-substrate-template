import { UnknownVersionError } from '../../common/errors'
import {
    RmrkCoreCollectionsStorage,
    RmrkCoreNftsStorage
} from '../../types/generated/storage'
import { Block } from '../../types/generated/support'
import { Context } from '../../processor'
import { CollectionInfo, NftInfo } from '../../types/generated/v63'

export async function getCollectionStorageData(ctx: Context, block: Block, id: number): Promise<CollectionInfo | undefined> {
    const storage = new RmrkCoreCollectionsStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV63) {
        return await storage.getAsV63(id)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getNftStorageData(ctx: Context, block: Block, nftId: number, collectionId: number): Promise<NftInfo | undefined> {
    const storage = new RmrkCoreNftsStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV63) {
        return await storage.getAsV63(collectionId, nftId)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}
