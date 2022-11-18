import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v63 from './v63'

export class ControlFundsSpendedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Control.FundsSpended')
    this._chain = ctx._chain
    this.event = event
  }

  get isV63(): boolean {
    return this._chain.getEventHash('Control.FundsSpended') === '099c5be51a66396abb273e830e2058b941aad39f3071d1634c96f9b293f58a04'
  }

  get asV63(): {orgId: Uint8Array, beneficiary: Uint8Array, amount: bigint, currencyId: v63.CurrencyId, blockNumber: number} {
    assert(this.isV63)
    return this._chain.decodeEvent(this.event)
  }
}

export class ControlMemberAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Control.MemberAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A member has been added to the Org.
   */
  get isV63(): boolean {
    return this._chain.getEventHash('Control.MemberAdded') === 'c57cca31f3dcf3e0516f54aad1cbcd104d3e4afc717e4fb5667c8c9e8b1d1e27'
  }

  /**
   * A member has been added to the Org.
   */
  get asV63(): {orgId: Uint8Array, who: Uint8Array, blockNumber: number} {
    assert(this.isV63)
    return this._chain.decodeEvent(this.event)
  }
}

export class ControlMemberRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Control.MemberRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A member has been removed from the Org.
   */
  get isV63(): boolean {
    return this._chain.getEventHash('Control.MemberRemoved') === 'c57cca31f3dcf3e0516f54aad1cbcd104d3e4afc717e4fb5667c8c9e8b1d1e27'
  }

  /**
   * A member has been removed from the Org.
   */
  get asV63(): {orgId: Uint8Array, who: Uint8Array, blockNumber: number} {
    assert(this.isV63)
    return this._chain.decodeEvent(this.event)
  }
}

export class ControlOrgCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Control.OrgCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Org was successfully created.
   */
  get isV63(): boolean {
    return this._chain.getEventHash('Control.OrgCreated') === '6dc87039cf7ad8828c149f473dd3d7aabd1dd4c9e85e2f729bf294df9474ccc1'
  }

  /**
   * Org was successfully created.
   */
  get asV63(): {orgId: Uint8Array, creator: Uint8Array, treasuryId: Uint8Array, createdAt: number, realmIndex: bigint} {
    assert(this.isV63)
    return this._chain.decodeEvent(this.event)
  }
}

export class ControlOrgDisabledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Control.OrgDisabled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Org was disabled and it's state become Inactive.
   */
  get isV63(): boolean {
    return this._chain.getEventHash('Control.OrgDisabled') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * Org was disabled and it's state become Inactive.
   */
  get asV63(): Uint8Array {
    assert(this.isV63)
    return this._chain.decodeEvent(this.event)
  }
}

export class ControlOrgEnabledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Control.OrgEnabled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Org was enabled and it's state become Active.
   */
  get isV63(): boolean {
    return this._chain.getEventHash('Control.OrgEnabled') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * Org was enabled and it's state become Active.
   */
  get asV63(): Uint8Array {
    assert(this.isV63)
    return this._chain.decodeEvent(this.event)
  }
}

export class ControlOrgUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Control.OrgUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  get isV63(): boolean {
    return this._chain.getEventHash('Control.OrgUpdated') === '56e286ff0883c501a4abbab304815f66e27195e490410248f38fdd3ec39562a4'
  }

  get asV63(): {orgId: Uint8Array, primeId: (Uint8Array | undefined), orgType: (v63.OrgType | undefined), accessModel: (v63.AccessModel | undefined), memberLimit: (number | undefined), feeModel: (v63.FeeModel | undefined), membershipFee: (bigint | undefined), blockNumber: number} {
    assert(this.isV63)
    return this._chain.decodeEvent(this.event)
  }
}

