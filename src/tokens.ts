import { SubstrateBlock, toHex, decodeHex } from '@subsquid/substrate-processor'
import {
    TokensBalanceSetEvent,
    TokensDepositedEvent,
    TokensEndowedEvent,
    TokensReservedEvent,
    TokensReserveRepatriatedEvent,
    TokensSlashedEvent,
    TokensTransferEvent,
    TokensUnreservedEvent,
    TokensWithdrawnEvent,
} from './types/generated/events'
import { TokensAccountsStorage } from './types/generated/storage'
import { CurrencyId } from './types/generated/v63'
import { Event } from './types/generated/support'
import { getCurrencyValue } from './common/tools'

import { Context } from './processor'
import { HistoricalBalance, AccountBalance } from './model'
import { encodeId } from './common/tools'
import { upsertIdentity } from './mappings/util/db/identity'


export async function saveTokensAccounts(ctx: Context, block: SubstrateBlock, accountIdTokens: Record<string, Set<CurrencyId>>) {
    if (Object.keys(accountIdTokens).length === 0) {
        return
    }
    const balances = await getTokensAccountBalances(ctx, block, accountIdTokens)
    if (!balances || balances?.length == 0) {
        ctx.log.warn('Tokens: no balances')
        return
    }

    const accountBalances = new Map<string, AccountBalance>()
    const historicalBalances = new Map<string, HistoricalBalance>()

    for (let i = 0; i < balances.length; i++) {
        let [accountId, currencyId, balance] = balances[i]

        if (!balance) continue
        const total = balance.free + balance.reserved

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
        historicalBalances.set(accountId+currencyId, hBalance)
        let aBalance = new AccountBalance({
            id: accountId + currencyId,
            balance: hBalance,
            identity: identity
        })
        accountBalances.set(accountId+currencyId, aBalance)
    }
    await ctx.store.save([...historicalBalances.values()])
    await ctx.store.save([...accountBalances.values()])

    ctx.log.child('accounts-tokens').info(`updated: ${accountBalances.size}`)
}

export function processTokensEventItem(ctx: Context, event: any, name: string, accountTokens: Record<string, Set<CurrencyId>>) {
    switch (name) {
        case 'Tokens.BalanceSet': {
            const account = getBalanceSetAccount(ctx, event)
            addAccountCurrency(account[0], account[1], accountTokens)
            break
        }
        case 'Tokens.Endowed': {
            const account = getEndowedAccount(ctx, event)
            addAccountCurrency(account[0], account[1], accountTokens)
            break
        }
        case 'Tokens.Deposited': {
            const account = getDepositAccount(ctx, event)
            addAccountCurrency(account[0], account[1], accountTokens)
            break
        }
        case 'Tokens.Reserved': {
            const account = getReservedAccount(ctx, event)
            addAccountCurrency(account[0], account[1], accountTokens)
            break
        }
        case 'Tokens.Unreserved': {
            const account = getUnreservedAccount(ctx, event)
            addAccountCurrency(account[0], account[1], accountTokens)
            break
        }
        case 'Tokens.Withdrawn': {
            const account = getWithdrawAccount(ctx, event)
            addAccountCurrency(account[0], account[1], accountTokens)
            break
        }
        case 'Tokens.Slashed': {
            const account = getSlashedAccount(ctx, event)
            addAccountCurrency(account[0], account[1], accountTokens)
            break
        }
        case 'Tokens.Transfer': {
            const accounts = getTransferAccounts(ctx, event)
            addAccountCurrency(accounts[0], accounts[2], accountTokens)
            addAccountCurrency(accounts[1], accounts[2], accountTokens)
            break
        }
        case 'Tokens.ReserveRepatriated': {
            const accounts = getReserveRepatriatedAccounts(ctx, event)
            addAccountCurrency(accounts[0], accounts[2], accountTokens)
            addAccountCurrency(accounts[1], accounts[2], accountTokens)
            break
        }
    }
}

function addAccountCurrency(account: string, currency: CurrencyId, accountTokens: Record<string, Set<CurrencyId>>) {
    if (!(account in accountTokens)) {
        accountTokens[account] = new Set<CurrencyId>()
    }
    accountTokens[account].add(currency)
}

