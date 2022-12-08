import { ProcessorConfig } from './types/custom/processorConfig'

const config: ProcessorConfig = {
    chainName: 'zero',
    prefix: 25,
    ipfsGateway: 'https://gamedao.infura-ipfs.io/ipfs/',
    dataSource: {
        archive: 'http://indexer-gateway:8000/graphql',
        chain: 'wss://node.dev.sub.zero.io',
    }
}

export default config