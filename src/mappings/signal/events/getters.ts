import { Event } from '../../../types/generated/support'
import { Context } from '../../../processor'
import {
    SignalAbortedEvent,
    SignalAcceptedEvent,
    SignalActivatedEvent,
    SignalCreatedEvent,
    SignalExpiredEvent,
    SignalFinalizedEvent,
    SignalRejectedEvent,
    SignalVotedEvent
} from '../../../types/generated/events'
import { UnknownVersionError } from '../../../common/errors'


interface ProposalCreatedData {
    account: Uint8Array,
    proposalId: Uint8Array,
    orgId: Uint8Array,
    campaignId: (Uint8Array | undefined),
    amount: (bigint | undefined),
    start: number,
    expiry: number
}

interface ProposalVotedData {
    account: Uint8Array,
    proposalId: Uint8Array,
    voted: boolean,
    yes: bigint,
    no: bigint,
    votePower: bigint
}


export function getProposalCreatedData(ctx: Context, ev: Event): ProposalCreatedData {
    const event = new SignalCreatedEvent(ctx, ev)
    if (event.isV63) {
        const { account, proposalId, orgId, campaignId, amount, start, expiry } = event.asV63
        return { account, proposalId, orgId, campaignId, amount, start, expiry }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getProposalVotedData(ctx: Context, ev: Event): ProposalVotedData {
    const event = new SignalVotedEvent(ctx, ev)
    if (event.isV63) {
        const { account, proposalId, voted, yes, no, votePower } = event.asV63
        return { account, proposalId, voted, yes, no, votePower }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getProposalActivatedData(ctx: Context, ev: Event): Uint8Array {
    const event = new SignalActivatedEvent(ctx, ev)
    if (event.isV63) {
        const { proposalId } = event.asV63
        return proposalId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getProposalAbortedData(ctx: Context, ev: Event): Uint8Array {
    const event = new SignalAbortedEvent(ctx, ev)
    if (event.isV63) {
        const { proposalId } = event.asV63
        return proposalId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getProposalAcceptedData(ctx: Context, ev: Event): Uint8Array {
    const event = new SignalAcceptedEvent(ctx, ev)
    if (event.isV63) {
        const { proposalId } = event.asV63
        return proposalId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getProposalExpiredData(ctx: Context, ev: Event): Uint8Array {
    const event = new SignalExpiredEvent(ctx, ev)
    if (event.isV63) {
        const { proposalId } = event.asV63
        return proposalId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getProposalFinalizedData(ctx: Context, ev: Event): Uint8Array {
    const event = new SignalFinalizedEvent(ctx, ev)
    if (event.isV63) {
        const { proposalId } = event.asV63
        return proposalId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getProposalRejectedData(ctx: Context, ev: Event): Uint8Array {
    const event = new SignalRejectedEvent(ctx, ev)
    if (event.isV63) {
        const { proposalId } = event.asV63
        return proposalId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}