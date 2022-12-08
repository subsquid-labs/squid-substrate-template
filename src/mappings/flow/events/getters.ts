import { Event } from '../../../types/generated/support'
import { Context } from '../../../processor'
import {
    FlowActivatedEvent,
    FlowCreatedEvent,
    FlowContributedEvent,
    FlowFailedEvent,
    FlowSucceededEvent
} from '../../../types/generated/events'
import { UnknownVersionError } from '../../../common/errors'


interface CampaignCreatedData {
    campaignId: Uint8Array,
    creator: Uint8Array,
    admin: Uint8Array,
    target: bigint,
    deposit: bigint,
    expiry: number,
    name: Uint8Array
}

interface CampaignContributedData {
    campaignId: Uint8Array,
    sender: Uint8Array,
    contribution: bigint,
    blockNumber: number
}

export function getCampaignCreatedData(ctx: Context, ev: Event): CampaignCreatedData {
    const event = new FlowCreatedEvent(ctx, ev)
    if (event.isV63) {
        const { campaignId, creator, admin, target, deposit, expiry, name } = event.asV63
        return { campaignId, creator, admin, target, deposit, expiry, name }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getCampaignContributedData(ctx: Context, ev: Event): CampaignContributedData {
    const event = new FlowContributedEvent(ctx, ev)
    if (event.isV63) {
        const { campaignId, sender, contribution, blockNumber } = event.asV63
        return { campaignId, sender, contribution, blockNumber }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getCampaignActivatedData(ctx: Context, ev: Event): Uint8Array {
    const event = new FlowActivatedEvent(ctx, ev)
    if (event.isV63) {
        const { campaignId } = event.asV63
        return campaignId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getCampaignFailedData(ctx: Context, ev: Event): Uint8Array {
    const event = new FlowFailedEvent(ctx, ev)
    if (event.isV63) {
        const { campaignId, campaignBalance, blockNumber } = event.asV63
        return campaignId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getCampaignSucceededData(ctx: Context, ev: Event): Uint8Array {
    const event = new FlowSucceededEvent(ctx, ev)
    if (event.isV63) {
        const { campaignId, campaignBalance, blockNumber } = event.asV63
        return campaignId
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}