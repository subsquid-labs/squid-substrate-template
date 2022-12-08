import { Pallet } from '../types/pallet';
import { handleCampaignContributedEvent } from './events/campaignContributed';
import { handleCampaignCreatedEvent } from './events/campaignCreated';
import { handleCampaignEvent } from './events/campaign';

export default {
	name: 'Flow',
	callHandlers: {},
	eventHandlers: {
		'Created': handleCampaignCreatedEvent,
		'Contributed': handleCampaignContributedEvent,
		'Activated': handleCampaignEvent,
		'Succeeded': handleCampaignEvent,
		'Failed': handleCampaignEvent
	}
} as Pallet
