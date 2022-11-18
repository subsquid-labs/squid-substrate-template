import { IdentityInfo } from '../../../types/generated/v63'
import { IdentitySetIdentityCall } from '../../../types/generated/calls'
import { CallContext } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'


interface IdentitySetData {
    info: IdentityInfo
}

export function getIdentitySetData(ctx: CallContext): IdentitySetData {
    const call = new IdentitySetIdentityCall(ctx)
    if (call.isV63) {
        const { info } = call.asV63
        return { info }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}