function getBalanceSetAccount(ctx: Context, event: Event): [string, CurrencyId] {
    const data = new TokensBalanceSetEvent(ctx, event)

    if (data.isV63) {
        return [toHex(data.asV63.who), data.asV63.currencyId]
    } else {
        throw new UnknownVersionError(data.constructor.name)
    }
}

function getTransferAccounts(ctx: Context, event: Event): [string, string, CurrencyId] {
    const data = new TokensTransferEvent(ctx, event)

    if (data.isV63) {
        return [toHex(data.asV63.from), toHex(data.asV63.to), data.asV63.currencyId]
    } else {
        throw new UnknownVersionError(data.constructor.name)
    }
}

function getEndowedAccount(ctx: Context, event: Event): [string, CurrencyId] {
    const data = new TokensEndowedEvent(ctx, event)

    if (data.isV63) {
        return [toHex(data.asV63.who), data.asV63.currencyId]
    } else {
        throw new UnknownVersionError(data.constructor.name)
    }
}

function getDepositAccount(ctx: Context, event: Event): [string, CurrencyId] {
    const data = new TokensDepositedEvent(ctx, event)

    if (data.isV63) {
        return [toHex(data.asV63.who), data.asV63.currencyId]
    } else {
        throw new UnknownVersionError(data.constructor.name)
    }
}

function getReservedAccount(ctx: Context, event: Event): [string, CurrencyId] {
    const data = new TokensReservedEvent(ctx, event)

    if (data.isV63) {
        return [toHex(data.asV63.who), data.asV63.currencyId]
    } else {
        throw new UnknownVersionError(data.constructor.name)
    }
}

function getUnreservedAccount(ctx: Context, event: Event): [string, CurrencyId] {
    const data = new TokensUnreservedEvent(ctx, event)

    if (data.isV63) {
        return [toHex(data.asV63.who), data.asV63.currencyId]
    } else {
        throw new UnknownVersionError(data.constructor.name)
    }
}

function getWithdrawAccount(ctx: Context, event: Event): [string, CurrencyId] {
    const data = new TokensWithdrawnEvent(ctx, event)

    if (data.isV63) {
        return [toHex(data.asV63.who), data.asV63.currencyId]
    } else {
        throw new UnknownVersionError(data.constructor.name)
    }
}

function getSlashedAccount(ctx: Context, event: Event): [string, CurrencyId] {
    const data = new TokensSlashedEvent(ctx, event)

    if (data.isV63) {
        return [toHex(data.asV63.who), data.asV63.currencyId]
    } else {
        throw new UnknownVersionError(data.constructor.name)
    }
}

function getReserveRepatriatedAccounts(ctx: Context, event: Event): [string, string, CurrencyId] {
    const data = new TokensReserveRepatriatedEvent(ctx, event)

    if (data.isV63) {
        return [toHex(data.asV63.from), toHex(data.asV63.to), data.asV63.currencyId]
    } else {
        throw new UnknownVersionError(data.constructor.name)
    }
}

interface Balance {
    free: bigint
    reserved: bigint
}

async function getTokensAccountBalances(ctx: Context, block: SubstrateBlock, accountIdTokens: Record<string, Set<CurrencyId>>) {
    const storage = new TokensAccountsStorage(ctx, block)
    if (!storage.isExists) return undefined

    let storageKeys: [Uint8Array, CurrencyId][] = []
    for (let accountId in accountIdTokens) {
        accountIdTokens[accountId].forEach((currencyId) => {
            storageKeys.push([decodeHex(accountId), currencyId])
        })
    }

    const data = await ctx._chain.queryStorage(
        block.hash,
        'Tokens',
        'Accounts',
        storageKeys
    )

    let result: [string, string, Balance][] = []
    storageKeys.forEach(([accountId, currencyId], i) => {
        result.push([encodeId(accountId), getCurrencyValue(currencyId), { free: data[i].free, reserved: data[i].reserved }])
    })

    return result
}

export class UnknownVersionError extends Error {
    constructor(name: string) {
        super(`There is no relevant version for ${name}`)
    }
}
