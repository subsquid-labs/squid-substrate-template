import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getBattlepassClaimedData } from './getters'
import { getBattlepass, getNft } from '../../../common/db/getters'
import { upsertIdentity } from '../../../common/db/identity'

import { arrayToHexString, addressCodec } from '../../../common/tools'
import { ObjectNotExistsWarn } from '../../../common/errors'
import { BattlepassNft } from '../../../model'


async function handleBattlepassClaimedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const [ claimerAddress, battlepassId, nftId ] = getBattlepassClaimedData(ctx, event)
    let bpassId = arrayToHexString(battlepassId)
    let claimer = addressCodec.encode(claimerAddress)

    let battlepass = await getBattlepass(ctx.store, bpassId)
    if (!battlepass) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Battlepass', bpassId))
        return
    }
    let nft = await getNft(ctx.store, nftId.toString())
    if (!nft) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Nft', nftId))
        return
    }

    let bNft = new BattlepassNft()
    bNft.id = nftId.toString()
    bNft.battlepass = battlepass
    bNft.owner = await upsertIdentity(ctx.store, claimer, null)
    bNft.nft = nft

    await ctx.store.save(bNft)
}

export { handleBattlepassClaimedEvent }
