import { OrgType, AccessModel, FeeModel} from '../../../types/generated/v63'
import { Event } from '../../../types/generated/support'
import { Context } from '../../../processor'
import {
    BattlepassBattlepassCreatedEvent,
    BattlepassBattlepassClaimedEvent,
    BattlepassBattlepassClosedEvent
} from '../../../types/generated/events'
import { UnknownVersionError } from '../../../common/errors'


export function getBattlepassCreatedData(ctx: Context, ev: Event): Uint8Array {
    const event = new BattlepassBattlepassCreatedEvent(ctx, ev)
    if (event.isV64) {
        const { orgId, battlepassId, season } = event.asV64
        return battlepassId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBattlepassClaimedData(ctx: Context, ev: Event): [Uint8Array, Uint8Array] {
    const event = new BattlepassBattlepassClaimedEvent(ctx, ev)
    if (event.isV64) {
        const { claimer, orgId, battlepassId } = event.asV64
        return [ claimer, battlepassId ]
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBattlepassClosedData(ctx: Context, ev: Event): Uint8Array {
    const event = new BattlepassBattlepassClosedEvent(ctx, ev)
    if (event.isV64) {
        const { closedBy, orgId, battlepassId } = event.asV64
        return battlepassId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}