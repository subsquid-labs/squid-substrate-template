import { UnknownVersionError } from '../../common/errors'
import {
    BattlepassBattlepassesStorage,
    BattlepassBattlepassStatesStorage
} from '../../types/generated/storage'
import { Block } from '../../types/generated/support'
import { Context } from '../../processor'
import { Battlepass, BattlepassState } from '../../types/generated/v66'

export async function getBattlepassStorageData(ctx: Context, block: Block, id: Uint8Array): Promise<Battlepass | undefined> {
    const storage = new BattlepassBattlepassesStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV66) {
        return await storage.getAsV66(id)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getBattlepassStateStorageData(ctx: Context, block: Block, id: Uint8Array): Promise<BattlepassState | undefined> {
    const storage = new BattlepassBattlepassStatesStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV66) {
        return await storage.getAsV66(id)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}
