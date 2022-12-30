import { SubstrateBlock, toHex, decodeHex } from '@subsquid/substrate-processor'
import {
    BalancesBalanceSetEvent,
    BalancesDepositEvent,
    BalancesEndowedEvent,
    BalancesReservedEvent,
    BalancesReserveRepatriatedEvent,
    BalancesSlashedEvent,
    BalancesTransferEvent,
    BalancesUnreservedEvent,
    BalancesWithdrawEvent,
} from './types/generated/events'
import {
    BalancesAccountStorage,
    SystemAccountStorage,
} from './types/generated/storage'
import { Event } from './types/generated/support'

import { Context } from './processor'
import { HistoricalBalance, AccountBalance } from './model'
import { encodeId } from './common/tools'
import { upsertIdentity } from './common/db/identity'


export async function saveBalancesAccounts(ctx: Context, block: SubstrateBlock, accountIdsHex: Set<string>) {
    if (accountIdsHex.size == 0) {
        return
    }
    const accountIds = [...accountIdsHex].map((id) => decodeHex(id))
    const balances = await getBalances(ctx, block, accountIds)
    if (!balances || balances?.length == 0) {
        ctx.log.warn('Balances: no balances')
        return
    }

    const accountBalances = new Map<string, AccountBalance>()
    const historicalBalances = new Map<string, HistoricalBalance>()

    for (let i = 0; i < accountIds.length; i++) {
        const accountId = encodeId(accountIds[i])
        const balance = balances[i]

        if (!balance) continue
        const total = balance.free + balance.reserved
        let currencyId = 'ZERO'

        let identity = await upsertIdentity(ctx.store, accountId, null);
        if (identity === undefined) {
            continue
        }

        let hBalance = new HistoricalBalance({
            id: block.height.toString() + '-' + accountId + currencyId,
            block: block.height,
            address: accountId,
            currencyId: currencyId,
            free: balance.free,
            reserved: balance.reserved,
            total
        })
        historicalBalances.set(accountId, hBalance)
        let aBalance = new AccountBalance({
            id: accountId + currencyId,
            balance: hBalance,
            identity: identity
        })
        accountBalances.set(accountId, aBalance)
    }

    await ctx.store.save([...historicalBalances.values()])
    await ctx.store.save([...accountBalances.values()])

    ctx.log.child('accounts-balances').info(`updated: ${accountBalances.size}`)
}

export function processBalancesEventItem(ctx: Context, event: any, name: string, accountIdsHex: Set<string>) {
    switch (name) {
        case 'Balances.BalanceSet': {
            const account = getBalanceSetAccount(ctx, event)
            accountIdsHex.add(account)
            break
        }
        case 'Balances.Endowed': {
            const account = getEndowedAccount(ctx, event)
            accountIdsHex.add(account)
            break
        }
        case 'Balances.Deposit': {
            const account = getDepositAccount(ctx, event)
            accountIdsHex.add(account)
            break
        }
        case 'Balances.Reserved': {
            const account = getReservedAccount(ctx, event)
            accountIdsHex.add(account)
            break
        }
        case 'Balances.Unreserved': {
            const account = getUnreservedAccount(ctx, event)
            accountIdsHex.add(account)
            break
        }
        case 'Balances.Withdraw': {
            const account = getWithdrawAccount(ctx, event)
            accountIdsHex.add(account)
            break
        }
        case 'Balances.Slashed': {
            const account = getSlashedAccount(ctx, event)
            accountIdsHex.add(account)
            break
        }
        case 'Balances.Transfer': {
            const accounts = getTransferAccounts(ctx, event)
            accountIdsHex.add(accounts[0])
            accountIdsHex.add(accounts[1])
            break
        }
        case 'Balances.ReserveRepatriated': {
            const accounts = getReserveRepatriatedAccounts(ctx, event)
            accountIdsHex.add(accounts[0])
            accountIdsHex.add(accounts[1])
            break
        }
    }
}


