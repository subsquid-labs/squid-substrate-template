import { Pallet } from '../types/pallet';
import { handleIdentitySetExtrinsic } from './extrinsics/set_identity';
import { handleIdentityClearedEvent } from './events/identityCleared';

export default {
	name: 'Identity',
	callHandlers: {
		'set_identity': handleIdentitySetExtrinsic
	},
	eventHandlers: {
		'IdentityCleared': handleIdentityClearedEvent
	}
} as Pallet;