export class FlowActivatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Flow.Activated')
    this._chain = ctx._chain
    this.event = event
  }

  get isV63(): boolean {
    return this._chain.getEventHash('Flow.Activated') === '1298080916d3502103b1b010f17c51ff90da4cfa7278463486275e928c258bc5'
  }

  get asV63(): {campaignId: Uint8Array} {
    assert(this.isV63)
    return this._chain.decodeEvent(this.event)
  }
}

export class FlowContributedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Flow.Contributed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Campaign was contributed.
   */
  get isV63(): boolean {
    return this._chain.getEventHash('Flow.Contributed') === 'd8db14008bc916744d2223c9ae64c77e900996ff702695e41ec566ede7ee72db'
  }

  /**
   * Campaign was contributed.
   */
  get asV63(): {campaignId: Uint8Array, sender: Uint8Array, contribution: bigint, blockNumber: number} {
    assert(this.isV63)
    return this._chain.decodeEvent(this.event)
  }
}

export class FlowCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Flow.Created')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Campaign was successfully created.
   */
  get isV63(): boolean {
    return this._chain.getEventHash('Flow.Created') === 'ff2ecea79f1fe30537e2d7e89f486cb3705ec64411ac17525c02b4c7369601c4'
  }

  /**
   * Campaign was successfully created.
   */
  get asV63(): {campaignId: Uint8Array, creator: Uint8Array, admin: Uint8Array, target: bigint, deposit: bigint, expiry: number, name: Uint8Array} {
    assert(this.isV63)
    return this._chain.decodeEvent(this.event)
  }
}

export class FlowFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Flow.Failed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Campaign failed - successfully reverted.
   */
  get isV63(): boolean {
    return this._chain.getEventHash('Flow.Failed') === '8c26af8c0dbcf4eedccfc26b2eaa166ab0f2b6cd9cb14b67768380ced0d0251b'
  }

  /**
   * Campaign failed - successfully reverted.
   */
  get asV63(): {campaignId: Uint8Array, campaignBalance: bigint, blockNumber: number} {
    assert(this.isV63)
    return this._chain.decodeEvent(this.event)
  }
}

export class FlowSucceededEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Flow.Succeeded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Campaign was finalized.
   */
  get isV63(): boolean {
    return this._chain.getEventHash('Flow.Succeeded') === '8c26af8c0dbcf4eedccfc26b2eaa166ab0f2b6cd9cb14b67768380ced0d0251b'
  }

  /**
   * Campaign was finalized.
   */
  get asV63(): {campaignId: Uint8Array, campaignBalance: bigint, blockNumber: number} {
    assert(this.isV63)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentityIdentityClearedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.IdentityCleared')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A name was cleared, and the given balance returned.
   */
  get isV63(): boolean {
    return this._chain.getEventHash('Identity.IdentityCleared') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
  }

  /**
   * A name was cleared, and the given balance returned.
   */
  get asV63(): {who: Uint8Array, deposit: bigint} {
    assert(this.isV63)
    return this._chain.decodeEvent(this.event)
  }
}

export class SenseEntityCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Sense.EntityCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New Sense Entity was created.
   */
  get isV63(): boolean {
    return this._chain.getEventHash('Sense.EntityCreated') === 'd3f988a96c009c7a300ad9d1a0a932132d9cf8dea1768ddfe92a0cb29894fe4a'
  }

  /**
   * New Sense Entity was created.
   */
  get asV63(): {accountId: Uint8Array, blockNumber: number} {
    assert(this.isV63)
    return this._chain.decodeEvent(this.event)
  }
}

export class SensePropertyUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Sense.PropertyUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Property was updated.
   */
  get isV63(): boolean {
    return this._chain.getEventHash('Sense.PropertyUpdated') === '0157fb72fdc70f6e0e7ea46a8962076e41d58d3a328d02f9a1c027127ad8d048'
  }

  /**
   * Property was updated.
   */
  get asV63(): {propertyType: v63.PropertyType, accountId: Uint8Array, blockNumber: number} {
    assert(this.isV63)
    return this._chain.decodeEvent(this.event)
  }
}
