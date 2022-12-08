import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { Identity, ChainState, CurrentChainState } from './model'
import { UnknownVersionError } from './common/errors'
import { BalancesTotalIssuanceStorage } from './types/generated/storage'
import { Block, ChainContext } from './types/generated/support'


export async function getLastChainState(store: Store) {
    return await store.get(ChainState, {
        where: {},
        order: {
            timestamp: 'DESC',
        },
    })
}

export async function getChainState(ctx: BatchContext<Store, unknown>, block: SubstrateBlock) {
    const state = new ChainState({ id: block.id })

    state.timestamp = new Date(block.timestamp)
    state.blockNumber = block.height
    state.tokenBalance = (await getTotalIssuance(ctx, block)) || 0n

    state.tokenHolders = await ctx.store.count(Identity)

    return state
}

export async function saveRegularChainState(ctx: BatchContext<Store, unknown>, block: SubstrateBlock) {
    const state = await getChainState(ctx, block)
    await ctx.store.insert(state)

    ctx.log.child('state').info(`updated at block ${block.height}`)
}

export async function saveCurrentChainState(ctx: BatchContext<Store, unknown>, block: SubstrateBlock) {
    const state = await getChainState(ctx, block)
    await ctx.store.save(new CurrentChainState({ ...state, id: '0' }))
}

async function getTotalIssuance(ctx: ChainContext, block: Block) {
    const storage = new BalancesTotalIssuanceStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV63) {
        return await storage.getAsV63()
    }

    throw new UnknownVersionError(storage.constructor.name)
}