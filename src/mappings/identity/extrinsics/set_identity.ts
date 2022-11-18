import { CallHandlerContext } from '../../types/contexts'
import { getIdentitySetData } from './getters'

import { IdentityUpsertData } from '../../types/identity';
import { upsertIdentity } from '../../util/db/identity'

import { hexStringToString } from '../../util/helpers';
import { getOriginAccountId } from '../../../common/tools'


async function handleIdentitySetExtrinsic(ctx: CallHandlerContext) {
	const callData = getIdentitySetData(ctx)

	const getValue = (data: string | undefined) => (data ? hexStringToString(data) : null)

	const origin = getOriginAccountId(ctx.call.origin)
    if (!origin) {
        ctx.log.warn(`Origin for set_identity is null`)
        return
    }

	const upsertData: IdentityUpsertData = {
		address: origin,
		displayName: getValue(callData.info.display.value),
		legalName: getValue(callData.info.legal.value),
		email: getValue(callData.info.email.value),
		riot: getValue(callData.info.riot?.value),
		image: getValue(callData.info.image?.value),
		twitter: getValue(callData.info.twitter?.value),
		web: getValue(callData.info.web?.value),
		web3name: null,
		discord: null
		// TODO: these fields belong to IdentityInfo::additional vector
		// web3name: getValue(callData.info.web3name?.__kind),
		// discord: getValue(callData.info.discord?.__kind),
	};

	await upsertIdentity(ctx.store, upsertData.address, upsertData);

}

export { handleIdentitySetExtrinsic };
