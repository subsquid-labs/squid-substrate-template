import { Context, Block } from '../../../processor'
import { Event } from '../../../types/generated/support'

import { getIdentityClearedData } from './getters'
import { upsertIdentity, IdentityUpsertData } from '../../../common/db/identity'

import { addressCodec } from '../../../common/tools'

async function handleIdentityClearedEvent(ctx: Context, block: Block, event: Event, name: string) {
    const who = getIdentityClearedData(ctx, event)
    let address = addressCodec.encode(who)

    const upsertData: IdentityUpsertData = {
        address: address,
        displayName: null,
        legalName: null,
        email: null,
        riot: null,
        image: null,
        twitter: null,
        web: null,
        web3name: null,
        discord: null,
    };

    await upsertIdentity(ctx.store, upsertData.address, upsertData);
}

export { handleIdentityClearedEvent };
