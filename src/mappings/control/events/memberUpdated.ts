import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getMemberUpdatedData } from './getters'
import { getOrgMember } from '../../../common/db/getters'

import { arrayToHexString, addressCodec } from '../../../common/tools'
import { ObjectNotExistsWarn } from '../../../common/errors'


async function handleMemberUpdatedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const [ memberAddress, memberOrgId, state ] = getMemberUpdatedData(ctx, event)
    let address = addressCodec.encode(memberAddress)
    let orgId = arrayToHexString(memberOrgId)

    let member = await getOrgMember(ctx.store, orgId, address)
    if (!member) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Member', `${orgId}-${address}`.toLowerCase()))
        return
    }
    member.state = state.__kind

    await ctx.store.save(member)
}

export { handleMemberUpdatedEvent }
