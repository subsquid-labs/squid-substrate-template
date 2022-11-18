import { OrgType, AccessModel, FeeModel} from '../../../types/generated/v63'
import {
    ControlMemberAddedEvent,
    ControlMemberRemovedEvent,
    ControlOrgCreatedEvent,
    ControlOrgUpdatedEvent

} from '../../../types/generated/events'
import { EventContext } from '../../types/contexts'
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

export function getMemberAddedData(ctx: EventContext): MemberUpdatedData {
    const event = new ControlMemberAddedEvent(ctx)
    if (event.isV63) {
        const { orgId, who, blockNumber } = event.asV63
        return { orgId, who, blockNumber }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getMemberRemovedData(ctx: EventContext): MemberUpdatedData {
    const event = new ControlMemberRemovedEvent(ctx)
    if (event.isV63) {
        const { orgId, who, blockNumber } = event.asV63
        return { orgId, who, blockNumber }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getOrgCreatedData(ctx: EventContext): OrgCreatedData {
    const event = new ControlOrgCreatedEvent(ctx)
    if (event.isV63) {
        const { orgId, creator, treasuryId, createdAt, realmIndex } = event.asV63
        return { orgId, creator, treasuryId, createdAt, realmIndex }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getOrgUpdatedData(ctx: EventContext): OrgUpdatedData {
    const event = new ControlOrgUpdatedEvent(ctx)
    if (event.isV63) {
        const {
            orgId, primeId, orgType, accessModel, memberLimit,
            feeModel, membershipFee, blockNumber
        } = event.asV63
        return {
            orgId, primeId, orgType, accessModel,
            memberLimit, feeModel, membershipFee, blockNumber
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}