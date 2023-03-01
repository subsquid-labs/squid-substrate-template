import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getBattlepassUpdatedData } from './getters'
import { getBattlepass } from '../../../common/db/getters'

import { arrayToHexString } from '../../../common/tools'
import { ObjectNotExistsWarn } from '../../../common/errors'


async function handleBattlepassUpdatedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const [battlepassId, battlepassName, cid, price] = getBattlepassUpdatedData(ctx, event)
    let bpassId = arrayToHexString(battlepassId)

    let battlepass = await getBattlepass(ctx.store, bpassId)
    if (!battlepass) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Battlepass', bpassId))
        return
    }

    if (battlepassName) battlepass.name = battlepassName.toString()
    if (price) battlepass.price = BigInt(price)
    if (cid) battlepass.cid = cid.toString()

    await ctx.store.save(battlepass)
}

export { handleBattlepassUpdatedEvent }
