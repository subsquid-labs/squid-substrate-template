import {assertNotNull} from '@subsquid/util-internal'
import {
  BlockHeader,
  DataHandlerContext,
  SubstrateBatchProcessor,
  SubstrateBatchProcessorFields,
  Event as _Event,
  Call as _Call,
  Extrinsic as _Extrinsic
} from '@subsquid/substrate-processor'

import {events} from './types'

export const processor = new SubstrateBatchProcessor()
  // SQD Portal is the faster source of finalized historical data, but it is optional
  // Not supplying it will cause all data to be ingested from RPC (slow)
  .setPortal('https://portal.sqd.dev/datasets/kusama')
  // Chain RPC endpoint is required on Substrate for metadata and real-time updates
  .setRpcEndpoint({
    // Set via .env for local runs or via secrets when deploying to SQD Cloud
    // https://docs.sqd.dev/en/cloud/resources/env-variables
    url: assertNotNull(process.env.RPC_KUSAMA_HTTP, 'No RPC endpoint supplied'),
    // More RPC connection options at https://docs.sqd.dev/en/sdk/squid-sdk/substrate/reference/substrate-processor/general
    rateLimit: 10
  })
  .addEvent({
    name: [events.balances.transfer.name],
    extrinsic: true
  })
  .setFields({
    event: {
      args: true
    },
    extrinsic: {
      hash: true,
      fee: true
    },
    block: {
      timestamp: true
    }
  })
  // Uncomment to disable RPC ingestion and drastically reduce no of RPC calls
  // (only finalized blocks served by the Portal will be processed)
  //.setRpcDataIngestionSettings({disabled: true})

export type Fields = SubstrateBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Event = _Event<Fields>
export type Call = _Call<Fields>
export type Extrinsic = _Extrinsic<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
