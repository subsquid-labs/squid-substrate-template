import { UnknownVersionError } from '../../common/errors'
import { SignalProposalOfStorage, SignalProposalStatesStorage, SignalProposalVotingStorage } from '../../types/generated/storage'
// TODO: Why instead of Proposal there is Type_544. Make sure the name at least stays the same
import { Type_544, Type_549, ProposalState } from '../../types/generated/v63'
import { Block } from '../../types/generated/support'
import { Context } from '../../processor'


export async function getVotingStorageData(ctx: Context, block: Block, id: Uint8Array): Promise<Type_549 | undefined> {
    const storage = new SignalProposalVotingStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV63) {
        return await storage.getAsV63(id)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getProposalStorageData(ctx: Context, block: Block, id: Uint8Array): Promise<Type_544 | undefined> {
    const storage = new SignalProposalOfStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV63) {
        return await storage.getAsV63(id)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getProposalStateStorageData(ctx: Context, block: Block, id: Uint8Array): Promise<ProposalState | undefined> {
    const storage = new SignalProposalStatesStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV63) {
        return await storage.getAsV63(id)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}