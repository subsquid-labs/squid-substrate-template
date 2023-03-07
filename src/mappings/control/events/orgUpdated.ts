import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getOrgUpdatedData } from './getters'
import { getOrg } from '../../../common/db/getters'
import { upsertIdentity } from '../../../common/db/identity'
import { storage } from '../../../storage'

import { addressCodec, arrayToHexString } from '../../../common/tools'
import { ObjectNotExistsWarn, StorageNotExistsWarn } from '../../../common/errors'


async function handleOrgUpdatedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const eventData = getOrgUpdatedData(ctx, event)
    let orgId = arrayToHexString(eventData.orgId)

    const storageData = await storage.control.getOrgStorageData(ctx, block.header, eventData.orgId)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(name, 'Org', orgId))
        return
    }

    let org = await getOrg(ctx.store, orgId);
    if (!org) {
        ctx.log.warn(ObjectNotExistsWarn(name, 'Org', orgId))
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
    if (storageData.name) {
        org.name = storageData.name.toString();
    }
    if (storageData.cid) {
        org.cid = storageData.cid.toString();
    }

    org.updatedAtBlock = block.header.height;

    await ctx.store.save(org);
}

export { handleOrgUpdatedEvent };