function getBalanceSetAccount(ctx: Context, event: Event) {
    const data = new BalancesBalanceSetEvent(ctx, event)

    if (data.isV63) {
        return toHex(data.asV63.who)
    } else {
        throw new UnknownVersionError(data.constructor.name)
    }
}

function getTransferAccounts(ctx: Context, event: Event) {
    const data = new BalancesTransferEvent(ctx, event)

    if (data.isV63) {
        return [toHex(data.asV63.from), toHex(data.asV63.to)]
    } else {
        throw new UnknownVersionError(data.constructor.name)
    }
}

function getEndowedAccount(ctx: Context, event: Event) {
    const data = new BalancesEndowedEvent(ctx, event)

    if (data.isV63) {
        return toHex(data.asV63.account)
    } else {
        throw new UnknownVersionError(data.constructor.name)
    }
}

function getDepositAccount(ctx: Context, event: Event) {
    const data = new BalancesDepositEvent(ctx, event)

    if (data.isV63) {
        return toHex(data.asV63.who)
    } else {
        throw new UnknownVersionError(data.constructor.name)
    }
}

function getReservedAccount(ctx: Context, event: Event) {
    const data = new BalancesReservedEvent(ctx, event)

    if (data.isV63) {
        return toHex(data.asV63.who)
    } else {
        throw new UnknownVersionError(data.constructor.name)
    }
}

function getUnreservedAccount(ctx: Context, event: Event) {
    const data = new BalancesUnreservedEvent(ctx, event)

    if (data.isV63) {
        return toHex(data.asV63.who)
    } else {
        throw new UnknownVersionError(data.constructor.name)
    }
}

function getWithdrawAccount(ctx: Context, event: Event) {
    const data = new BalancesWithdrawEvent(ctx, event)

    if (data.isV63) {
        return toHex(data.asV63.who)
    } else {
        throw new UnknownVersionError(data.constructor.name)
    }
}

function getSlashedAccount(ctx: Context, event: Event) {
    const data = new BalancesSlashedEvent(ctx, event)

    if (data.isV63) {
        return toHex(data.asV63.who)
    } else {
        throw new UnknownVersionError(data.constructor.name)
    }
}

function getReserveRepatriatedAccounts(ctx: Context, event: Event) {
    const data = new BalancesReserveRepatriatedEvent(ctx, event)

    if (data.isV63) {
        return [toHex(data.asV63.from), toHex(data.asV63.to)]
    } else {
        throw new UnknownVersionError(data.constructor.name)
    }
}

interface Balance {
    free: bigint
    reserved: bigint
}

async function getBalances(
    ctx: Context,
    block: SubstrateBlock,
    accounts: Uint8Array[]
): Promise<(Balance | undefined)[] | undefined> {
    return (
        (await getSystemAccountBalances(ctx, block, accounts)) ||
        (await getBalancesAccountBalances(ctx, block, accounts))
    )
}

async function getBalancesAccountBalances(ctx: Context, block: SubstrateBlock, accounts: Uint8Array[]) {
    const storage = new BalancesAccountStorage(ctx, block)
    if (!storage.isExists) return undefined

    const data = await ctx._chain.queryStorage(
        block.hash,
        'Balances',
        'Account',
        accounts.map((a) => [a])
    )

    return data.map((d) => ({ free: d.free, reserved: d.reserved }))
}

async function getSystemAccountBalances(ctx: Context, block: SubstrateBlock, accounts: Uint8Array[]) {
    const storage = new SystemAccountStorage(ctx, block)
    if (!storage.isExists) return undefined

    const data = await ctx._chain.queryStorage(
        block.hash,
        'System',
        'Account',
        accounts.map((a) => [a])
    )

    return data.map((d) => ({ free: d.data.free, reserved: d.data.reserved }))
}

export class UnknownVersionError extends Error {
    constructor(name: string) {
        super(`There is no relevant version for ${name}`)
    }
}
