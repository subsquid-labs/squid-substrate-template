import { Pallet } from '..'
import { handleMemberAddedEvent } from './events/memberAdded'
import { handleOrgCreatedEvent } from './events/orgCreated'
import { handleMemberRemovedEvent } from './events/memberRemoved'
import { handleMemberUpdatedEvent } from './events/memberUpdated'
import { handleOrgUpdatedEvent } from './events/orgUpdated'


export default {
    name: 'Control',
    callHandlers: {},
    eventHandlers: {
        'OrgCreated': handleOrgCreatedEvent,
        'OrgUpdated': handleOrgUpdatedEvent,
        'MemberAdded': handleMemberAddedEvent,
        'MemberRemoved': handleMemberRemovedEvent,
        'MemberUpdated': handleMemberUpdatedEvent,
    },
} as Pallet
