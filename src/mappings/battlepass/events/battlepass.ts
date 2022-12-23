import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getBattlepassEndedData, getBattlepassActivatedData } from './getters'
import { getBattlepass } from '../../util/db/getters'
import { storage } from '../../../storage'

import { arrayToHexString } from '../../util/helpers'
import { StorageNotExistsWarn, ObjectNotExistsWarn } from '../../../common/errors'


const getData: Record<string, (context: any, event: any) => Uint8Array > = {
	'Battlepass.BattlepassActivated': getBattlepassActivatedData,
	'Battlepass.BattlepassEnded': getBattlepassEndedData,
}


async function handleBattlepassEvent(ctx: Context, block: Block, event: Event, name: string) {
	if (!(name in getData)) {
		ctx.log.warn(`Unknown Battlepass event: ${name}`)
		return
	}
	let bpassIdArray = getData[name](ctx, event)
	let bpassId = arrayToHexString(bpassIdArray)

	let battlepass = await getBattlepass(ctx.store, bpassId)
	if (!battlepass) {
		ctx.log.warn(ObjectNotExistsWarn(name, 'Battlepass', bpassId))
		return
	}
	const state = await storage.battlepass.getBattlepassStateStorageData(ctx, block.header, bpassIdArray)
    if (!state) {
		ctx.log.warn(StorageNotExistsWarn(name, 'BattlepassState', bpassId))
		return
    }

	battlepass.state = state.__kind

	await ctx.store.save(battlepass)
}

export { handleBattlepassEvent }
