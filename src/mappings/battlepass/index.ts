import { Pallet } from '..'
import { handleBattlepassCreatedEvent } from './events/battlepassCreated'
import { handleBattlepassClaimedEvent } from './events/battlepassClaimed'
import { handleBattlepassUpdatedEvent } from './events/battlepassUpdated'
import { handleBattlepassEvent } from './events/battlepass'

export default {
    name: 'Battlepass',
    callHandlers: {},
    eventHandlers: {
        'BattlepassCreated': handleBattlepassCreatedEvent,
        'BattlepassClaimed': handleBattlepassClaimedEvent,
        'BattlepassUpdated': handleBattlepassUpdatedEvent,
        'BattlepassActivated': handleBattlepassEvent,
        'BattlepassEnded': handleBattlepassEvent,
    },
} as Pallet
