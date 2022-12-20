import { Pallet } from '../types/pallet';
import { handleEntityCreatedEvent } from './events/entityCreated';
import { handlePropertyUpdatedEvent } from './events/propertyUpdated';

export default {
	name: 'Sense',
	callHandlers: {},
	eventHandlers: {
		'EntityCreated': handleEntityCreatedEvent,
		'PropertyUpdated': handlePropertyUpdatedEvent,
	}
} as Pallet;