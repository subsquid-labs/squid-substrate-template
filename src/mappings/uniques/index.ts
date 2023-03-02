import { Pallet } from '..'
import { handleCollectionCreatedEvent } from './events/collectionCreated'
import { handleNftMintedEvent } from './events/nftMinted'
import { handleCollectionMetadataSetEvent } from './events/collectionMetadataSet'
import { handleNftMetadataSetEvent } from './events/nftMetadataSet'
import { handleCollectionMaxSupplySetEvent } from './events/collectionMaxSupplySet'

export default {
    name: 'Uniques',
    callHandlers: {},
    eventHandlers: {
        'Created': handleCollectionCreatedEvent,
        'Issued': handleNftMintedEvent,
        'CollectionMetadataSet': handleCollectionMetadataSetEvent,
        'MetadataSet': handleNftMetadataSetEvent,
        'CollectionMaxSupplySet': handleCollectionMaxSupplySetEvent,
    },
} as Pallet
