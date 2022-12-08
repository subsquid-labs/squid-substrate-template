import { UnknownVersionError } from '../../common/errors'
import { SenseEntitiesStorage, SensePropertiesStorage } from '../../types/generated/storage'
import { Entity, EntityProperty, PropertyType } from '../../types/generated/v63'
import { Block } from '../../types/generated/support'
import { Context } from '../../processor'


export async function getEntityStorageData(ctx: Context, block: Block, id: Uint8Array): Promise<Entity | undefined> {
    const storage = new SenseEntitiesStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV63) {
        return await storage.getAsV63(id)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getEntityPropertyStorageData(ctx: Context, block: Block, propertyType: PropertyType, accountId: Uint8Array): Promise<EntityProperty | undefined> {
    const storage = new SensePropertiesStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV63) {
        return await storage.getAsV63(propertyType, accountId)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}