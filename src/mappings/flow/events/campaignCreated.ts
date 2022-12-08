import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getCampaignCreatedData } from './getters'
import { getOrg, getCampaign } from '../../util/db/getters'
import { upsertIdentity } from '../../util/db/identity'
import { Campaign } from '../../../model'
import { fetchCampaignMetadata } from '../../util/ipfs/getters'
import { storage } from '../../../storage'

import { arrayToHexString } from '../../util/helpers'
import { ObjectExistsWarn, ObjectNotExistsWarn, StorageNotExistsWarn } from '../../../common/errors'

async function handleCampaignCreatedEvent(ctx: Context, block: Block, event: Event, name: string) {
	const eventData = getCampaignCreatedData(ctx, event)
	let campaignId = arrayToHexString(eventData.campaignId)

	if (await getCampaign(ctx.store, campaignId)) {
		ctx.log.warn(ObjectExistsWarn(name, 'Campaign', campaignId))
		return
	}

	const storageData = await storage.flow.getCampaignStorageData(ctx, block.header, eventData.campaignId)
    if (!storageData) {
		ctx.log.warn(StorageNotExistsWarn(name, 'Campaign', campaignId))
		return
    }

	let orgId = arrayToHexString(storageData.orgId)
	let org = await getOrg(ctx.store, orgId)
	if (!org) {
		ctx.log.warn(ObjectNotExistsWarn(name, 'Org', orgId))
		return
	}

	const stateStorageData = await storage.control.getOrgStateStorageData(ctx, block.header, eventData.campaignId)
    if (!stateStorageData) {
		ctx.log.warn(StorageNotExistsWarn(name, 'OrgState', campaignId))
		return
    }

	let creator = arrayToHexString(storageData.owner)
	let admin = arrayToHexString(storageData.admin)
	let start = storageData.start

	let campaign = new Campaign();
	campaign.id = campaignId;
	campaign.organization = org;
	campaign.creator = creator;
	campaign.creatorIdentity = await upsertIdentity(ctx.store, creator, null);
	campaign.admin = admin;
	campaign.adminIdentity = await upsertIdentity(ctx.store, admin, null);
	campaign.target = storageData.cap;
	campaign.deposit = storageData.deposit;
	campaign.start = start
	campaign.expiry = storageData.expiry;
	campaign.protocol = storageData.protocol.__kind;
	campaign.governance = storageData.governance.__kind;
	campaign.tokenSymbol = storageData.tokenSymbol?.toString();
	campaign.tokenName = storageData.tokenName?.toString();
	campaign.state = stateStorageData.__kind
	campaign.createdAtBlock = storageData.created
	campaign.cid = storageData.cid.toString()

	// Fetch metadata from ipfs
	let metadata = await fetchCampaignMetadata(campaign.cid, orgId);
	campaign.name = metadata?.name ?? '';
	campaign.email = metadata?.email ?? '';
	campaign.title = metadata?.title ?? '';
	campaign.description = metadata?.description ?? '';
	campaign.markdown = metadata?.markdown ?? '';
	campaign.logo = metadata?.logo ?? '';
	campaign.header = metadata?.header ?? '';

	await ctx.store.save(campaign);
}

export { handleCampaignCreatedEvent };
