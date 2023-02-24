import { Event } from '../../../types/generated/support'
import { Context } from '../../../processor'

import { IdentityIdentityClearedEvent } from '../../../types/generated/events'
import { UnknownVersionError } from '../../../common/errors'


export function getIdentityClearedData(ctx: Context, ev: Event): Uint8Array {
    const event = new IdentityIdentityClearedEvent(ctx, ev)
    if (event.isV68) {
        const { who, deposit } = event.asV68
        return who
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
