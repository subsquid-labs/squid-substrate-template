import { Pallet } from '../types/pallet';
import { handleCampaignContributedEvent } from './events/campaignContributed';
import { handleCampaignCreatedEvent } from './events/campaignCreated';
import { handleCampaignFailedEvent } from './events/campaignFailed';
import { handleCampaignActivatedEvent } from './events/campaignActivated';
import { handleCampaignSucceededEvent } from './events/campaignSucceeded';

export default {
	name: 'Flow',
	extrinsicHandlers: {},
	eventHandlers: {
		'Created': handleCampaignCreatedEvent,
		'Activated': handleCampaignActivatedEvent,
		'Contributed': handleCampaignContributedEvent,
		'Succeeded': handleCampaignSucceededEvent,
		'Failed': handleCampaignFailedEvent,
	}
} as Pallet;
