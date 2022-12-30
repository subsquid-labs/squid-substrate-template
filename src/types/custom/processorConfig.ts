import { SubstrateProcessor } from '@subsquid/substrate-processor'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Parameters<T> = T extends (...args: infer T) => any ? T : never

enum HandlerParams {
    NAME,
    OPTIONS,
    FUNC,
}

export interface ProcessorConfig {
    chainName: string
    prefix: number
    ipfsGateway: string
    dataSource: Parameters<SubstrateProcessor<any>['setDataSource']>[HandlerParams.NAME]
    port?: Parameters<SubstrateProcessor<any>['setPrometheusPort']>[HandlerParams.NAME]
    blockRange?: Parameters<SubstrateProcessor<any>['setBlockRange']>[HandlerParams.NAME]
}
