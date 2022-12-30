import {
    BatchContext,
    BatchProcessorItem,
    SubstrateBatchProcessor,
    BatchBlock
} from "@subsquid/substrate-processor"
import { Store, TypeormDatabase } from "@subsquid/typeorm-store"
import { eventHandlers, callHandlers } from './mappings'
import config from './config'
import { saveCurrentChainState, saveRegularChainState, getLastChainState } from './chainState'
import { processBalancesEventItem, saveBalancesAccounts } from './balances'
import { processTokensEventItem, saveTokensAccounts } from './tokens'
import { CurrencyId } from "./types/generated/v63"


const processor = new SubstrateBatchProcessor()
    .setDataSource(config.dataSource)
    .setBlockRange(config.blockRange || { from: 0 })
    .addEvent('Balances.Endowed', { data: { event: { args: true } }} as const)
    .addEvent('Balances.Transfer', { data: { event: { args: true } }} as const)
    .addEvent('Balances.BalanceSet', { data: { event: { args: true } }} as const)
    .addEvent('Balances.Reserved', { data: { event: { args: true } }} as const)
    .addEvent('Balances.Unreserved', { data: { event: { args: true } }} as const)
    .addEvent('Balances.ReserveRepatriated', { data: { event: { args: true } }} as const)
    .addEvent('Balances.Deposit', { data: { event: { args: true } }} as const)
    .addEvent('Balances.Withdraw', { data: { event: { args: true } }} as const)
    .addEvent('Balances.Slashed', { data: { event: { args: true } }} as const)
    .addEvent('Tokens.Endowed', { data: { event: { args: true } }} as const)
    .addEvent('Tokens.Transfer', { data: { event: { args: true } }} as const)
    .addEvent('Tokens.BalanceSet', { data: { event: { args: true } }} as const)
    .addEvent('Tokens.Reserved', { data: { event: { args: true } }} as const)
    .addEvent('Tokens.Unreserved', { data: { event: { args: true } }} as const)
    .addEvent('Tokens.ReserveRepatriated', { data: { event: { args: true } }} as const)
    .addEvent('Tokens.Deposited', { data: { event: { args: true } }} as const)
    .addEvent('Tokens.Withdrawn', { data: { event: { args: true } }} as const)
    .addEvent('Tokens.Slashed', { data: { event: { args: true } }} as const)
    .includeAllBlocks()

for (const eventName in eventHandlers) {
    processor.addEvent(eventName, {data: { event: { args: true } }} as const)
}
for (const callName in callHandlers) {
    processor.addCall(callName, {data: { call: { origin: true } }} as const)
}

export type Item = BatchProcessorItem<typeof processor>
export type Context = BatchContext<Store, Item>
export type Block = BatchBlock<Item>

processor.run(new TypeormDatabase(), run)

const SAVE_PERIOD = 12 * 60 * 60 * 1000
let lastStateTimestamp: number | undefined

async function run(ctx: Context): Promise<void> {
    const accountIdsBalances = new Set<string>()
    const accountIdTokens: Record<string, Set<CurrencyId>> = {}

    for (const block of ctx.blocks) {
        for (const item of block.items) {
            if (item.kind === 'event') {
                if (item.name in eventHandlers) {
                    await eventHandlers[item.name](ctx, block, item.event, item.name)
                } else {
                    processBalancesEventItem(ctx, item.event, item.name, accountIdsBalances)
                    processTokensEventItem(ctx, item.event, item.name, accountIdTokens)
                }
            }
            if (item.kind === 'call') {
                if (item.name in callHandlers) {
                    await callHandlers[item.name](ctx, block, item.call, item.name)
                }
            }
        }
        if (lastStateTimestamp == null) {
            lastStateTimestamp = (await getLastChainState(ctx.store))?.timestamp.getTime() || 0
        }
        if (block.header.timestamp - lastStateTimestamp >= SAVE_PERIOD) {
            await saveBalancesAccounts(ctx, block.header, accountIdsBalances)
            await saveTokensAccounts(ctx, block.header, accountIdTokens)
            await saveRegularChainState(ctx, block.header)
            lastStateTimestamp = block.header.timestamp
            accountIdsBalances.clear()
        }
    }

    const block = ctx.blocks[ctx.blocks.length - 1]
    await saveBalancesAccounts(ctx, block.header, accountIdsBalances)
    await saveTokensAccounts(ctx, block.header, accountIdTokens)
    await saveCurrentChainState(ctx, block.header)
}
