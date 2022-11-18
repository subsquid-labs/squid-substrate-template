import { EventHandlerContext } from '../../types/contexts'
import { getCampaignActivatedData } from './getters'

import { getCampaign } from '../../util/db/getters'
import { storage } from '../../../storage'

import { hashToHexString } from '../../util/helpers'
import { ObjectNotExistsWarn, StorageNotExistsWarn } from '../../../common/errors'


async function handleCampaignActivatedEvent(ctx: EventHandlerContext) {
	const eventData = getCampaignActivatedData(ctx)
	let campaignId = hashToHexString(eventData.campaignId)

	let campaign = await getCampaign(ctx.store, campaignId)
	if (!campaign) {
		ctx.log.warn(ObjectNotExistsWarn('Campaign', campaignId))
		return
	}
	const stateStorageData = await storage.control.getOrgStateStorageData(ctx, eventData.campaignId)
    if (!stateStorageData) {
		ctx.log.warn(StorageNotExistsWarn(ctx.event.name, campaignId))
		return
    }

	campaign.state = stateStorageData
	await ctx.store.save(campaign)
}

export { handleCampaignActivatedEvent }
