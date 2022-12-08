import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getProposalVotedData } from './getters'
import { getProposal, getVoting, getProposalVoter } from '../../util/db/getters'
import { upsertIdentity } from '../../util/db/identity'
import { ProposalVoter } from '../../../model'

import { arrayToHexString } from '../../util/helpers'
import { ObjectNotExistsWarn } from '../../../common/errors'


async function handleProposalVotedEvent(ctx: Context, block: Block, event: Event, name: string) {
	const eventData = getProposalVotedData(ctx, event)
	let proposalId = arrayToHexString(eventData.proposalId)
	let votingId = proposalId
	let proposal = await getProposal(ctx.store, proposalId)
	if (!proposal) {
		ctx.log.warn(ObjectNotExistsWarn(name, 'Proposal', proposalId))
		return
	}
	let voting = await getVoting(ctx.store, votingId);
	if (!voting) {
		ctx.log.warn(ObjectNotExistsWarn(name, 'Voting', votingId))
		return
	}

	voting.yes = eventData.yes
	voting.no = eventData.no;
	await ctx.store.save(voting);

	let account = arrayToHexString(eventData.account)
	let voter = await getProposalVoter(ctx.store, proposalId, account)
	if (!voter) {
		voter = new ProposalVoter()
		voter.id = `${proposalId}-${account}`.toLowerCase()
		voter.address = account
		voter.identity = await upsertIdentity(ctx.store, account, null)
		voter.voting = voting
	}
	// TODO: get the deposit value from the Voted event
	voter.amount = BigInt(0)
	voter.power = eventData.votePower
	voter.voted = eventData.voted
	await ctx.store.save(voter)
}

export { handleProposalVotedEvent }
