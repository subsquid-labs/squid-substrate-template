import { EventHandlerContext } from '../../types/contexts'
import { getCampaignCreatedData } from './getters'

import { getOrg, getCampaign } from '../../util/db/getters'
import { upsertIdentity } from '../../util/db/identity'
import { Campaign } from '../../../model'
import { upsertCampaignMetadata } from '../../util/ipfs/metadata'
import { fetchCampaignMetadata } from '../../util/ipfs/getters'
import { storage } from '../../../storage'

import { hashToHexString } from '../../util/helpers'
import { ObjectExistsWarn, ObjectNotExistsWarn, StorageNotExistsWarn } from '../../../common/errors'

async function handleCampaignCreatedEvent(ctx: EventHandlerContext) {
	const eventData = getCampaignCreatedData(ctx)
	let campaignId = hashToHexString(eventData.campaignId)

	if (await getCampaign(ctx.store, campaignId)) {
		ctx.log.warn(ObjectExistsWarn('Campaign', campaignId))
		return
	}

	const storageData = await storage.control.getCampaignStorageData(ctx, eventData.campaignId)
    if (!storageData) {
		ctx.log.warn(StorageNotExistsWarn(ctx.event.name, campaignId))
		return
    }

	let orgId = hashToHexString(storageData.orgId)
	let org = await getOrg(ctx.store, orgId)
	if (!org) {
		ctx.log.warn(ObjectNotExistsWarn('Org', orgId))
		return
	}

	const stateStorageData = await storage.control.getOrgStateStorageData(ctx, eventData.campaignId)
    if (!stateStorageData) {
		ctx.log.warn(StorageNotExistsWarn(ctx.event.name, campaignId))
		return
    }

	let creator = storageData.creator
	let start = storageData.start

	let campaign = new Campaign();
	campaign.id = campaignId;
	campaign.organization = org;
	campaign.creator = creator;
	campaign.creatorIdentity = await upsertIdentity(ctx.store, creator, null);
	campaign.admin = storageData.adminId;
	campaign.adminIdentity = await upsertIdentity(ctx.store, storageData.adminId, null);
	campaign.target = storageData.target;
	campaign.deposit = storageData.deposit;
	campaign.start = start
	campaign.expiry = storageData.expiry;
	campaign.protocol = storageData.protocol.__kind;
	campaign.governance = storageData.governance.__kind;
	campaign.tokenSymbol = storageData.tokenSymbol?.toString();
	campaign.tokenName = storageData.tokenName?.toString();
	campaign.state = stateStorageData
	campaign.createdAtBlock = storageData.created

	// Check if cid is valid, fetch metadata from ipfs
	let metadata = await fetchCampaignMetadata(storageData.cid.toString(), orgId);
	if (metadata) {
		campaign.metadata = await upsertCampaignMetadata(ctx.store, storageData.cid.toString(), metadata);
	}

	await ctx.store.save(campaign);
}

export { handleCampaignCreatedEvent };
