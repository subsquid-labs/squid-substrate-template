import { UnknownVersionError } from '../../common/errors'
import {
    ControlOrgsStorage,
    ControlOrgStatesStorage,
    ControlMemberStatesStorage
} from '../../types/generated/storage'
import { MemberState, Org, OrgState } from '../../types/generated/v70'
import { Block } from '../../types/generated/support'
import { Context } from '../../processor'

export async function getOrgStorageData(ctx: Context, block: Block, id: Uint8Array): Promise<Org | undefined> {
    const storage = new ControlOrgsStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV70) {
        return await storage.getAsV70(id)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getOrgStateStorageData(ctx: Context, block: Block, id: Uint8Array): Promise<OrgState | undefined> {
    const storage = new ControlOrgStatesStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV70) {
        return await storage.getAsV70(id)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getMemberStateStorageData(ctx: Context, block: Block, orgId: Uint8Array, accountId: Uint8Array): Promise<MemberState | undefined> {
    const storage = new ControlMemberStatesStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV70) {
        return await storage.getAsV70(orgId, accountId)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}
