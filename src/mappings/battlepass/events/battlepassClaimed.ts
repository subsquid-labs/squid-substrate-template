import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getBattlepassClaimedData } from './getters'
import { getBattlepass } from '../../util/db/getters'
import { upsertIdentity } from '../../util/db/identity'
import { storage } from '../../../storage'

import { arrayToHexString, addressCodec } from '../../util/helpers'
import { StorageNotExistsWarn, ObjectNotExistsWarn } from '../../../common/errors'
import { BattlepassNft } from '../../../model'


async function handleBattlepassClaimedEvent(ctx: Context, block: Block, event: Event, name: string) {
	const [ claimerAddress, battlepassId ] = getBattlepassClaimedData(ctx, event)
	let bpassId = arrayToHexString(battlepassId)
	let claimer = addressCodec.encode(claimerAddress)

	let battlepass = await getBattlepass(ctx.store, bpassId)
	if (!battlepass) {
		ctx.log.warn(ObjectNotExistsWarn(name, 'Battlepass', bpassId))
		return
	}
	const nftData = await storage.battlepass.getBattlepassNftStorageData(ctx, block.header, battlepassId, claimerAddress)
    if (!nftData) {
		ctx.log.warn(StorageNotExistsWarn(name, 'BattlepassNft', bpassId))
		return
    }

	let nft = new BattlepassNft()
	nft.id = nftData.nftId.toString()
	nft.collectionId = nftData.collectionId
	nft.battlepass = battlepass
	nft.owner = await upsertIdentity(ctx.store, claimer, null)

	await ctx.store.save(nft)
}

export { handleBattlepassClaimedEvent }
