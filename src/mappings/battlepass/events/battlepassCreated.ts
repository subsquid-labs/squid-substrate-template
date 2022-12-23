import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getBattlepassCreatedData } from './getters'
import { getBattlepass, getOrg } from '../../util/db/getters'
import { upsertIdentity } from '../../util/db/identity'
import { Battlepass } from '../../../model'
import { storage } from '../../../storage'

import { arrayToHexString, addressCodec } from '../../util/helpers'
import { ObjectExistsWarn, StorageNotExistsWarn, ObjectNotExistsWarn } from '../../../common/errors'


async function handleBattlepassCreatedEvent(ctx: Context, block: Block, event: Event, name: string) {
	const battlepassId = getBattlepassCreatedData(ctx, event)
	let bpassId = arrayToHexString(battlepassId)

	if (await getBattlepass(ctx.store, bpassId)) {
		ctx.log.warn(ObjectExistsWarn(name, 'Battlepass', bpassId))
		return
	}
	const bpassData = await storage.battlepass.getBattlepassStorageData(ctx, block.header, battlepassId)
    if (!bpassData) {
		ctx.log.warn(StorageNotExistsWarn(name, 'Battlepass', bpassId))
		return
    }
	let orgId = arrayToHexString(bpassData.orgId)
	let org = await getOrg(ctx.store, orgId)
	if (!org) {
		ctx.log.warn(ObjectNotExistsWarn(name, 'Org', orgId))
		return
	}
	const state = await storage.battlepass.getBattlepassStateStorageData(ctx, block.header, battlepassId)
    if (!state) {
		ctx.log.warn(StorageNotExistsWarn(name, 'BattlepassState', bpassId))
		return
    }

	let creator = addressCodec.encode(bpassData.creator)
	let creatorIdentity = await upsertIdentity(ctx.store, creator, null)

	let battlepass = new Battlepass()
	battlepass.id = bpassId
	battlepass.collectionId = bpassData.collectionId
	battlepass.creator = creatorIdentity
	battlepass.org = org
	battlepass.name = bpassData.name.toString()
	battlepass.state = state.__kind
	battlepass.season = bpassData.season.toString()
	battlepass.price = BigInt(bpassData.price)
	battlepass.createdAtBlock = block.header.height
	battlepass.updatedAtBlock = block.header.height
	battlepass.cid = bpassData.cid.toString()

	await ctx.store.save(battlepass)
}

export { handleBattlepassCreatedEvent }
