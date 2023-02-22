import { Event } from '../../../types/generated/support'
import { Context } from '../../../processor'
import {
    BattlepassBattlepassCreatedEvent,
    BattlepassBattlepassClaimedEvent,
    BattlepassBattlepassActivatedEvent,
    BattlepassBattlepassEndedEvent
} from '../../../types/generated/events'
import { UnknownVersionError } from '../../../common/errors'


export function getBattlepassCreatedData(ctx: Context, ev: Event): Uint8Array {
    const event = new BattlepassBattlepassCreatedEvent(ctx, ev)
    if (event.isV68) {
        const { orgId, battlepassId, season } = event.asV68
        return battlepassId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBattlepassClaimedData(ctx: Context, ev: Event): [Uint8Array, Uint8Array, number] {
    const event = new BattlepassBattlepassClaimedEvent(ctx, ev)
    if (event.isV68) {
        const { byWho, forWho, orgId, battlepassId, nftId } = event.asV68
        return [ byWho, battlepassId, nftId ]
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBattlepassEndedData(ctx: Context, ev: Event): Uint8Array {
    const event = new BattlepassBattlepassEndedEvent(ctx, ev)
    if (event.isV68) {
        const { byWho, orgId, battlepassId } = event.asV68
        return battlepassId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBattlepassActivatedData(ctx: Context, ev: Event): Uint8Array {
    const event = new BattlepassBattlepassActivatedEvent(ctx, ev)
    if (event.isV68) {
        const { byWho, orgId, battlepassId } = event.asV68
        return battlepassId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}