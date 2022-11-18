import {BatchContext, BatchProcessorItem, SubstrateBatchProcessor} from "@subsquid/substrate-processor"
import {Store, TypeormDatabase} from "@subsquid/typeorm-store"
import {eventHandlers, extrinsicHandlers} from './mappings';
import { archiveGQL, chainRPC, startBlock } from './config.json';

const processor = new SubstrateBatchProcessor()
    .setTypesBundle('zeroTypesBundle.json')
    .setBlockRange({from: 0})
    .setDataSource({
        archive: archiveGQL,
        chain: chainRPC,
    });

for (const eventName in eventHandlers) {
    processor.addEvent(eventName, {data: { event: { args: true } }} as const)
}
for (const extrinsicName in extrinsicHandlers) {
    processor.addCall(extrinsicName, {data: { call: { origin: true } }} as const)
}
processor.includeAllBlocks()

type Item = BatchProcessorItem<typeof processor>
// type EventItem = BatchProcessorEventItem<typeof processor>
// type CallItem = BatchProcessorCallItem<typeof processor>
type Context = BatchContext<Store, Item>

processor.run(new TypeormDatabase(), run)

async function run(ctx: Context): Promise<void> {
    for (const block of ctx.blocks) {
        for (const item of block.items) {
            if (item.kind === 'event') {
                if (item.name in eventHandlers) {
                    eventHandlers[item.name](ctx)
                }
            }
            if (item.kind === 'call') {
                if (item.name in extrinsicHandlers) {
                    extrinsicHandlers[item.name](ctx)
                }
            }
        }
    }
}