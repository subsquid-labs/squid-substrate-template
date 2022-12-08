import { Pallet } from '../types/pallet';
import { handleMemberAddedEvent } from './events/memberAdded';
import { handleOrgCreatedEvent } from './events/orgCreated';
import { handleMemberRemovedEvent } from './events/memberRemoved';
import { handleOrgUpdatedEvent } from './events/orgUpdated';

export default {
	name: 'Control',
	callHandlers: {},
	eventHandlers: {
		'OrgCreated': handleOrgCreatedEvent,
		'OrgUpdated': handleOrgUpdatedEvent,
		'MemberAdded': handleMemberAddedEvent,
		'MemberRemoved': handleMemberRemovedEvent,
	},
} as Pallet
