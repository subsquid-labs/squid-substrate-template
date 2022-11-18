import { EventHandlerContext } from '../../types/contexts'
import { getOrgCreatedData } from './getters'

import { getOrg } from '../../util/db/getters'
import { upsertIdentity } from '../../util/db/identity'
import { Organization } from '../../../model'
import { upsertOrganizationMetadata } from '../../util/ipfs/metadata'
import { fetchOrgMetadata } from '../../util/ipfs/getters'
import { storage } from '../../../storage'

import { hashToHexString } from '../../util/helpers'
import { ObjectExistsWarn, StorageNotExistsWarn } from '../../../common/errors'


async function handleOrgCreatedEvent(ctx: EventHandlerContext) {
	const eventData = getOrgCreatedData(ctx)
	let orgId = hashToHexString(eventData.orgId)
	let treasury = hashToHexString(eventData.treasuryId)

	if (await getOrg(ctx.store, orgId)) {
		ctx.log.warn(ObjectExistsWarn('Org', orgId))
		return
	}

	const storageData = await storage.control.getOrgStorageData(ctx, eventData.orgId)
    if (!storageData) {
		ctx.log.warn(StorageNotExistsWarn(ctx.event.name, orgId))
		return
    }
	const stateStorageData = await storage.control.getOrgStateStorageData(ctx, eventData.orgId)
    if (!stateStorageData) {
		ctx.log.warn(StorageNotExistsWarn(ctx.event.name, orgId))
		return
    }

	let creator = hashToHexString(storageData.creator)
	let prime = hashToHexString(storageData.prime)

	let creatorIdentity = await upsertIdentity(ctx.store, creator, null)
	let primeIdentity = await upsertIdentity(ctx.store, prime, null)
	let treasuryIdentity = await upsertIdentity(ctx.store, treasury, null);

	let org = new Organization()
	org.id = orgId
	org.creator = creator
	org.creatorIdentity = creatorIdentity
	org.prime = prime
	org.primeIdentity = primeIdentity
	org.treasury = treasury
	org.treasuryIdentity = treasuryIdentity
	org.accessModel = storageData.accessModel.__kind
	org.feeModel = storageData.feeModel.__kind
	org.type = storageData.orgType.__kind
	org.membershipFee = storageData.membershipFee
	org.createdAtBlock = storageData.created
	org.updatedAtBlock = storageData.mutated

	org.state = stateStorageData
	org.govCurrency = storageData.govCurrency?.value.__kind // ProtocolTokenId
	org.payCurrency = storageData.payCurrency?.value.__kind // PaymentTokenId
	org.memberLimit = storageData.memberLimit

	// TODO: ASAP add deposit to the event
	// org.deposit = eventData.deposit;
	org.deposit = BigInt(10 ^ 10) // 1 GAME Dollar (default)

	// Check if cid is valid, fetch metadata from ipfs
	let metadata = await fetchOrgMetadata(storageData.cid.toString(), orgId)
	if (metadata) {
		org.metadata = await upsertOrganizationMetadata(ctx.store, storageData.cid.toString(), metadata)
	}

	await ctx.store.save(org)
}

export { handleOrgCreatedEvent }
