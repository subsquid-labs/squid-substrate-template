import { Store } from '@subsquid/typeorm-store'
import {
    BlockHandlerContext as PrBlockHandlerContext,
    EventHandlerContext as PrEventHandlerContext,
    CallHandlerContext as PrCallHandlerContext,
    CommonHandlerContext as PrCommonHandlerContext,
    BlockHandlerDataRequest,
} from '@subsquid/substrate-processor'
import { CallDataRequest, EventDataRequest } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'

export type EventHandlerContext<T extends EventDataRequest = { event: true }> = PrEventHandlerContext<Store, T>
// eslint-disable-next-line @typescript-eslint/ban-types
export type BlockHandlerContext<T extends BlockHandlerDataRequest = {}> = PrBlockHandlerContext<Store, T>
export type CallHandlerContext<T extends CallDataRequest = { call: true; extrinsic: true }> = PrCallHandlerContext<
    Store,
    T
>
export type CommonHandlerContext = PrCommonHandlerContext<Store>

export { CallContext, EventContext } from '../../types/generated/support'