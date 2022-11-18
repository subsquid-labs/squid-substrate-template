import { UnknownVersionError } from '../../common/errors'
import { ControlOrgsStorage, ControlOrgStatesStorage } from '../../types/generated/storage'
import { Org, OrgState } from '../../types/generated/v63'
import { BlockContext } from '../../types/generated/support'


export async function getOrgStorageData(ctx: BlockContext, hash: Uint8Array): Promise<Org | undefined> {
    const storage = new ControlOrgsStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV63) {
        return await storage.getAsV63(hash)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getOrgStateStorageData(ctx: BlockContext, hash: Uint8Array): Promise<OrgState | undefined> {
    const storage = new ControlOrgStatesStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV63) {
        return await storage.getAsV63(hash)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}
