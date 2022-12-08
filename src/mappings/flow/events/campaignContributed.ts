import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getCampaignContributedData } from './getters'
import { CampaignContributor } from '../../../model'
import { upsertIdentity } from '../../util/db/identity'
import { getCampaign, getCampaignContributor } from '../../util/db/getters'

import { addressCodec, arrayToHexString } from '../../util/helpers'
import { ObjectNotExistsWarn } from '../../../common/errors'


async function handleCampaignContributedEvent(ctx: Context, block: Block, event: Event, name: string) {
	const eventData = getCampaignContributedData(ctx, event)
	let campaignId = arrayToHexString(eventData.campaignId);
	let contributor = addressCodec.encode(eventData.sender);

	let campaign = await getCampaign(ctx.store, campaignId);
	if (!campaign) {
		ctx.log.warn(ObjectNotExistsWarn(name, 'Campaign', campaignId))
		return
	};

	let campaignContributor = await getCampaignContributor(ctx.store, campaignId, contributor);
	if (!campaignContributor) {
		campaignContributor = new CampaignContributor();

		campaignContributor.id = `${campaignId}-${contributor}`.toLowerCase();
		campaignContributor.campaign = campaign;
		campaignContributor.address = contributor;
		campaignContributor.identity = await upsertIdentity(ctx.store, contributor, null);
		campaignContributor.contributed = eventData.contribution;
	} else {
		campaignContributor.contributed += eventData.contribution;
	}

	await ctx.store.save(campaignContributor);
}

export { handleCampaignContributedEvent };
