import { Context, Block } from '../../../processor'
import { getCurrencyValue } from '../../../common/tools'
import { Event } from '../../../types/generated/support'

import { getOrgCreatedData } from './getters'
import { getOrg } from '../../util/db/getters'
import { upsertIdentity } from '../../util/db/identity'
import { Organization } from '../../../model'
import { fetchOrgMetadata } from '../../util/ipfs/getters'
import { storage } from '../../../storage'

import { arrayToHexString, slugify, addressCodec } from '../../util/helpers'
import { ObjectExistsWarn, StorageNotExistsWarn } from '../../../common/errors'


async function handleOrgCreatedEvent(ctx: Context, block: Block, event: Event, name: string) {
	const eventData = getOrgCreatedData(ctx, event)
	let orgId = arrayToHexString(eventData.orgId)
	let treasury = addressCodec.encode(eventData.treasuryId)

	if (await getOrg(ctx.store, orgId)) {
		ctx.log.warn(ObjectExistsWarn(name, 'Org', orgId))
		return
	}

	const storageData = await storage.control.getOrgStorageData(ctx, block.header, eventData.orgId)
    if (!storageData) {
		ctx.log.warn(StorageNotExistsWarn(name, 'Org', orgId))
		return
    }
	const orgState = await storage.control.getOrgStateStorageData(ctx, block.header, eventData.orgId)
    if (!orgState) {
		ctx.log.warn(StorageNotExistsWarn(name, 'OrgState', orgId))
		return
    }

	let creator = addressCodec.encode(storageData.creator)
	let prime = addressCodec.encode(storageData.prime)

	let creatorIdentity = await upsertIdentity(ctx.store, creator, null)
	let primeIdentity = await upsertIdentity(ctx.store, prime, null)
	let treasuryIdentity = await upsertIdentity(ctx.store, treasury, null)

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
	org.state = orgState.__kind
	org.govCurrency = getCurrencyValue(storageData.govCurrency) // ProtocolTokenId
	org.payCurrency = getCurrencyValue(storageData.payCurrency) // PaymentTokenId
	org.memberLimit = storageData.memberLimit
	// TODO: add deposit to the event
	// org.deposit = eventData.deposit;
	org.deposit = BigInt(10 ^ 10) // 1 GAME Dollar (default)
	org.cid = storageData.cid.toString()

	// Fetch metadata from ipfs
	let metadata = await fetchOrgMetadata(storageData.cid.toString(), orgId)
	org.name = metadata?.name ?? ''
	org.description = metadata?.description ?? ''
	org.website = metadata?.website ?? ''
	org.email = metadata?.email ?? ''
	org.repo = metadata?.repo ?? ''
	org.logo = metadata?.logo ?? ''
	org.header = metadata?.header ?? ''

	// TODO: pottential duplicates, there is no uniqueness check implemented
	// TODO: if the "name" was updated on IPFS, we have no callback to update the slug
	org.slug = slugify(org.name)

	await ctx.store.save(org)
}

export { handleOrgCreatedEvent }
