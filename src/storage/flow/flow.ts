import { UnknownVersionError } from '../../common/errors'
import { FlowCampaignOfStorage, FlowCampaignStatesStorage } from '../../types/generated/storage'
import { Campaign, CampaignState } from '../../types/generated/v68'
import { Block } from '../../types/generated/support'
import { Context } from '../../processor'


export async function getCampaignStorageData(ctx: Context, block: Block, id: Uint8Array): Promise<Campaign | undefined> {
    const storage = new FlowCampaignOfStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV68) {
        return await storage.getAsV68(id)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getCampaignStateStorageData(ctx: Context, block: Block, id: Uint8Array): Promise<CampaignState | undefined> {
    const storage = new FlowCampaignStatesStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV68) {
        return await storage.getAsV68(id)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}