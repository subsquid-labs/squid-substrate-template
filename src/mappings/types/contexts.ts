import { Store } from '@subsquid/typeorm-store'
import {
    EventHandlerContext as PrEventHandlerContext,
    CallHandlerContext as PrCallHandlerContext,
    BatchProcessorCallItem,
    BatchProcessorEventItem,
    BatchProcessorItem,
    BatchContext as PrBatchContext,
    SubstrateBatchProcessor
} from '@subsquid/substrate-processor'
import { CallDataRequest, EventDataRequest } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'

export type Item = BatchProcessorItem<typeof SubstrateBatchProcessor>
export type EventItem = BatchProcessorEventItem<typeof SubstrateBatchProcessor>
export type CallItem = BatchProcessorCallItem<typeof SubstrateBatchProcessor>
export type BatchContext = PrBatchContext<Store, Item>

export type EventHandlerContext<T extends EventDataRequest = { event: true }> = PrEventHandlerContext<Store, T>
export type CallHandlerContext<T extends CallDataRequest = { call: true; extrinsic: true }> = PrCallHandlerContext<
    Store,
    T
>

export { CallContext, EventContext, Event, Call } from '../../types/generated/support'
export { SubstrateBlock } from '@subsquid/substrate-processor'
