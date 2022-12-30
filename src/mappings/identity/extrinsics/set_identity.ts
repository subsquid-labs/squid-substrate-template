import { Context, Block } from '../../../processor'
import { Call } from '../../../types/generated/support'
import { Data } from '../../../types/generated/v63'


import { SubstrateCall } from '@subsquid/substrate-processor'
import { getIdentitySetData } from './getters'

import { upsertIdentity, IdentityUpsertData } from '../../../common/db/identity'

import { getOriginAccountId } from '../../../common/tools'


async function handleIdentitySetExtrinsic(ctx: Context, block: Block, call: Call, name: string) {
    const callData = getIdentitySetData(ctx, call)
    const c = call as SubstrateCall
    const origin = getOriginAccountId(c.origin)
    if (!origin) {
        ctx.log.warn(`Origin for set_identity is null`)
        return
    }

    const upsertData: IdentityUpsertData = {
        address: origin,
        displayName: getValue(callData.display),
        legalName: getValue(callData.legal),
        email: getValue(callData.email),
        riot: getValue(callData.riot),
        image: getValue(callData.image),
        twitter: getValue(callData.twitter),
        web: getValue(callData.web),
        web3name: getFromAdditional('web3name', callData.additional),
        discord: getFromAdditional('discord', callData.additional),
    };

    await upsertIdentity(ctx.store, upsertData.address, upsertData);

}

const getValue = (data: Data) => data.__kind == 'None' ? null : data.value.toString()

function getFromAdditional(name: string, additional: [Data, Data][]) {
    if (!additional) {
        return null
    }
    additional.forEach((field) => {
        const [k, v] = field
        if (k.__kind == name) {
            return getValue(v)
        }
    })
}

export { handleIdentitySetExtrinsic };
