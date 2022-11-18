import { EventHandlerContext } from '../../types/contexts'
import { getMemberAddedData } from './getters'

import { getOrg, getOrgMember } from '../../util/db/getters'
import { upsertIdentity } from '../../util/db/identity'
import { OrganizationMember } from '../../../model'

import { hashToHexString, addressCodec } from '../../util/helpers'
import { ObjectExistsWarn, ObjectNotExistsWarn } from '../../../common/errors'


async function handleMemberAddedEvent(ctx: EventHandlerContext) {
	const eventData = getMemberAddedData(ctx)
	let address = addressCodec.encode(eventData.who)
	let orgId = hashToHexString(eventData.orgId)

	if (await getOrgMember(ctx.store, orgId, address)) {
		ctx.log.warn(ObjectExistsWarn('Member', `${orgId}-${address}`.toLowerCase()))
		return
	}

	const org = await getOrg(ctx.store, orgId)
	if (!org) {
		ctx.log.warn(ObjectNotExistsWarn('Org', orgId))
		return
	}

	const member = new OrganizationMember()
	member.id = `${orgId}-${address}`.toLowerCase()
	member.organization = org
	member.address = address
	member.identity = await upsertIdentity(ctx.store, address, null)

	await ctx.store.save(member)
}

export { handleMemberAddedEvent }
