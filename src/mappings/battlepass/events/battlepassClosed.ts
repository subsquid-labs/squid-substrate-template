import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getBattlepassClosedData } from './getters'
import { getBattlepass } from '../../util/db/getters'
import { storage } from '../../../storage'

import { arrayToHexString } from '../../util/helpers'
import { StorageNotExistsWarn, ObjectNotExistsWarn } from '../../../common/errors'


async function handleBattlepassClosedEvent(ctx: Context, block: Block, event: Event, name: string) {
	let battlepassId = getBattlepassClosedData(ctx, event)
	let bpassId = arrayToHexString(battlepassId)

	let battlepass = await getBattlepass(ctx.store, bpassId)
	if (!battlepass) {
		ctx.log.warn(ObjectNotExistsWarn(name, 'Battlepass', bpassId))
		return
	}
	const state = await storage.battlepass.getBattlepassStateStorageData(ctx, block.header, battlepassId)
    if (!state) {
		ctx.log.warn(StorageNotExistsWarn(name, 'BattlepassState', bpassId))
		return
    }

	battlepass.state = state.__kind

	await ctx.store.save(battlepass)
}

export { handleBattlepassClosedEvent }
