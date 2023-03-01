import { OrgType, AccessModel, FeeModel, MemberState} from '../../../types/generated/V70'
import { Event } from '../../../types/generated/support'
import { Context } from '../../../processor'
import {
    ControlMemberAddedEvent,
    ControlMemberRemovedEvent,
    ControlMemberUpdatedEvent,
    ControlOrgCreatedEvent,
    ControlOrgUpdatedEvent

} from '../../../types/generated/events'
import { UnknownVersionError } from '../../../common/errors'


interface MemberUpdatedData {
    orgId: Uint8Array,
    who: Uint8Array,
    blockNumber: number
}

interface OrgCreatedData {
    orgId: Uint8Array,
    creator: Uint8Array,
    treasuryId: Uint8Array,
    createdAt: number,
    realmIndex: bigint
}

interface OrgUpdatedData {
    orgId: Uint8Array,
    primeId: (Uint8Array | undefined),
    orgType: (OrgType | undefined),
    accessModel: (AccessModel | undefined),
    memberLimit: (number | undefined),
    feeModel: (FeeModel | undefined),
    membershipFee: (bigint | undefined),
    blockNumber: number
}

export function getMemberAddedData(ctx: Context, ev: Event): MemberUpdatedData {
    const event = new ControlMemberAddedEvent(ctx, ev)
    if (event.isV70) {
        const { orgId, who, blockNumber } = event.asV70
        return { orgId, who, blockNumber }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getMemberRemovedData(ctx: Context, ev: Event): MemberUpdatedData {
    const event = new ControlMemberRemovedEvent(ctx, ev)
    if (event.isV70) {
        const { orgId, who, blockNumber } = event.asV70
        return { orgId, who, blockNumber }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getMemberUpdatedData(ctx: Context, ev: Event): [Uint8Array, Uint8Array, MemberState] {
    const event = new ControlMemberUpdatedEvent(ctx, ev)
    if (event.isV70) {
        const { orgId, who, state, blockNumber } = event.asV70
        return [who, orgId, state]
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getOrgCreatedData(ctx: Context, ev: Event): OrgCreatedData {
    const event = new ControlOrgCreatedEvent(ctx, ev)
    if (event.isV70) {
        const { orgId, creator, treasuryId, createdAt, realmIndex } = event.asV70
        return { orgId, creator, treasuryId, createdAt, realmIndex }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getOrgUpdatedData(ctx: Context, ev: Event): OrgUpdatedData {
    const event = new ControlOrgUpdatedEvent(ctx, ev)
    if (event.isV70) {
        const {
            orgId, primeId, orgType, accessModel, memberLimit,
            feeModel, membershipFee, blockNumber
        } = event.asV70
        return {
            orgId, primeId, orgType, accessModel,
            memberLimit, feeModel, membershipFee, blockNumber
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}