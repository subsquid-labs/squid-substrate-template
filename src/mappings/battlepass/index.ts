import { Pallet } from '../types/pallet'
import { handleBattlepassCreatedEvent } from './events/battlepassCreated'
import { handleBattlepassClaimedEvent } from './events/battlepassClaimed'
import { handleBattlepassEvent } from './events/battlepass'

export default {
	name: 'Battlepass',
	callHandlers: {},
	eventHandlers: {
		'BattlepassCreated': handleBattlepassCreatedEvent,
		'BattlepassClaimed': handleBattlepassClaimedEvent,
		'BattlepassActivated': handleBattlepassEvent,
		'BattlepassEnded': handleBattlepassEvent,
	},
} as Pallet
