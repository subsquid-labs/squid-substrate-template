import { Pallet } from '../types/pallet';
import { handleEntityCreatedEvent } from './events/entityCreated';
import { handlePropertyUpdatedEvent } from './events/propertyUpdated';

export default {
	name: 'Sense',
	extrinsicHandlers: {},
	eventHandlers: {
		'entityCreated': handleEntityCreatedEvent,
		'propertyUpdated': handlePropertyUpdatedEvent,
	}
} as Pallet;
