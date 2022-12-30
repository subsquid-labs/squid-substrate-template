import { Pallet } from '..'
import { handleCollectionCreatedEvent } from './events/collectionCreated'
import { handleNftMintedEvent } from './events/nftMinted'

export default {
    name: 'RmrkCore',
    callHandlers: {},
    eventHandlers: {
        'CollectionCreated': handleCollectionCreatedEvent,
        'NftMinted': handleNftMintedEvent,
    },
} as Pallet
