import { UnknownVersionError } from '../../common/errors'
import {
    BattlepassBattlepassesStorage,
    BattlepassClaimedBattlepassStorage,
    BattlepassBattlepassStatesStorage
} from '../../types/generated/storage'
import { Block } from '../../types/generated/support'
import { Context } from '../../processor'
import { Battlepass, BattlepassNft, BattlepassState } from '../../types/generated/v64'

export async function getBattlepassStorageData(ctx: Context, block: Block, id: Uint8Array): Promise<Battlepass | undefined> {
    const storage = new BattlepassBattlepassesStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV64) {
        return await storage.getAsV64(id)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getBattlepassStateStorageData(ctx: Context, block: Block, id: Uint8Array): Promise<BattlepassState | undefined> {
    const storage = new BattlepassBattlepassStatesStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV64) {
        return await storage.getAsV64(id)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getBattlepassNftStorageData(ctx: Context, block: Block, battlepassId: Uint8Array, claimerId: Uint8Array): Promise<BattlepassNft | undefined> {
    const storage = new BattlepassClaimedBattlepassStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV64) {
        return await storage.getAsV64(claimerId, battlepassId)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}