import { Pallet } from '../types/pallet'
import { handleBattlepassCreatedEvent } from './events/battlepassCreated'
import { handleBattlepassClaimedEvent } from './events/battlepassClaimed'
import { handleBattlepassClosedEvent } from './events/battlepassClosed'

export default {
	name: 'Battlepass',
	callHandlers: {},
	eventHandlers: {
		'BattlepassCreated': handleBattlepassCreatedEvent,
		'BattlepassClaimed': handleBattlepassClaimedEvent,
		'BattlepassClosed': handleBattlepassClosedEvent,
	},
} as Pallet
