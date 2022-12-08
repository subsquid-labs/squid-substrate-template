import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getMemberAddedData } from './getters'
import { getOrg, getOrgMember } from '../../util/db/getters'
import { upsertIdentity } from '../../util/db/identity'
import { OrganizationMember } from '../../../model'
import { storage } from '../../../storage'

import { arrayToHexString, addressCodec } from '../../util/helpers'
import { ObjectExistsWarn, ObjectNotExistsWarn, StorageNotExistsWarn } from '../../../common/errors'


async function handleMemberAddedEvent(ctx: Context, block: Block, event: Event, name: string) {
	const eventData = getMemberAddedData(ctx, event)
	let address = addressCodec.encode(eventData.who)
	let orgId = arrayToHexString(eventData.orgId)

	if (await getOrgMember(ctx.store, orgId, address)) {
		ctx.log.warn(ObjectExistsWarn(name, 'Member', `${orgId}-${address}`.toLowerCase()))
		return
	}
	const org = await getOrg(ctx.store, orgId)
	if (!org) {
		ctx.log.warn(ObjectNotExistsWarn(name, 'Org', orgId))
		return
	}

	// TODO: maybe pass state over Event?
	const memberState = await storage.control.getMemberStateStorageData(
		ctx, block.header, eventData.orgId, eventData.who
	)
    if (!memberState) {
		ctx.log.warn(StorageNotExistsWarn(name, 'OrgState', orgId))
		return
    }

	const member = new OrganizationMember()
	member.id = `${orgId}-${address}`.toLowerCase()
	member.state = memberState.__kind
	member.organization = org
	member.address = address
	member.identity = await upsertIdentity(ctx.store, address, null)

	await ctx.store.save(member)
}

export { handleMemberAddedEvent }
