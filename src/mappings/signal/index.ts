import { Pallet } from '..'
import { handleProposalCreatedEvent } from './events/proposalCreated'
import { handleProposalVotedEvent } from './events/proposalVoted'
import { handleProposalEvent } from './events/proposal'


export default {
    name: 'Signal',
    callHandlers: {},
    eventHandlers: {
        'Created': handleProposalCreatedEvent,
        'Voted': handleProposalVotedEvent,
        'Activated': handleProposalEvent,
        'Accepted': handleProposalEvent,
        'Rejected': handleProposalEvent,
        'Expired': handleProposalEvent,
        'Aborted': handleProposalEvent,
        'Finalized': handleProposalEvent,
    }
} as Pallet;
