export { Event } from '../../../types/generated/support'
import { Context, Block } from '../../../processor'
import {
    getProposalActivatedData,
    getProposalAcceptedData,
    getProposalRejectedData,
    getProposalExpiredData,
    getProposalFinalizedData,
    getProposalAbortedData
} from './getters'

import { getProposal } from '../../../common/db/getters'
import { storage } from '../../../storage'

import { arrayToHexString } from '../../../common/tools'
import { StorageNotExistsWarn, ObjectNotExistsWarn } from '../../../common/errors'


const getData: Record<string, (context: any, event: any) => Uint8Array > = {
    'Signal.Activated': getProposalActivatedData,
    'Signal.Accepted': getProposalAcceptedData,
    'Signal.Rejected': getProposalRejectedData,
    'Signal.Expired': getProposalExpiredData,
    'Signal.Aborted': getProposalAbortedData,
    'Signal.Finalized': getProposalFinalizedData,
}

async function handleProposalEvent(ctx: Context, block: Block, event: Event, name: string) {
    if (!(name in getData)) {
        ctx.log.warn(`Unknown Signal event: ${name}`)
        return
    }
    let proposalIdArray = getData[name](ctx, event)
    let proposalId = arrayToHexString(proposalIdArray)
    let proposal = await getProposal(ctx.store, proposalId)
    if (!proposal) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Proposal', proposalId))
        return
    }
    const proposalState = await storage.signal.getProposalStateStorageData(ctx, block.header, proposalIdArray)
    if (!proposalState) {
        ctx.log.warn(StorageNotExistsWarn(name, 'Proposal', proposalId))
        return
    }
    proposal.state = proposalState.__kind
    await ctx.store.save(proposal)
}

export { handleProposalEvent }
