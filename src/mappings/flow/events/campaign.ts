import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import {
    getCampaignActivatedData,
    getCampaignSucceededData,
    getCampaignFailedData
} from './getters'
import { getCampaign } from '../../../common/db/getters'
import { storage } from '../../../storage'

import { arrayToHexString } from '../../../common/tools'
import { ObjectNotExistsWarn, StorageNotExistsWarn } from '../../../common/errors'


const getData: Record<string, (context: any, event: any) => Uint8Array > = {
    'Flow.Activated': getCampaignActivatedData,
    'Flow.Succeeded': getCampaignSucceededData,
    'Flow.Failed': getCampaignFailedData,
}

async function handleCampaignEvent(ctx: Context, block: Block, event: Event, name: string) {
    if (!(name in getData)) {
        ctx.log.warn(`Unknown Flow event: ${name}`)
        return
    }
    let campaignIdArray = getData[name](ctx, event)
    let campaignId = arrayToHexString(campaignIdArray)

    let campaign = await getCampaign(ctx.store, campaignId)
    if (!campaign) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Campaign', campaignId))
        return
    }
    const stateStorageData = await storage.control.getOrgStateStorageData(ctx, block.header, campaignIdArray)
    if (!stateStorageData) {
        ctx.log.warn(StorageNotExistsWarn(name, 'OrgState', campaignId))
        return
    }

    campaign.state = stateStorageData.__kind
    await ctx.store.save(campaign)
}

export { handleCampaignEvent }
