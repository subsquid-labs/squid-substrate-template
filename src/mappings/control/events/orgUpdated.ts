import { EventHandlerContext } from '../../types/contexts'
import { getOrgUpdatedData } from './getters'

import { getOrg } from '../../util/db/getters'
import { upsertIdentity } from '../../util/db/identity'

import { addressCodec, hashToHexString } from '../../util/helpers'
import { ObjectNotExistsWarn } from '../../../common/errors'


async function handleOrgUpdatedEvent(ctx: EventHandlerContext) {
	const eventData = getOrgUpdatedData(ctx)
	let orgId = hashToHexString(eventData.orgId)

	let org = await getOrg(ctx.store, orgId);
	if (!org) {
		ctx.log.warn(ObjectNotExistsWarn('Org', orgId))
		return
	}

	if (eventData.primeId) {
		let primeId = addressCodec.encode(eventData.primeId);
		org.prime = primeId;
		org.primeIdentity = await upsertIdentity(ctx.store, primeId, null);
	}
	if (eventData.orgType) {
		org.type = eventData.orgType.__kind;
	}
	if (eventData.accessModel) {
		org.accessModel = eventData.accessModel.__kind;
	}
	if (eventData.feeModel) {
		org.feeModel = eventData.feeModel.__kind;
	}
	if (eventData.memberLimit) {
		org.memberLimit = eventData.memberLimit;
	}
	if (eventData.memberLimit) {
		org.membershipFee = eventData.membershipFee;
	}

	org.updatedAtBlock = ctx.block.height;

	await ctx.store.save(org);
}

export { handleOrgUpdatedEvent };
