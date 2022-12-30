import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getMemberRemovedData } from './getters'
import { getOrgMember } from '../../../common/db/getters'

import { arrayToHexString, addressCodec } from '../../../common/tools'
import { ObjectNotExistsWarn } from '../../../common/errors'


async function handleMemberRemovedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const eventData = getMemberRemovedData(ctx, event)
    let address = addressCodec.encode(eventData.who)
    let orgId = arrayToHexString(eventData.orgId)

    let member = await getOrgMember(ctx.store, orgId, address)
    if (!member) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Member', `${orgId}-${address}`.toLowerCase()))
        return
    }

    await ctx.store.remove(member)
}

export { handleMemberRemovedEvent }
