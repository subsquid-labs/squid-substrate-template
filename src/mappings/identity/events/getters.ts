import {
    IdentityIdentityClearedEvent,
} from '../../../types/generated/events'
import { EventContext } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'


interface IdentityData {
    who: Uint8Array,
}

export function getIdentityClearedData(ctx: EventContext): IdentityData {
    const event = new IdentityIdentityClearedEvent(ctx)
    if (event.isV63) {
        const { who, deposit } = event.asV63
        return { who }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
