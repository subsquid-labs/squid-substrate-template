import { Pallet } from '..'
import { handleCollectionCreatedEvent } from './events/collectionCreated'
import { handleNftMintedEvent } from './events/nftMinted'

export default {
    name: 'Uniques',
    callHandlers: {},
    eventHandlers: {
        'Created': handleCollectionCreatedEvent,
        'Issued': handleNftMintedEvent,
    },
} as Pallet
