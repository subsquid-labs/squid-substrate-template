import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result, Option} from './support'
import * as v70 from './v70'

export class AllianceAllyDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The deposit required for submitting candidacy.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Alliance', 'AllyDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The deposit required for submitting candidacy.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Alliance', 'AllyDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Alliance', 'AllyDeposit') != null
  }
}

export class AllianceMaxAnnouncementsCountConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of announcements.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Alliance', 'MaxAnnouncementsCount') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of announcements.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Alliance', 'MaxAnnouncementsCount')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Alliance', 'MaxAnnouncementsCount') != null
  }
}

export class AllianceMaxMembersCountConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of members per member role.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Alliance', 'MaxMembersCount') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of members per member role.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Alliance', 'MaxMembersCount')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Alliance', 'MaxMembersCount') != null
  }
}

export class AllianceMaxUnscrupulousItemsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of the unscrupulous items supported by the pallet.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Alliance', 'MaxUnscrupulousItems') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of the unscrupulous items supported by the pallet.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Alliance', 'MaxUnscrupulousItems')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Alliance', 'MaxUnscrupulousItems') != null
  }
}

export class AllianceMaxWebsiteUrlLengthConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of a website URL.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Alliance', 'MaxWebsiteUrlLength') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of a website URL.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Alliance', 'MaxWebsiteUrlLength')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Alliance', 'MaxWebsiteUrlLength') != null
  }
}

export class AssetsApprovalDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of funds that must be reserved when creating a new approval.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Assets', 'ApprovalDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount of funds that must be reserved when creating a new approval.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Assets', 'ApprovalDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Assets', 'ApprovalDeposit') != null
  }
}

export class AssetsAssetAccountDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of funds that must be reserved for a non-provider asset account to be
   *  maintained.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Assets', 'AssetAccountDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount of funds that must be reserved for a non-provider asset account to be
   *  maintained.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Assets', 'AssetAccountDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Assets', 'AssetAccountDeposit') != null
  }
}

export class AssetsAssetDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The basic amount of funds that must be reserved for an asset.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Assets', 'AssetDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The basic amount of funds that must be reserved for an asset.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Assets', 'AssetDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Assets', 'AssetDeposit') != null
  }
}

export class AssetsMetadataDepositBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The basic amount of funds that must be reserved when adding metadata to your asset.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Assets', 'MetadataDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The basic amount of funds that must be reserved when adding metadata to your asset.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Assets', 'MetadataDepositBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Assets', 'MetadataDepositBase') != null
  }
}

export class AssetsMetadataDepositPerByteConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The additional funds that must be reserved for the number of bytes you store in your
   *  metadata.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Assets', 'MetadataDepositPerByte') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The additional funds that must be reserved for the number of bytes you store in your
   *  metadata.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Assets', 'MetadataDepositPerByte')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Assets', 'MetadataDepositPerByte') != null
  }
}

export class AssetsRemoveItemsLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Max number of items to destroy per `destroy_accounts` and `destroy_approvals` call.
   * 
   *  Must be configured to result in a weight that makes each call fit in a block.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Assets', 'RemoveItemsLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Max number of items to destroy per `destroy_accounts` and `destroy_approvals` call.
   * 
   *  Must be configured to result in a weight that makes each call fit in a block.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Assets', 'RemoveItemsLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Assets', 'RemoveItemsLimit') != null
  }
}

export class AssetsStringLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of a name or symbol stored on-chain.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Assets', 'StringLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of a name or symbol stored on-chain.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Assets', 'StringLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Assets', 'StringLimit') != null
  }
}

export class AuthorshipUncleGenerationsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The number of blocks back we should accept uncles.
   *  This means that we will deal with uncle-parents that are
   *  `UncleGenerations + 1` before `now`.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Authorship', 'UncleGenerations') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The number of blocks back we should accept uncles.
   *  This means that we will deal with uncle-parents that are
   *  `UncleGenerations + 1` before `now`.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Authorship', 'UncleGenerations')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Authorship', 'UncleGenerations') != null
  }
}

export class BabeEpochDurationConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of time, in slots, that each epoch should last.
   *  NOTE: Currently it is not possible to change the epoch duration after
   *  the chain has started. Attempting to do so will brick block production.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Babe', 'EpochDuration') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
  }

  /**
   *  The amount of time, in slots, that each epoch should last.
   *  NOTE: Currently it is not possible to change the epoch duration after
   *  the chain has started. Attempting to do so will brick block production.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Babe', 'EpochDuration')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Babe', 'EpochDuration') != null
  }
}

export class BabeExpectedBlockTimeConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The expected average block time at which BABE should be creating
   *  blocks. Since BABE is probabilistic it is not trivial to figure out
   *  what the expected average block time should be based on the slot
   *  duration and the security parameter `c` (where `1 - c` represents
   *  the probability of a slot being empty).
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Babe', 'ExpectedBlockTime') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
  }

  /**
   *  The expected average block time at which BABE should be creating
   *  blocks. Since BABE is probabilistic it is not trivial to figure out
   *  what the expected average block time should be based on the slot
   *  duration and the security parameter `c` (where `1 - c` represents
   *  the probability of a slot being empty).
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Babe', 'ExpectedBlockTime')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Babe', 'ExpectedBlockTime') != null
  }
}

export class BabeMaxAuthoritiesConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Max number of authorities allowed
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Babe', 'MaxAuthorities') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Max number of authorities allowed
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Babe', 'MaxAuthorities')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Babe', 'MaxAuthorities') != null
  }
}

export class BalancesExistentialDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum amount required to keep an account open.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Balances', 'ExistentialDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The minimum amount required to keep an account open.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Balances', 'ExistentialDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Balances', 'ExistentialDeposit') != null
  }
}

export class BalancesMaxLocksConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of locks that should exist on an account.
   *  Not strictly enforced, but used for weight estimation.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Balances', 'MaxLocks') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of locks that should exist on an account.
   *  Not strictly enforced, but used for weight estimation.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Balances', 'MaxLocks')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Balances', 'MaxLocks') != null
  }
}

export class BalancesMaxReservesConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of named reserves that can exist on an account.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Balances', 'MaxReserves') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of named reserves that can exist on an account.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Balances', 'MaxReserves')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Balances', 'MaxReserves') != null
  }
}

export class BattlepassNativeTokenIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The CurrencyId which is used as a native token.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Battlepass', 'NativeTokenId') === '86bfb6fcd70ec00dd5e7c9cd581374602768dbd15c90e1ff08b05b8bfde79617'
  }

  /**
   *  The CurrencyId which is used as a native token.
   */
  get asV70(): v70.CurrencyId {
    assert(this.isV70)
    return this._chain.getConstant('Battlepass', 'NativeTokenId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Battlepass', 'NativeTokenId') != null
  }
}

export class BattlepassProtocolTokenIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The CurrencyId which is used as a protokol token.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Battlepass', 'ProtocolTokenId') === '86bfb6fcd70ec00dd5e7c9cd581374602768dbd15c90e1ff08b05b8bfde79617'
  }

  /**
   *  The CurrencyId which is used as a protokol token.
   */
  get asV70(): v70.CurrencyId {
    assert(this.isV70)
    return this._chain.getConstant('Battlepass', 'ProtocolTokenId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Battlepass', 'ProtocolTokenId') != null
  }
}

export class BattlepassStringLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of a name, cid or metadata strings stored on-chain.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Battlepass', 'StringLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of a name, cid or metadata strings stored on-chain.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Battlepass', 'StringLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Battlepass', 'StringLimit') != null
  }
}

export class BountiesBountyDepositBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount held on deposit for placing a bounty proposal.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Bounties', 'BountyDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount held on deposit for placing a bounty proposal.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Bounties', 'BountyDepositBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Bounties', 'BountyDepositBase') != null
  }
}

export class BountiesBountyDepositPayoutDelayConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The delay period for which a bounty beneficiary need to wait before claim the payout.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Bounties', 'BountyDepositPayoutDelay') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The delay period for which a bounty beneficiary need to wait before claim the payout.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Bounties', 'BountyDepositPayoutDelay')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Bounties', 'BountyDepositPayoutDelay') != null
  }
}

export class BountiesBountyUpdatePeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Bounty duration in blocks.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Bounties', 'BountyUpdatePeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Bounty duration in blocks.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Bounties', 'BountyUpdatePeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Bounties', 'BountyUpdatePeriod') != null
  }
}

export class BountiesBountyValueMinimumConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Minimum value for a bounty.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Bounties', 'BountyValueMinimum') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Minimum value for a bounty.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Bounties', 'BountyValueMinimum')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Bounties', 'BountyValueMinimum') != null
  }
}

export class BountiesCuratorDepositMaxConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum amount of funds that should be placed in a deposit for making a proposal.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Bounties', 'CuratorDepositMax') === 'bfdfd10c88945fb3fe1590ea01f6a3e70d37a6e37ae5abf44fdde45ecc525302'
  }

  /**
   *  Maximum amount of funds that should be placed in a deposit for making a proposal.
   */
  get asV70(): (bigint | undefined) {
    assert(this.isV70)
    return this._chain.getConstant('Bounties', 'CuratorDepositMax')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Bounties', 'CuratorDepositMax') != null
  }
}

export class BountiesCuratorDepositMinConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Minimum amount of funds that should be placed in a deposit for making a proposal.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Bounties', 'CuratorDepositMin') === 'bfdfd10c88945fb3fe1590ea01f6a3e70d37a6e37ae5abf44fdde45ecc525302'
  }

  /**
   *  Minimum amount of funds that should be placed in a deposit for making a proposal.
   */
  get asV70(): (bigint | undefined) {
    assert(this.isV70)
    return this._chain.getConstant('Bounties', 'CuratorDepositMin')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Bounties', 'CuratorDepositMin') != null
  }
}

export class BountiesCuratorDepositMultiplierConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The curator deposit is calculated as a percentage of the curator fee.
   * 
   *  This deposit has optional upper and lower bounds with `CuratorDepositMax` and
   *  `CuratorDepositMin`.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Bounties', 'CuratorDepositMultiplier') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The curator deposit is calculated as a percentage of the curator fee.
   * 
   *  This deposit has optional upper and lower bounds with `CuratorDepositMax` and
   *  `CuratorDepositMin`.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Bounties', 'CuratorDepositMultiplier')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Bounties', 'CuratorDepositMultiplier') != null
  }
}

export class BountiesDataDepositPerByteConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount held on deposit per byte within the tip report reason or bounty description.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Bounties', 'DataDepositPerByte') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount held on deposit per byte within the tip report reason or bounty description.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Bounties', 'DataDepositPerByte')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Bounties', 'DataDepositPerByte') != null
  }
}

export class BountiesMaximumReasonLengthConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum acceptable reason length.
   * 
   *  Benchmarks depend on this value, be sure to update weights file when changing this value
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Bounties', 'MaximumReasonLength') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maximum acceptable reason length.
   * 
   *  Benchmarks depend on this value, be sure to update weights file when changing this value
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Bounties', 'MaximumReasonLength')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Bounties', 'MaximumReasonLength') != null
  }
}

export class ChildBountiesChildBountyValueMinimumConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Minimum value for a child-bounty.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('ChildBounties', 'ChildBountyValueMinimum') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Minimum value for a child-bounty.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('ChildBounties', 'ChildBountyValueMinimum')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ChildBounties', 'ChildBountyValueMinimum') != null
  }
}

export class ChildBountiesMaxActiveChildBountyCountConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum number of child bounties that can be added to a parent bounty.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('ChildBounties', 'MaxActiveChildBountyCount') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maximum number of child bounties that can be added to a parent bounty.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('ChildBounties', 'MaxActiveChildBountyCount')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ChildBounties', 'MaxActiveChildBountyCount') != null
  }
}

export class ContractsDeletionQueueDepthConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of contracts that can be pending for deletion.
   * 
   *  When a contract is deleted by calling `seal_terminate` it becomes inaccessible
   *  immediately, but the deletion of the storage items it has accumulated is performed
   *  later. The contract is put into the deletion queue. This defines how many
   *  contracts can be queued up at the same time. If that limit is reached `seal_terminate`
   *  will fail. The action must be retried in a later block in that case.
   * 
   *  The reasons for limiting the queue depth are:
   * 
   *  1. The queue is in storage in order to be persistent between blocks. We want to limit
   *  	the amount of storage that can be consumed.
   *  2. The queue is stored in a vector and needs to be decoded as a whole when reading
   * 		it at the end of each block. Longer queues take more weight to decode and hence
   * 		limit the amount of items that can be deleted per block.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Contracts', 'DeletionQueueDepth') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of contracts that can be pending for deletion.
   * 
   *  When a contract is deleted by calling `seal_terminate` it becomes inaccessible
   *  immediately, but the deletion of the storage items it has accumulated is performed
   *  later. The contract is put into the deletion queue. This defines how many
   *  contracts can be queued up at the same time. If that limit is reached `seal_terminate`
   *  will fail. The action must be retried in a later block in that case.
   * 
   *  The reasons for limiting the queue depth are:
   * 
   *  1. The queue is in storage in order to be persistent between blocks. We want to limit
   *  	the amount of storage that can be consumed.
   *  2. The queue is stored in a vector and needs to be decoded as a whole when reading
   * 		it at the end of each block. Longer queues take more weight to decode and hence
   * 		limit the amount of items that can be deleted per block.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Contracts', 'DeletionQueueDepth')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Contracts', 'DeletionQueueDepth') != null
  }
}

export class ContractsDeletionWeightLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum amount of weight that can be consumed per block for lazy trie removal.
   * 
   *  The amount of weight that is dedicated per block to work on the deletion queue. Larger
   *  values allow more trie keys to be deleted in each block but reduce the amount of
   *  weight that is left for transactions. See [`Self::DeletionQueueDepth`] for more
   *  information about the deletion queue.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Contracts', 'DeletionWeightLimit') === 'c92b1d8d51239cdf34de2cc7cfa9141c62b02aaf420c1b8dfaf8d16d158d95b5'
  }

  /**
   *  The maximum amount of weight that can be consumed per block for lazy trie removal.
   * 
   *  The amount of weight that is dedicated per block to work on the deletion queue. Larger
   *  values allow more trie keys to be deleted in each block but reduce the amount of
   *  weight that is left for transactions. See [`Self::DeletionQueueDepth`] for more
   *  information about the deletion queue.
   */
  get asV70(): v70.Weight {
    assert(this.isV70)
    return this._chain.getConstant('Contracts', 'DeletionWeightLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Contracts', 'DeletionWeightLimit') != null
  }
}

export class ContractsDepositPerByteConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of balance a caller has to pay for each byte of storage.
   * 
   *  # Note
   * 
   *  Changing this value for an existing chain might need a storage migration.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Contracts', 'DepositPerByte') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount of balance a caller has to pay for each byte of storage.
   * 
   *  # Note
   * 
   *  Changing this value for an existing chain might need a storage migration.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Contracts', 'DepositPerByte')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Contracts', 'DepositPerByte') != null
  }
}

export class ContractsDepositPerItemConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of balance a caller has to pay for each storage item.
   * 
   *  # Note
   * 
   *  Changing this value for an existing chain might need a storage migration.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Contracts', 'DepositPerItem') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount of balance a caller has to pay for each storage item.
   * 
   *  # Note
   * 
   *  Changing this value for an existing chain might need a storage migration.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Contracts', 'DepositPerItem')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Contracts', 'DepositPerItem') != null
  }
}

export class ContractsMaxCodeLenConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of a contract code in bytes. This limit applies to the instrumented
   *  version of the code. Therefore `instantiate_with_code` can fail even when supplying
   *  a wasm binary below this maximum size.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Contracts', 'MaxCodeLen') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of a contract code in bytes. This limit applies to the instrumented
   *  version of the code. Therefore `instantiate_with_code` can fail even when supplying
   *  a wasm binary below this maximum size.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Contracts', 'MaxCodeLen')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Contracts', 'MaxCodeLen') != null
  }
}

export class ContractsMaxDebugBufferLenConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of the debug buffer in bytes.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Contracts', 'MaxDebugBufferLen') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of the debug buffer in bytes.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Contracts', 'MaxDebugBufferLen')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Contracts', 'MaxDebugBufferLen') != null
  }
}

export class ContractsMaxStorageKeyLenConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum allowable length in bytes for storage keys.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Contracts', 'MaxStorageKeyLen') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum allowable length in bytes for storage keys.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Contracts', 'MaxStorageKeyLen')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Contracts', 'MaxStorageKeyLen') != null
  }
}

export class ContractsScheduleConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Cost schedule and limits.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Contracts', 'Schedule') === 'bcd850ceb84a6ede641f824675f946047b1ee3ee10f12912dde970d562583391'
  }

  /**
   *  Cost schedule and limits.
   */
  get asV70(): v70.Schedule {
    assert(this.isV70)
    return this._chain.getConstant('Contracts', 'Schedule')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Contracts', 'Schedule') != null
  }
}

export class ContractsUnsafeUnstableInterfaceConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Make contract callable functions marked as `#[unstable]` available.
   * 
   *  Contracts that use `#[unstable]` functions won't be able to be uploaded unless
   *  this is set to `true`. This is only meant for testnets and dev nodes in order to
   *  experiment with new features.
   * 
   *  # Warning
   * 
   *  Do **not** set to `true` on productions chains.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Contracts', 'UnsafeUnstableInterface') === 'ad6087d319c50ed2bab855d7787007597248f7ed5d13382638d7da078264028b'
  }

  /**
   *  Make contract callable functions marked as `#[unstable]` available.
   * 
   *  Contracts that use `#[unstable]` functions won't be able to be uploaded unless
   *  this is set to `true`. This is only meant for testnets and dev nodes in order to
   *  experiment with new features.
   * 
   *  # Warning
   * 
   *  Do **not** set to `true` on productions chains.
   */
  get asV70(): boolean {
    assert(this.isV70)
    return this._chain.getConstant('Contracts', 'UnsafeUnstableInterface')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Contracts', 'UnsafeUnstableInterface') != null
  }
}

export class ControlMaxMembersConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The max number of members per one org.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Control', 'MaxMembers') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The max number of members per one org.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Control', 'MaxMembers')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Control', 'MaxMembers') != null
  }
}

export class ControlMinimumDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The min amount of the deposit which is locked during Org creation (in Protocol tokens).
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Control', 'MinimumDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The min amount of the deposit which is locked during Org creation (in Protocol tokens).
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Control', 'MinimumDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Control', 'MinimumDeposit') != null
  }
}

export class ControlPalletIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The ID for this pallet.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Control', 'PalletId') === 'c963e59c8e5b7d761234cd0f2cb1f219effb76c998fa93783afd994aed82a434'
  }

  /**
   *  The ID for this pallet.
   */
  get asV70(): Uint8Array {
    assert(this.isV70)
    return this._chain.getConstant('Control', 'PalletId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Control', 'PalletId') != null
  }
}

export class ControlPaymentTokenIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The CurrencyId which is used as a payment token.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Control', 'PaymentTokenId') === '86bfb6fcd70ec00dd5e7c9cd581374602768dbd15c90e1ff08b05b8bfde79617'
  }

  /**
   *  The CurrencyId which is used as a payment token.
   */
  get asV70(): v70.CurrencyId {
    assert(this.isV70)
    return this._chain.getConstant('Control', 'PaymentTokenId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Control', 'PaymentTokenId') != null
  }
}

export class ControlProtocolTokenIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The CurrencyId which is used as a protokol token.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Control', 'ProtocolTokenId') === '86bfb6fcd70ec00dd5e7c9cd581374602768dbd15c90e1ff08b05b8bfde79617'
  }

  /**
   *  The CurrencyId which is used as a protokol token.
   */
  get asV70(): v70.CurrencyId {
    assert(this.isV70)
    return this._chain.getConstant('Control', 'ProtocolTokenId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Control', 'ProtocolTokenId') != null
  }
}

export class ControlStringLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of a name or cid stored on-chain.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Control', 'StringLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of a name or cid stored on-chain.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Control', 'StringLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Control', 'StringLimit') != null
  }
}

export class ConvictionVotingMaxVotesConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of concurrent votes an account may have.
   * 
   *  Also used to compute weight, an overly large value can lead to extrinsics with large
   *  weight estimation: see `delegate` for instance.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('ConvictionVoting', 'MaxVotes') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of concurrent votes an account may have.
   * 
   *  Also used to compute weight, an overly large value can lead to extrinsics with large
   *  weight estimation: see `delegate` for instance.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('ConvictionVoting', 'MaxVotes')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ConvictionVoting', 'MaxVotes') != null
  }
}

export class ConvictionVotingVoteLockingPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum period of vote locking.
   * 
   *  It should be no shorter than enactment period to ensure that in the case of an approval,
   *  those successful voters are locked into the consequences that their votes entail.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('ConvictionVoting', 'VoteLockingPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The minimum period of vote locking.
   * 
   *  It should be no shorter than enactment period to ensure that in the case of an approval,
   *  those successful voters are locked into the consequences that their votes entail.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('ConvictionVoting', 'VoteLockingPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ConvictionVoting', 'VoteLockingPeriod') != null
  }
}

export class CurrenciesGetNativeCurrencyIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  get isV70() {
    return this._chain.getConstantTypeHash('Currencies', 'GetNativeCurrencyId') === '86bfb6fcd70ec00dd5e7c9cd581374602768dbd15c90e1ff08b05b8bfde79617'
  }

  get asV70(): v70.CurrencyId {
    assert(this.isV70)
    return this._chain.getConstant('Currencies', 'GetNativeCurrencyId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Currencies', 'GetNativeCurrencyId') != null
  }
}

export class DemocracyCooloffPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Period in blocks where an external proposal may not be re-submitted after being vetoed.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Democracy', 'CooloffPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Period in blocks where an external proposal may not be re-submitted after being vetoed.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Democracy', 'CooloffPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'CooloffPeriod') != null
  }
}

export class DemocracyEnactmentPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The period between a proposal being approved and enacted.
   * 
   *  It should generally be a little more than the unstake period to ensure that
   *  voting stakers have an opportunity to remove themselves from the system in the case
   *  where they are on the losing side of a vote.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Democracy', 'EnactmentPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The period between a proposal being approved and enacted.
   * 
   *  It should generally be a little more than the unstake period to ensure that
   *  voting stakers have an opportunity to remove themselves from the system in the case
   *  where they are on the losing side of a vote.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Democracy', 'EnactmentPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'EnactmentPeriod') != null
  }
}

export class DemocracyFastTrackVotingPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Minimum voting period allowed for a fast-track referendum.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Democracy', 'FastTrackVotingPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Minimum voting period allowed for a fast-track referendum.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Democracy', 'FastTrackVotingPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'FastTrackVotingPeriod') != null
  }
}

export class DemocracyInstantAllowedConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Indicator for whether an emergency origin is even allowed to happen. Some chains may
   *  want to set this permanently to `false`, others may want to condition it on things such
   *  as an upgrade having happened recently.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Democracy', 'InstantAllowed') === 'ad6087d319c50ed2bab855d7787007597248f7ed5d13382638d7da078264028b'
  }

  /**
   *  Indicator for whether an emergency origin is even allowed to happen. Some chains may
   *  want to set this permanently to `false`, others may want to condition it on things such
   *  as an upgrade having happened recently.
   */
  get asV70(): boolean {
    assert(this.isV70)
    return this._chain.getConstant('Democracy', 'InstantAllowed')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'InstantAllowed') != null
  }
}

export class DemocracyLaunchPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  How often (in blocks) new public referenda are launched.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Democracy', 'LaunchPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  How often (in blocks) new public referenda are launched.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Democracy', 'LaunchPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'LaunchPeriod') != null
  }
}

export class DemocracyMaxBlacklistedConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of items which can be blacklisted.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Democracy', 'MaxBlacklisted') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of items which can be blacklisted.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Democracy', 'MaxBlacklisted')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'MaxBlacklisted') != null
  }
}

export class DemocracyMaxDepositsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of deposits a public proposal may have at any time.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Democracy', 'MaxDeposits') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of deposits a public proposal may have at any time.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Democracy', 'MaxDeposits')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'MaxDeposits') != null
  }
}

export class DemocracyMaxProposalsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of public proposals that can exist at any time.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Democracy', 'MaxProposals') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of public proposals that can exist at any time.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Democracy', 'MaxProposals')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'MaxProposals') != null
  }
}

export class DemocracyMaxVotesConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of votes for an account.
   * 
   *  Also used to compute weight, an overly big value can
   *  lead to extrinsic with very big weight: see `delegate` for instance.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Democracy', 'MaxVotes') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of votes for an account.
   * 
   *  Also used to compute weight, an overly big value can
   *  lead to extrinsic with very big weight: see `delegate` for instance.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Democracy', 'MaxVotes')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'MaxVotes') != null
  }
}

export class DemocracyMinimumDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum amount to be used as a deposit for a public referendum proposal.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Democracy', 'MinimumDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The minimum amount to be used as a deposit for a public referendum proposal.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Democracy', 'MinimumDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'MinimumDeposit') != null
  }
}

export class DemocracyVoteLockingPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum period of vote locking.
   * 
   *  It should be no shorter than enactment period to ensure that in the case of an approval,
   *  those successful voters are locked into the consequences that their votes entail.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Democracy', 'VoteLockingPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The minimum period of vote locking.
   * 
   *  It should be no shorter than enactment period to ensure that in the case of an approval,
   *  those successful voters are locked into the consequences that their votes entail.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Democracy', 'VoteLockingPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'VoteLockingPeriod') != null
  }
}

export class DemocracyVotingPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  How often (in blocks) to check for new votes.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Democracy', 'VotingPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  How often (in blocks) to check for new votes.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Democracy', 'VotingPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'VotingPeriod') != null
  }
}

export class ElectionProviderMultiPhaseBetterSignedThresholdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum amount of improvement to the solution score that defines a solution as
   *  "better" in the Signed phase.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'BetterSignedThreshold') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The minimum amount of improvement to the solution score that defines a solution as
   *  "better" in the Signed phase.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('ElectionProviderMultiPhase', 'BetterSignedThreshold')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'BetterSignedThreshold') != null
  }
}

export class ElectionProviderMultiPhaseBetterUnsignedThresholdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum amount of improvement to the solution score that defines a solution as
   *  "better" in the Unsigned phase.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'BetterUnsignedThreshold') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The minimum amount of improvement to the solution score that defines a solution as
   *  "better" in the Unsigned phase.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('ElectionProviderMultiPhase', 'BetterUnsignedThreshold')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'BetterUnsignedThreshold') != null
  }
}

export class ElectionProviderMultiPhaseMaxElectableTargetsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of electable targets to put in the snapshot.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'MaxElectableTargets') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
  }

  /**
   *  The maximum number of electable targets to put in the snapshot.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('ElectionProviderMultiPhase', 'MaxElectableTargets')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'MaxElectableTargets') != null
  }
}

export class ElectionProviderMultiPhaseMaxElectingVotersConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of electing voters to put in the snapshot. At the moment, snapshots
   *  are only over a single block, but once multi-block elections are introduced they will
   *  take place over multiple blocks.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'MaxElectingVoters') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of electing voters to put in the snapshot. At the moment, snapshots
   *  are only over a single block, but once multi-block elections are introduced they will
   *  take place over multiple blocks.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('ElectionProviderMultiPhase', 'MaxElectingVoters')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'MaxElectingVoters') != null
  }
}

export class ElectionProviderMultiPhaseMaxWinnersConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of winners that can be elected by this `ElectionProvider`
   *  implementation.
   * 
   *  Note: This must always be greater or equal to `T::DataProvider::desired_targets()`.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'MaxWinners') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of winners that can be elected by this `ElectionProvider`
   *  implementation.
   * 
   *  Note: This must always be greater or equal to `T::DataProvider::desired_targets()`.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('ElectionProviderMultiPhase', 'MaxWinners')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'MaxWinners') != null
  }
}

export class ElectionProviderMultiPhaseMinerMaxLengthConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  get isV70() {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'MinerMaxLength') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('ElectionProviderMultiPhase', 'MinerMaxLength')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'MinerMaxLength') != null
  }
}

export class ElectionProviderMultiPhaseMinerMaxVotesPerVoterConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  get isV70() {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'MinerMaxVotesPerVoter') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('ElectionProviderMultiPhase', 'MinerMaxVotesPerVoter')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'MinerMaxVotesPerVoter') != null
  }
}

export class ElectionProviderMultiPhaseMinerMaxWeightConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  get isV70() {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'MinerMaxWeight') === 'c92b1d8d51239cdf34de2cc7cfa9141c62b02aaf420c1b8dfaf8d16d158d95b5'
  }

  get asV70(): v70.Weight {
    assert(this.isV70)
    return this._chain.getConstant('ElectionProviderMultiPhase', 'MinerMaxWeight')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'MinerMaxWeight') != null
  }
}

export class ElectionProviderMultiPhaseMinerTxPriorityConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The priority of the unsigned transaction submitted in the unsigned-phase
   */
  get isV70() {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'MinerTxPriority') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
  }

  /**
   *  The priority of the unsigned transaction submitted in the unsigned-phase
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('ElectionProviderMultiPhase', 'MinerTxPriority')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'MinerTxPriority') != null
  }
}

export class ElectionProviderMultiPhaseOffchainRepeatConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The repeat threshold of the offchain worker.
   * 
   *  For example, if it is 5, that means that at least 5 blocks will elapse between attempts
   *  to submit the worker's solution.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'OffchainRepeat') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The repeat threshold of the offchain worker.
   * 
   *  For example, if it is 5, that means that at least 5 blocks will elapse between attempts
   *  to submit the worker's solution.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('ElectionProviderMultiPhase', 'OffchainRepeat')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'OffchainRepeat') != null
  }
}

export class ElectionProviderMultiPhaseSignedDepositBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Base deposit for a signed solution.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'SignedDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Base deposit for a signed solution.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('ElectionProviderMultiPhase', 'SignedDepositBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'SignedDepositBase') != null
  }
}

export class ElectionProviderMultiPhaseSignedDepositByteConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Per-byte deposit for a signed solution.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'SignedDepositByte') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Per-byte deposit for a signed solution.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('ElectionProviderMultiPhase', 'SignedDepositByte')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'SignedDepositByte') != null
  }
}

export class ElectionProviderMultiPhaseSignedDepositWeightConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Per-weight deposit for a signed solution.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'SignedDepositWeight') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Per-weight deposit for a signed solution.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('ElectionProviderMultiPhase', 'SignedDepositWeight')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'SignedDepositWeight') != null
  }
}

export class ElectionProviderMultiPhaseSignedMaxRefundsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum amount of unchecked solutions to refund the call fee for.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'SignedMaxRefunds') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum amount of unchecked solutions to refund the call fee for.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('ElectionProviderMultiPhase', 'SignedMaxRefunds')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'SignedMaxRefunds') != null
  }
}

export class ElectionProviderMultiPhaseSignedMaxSubmissionsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum number of signed submissions that can be queued.
   * 
   *  It is best to avoid adjusting this during an election, as it impacts downstream data
   *  structures. In particular, `SignedSubmissionIndices<T>` is bounded on this value. If you
   *  update this value during an election, you _must_ ensure that
   *  `SignedSubmissionIndices.len()` is less than or equal to the new value. Otherwise,
   *  attempts to submit new solutions may cause a runtime panic.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'SignedMaxSubmissions') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maximum number of signed submissions that can be queued.
   * 
   *  It is best to avoid adjusting this during an election, as it impacts downstream data
   *  structures. In particular, `SignedSubmissionIndices<T>` is bounded on this value. If you
   *  update this value during an election, you _must_ ensure that
   *  `SignedSubmissionIndices.len()` is less than or equal to the new value. Otherwise,
   *  attempts to submit new solutions may cause a runtime panic.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('ElectionProviderMultiPhase', 'SignedMaxSubmissions')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'SignedMaxSubmissions') != null
  }
}

export class ElectionProviderMultiPhaseSignedMaxWeightConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum weight of a signed solution.
   * 
   *  If [`Config::MinerConfig`] is being implemented to submit signed solutions (outside of
   *  this pallet), then [`MinerConfig::solution_weight`] is used to compare against
   *  this value.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'SignedMaxWeight') === 'c92b1d8d51239cdf34de2cc7cfa9141c62b02aaf420c1b8dfaf8d16d158d95b5'
  }

  /**
   *  Maximum weight of a signed solution.
   * 
   *  If [`Config::MinerConfig`] is being implemented to submit signed solutions (outside of
   *  this pallet), then [`MinerConfig::solution_weight`] is used to compare against
   *  this value.
   */
  get asV70(): v70.Weight {
    assert(this.isV70)
    return this._chain.getConstant('ElectionProviderMultiPhase', 'SignedMaxWeight')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'SignedMaxWeight') != null
  }
}

export class ElectionProviderMultiPhaseSignedPhaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Duration of the signed phase.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'SignedPhase') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Duration of the signed phase.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('ElectionProviderMultiPhase', 'SignedPhase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'SignedPhase') != null
  }
}

export class ElectionProviderMultiPhaseSignedRewardBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Base reward for a signed solution
   */
  get isV70() {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'SignedRewardBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Base reward for a signed solution
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('ElectionProviderMultiPhase', 'SignedRewardBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'SignedRewardBase') != null
  }
}

export class ElectionProviderMultiPhaseUnsignedPhaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Duration of the unsigned phase.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'UnsignedPhase') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Duration of the unsigned phase.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('ElectionProviderMultiPhase', 'UnsignedPhase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ElectionProviderMultiPhase', 'UnsignedPhase') != null
  }
}

export class ElectionsCandidacyBondConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  How much should be locked up in order to submit one's candidacy.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Elections', 'CandidacyBond') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  How much should be locked up in order to submit one's candidacy.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Elections', 'CandidacyBond')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'CandidacyBond') != null
  }
}

export class ElectionsDesiredMembersConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Number of members to elect.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Elections', 'DesiredMembers') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Number of members to elect.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Elections', 'DesiredMembers')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'DesiredMembers') != null
  }
}

export class ElectionsDesiredRunnersUpConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Number of runners_up to keep.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Elections', 'DesiredRunnersUp') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Number of runners_up to keep.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Elections', 'DesiredRunnersUp')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'DesiredRunnersUp') != null
  }
}

export class ElectionsMaxCandidatesConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of candidates in a phragmen election.
   * 
   *  Warning: The election happens onchain, and this value will determine
   *  the size of the election. When this limit is reached no more
   *  candidates are accepted in the election.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Elections', 'MaxCandidates') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of candidates in a phragmen election.
   * 
   *  Warning: The election happens onchain, and this value will determine
   *  the size of the election. When this limit is reached no more
   *  candidates are accepted in the election.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Elections', 'MaxCandidates')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'MaxCandidates') != null
  }
}

export class ElectionsMaxVotersConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of voters to allow in a phragmen election.
   * 
   *  Warning: This impacts the size of the election which is run onchain.
   *  When the limit is reached the new voters are ignored.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Elections', 'MaxVoters') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of voters to allow in a phragmen election.
   * 
   *  Warning: This impacts the size of the election which is run onchain.
   *  When the limit is reached the new voters are ignored.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Elections', 'MaxVoters')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'MaxVoters') != null
  }
}

export class ElectionsPalletIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Identifier for the elections-phragmen pallet's lock
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Elections', 'PalletId') === 'c963e59c8e5b7d761234cd0f2cb1f219effb76c998fa93783afd994aed82a434'
  }

  /**
   *  Identifier for the elections-phragmen pallet's lock
   */
  get asV70(): Uint8Array {
    assert(this.isV70)
    return this._chain.getConstant('Elections', 'PalletId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'PalletId') != null
  }
}

export class ElectionsTermDurationConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  How long each seat is kept. This defines the next block number at which an election
   *  round will happen. If set to zero, no elections are ever triggered and the module will
   *  be in passive mode.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Elections', 'TermDuration') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  How long each seat is kept. This defines the next block number at which an election
   *  round will happen. If set to zero, no elections are ever triggered and the module will
   *  be in passive mode.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Elections', 'TermDuration')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'TermDuration') != null
  }
}

export class ElectionsVotingBondBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Base deposit associated with voting.
   * 
   *  This should be sensibly high to economically ensure the pallet cannot be attacked by
   *  creating a gigantic number of votes.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Elections', 'VotingBondBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Base deposit associated with voting.
   * 
   *  This should be sensibly high to economically ensure the pallet cannot be attacked by
   *  creating a gigantic number of votes.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Elections', 'VotingBondBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'VotingBondBase') != null
  }
}

export class ElectionsVotingBondFactorConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of bond that need to be locked for each vote (32 bytes).
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Elections', 'VotingBondFactor') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount of bond that need to be locked for each vote (32 bytes).
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Elections', 'VotingBondFactor')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'VotingBondFactor') != null
  }
}

export class FlowCampaignDurationLimitsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Default time limit for a campaign in blocks.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Flow', 'CampaignDurationLimits') === '89667797236ba996cee700097e48264fab1c5603dc68df58a8ff56acf2809f5c'
  }

  /**
   *  Default time limit for a campaign in blocks.
   */
  get asV70(): [number, number] {
    assert(this.isV70)
    return this._chain.getConstant('Flow', 'CampaignDurationLimits')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Flow', 'CampaignDurationLimits') != null
  }
}

export class FlowCampaignFeeConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of comission to be paid from the Org treasury to GameDAO treasury
   *  after successfull Campaign finalization
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Flow', 'CampaignFee') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The amount of comission to be paid from the Org treasury to GameDAO treasury
   *  after successfull Campaign finalization
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Flow', 'CampaignFee')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Flow', 'CampaignFee') != null
  }
}

export class FlowGameDAOTreasuryConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The GameDAO Treasury AccountId.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Flow', 'GameDAOTreasury') === 'cc28a7f7046ec4d0eb3419e4aa142bf25c25992e58d0e8646eb029c7c6b4c0c8'
  }

  /**
   *  The GameDAO Treasury AccountId.
   */
  get asV70(): Uint8Array {
    assert(this.isV70)
    return this._chain.getConstant('Flow', 'GameDAOTreasury')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Flow', 'GameDAOTreasury') != null
  }
}

export class FlowMaxCampaignContributorsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The max number of contributors per one Campaign.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Flow', 'MaxCampaignContributors') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The max number of contributors per one Campaign.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Flow', 'MaxCampaignContributors')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Flow', 'MaxCampaignContributors') != null
  }
}

export class FlowMaxCampaignsPerBlockConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The max number of campaigns per one block.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Flow', 'MaxCampaignsPerBlock') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The max number of campaigns per one block.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Flow', 'MaxCampaignsPerBlock')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Flow', 'MaxCampaignsPerBlock') != null
  }
}

export class FlowMaxContributorsProcessingConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The max number of contributors for processing in one block (batch size)
   *  during Campaign finalization.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Flow', 'MaxContributorsProcessing') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The max number of contributors for processing in one block (batch size)
   *  during Campaign finalization.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Flow', 'MaxContributorsProcessing')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Flow', 'MaxContributorsProcessing') != null
  }
}

export class FlowMinCampaignDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The min campaign deposit - fraction of a target, default 10%
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Flow', 'MinCampaignDeposit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The min campaign deposit - fraction of a target, default 10%
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Flow', 'MinCampaignDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Flow', 'MinCampaignDeposit') != null
  }
}

export class FlowMinContributionConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The min contribution amount in payment tokens
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Flow', 'MinContribution') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The min contribution amount in payment tokens
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Flow', 'MinContribution')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Flow', 'MinContribution') != null
  }
}

export class FlowMinNameLengthConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The min length of a campaign name.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Flow', 'MinNameLength') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The min length of a campaign name.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Flow', 'MinNameLength')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Flow', 'MinNameLength') != null
  }
}

export class FlowPaymentTokenIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The CurrencyId which is used as a payment token.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Flow', 'PaymentTokenId') === '86bfb6fcd70ec00dd5e7c9cd581374602768dbd15c90e1ff08b05b8bfde79617'
  }

  /**
   *  The CurrencyId which is used as a payment token.
   */
  get asV70(): v70.CurrencyId {
    assert(this.isV70)
    return this._chain.getConstant('Flow', 'PaymentTokenId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Flow', 'PaymentTokenId') != null
  }
}

export class FlowProtocolTokenIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The CurrencyId which is used as a protokol token.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Flow', 'ProtocolTokenId') === '86bfb6fcd70ec00dd5e7c9cd581374602768dbd15c90e1ff08b05b8bfde79617'
  }

  /**
   *  The CurrencyId which is used as a protokol token.
   */
  get asV70(): v70.CurrencyId {
    assert(this.isV70)
    return this._chain.getConstant('Flow', 'ProtocolTokenId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Flow', 'ProtocolTokenId') != null
  }
}

export class FlowStringLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of a name or symbol stored on-chain.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Flow', 'StringLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of a name or symbol stored on-chain.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Flow', 'StringLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Flow', 'StringLimit') != null
  }
}

export class GrandpaMaxAuthoritiesConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Max Authorities in use
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Grandpa', 'MaxAuthorities') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Max Authorities in use
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Grandpa', 'MaxAuthorities')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Grandpa', 'MaxAuthorities') != null
  }
}

export class IdentityBasicDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount held on deposit for a registered identity
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Identity', 'BasicDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount held on deposit for a registered identity
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Identity', 'BasicDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Identity', 'BasicDeposit') != null
  }
}

export class IdentityFieldDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount held on deposit per additional field for a registered identity.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Identity', 'FieldDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount held on deposit per additional field for a registered identity.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Identity', 'FieldDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Identity', 'FieldDeposit') != null
  }
}

export class IdentityMaxAdditionalFieldsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
   *  required to access an identity, but can be pretty high.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Identity', 'MaxAdditionalFields') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
   *  required to access an identity, but can be pretty high.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Identity', 'MaxAdditionalFields')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Identity', 'MaxAdditionalFields') != null
  }
}

export class IdentityMaxRegistrarsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maxmimum number of registrars allowed in the system. Needed to bound the complexity
   *  of, e.g., updating judgements.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Identity', 'MaxRegistrars') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maxmimum number of registrars allowed in the system. Needed to bound the complexity
   *  of, e.g., updating judgements.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Identity', 'MaxRegistrars')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Identity', 'MaxRegistrars') != null
  }
}

export class IdentityMaxSubAccountsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of sub-accounts allowed per identified account.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Identity', 'MaxSubAccounts') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of sub-accounts allowed per identified account.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Identity', 'MaxSubAccounts')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Identity', 'MaxSubAccounts') != null
  }
}

export class IdentitySubAccountDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount held on deposit for a registered subaccount. This should account for the fact
   *  that one storage item's value will increase by the size of an account ID, and there will
   *  be another trie item whose value is the size of an account ID plus 32 bytes.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Identity', 'SubAccountDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount held on deposit for a registered subaccount. This should account for the fact
   *  that one storage item's value will increase by the size of an account ID, and there will
   *  be another trie item whose value is the size of an account ID plus 32 bytes.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Identity', 'SubAccountDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Identity', 'SubAccountDeposit') != null
  }
}

export class ImOnlineUnsignedPriorityConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  A configuration for base priority of unsigned transactions.
   * 
   *  This is exposed so that it can be tuned for particular runtime, when
   *  multiple pallets send unsigned transactions.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('ImOnline', 'UnsignedPriority') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
  }

  /**
   *  A configuration for base priority of unsigned transactions.
   * 
   *  This is exposed so that it can be tuned for particular runtime, when
   *  multiple pallets send unsigned transactions.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('ImOnline', 'UnsignedPriority')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('ImOnline', 'UnsignedPriority') != null
  }
}

export class IndicesDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The deposit needed for reserving an index.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Indices', 'Deposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The deposit needed for reserving an index.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Indices', 'Deposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Indices', 'Deposit') != null
  }
}

export class MultisigDepositBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The base amount of currency needed to reserve for creating a multisig execution or to
   *  store a dispatch call for later.
   * 
   *  This is held for an additional storage item whose value size is
   *  `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
   *  `32 + sizeof(AccountId)` bytes.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Multisig', 'DepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The base amount of currency needed to reserve for creating a multisig execution or to
   *  store a dispatch call for later.
   * 
   *  This is held for an additional storage item whose value size is
   *  `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
   *  `32 + sizeof(AccountId)` bytes.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Multisig', 'DepositBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Multisig', 'DepositBase') != null
  }
}

export class MultisigDepositFactorConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of currency needed per unit threshold when creating a multisig execution.
   * 
   *  This is held for adding 32 bytes more into a pre-existing storage value.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Multisig', 'DepositFactor') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount of currency needed per unit threshold when creating a multisig execution.
   * 
   *  This is held for adding 32 bytes more into a pre-existing storage value.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Multisig', 'DepositFactor')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Multisig', 'DepositFactor') != null
  }
}

export class MultisigMaxSignatoriesConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum amount of signatories allowed in the multisig.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Multisig', 'MaxSignatories') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum amount of signatories allowed in the multisig.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Multisig', 'MaxSignatories')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Multisig', 'MaxSignatories') != null
  }
}

export class NisBasePeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The base period for the duration queues. This is the common multiple across all
   *  supported freezing durations that can be bid upon.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Nis', 'BasePeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The base period for the duration queues. This is the common multiple across all
   *  supported freezing durations that can be bid upon.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Nis', 'BasePeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Nis', 'BasePeriod') != null
  }
}

export class NisFifoQueueLenConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Portion of the queue which is free from ordering and just a FIFO.
   * 
   *  Must be no greater than `MaxQueueLen`.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Nis', 'FifoQueueLen') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Portion of the queue which is free from ordering and just a FIFO.
   * 
   *  Must be no greater than `MaxQueueLen`.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Nis', 'FifoQueueLen')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Nis', 'FifoQueueLen') != null
  }
}

export class NisIntakePeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The number of blocks between consecutive attempts to dequeue bids and create receipts.
   * 
   *  A larger value results in fewer storage hits each block, but a slower period to get to
   *  the target.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Nis', 'IntakePeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The number of blocks between consecutive attempts to dequeue bids and create receipts.
   * 
   *  A larger value results in fewer storage hits each block, but a slower period to get to
   *  the target.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Nis', 'IntakePeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Nis', 'IntakePeriod') != null
  }
}

export class NisMaxIntakeWeightConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum amount of bids that can consolidated into receipts in a single intake. A
   *  larger value here means less of the block available for transactions should there be a
   *  glut of bids.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Nis', 'MaxIntakeWeight') === 'c92b1d8d51239cdf34de2cc7cfa9141c62b02aaf420c1b8dfaf8d16d158d95b5'
  }

  /**
   *  The maximum amount of bids that can consolidated into receipts in a single intake. A
   *  larger value here means less of the block available for transactions should there be a
   *  glut of bids.
   */
  get asV70(): v70.Weight {
    assert(this.isV70)
    return this._chain.getConstant('Nis', 'MaxIntakeWeight')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Nis', 'MaxIntakeWeight') != null
  }
}

export class NisMaxQueueLenConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum number of items that may be in each duration queue.
   * 
   *  Must be larger than zero.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Nis', 'MaxQueueLen') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maximum number of items that may be in each duration queue.
   * 
   *  Must be larger than zero.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Nis', 'MaxQueueLen')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Nis', 'MaxQueueLen') != null
  }
}

export class NisMinBidConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum amount of funds that may be placed in a bid. Note that this
   *  does not actually limit the amount which may be represented in a receipt since bids may
   *  be split up by the system.
   * 
   *  It should be at least big enough to ensure that there is no possible storage spam attack
   *  or queue-filling attack.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Nis', 'MinBid') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The minimum amount of funds that may be placed in a bid. Note that this
   *  does not actually limit the amount which may be represented in a receipt since bids may
   *  be split up by the system.
   * 
   *  It should be at least big enough to ensure that there is no possible storage spam attack
   *  or queue-filling attack.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Nis', 'MinBid')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Nis', 'MinBid') != null
  }
}

export class NisMinReceiptConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum amount of funds which may intentionally be left remaining under a single
   *  receipt.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Nis', 'MinReceipt') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
  }

  /**
   *  The minimum amount of funds which may intentionally be left remaining under a single
   *  receipt.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Nis', 'MinReceipt')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Nis', 'MinReceipt') != null
  }
}

export class NisPalletIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The treasury's pallet id, used for deriving its sovereign account ID.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Nis', 'PalletId') === 'c963e59c8e5b7d761234cd0f2cb1f219effb76c998fa93783afd994aed82a434'
  }

  /**
   *  The treasury's pallet id, used for deriving its sovereign account ID.
   */
  get asV70(): Uint8Array {
    assert(this.isV70)
    return this._chain.getConstant('Nis', 'PalletId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Nis', 'PalletId') != null
  }
}

export class NisQueueCountConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Number of duration queues in total. This sets the maximum duration supported, which is
   *  this value multiplied by `Period`.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Nis', 'QueueCount') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Number of duration queues in total. This sets the maximum duration supported, which is
   *  this value multiplied by `Period`.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Nis', 'QueueCount')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Nis', 'QueueCount') != null
  }
}

export class NisThawThrottleConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum proportion which may be thawed and the period over which it is reset.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Nis', 'ThawThrottle') === '8e9655b626359e6cd2897fc37d5361e515ecf3af5d7acb495b324de311171c80'
  }

  /**
   *  The maximum proportion which may be thawed and the period over which it is reset.
   */
  get asV70(): [bigint, number] {
    assert(this.isV70)
    return this._chain.getConstant('Nis', 'ThawThrottle')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Nis', 'ThawThrottle') != null
  }
}

export class NominationPoolsMaxPointsToBalanceConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum pool points-to-balance ratio that an `open` pool can have.
   * 
   *  This is important in the event slashing takes place and the pool's points-to-balance
   *  ratio becomes disproportional.
   * 
   *  Moreover, this relates to the `RewardCounter` type as well, as the arithmetic operations
   *  are a function of number of points, and by setting this value to e.g. 10, you ensure
   *  that the total number of points in the system are at most 10 times the total_issuance of
   *  the chain, in the absolute worse case.
   * 
   *  For a value of 10, the threshold would be a pool points-to-balance ratio of 10:1.
   *  Such a scenario would also be the equivalent of the pool being 90% slashed.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('NominationPools', 'MaxPointsToBalance') === 'afecacff3b029831d50a478055aa405254e6579585f9617d2a2f34743b4aff83'
  }

  /**
   *  The maximum pool points-to-balance ratio that an `open` pool can have.
   * 
   *  This is important in the event slashing takes place and the pool's points-to-balance
   *  ratio becomes disproportional.
   * 
   *  Moreover, this relates to the `RewardCounter` type as well, as the arithmetic operations
   *  are a function of number of points, and by setting this value to e.g. 10, you ensure
   *  that the total number of points in the system are at most 10 times the total_issuance of
   *  the chain, in the absolute worse case.
   * 
   *  For a value of 10, the threshold would be a pool points-to-balance ratio of 10:1.
   *  Such a scenario would also be the equivalent of the pool being 90% slashed.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('NominationPools', 'MaxPointsToBalance')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('NominationPools', 'MaxPointsToBalance') != null
  }
}

export class NominationPoolsPalletIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The nomination pool's pallet id.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('NominationPools', 'PalletId') === 'c963e59c8e5b7d761234cd0f2cb1f219effb76c998fa93783afd994aed82a434'
  }

  /**
   *  The nomination pool's pallet id.
   */
  get asV70(): Uint8Array {
    assert(this.isV70)
    return this._chain.getConstant('NominationPools', 'PalletId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('NominationPools', 'PalletId') != null
  }
}

export class ProxyAnnouncementDepositBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The base amount of currency needed to reserve for creating an announcement.
   * 
   *  This is held when a new storage item holding a `Balance` is created (typically 16
   *  bytes).
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Proxy', 'AnnouncementDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The base amount of currency needed to reserve for creating an announcement.
   * 
   *  This is held when a new storage item holding a `Balance` is created (typically 16
   *  bytes).
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Proxy', 'AnnouncementDepositBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Proxy', 'AnnouncementDepositBase') != null
  }
}

export class ProxyAnnouncementDepositFactorConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of currency needed per announcement made.
   * 
   *  This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
   *  into a pre-existing storage value.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Proxy', 'AnnouncementDepositFactor') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount of currency needed per announcement made.
   * 
   *  This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
   *  into a pre-existing storage value.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Proxy', 'AnnouncementDepositFactor')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Proxy', 'AnnouncementDepositFactor') != null
  }
}

export class ProxyMaxPendingConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum amount of time-delayed announcements that are allowed to be pending.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Proxy', 'MaxPending') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum amount of time-delayed announcements that are allowed to be pending.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Proxy', 'MaxPending')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Proxy', 'MaxPending') != null
  }
}

export class ProxyMaxProxiesConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum amount of proxies allowed for a single account.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Proxy', 'MaxProxies') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum amount of proxies allowed for a single account.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Proxy', 'MaxProxies')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Proxy', 'MaxProxies') != null
  }
}

export class ProxyProxyDepositBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The base amount of currency needed to reserve for creating a proxy.
   * 
   *  This is held for an additional storage item whose value size is
   *  `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Proxy', 'ProxyDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The base amount of currency needed to reserve for creating a proxy.
   * 
   *  This is held for an additional storage item whose value size is
   *  `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Proxy', 'ProxyDepositBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Proxy', 'ProxyDepositBase') != null
  }
}

export class ProxyProxyDepositFactorConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of currency needed per proxy added.
   * 
   *  This is held for adding 32 bytes plus an instance of `ProxyType` more into a
   *  pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
   *  into account `32 + proxy_type.encode().len()` bytes of data.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Proxy', 'ProxyDepositFactor') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount of currency needed per proxy added.
   * 
   *  This is held for adding 32 bytes plus an instance of `ProxyType` more into a
   *  pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
   *  into account `32 + proxy_type.encode().len()` bytes of data.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Proxy', 'ProxyDepositFactor')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Proxy', 'ProxyDepositFactor') != null
  }
}

export class RankedPollsAlarmIntervalConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Quantization level for the referendum wakeup scheduler. A higher number will result in
   *  fewer storage reads/writes needed for smaller voters, but also result in delays to the
   *  automatic referendum status changes. Explicit servicing instructions are unaffected.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('RankedPolls', 'AlarmInterval') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Quantization level for the referendum wakeup scheduler. A higher number will result in
   *  fewer storage reads/writes needed for smaller voters, but also result in delays to the
   *  automatic referendum status changes. Explicit servicing instructions are unaffected.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('RankedPolls', 'AlarmInterval')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('RankedPolls', 'AlarmInterval') != null
  }
}

export class RankedPollsMaxQueuedConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum size of the referendum queue for a single track.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('RankedPolls', 'MaxQueued') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maximum size of the referendum queue for a single track.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('RankedPolls', 'MaxQueued')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('RankedPolls', 'MaxQueued') != null
  }
}

export class RankedPollsSubmissionDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum amount to be used as a deposit for a public referendum proposal.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('RankedPolls', 'SubmissionDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The minimum amount to be used as a deposit for a public referendum proposal.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('RankedPolls', 'SubmissionDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('RankedPolls', 'SubmissionDeposit') != null
  }
}

export class RankedPollsTracksConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Information concerning the different referendum tracks.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('RankedPolls', 'Tracks') === '63884ac795662e8d9557bdfe0dc31ae592692e4763012ecde5062436b8e902b7'
  }

  /**
   *  Information concerning the different referendum tracks.
   */
  get asV70(): [number, v70.TrackInfo][] {
    assert(this.isV70)
    return this._chain.getConstant('RankedPolls', 'Tracks')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('RankedPolls', 'Tracks') != null
  }
}

export class RankedPollsUndecidingTimeoutConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The number of blocks after submission that a referendum must begin being decided by.
   *  Once this passes, then anyone may cancel the referendum.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('RankedPolls', 'UndecidingTimeout') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The number of blocks after submission that a referendum must begin being decided by.
   *  Once this passes, then anyone may cancel the referendum.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('RankedPolls', 'UndecidingTimeout')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('RankedPolls', 'UndecidingTimeout') != null
  }
}

export class RecoveryConfigDepositBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The base amount of currency needed to reserve for creating a recovery configuration.
   * 
   *  This is held for an additional storage item whose value size is
   *  `2 + sizeof(BlockNumber, Balance)` bytes.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Recovery', 'ConfigDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The base amount of currency needed to reserve for creating a recovery configuration.
   * 
   *  This is held for an additional storage item whose value size is
   *  `2 + sizeof(BlockNumber, Balance)` bytes.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Recovery', 'ConfigDepositBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Recovery', 'ConfigDepositBase') != null
  }
}

export class RecoveryFriendDepositFactorConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of currency needed per additional user when creating a recovery
   *  configuration.
   * 
   *  This is held for adding `sizeof(AccountId)` bytes more into a pre-existing storage
   *  value.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Recovery', 'FriendDepositFactor') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount of currency needed per additional user when creating a recovery
   *  configuration.
   * 
   *  This is held for adding `sizeof(AccountId)` bytes more into a pre-existing storage
   *  value.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Recovery', 'FriendDepositFactor')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Recovery', 'FriendDepositFactor') != null
  }
}

export class RecoveryMaxFriendsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum amount of friends allowed in a recovery configuration.
   * 
   *  NOTE: The threshold programmed in this Pallet uses u16, so it does
   *  not really make sense to have a limit here greater than u16::MAX.
   *  But also, that is a lot more than you should probably set this value
   *  to anyway...
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Recovery', 'MaxFriends') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum amount of friends allowed in a recovery configuration.
   * 
   *  NOTE: The threshold programmed in this Pallet uses u16, so it does
   *  not really make sense to have a limit here greater than u16::MAX.
   *  But also, that is a lot more than you should probably set this value
   *  to anyway...
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Recovery', 'MaxFriends')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Recovery', 'MaxFriends') != null
  }
}

export class RecoveryRecoveryDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The base amount of currency needed to reserve for starting a recovery.
   * 
   *  This is primarily held for deterring malicious recovery attempts, and should
   *  have a value large enough that a bad actor would choose not to place this
   *  deposit. It also acts to fund additional storage item whose value size is
   *  `sizeof(BlockNumber, Balance + T * AccountId)` bytes. Where T is a configurable
   *  threshold.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Recovery', 'RecoveryDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The base amount of currency needed to reserve for starting a recovery.
   * 
   *  This is primarily held for deterring malicious recovery attempts, and should
   *  have a value large enough that a bad actor would choose not to place this
   *  deposit. It also acts to fund additional storage item whose value size is
   *  `sizeof(BlockNumber, Balance + T * AccountId)` bytes. Where T is a configurable
   *  threshold.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Recovery', 'RecoveryDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Recovery', 'RecoveryDeposit') != null
  }
}

export class ReferendaAlarmIntervalConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Quantization level for the referendum wakeup scheduler. A higher number will result in
   *  fewer storage reads/writes needed for smaller voters, but also result in delays to the
   *  automatic referendum status changes. Explicit servicing instructions are unaffected.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Referenda', 'AlarmInterval') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Quantization level for the referendum wakeup scheduler. A higher number will result in
   *  fewer storage reads/writes needed for smaller voters, but also result in delays to the
   *  automatic referendum status changes. Explicit servicing instructions are unaffected.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Referenda', 'AlarmInterval')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Referenda', 'AlarmInterval') != null
  }
}

export class ReferendaMaxQueuedConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum size of the referendum queue for a single track.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Referenda', 'MaxQueued') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maximum size of the referendum queue for a single track.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Referenda', 'MaxQueued')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Referenda', 'MaxQueued') != null
  }
}

export class ReferendaSubmissionDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum amount to be used as a deposit for a public referendum proposal.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Referenda', 'SubmissionDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The minimum amount to be used as a deposit for a public referendum proposal.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Referenda', 'SubmissionDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Referenda', 'SubmissionDeposit') != null
  }
}

export class ReferendaTracksConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Information concerning the different referendum tracks.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Referenda', 'Tracks') === '63884ac795662e8d9557bdfe0dc31ae592692e4763012ecde5062436b8e902b7'
  }

  /**
   *  Information concerning the different referendum tracks.
   */
  get asV70(): [number, v70.TrackInfo][] {
    assert(this.isV70)
    return this._chain.getConstant('Referenda', 'Tracks')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Referenda', 'Tracks') != null
  }
}

export class ReferendaUndecidingTimeoutConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The number of blocks after submission that a referendum must begin being decided by.
   *  Once this passes, then anyone may cancel the referendum.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Referenda', 'UndecidingTimeout') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The number of blocks after submission that a referendum must begin being decided by.
   *  Once this passes, then anyone may cancel the referendum.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Referenda', 'UndecidingTimeout')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Referenda', 'UndecidingTimeout') != null
  }
}

export class SchedulerMaxScheduledPerBlockConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of scheduled calls in the queue for a single block.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Scheduler', 'MaxScheduledPerBlock') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of scheduled calls in the queue for a single block.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Scheduler', 'MaxScheduledPerBlock')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Scheduler', 'MaxScheduledPerBlock') != null
  }
}

export class SchedulerMaximumWeightConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum weight that may be scheduled per block for any dispatchables.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Scheduler', 'MaximumWeight') === 'c92b1d8d51239cdf34de2cc7cfa9141c62b02aaf420c1b8dfaf8d16d158d95b5'
  }

  /**
   *  The maximum weight that may be scheduled per block for any dispatchables.
   */
  get asV70(): v70.Weight {
    assert(this.isV70)
    return this._chain.getConstant('Scheduler', 'MaximumWeight')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Scheduler', 'MaximumWeight') != null
  }
}

export class SenseStringLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of a name or symbol stored on-chain.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Sense', 'StringLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of a name or symbol stored on-chain.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Sense', 'StringLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Sense', 'StringLimit') != null
  }
}

export class SignalGameDAOGetsFromSlashingConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  This part of slashing goes to GameDAO treasury (default: 1/4).
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Signal', 'GameDAOGetsFromSlashing') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  This part of slashing goes to GameDAO treasury (default: 1/4).
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Signal', 'GameDAOGetsFromSlashing')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Signal', 'GameDAOGetsFromSlashing') != null
  }
}

export class SignalGameDAOTreasuryConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The GameDAO Treasury AccountId.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Signal', 'GameDAOTreasury') === 'cc28a7f7046ec4d0eb3419e4aa142bf25c25992e58d0e8646eb029c7c6b4c0c8'
  }

  /**
   *  The GameDAO Treasury AccountId.
   */
  get asV70(): Uint8Array {
    assert(this.isV70)
    return this._chain.getConstant('Signal', 'GameDAOTreasury')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Signal', 'GameDAOTreasury') != null
  }
}

export class SignalMaxMembersConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Max number of members per organization
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Signal', 'MaxMembers') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Max number of members per organization
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Signal', 'MaxMembers')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Signal', 'MaxMembers') != null
  }
}

export class SignalMaxProposalsPerBlockConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The max number of proposals per one block.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Signal', 'MaxProposalsPerBlock') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The max number of proposals per one block.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Signal', 'MaxProposalsPerBlock')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Signal', 'MaxProposalsPerBlock') != null
  }
}

export class SignalMinProposalDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Min deposit for Proposal creation
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Signal', 'MinProposalDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Min deposit for Proposal creation
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Signal', 'MinProposalDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Signal', 'MinProposalDeposit') != null
  }
}

export class SignalPaymentTokenIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The CurrencyId which is used as a payment token.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Signal', 'PaymentTokenId') === '86bfb6fcd70ec00dd5e7c9cd581374602768dbd15c90e1ff08b05b8bfde79617'
  }

  /**
   *  The CurrencyId which is used as a payment token.
   */
  get asV70(): v70.CurrencyId {
    assert(this.isV70)
    return this._chain.getConstant('Signal', 'PaymentTokenId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Signal', 'PaymentTokenId') != null
  }
}

export class SignalProposalDurationLimitsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Default time limit for a proposal in blocks.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Signal', 'ProposalDurationLimits') === '89667797236ba996cee700097e48264fab1c5603dc68df58a8ff56acf2809f5c'
  }

  /**
   *  Default time limit for a proposal in blocks.
   */
  get asV70(): [number, number] {
    assert(this.isV70)
    return this._chain.getConstant('Signal', 'ProposalDurationLimits')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Signal', 'ProposalDurationLimits') != null
  }
}

export class SignalProtocolTokenIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The CurrencyId which is used as a protokol token.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Signal', 'ProtocolTokenId') === '86bfb6fcd70ec00dd5e7c9cd581374602768dbd15c90e1ff08b05b8bfde79617'
  }

  /**
   *  The CurrencyId which is used as a protokol token.
   */
  get asV70(): v70.CurrencyId {
    assert(this.isV70)
    return this._chain.getConstant('Signal', 'ProtocolTokenId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Signal', 'ProtocolTokenId') != null
  }
}

export class SignalSlashingMajorityConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Majority of rejection >= {this value} * eligible voters --> slash deposit (default: 2/3).
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Signal', 'SlashingMajority') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Majority of rejection >= {this value} * eligible voters --> slash deposit (default: 2/3).
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Signal', 'SlashingMajority')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Signal', 'SlashingMajority') != null
  }
}

export class SignalStringLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of a string, stored on chain.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Signal', 'StringLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of a string, stored on chain.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Signal', 'StringLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Signal', 'StringLimit') != null
  }
}

export class SocietyCandidateDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum amount of a deposit required for a bid to be made.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Society', 'CandidateDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The minimum amount of a deposit required for a bid to be made.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Society', 'CandidateDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Society', 'CandidateDeposit') != null
  }
}

export class SocietyChallengePeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The number of blocks between membership challenges.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Society', 'ChallengePeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The number of blocks between membership challenges.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Society', 'ChallengePeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Society', 'ChallengePeriod') != null
  }
}

export class SocietyMaxCandidateIntakeConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of candidates that we accept per round.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Society', 'MaxCandidateIntake') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of candidates that we accept per round.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Society', 'MaxCandidateIntake')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Society', 'MaxCandidateIntake') != null
  }
}

export class SocietyMaxLockDurationConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum duration of the payout lock.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Society', 'MaxLockDuration') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum duration of the payout lock.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Society', 'MaxLockDuration')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Society', 'MaxLockDuration') != null
  }
}

export class SocietyMaxStrikesConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The number of times a member may vote the wrong way (or not at all, when they are a
   *  skeptic) before they become suspended.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Society', 'MaxStrikes') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The number of times a member may vote the wrong way (or not at all, when they are a
   *  skeptic) before they become suspended.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Society', 'MaxStrikes')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Society', 'MaxStrikes') != null
  }
}

export class SocietyPalletIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The societies's pallet id
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Society', 'PalletId') === 'c963e59c8e5b7d761234cd0f2cb1f219effb76c998fa93783afd994aed82a434'
  }

  /**
   *  The societies's pallet id
   */
  get asV70(): Uint8Array {
    assert(this.isV70)
    return this._chain.getConstant('Society', 'PalletId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Society', 'PalletId') != null
  }
}

export class SocietyPeriodSpendConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of incentive paid within each period. Doesn't include VoterTip.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Society', 'PeriodSpend') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount of incentive paid within each period. Doesn't include VoterTip.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Society', 'PeriodSpend')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Society', 'PeriodSpend') != null
  }
}

export class SocietyRotationPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The number of blocks between candidate/membership rotation periods.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Society', 'RotationPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The number of blocks between candidate/membership rotation periods.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Society', 'RotationPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Society', 'RotationPeriod') != null
  }
}

export class SocietyWrongSideDeductionConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of the unpaid reward that gets deducted in the case that either a skeptic
   *  doesn't vote or someone votes in the wrong way.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Society', 'WrongSideDeduction') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount of the unpaid reward that gets deducted in the case that either a skeptic
   *  doesn't vote or someone votes in the wrong way.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Society', 'WrongSideDeduction')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Society', 'WrongSideDeduction') != null
  }
}

export class StakingBondingDurationConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Number of eras that staked funds must remain bonded for.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Staking', 'BondingDuration') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Number of eras that staked funds must remain bonded for.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Staking', 'BondingDuration')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Staking', 'BondingDuration') != null
  }
}

export class StakingHistoryDepthConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Number of eras to keep in history.
   * 
   *  Following information is kept for eras in `[current_era -
   *  HistoryDepth, current_era]`: `ErasStakers`, `ErasStakersClipped`,
   *  `ErasValidatorPrefs`, `ErasValidatorReward`, `ErasRewardPoints`,
   *  `ErasTotalStake`, `ErasStartSessionIndex`,
   *  `StakingLedger.claimed_rewards`.
   * 
   *  Must be more than the number of eras delayed by session.
   *  I.e. active era must always be in history. I.e. `active_era >
   *  current_era - history_depth` must be guaranteed.
   * 
   *  If migrating an existing pallet from storage value to config value,
   *  this should be set to same value or greater as in storage.
   * 
   *  Note: `HistoryDepth` is used as the upper bound for the `BoundedVec`
   *  item `StakingLedger.claimed_rewards`. Setting this value lower than
   *  the existing value can lead to inconsistencies in the
   *  `StakingLedger` and will need to be handled properly in a migration.
   *  The test `reducing_history_depth_abrupt` shows this effect.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Staking', 'HistoryDepth') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Number of eras to keep in history.
   * 
   *  Following information is kept for eras in `[current_era -
   *  HistoryDepth, current_era]`: `ErasStakers`, `ErasStakersClipped`,
   *  `ErasValidatorPrefs`, `ErasValidatorReward`, `ErasRewardPoints`,
   *  `ErasTotalStake`, `ErasStartSessionIndex`,
   *  `StakingLedger.claimed_rewards`.
   * 
   *  Must be more than the number of eras delayed by session.
   *  I.e. active era must always be in history. I.e. `active_era >
   *  current_era - history_depth` must be guaranteed.
   * 
   *  If migrating an existing pallet from storage value to config value,
   *  this should be set to same value or greater as in storage.
   * 
   *  Note: `HistoryDepth` is used as the upper bound for the `BoundedVec`
   *  item `StakingLedger.claimed_rewards`. Setting this value lower than
   *  the existing value can lead to inconsistencies in the
   *  `StakingLedger` and will need to be handled properly in a migration.
   *  The test `reducing_history_depth_abrupt` shows this effect.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Staking', 'HistoryDepth')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Staking', 'HistoryDepth') != null
  }
}

export class StakingMaxNominationsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum number of nominations per nominator.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Staking', 'MaxNominations') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maximum number of nominations per nominator.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Staking', 'MaxNominations')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Staking', 'MaxNominations') != null
  }
}

export class StakingMaxNominatorRewardedPerValidatorConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of nominators rewarded for each validator.
   * 
   *  For each validator only the `$MaxNominatorRewardedPerValidator` biggest stakers can
   *  claim their reward. This used to limit the i/o cost for the nominator payout.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Staking', 'MaxNominatorRewardedPerValidator') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of nominators rewarded for each validator.
   * 
   *  For each validator only the `$MaxNominatorRewardedPerValidator` biggest stakers can
   *  claim their reward. This used to limit the i/o cost for the nominator payout.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Staking', 'MaxNominatorRewardedPerValidator')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Staking', 'MaxNominatorRewardedPerValidator') != null
  }
}

export class StakingMaxUnlockingChunksConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of `unlocking` chunks a [`StakingLedger`] can
   *  have. Effectively determines how many unique eras a staker may be
   *  unbonding in.
   * 
   *  Note: `MaxUnlockingChunks` is used as the upper bound for the
   *  `BoundedVec` item `StakingLedger.unlocking`. Setting this value
   *  lower than the existing value can lead to inconsistencies in the
   *  `StakingLedger` and will need to be handled properly in a runtime
   *  migration. The test `reducing_max_unlocking_chunks_abrupt` shows
   *  this effect.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Staking', 'MaxUnlockingChunks') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of `unlocking` chunks a [`StakingLedger`] can
   *  have. Effectively determines how many unique eras a staker may be
   *  unbonding in.
   * 
   *  Note: `MaxUnlockingChunks` is used as the upper bound for the
   *  `BoundedVec` item `StakingLedger.unlocking`. Setting this value
   *  lower than the existing value can lead to inconsistencies in the
   *  `StakingLedger` and will need to be handled properly in a runtime
   *  migration. The test `reducing_max_unlocking_chunks_abrupt` shows
   *  this effect.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Staking', 'MaxUnlockingChunks')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Staking', 'MaxUnlockingChunks') != null
  }
}

export class StakingSessionsPerEraConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Number of sessions per era.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Staking', 'SessionsPerEra') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Number of sessions per era.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Staking', 'SessionsPerEra')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Staking', 'SessionsPerEra') != null
  }
}

export class StakingSlashDeferDurationConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Number of eras that slashes are deferred by, after computation.
   * 
   *  This should be less than the bonding duration. Set to 0 if slashes
   *  should be applied immediately, without opportunity for intervention.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Staking', 'SlashDeferDuration') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Number of eras that slashes are deferred by, after computation.
   * 
   *  This should be less than the bonding duration. Set to 0 if slashes
   *  should be applied immediately, without opportunity for intervention.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Staking', 'SlashDeferDuration')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Staking', 'SlashDeferDuration') != null
  }
}

export class StateTrieMigrationMaxKeyLenConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximal number of bytes that a key can have.
   * 
   *  FRAME itself does not limit the key length.
   *  The concrete value must therefore depend on your storage usage.
   *  A [`frame_support::storage::StorageNMap`] for example can have an arbitrary number of
   *  keys which are then hashed and concatenated, resulting in arbitrarily long keys.
   * 
   *  Use the *state migration RPC* to retrieve the length of the longest key in your
   *  storage: <https://github.com/paritytech/substrate/issues/11642>
   * 
   *  The migration will halt with a `Halted` event if this value is too small.
   *  Since there is no real penalty from over-estimating, it is advised to use a large
   *  value. The default is 512 byte.
   * 
   *  Some key lengths for reference:
   *  - [`frame_support::storage::StorageValue`]: 32 byte
   *  - [`frame_support::storage::StorageMap`]: 64 byte
   *  - [`frame_support::storage::StorageDoubleMap`]: 96 byte
   * 
   *  For more info see
   *  <https://www.shawntabrizi.com/substrate/querying-substrate-storage-via-rpc/>
   */
  get isV70() {
    return this._chain.getConstantTypeHash('StateTrieMigration', 'MaxKeyLen') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maximal number of bytes that a key can have.
   * 
   *  FRAME itself does not limit the key length.
   *  The concrete value must therefore depend on your storage usage.
   *  A [`frame_support::storage::StorageNMap`] for example can have an arbitrary number of
   *  keys which are then hashed and concatenated, resulting in arbitrarily long keys.
   * 
   *  Use the *state migration RPC* to retrieve the length of the longest key in your
   *  storage: <https://github.com/paritytech/substrate/issues/11642>
   * 
   *  The migration will halt with a `Halted` event if this value is too small.
   *  Since there is no real penalty from over-estimating, it is advised to use a large
   *  value. The default is 512 byte.
   * 
   *  Some key lengths for reference:
   *  - [`frame_support::storage::StorageValue`]: 32 byte
   *  - [`frame_support::storage::StorageMap`]: 64 byte
   *  - [`frame_support::storage::StorageDoubleMap`]: 96 byte
   * 
   *  For more info see
   *  <https://www.shawntabrizi.com/substrate/querying-substrate-storage-via-rpc/>
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('StateTrieMigration', 'MaxKeyLen')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('StateTrieMigration', 'MaxKeyLen') != null
  }
}

export class SystemBlockHashCountConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum number of block number to block hash mappings to keep (oldest pruned first).
   */
  get isV70() {
    return this._chain.getConstantTypeHash('System', 'BlockHashCount') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maximum number of block number to block hash mappings to keep (oldest pruned first).
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('System', 'BlockHashCount')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'BlockHashCount') != null
  }
}

export class SystemBlockLengthConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of a block (in bytes).
   */
  get isV70() {
    return this._chain.getConstantTypeHash('System', 'BlockLength') === '9aacf667c67dbae172e6d30e5f4026086c8a56d9ebfe50dfdcca3fe40a9f55ca'
  }

  /**
   *  The maximum length of a block (in bytes).
   */
  get asV70(): v70.BlockLength {
    assert(this.isV70)
    return this._chain.getConstant('System', 'BlockLength')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'BlockLength') != null
  }
}

export class SystemBlockWeightsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Block & extrinsics weights: base values and limits.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('System', 'BlockWeights') === 'fa5692d9032f25a42ae01892fea053f75130751d1302a6b4db45a7a98a9d0760'
  }

  /**
   *  Block & extrinsics weights: base values and limits.
   */
  get asV70(): v70.BlockWeights {
    assert(this.isV70)
    return this._chain.getConstant('System', 'BlockWeights')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'BlockWeights') != null
  }
}

export class SystemDbWeightConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The weight of runtime database operations the runtime can invoke.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('System', 'DbWeight') === 'f2b1a28b00823bafa34a2cd3123e2e54de1b56f53266976a0fa1bbffc1833341'
  }

  /**
   *  The weight of runtime database operations the runtime can invoke.
   */
  get asV70(): v70.RuntimeDbWeight {
    assert(this.isV70)
    return this._chain.getConstant('System', 'DbWeight')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'DbWeight') != null
  }
}

export class SystemSS58PrefixConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The designated SS58 prefix of this chain.
   * 
   *  This replaces the "ss58Format" property declared in the chain spec. Reason is
   *  that the runtime should know about the prefix in order to make use of it as
   *  an identifier of the chain.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('System', 'SS58Prefix') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
  }

  /**
   *  The designated SS58 prefix of this chain.
   * 
   *  This replaces the "ss58Format" property declared in the chain spec. Reason is
   *  that the runtime should know about the prefix in order to make use of it as
   *  an identifier of the chain.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('System', 'SS58Prefix')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'SS58Prefix') != null
  }
}

export class SystemVersionConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Get the chain's current version.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('System', 'Version') === 'f6a7df964a5f6d420bccc7ccc38bd9265b00dc71b74c91dc5848badeeaf0cbb8'
  }

  /**
   *  Get the chain's current version.
   */
  get asV70(): v70.RuntimeVersion {
    assert(this.isV70)
    return this._chain.getConstant('System', 'Version')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'Version') != null
  }
}

export class TimestampMinimumPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum period between blocks. Beware that this is different to the *expected*
   *  period that the block production apparatus provides. Your chosen consensus system will
   *  generally work with this to determine a sensible block time. e.g. For Aura, it will be
   *  double this period on default settings.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Timestamp', 'MinimumPeriod') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
  }

  /**
   *  The minimum period between blocks. Beware that this is different to the *expected*
   *  period that the block production apparatus provides. Your chosen consensus system will
   *  generally work with this to determine a sensible block time. e.g. For Aura, it will be
   *  double this period on default settings.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Timestamp', 'MinimumPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Timestamp', 'MinimumPeriod') != null
  }
}

export class TipsDataDepositPerByteConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount held on deposit per byte within the tip report reason or bounty description.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Tips', 'DataDepositPerByte') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount held on deposit per byte within the tip report reason or bounty description.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Tips', 'DataDepositPerByte')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Tips', 'DataDepositPerByte') != null
  }
}

export class TipsMaximumReasonLengthConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum acceptable reason length.
   * 
   *  Benchmarks depend on this value, be sure to update weights file when changing this value
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Tips', 'MaximumReasonLength') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maximum acceptable reason length.
   * 
   *  Benchmarks depend on this value, be sure to update weights file when changing this value
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Tips', 'MaximumReasonLength')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Tips', 'MaximumReasonLength') != null
  }
}

export class TipsTipCountdownConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The period for which a tip remains open after is has achieved threshold tippers.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Tips', 'TipCountdown') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The period for which a tip remains open after is has achieved threshold tippers.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Tips', 'TipCountdown')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Tips', 'TipCountdown') != null
  }
}

export class TipsTipFindersFeeConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The percent of the final tip which goes to the original reporter of the tip.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Tips', 'TipFindersFee') === 'afecacff3b029831d50a478055aa405254e6579585f9617d2a2f34743b4aff83'
  }

  /**
   *  The percent of the final tip which goes to the original reporter of the tip.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Tips', 'TipFindersFee')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Tips', 'TipFindersFee') != null
  }
}

export class TipsTipReportDepositBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount held on deposit for placing a tip report.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Tips', 'TipReportDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount held on deposit for placing a tip report.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Tips', 'TipReportDepositBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Tips', 'TipReportDepositBase') != null
  }
}

export class TokensMaxLocksConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  get isV70() {
    return this._chain.getConstantTypeHash('Tokens', 'MaxLocks') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Tokens', 'MaxLocks')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Tokens', 'MaxLocks') != null
  }
}

export class TokensMaxReservesConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of named reserves that can exist on an account.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Tokens', 'MaxReserves') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of named reserves that can exist on an account.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Tokens', 'MaxReserves')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Tokens', 'MaxReserves') != null
  }
}

export class TransactionPaymentOperationalFeeMultiplierConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
   *  `priority`
   * 
   *  This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
   *  added to a tip component in regular `priority` calculations.
   *  It means that a `Normal` transaction can front-run a similarly-sized `Operational`
   *  extrinsic (with no tip), by including a tip value greater than the virtual tip.
   * 
   *  ```rust,ignore
   *  // For `Normal`
   *  let priority = priority_calc(tip);
   * 
   *  // For `Operational`
   *  let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
   *  let priority = priority_calc(tip + virtual_tip);
   *  ```
   * 
   *  Note that since we use `final_fee` the multiplier applies also to the regular `tip`
   *  sent with the transaction. So, not only does the transaction get a priority bump based
   *  on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
   *  transactions.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('TransactionPayment', 'OperationalFeeMultiplier') === 'afecacff3b029831d50a478055aa405254e6579585f9617d2a2f34743b4aff83'
  }

  /**
   *  A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
   *  `priority`
   * 
   *  This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
   *  added to a tip component in regular `priority` calculations.
   *  It means that a `Normal` transaction can front-run a similarly-sized `Operational`
   *  extrinsic (with no tip), by including a tip value greater than the virtual tip.
   * 
   *  ```rust,ignore
   *  // For `Normal`
   *  let priority = priority_calc(tip);
   * 
   *  // For `Operational`
   *  let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
   *  let priority = priority_calc(tip + virtual_tip);
   *  ```
   * 
   *  Note that since we use `final_fee` the multiplier applies also to the regular `tip`
   *  sent with the transaction. So, not only does the transaction get a priority bump based
   *  on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
   *  transactions.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('TransactionPayment', 'OperationalFeeMultiplier')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('TransactionPayment', 'OperationalFeeMultiplier') != null
  }
}

export class TreasuryBurnConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Percentage of spare funds (if any) that are burnt per spend period.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Treasury', 'Burn') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Percentage of spare funds (if any) that are burnt per spend period.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Treasury', 'Burn')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Treasury', 'Burn') != null
  }
}

export class TreasuryMaxApprovalsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of approvals that can wait in the spending queue.
   * 
   *  NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Treasury', 'MaxApprovals') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of approvals that can wait in the spending queue.
   * 
   *  NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Treasury', 'MaxApprovals')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Treasury', 'MaxApprovals') != null
  }
}

export class TreasuryPalletIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The treasury's pallet id, used for deriving its sovereign account ID.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Treasury', 'PalletId') === 'c963e59c8e5b7d761234cd0f2cb1f219effb76c998fa93783afd994aed82a434'
  }

  /**
   *  The treasury's pallet id, used for deriving its sovereign account ID.
   */
  get asV70(): Uint8Array {
    assert(this.isV70)
    return this._chain.getConstant('Treasury', 'PalletId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Treasury', 'PalletId') != null
  }
}

export class TreasuryProposalBondConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Fraction of a proposal's value that should be bonded in order to place the proposal.
   *  An accepted proposal gets these back. A rejected proposal does not.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Treasury', 'ProposalBond') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Fraction of a proposal's value that should be bonded in order to place the proposal.
   *  An accepted proposal gets these back. A rejected proposal does not.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Treasury', 'ProposalBond')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Treasury', 'ProposalBond') != null
  }
}

export class TreasuryProposalBondMaximumConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum amount of funds that should be placed in a deposit for making a proposal.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Treasury', 'ProposalBondMaximum') === 'bfdfd10c88945fb3fe1590ea01f6a3e70d37a6e37ae5abf44fdde45ecc525302'
  }

  /**
   *  Maximum amount of funds that should be placed in a deposit for making a proposal.
   */
  get asV70(): (bigint | undefined) {
    assert(this.isV70)
    return this._chain.getConstant('Treasury', 'ProposalBondMaximum')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Treasury', 'ProposalBondMaximum') != null
  }
}

export class TreasuryProposalBondMinimumConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Minimum amount of funds that should be placed in a deposit for making a proposal.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Treasury', 'ProposalBondMinimum') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Minimum amount of funds that should be placed in a deposit for making a proposal.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Treasury', 'ProposalBondMinimum')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Treasury', 'ProposalBondMinimum') != null
  }
}

export class TreasurySpendPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Period between successive spends.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Treasury', 'SpendPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Period between successive spends.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Treasury', 'SpendPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Treasury', 'SpendPeriod') != null
  }
}

export class UniquesAttributeDepositBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The basic amount of funds that must be reserved when adding an attribute to an item.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Uniques', 'AttributeDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The basic amount of funds that must be reserved when adding an attribute to an item.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Uniques', 'AttributeDepositBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Uniques', 'AttributeDepositBase') != null
  }
}

export class UniquesCollectionDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The basic amount of funds that must be reserved for collection.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Uniques', 'CollectionDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The basic amount of funds that must be reserved for collection.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Uniques', 'CollectionDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Uniques', 'CollectionDeposit') != null
  }
}

export class UniquesDepositPerByteConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The additional funds that must be reserved for the number of bytes store in metadata,
   *  either "normal" metadata or attribute metadata.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Uniques', 'DepositPerByte') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The additional funds that must be reserved for the number of bytes store in metadata,
   *  either "normal" metadata or attribute metadata.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Uniques', 'DepositPerByte')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Uniques', 'DepositPerByte') != null
  }
}

export class UniquesItemDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The basic amount of funds that must be reserved for an item.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Uniques', 'ItemDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The basic amount of funds that must be reserved for an item.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Uniques', 'ItemDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Uniques', 'ItemDeposit') != null
  }
}

export class UniquesKeyLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of an attribute key.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Uniques', 'KeyLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of an attribute key.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Uniques', 'KeyLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Uniques', 'KeyLimit') != null
  }
}

export class UniquesMetadataDepositBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The basic amount of funds that must be reserved when adding metadata to your item.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Uniques', 'MetadataDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The basic amount of funds that must be reserved when adding metadata to your item.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Uniques', 'MetadataDepositBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Uniques', 'MetadataDepositBase') != null
  }
}

export class UniquesStringLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of data stored on-chain.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Uniques', 'StringLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of data stored on-chain.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Uniques', 'StringLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Uniques', 'StringLimit') != null
  }
}

export class UniquesValueLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of an attribute value.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Uniques', 'ValueLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of an attribute value.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Uniques', 'ValueLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Uniques', 'ValueLimit') != null
  }
}

export class Utilitybatched_calls_limitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The limit on the number of batched calls.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Utility', 'batched_calls_limit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The limit on the number of batched calls.
   */
  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Utility', 'batched_calls_limit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Utility', 'batched_calls_limit') != null
  }
}

export class VestingMaxVestingSchedulesConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  get isV70() {
    return this._chain.getConstantTypeHash('Vesting', 'MaxVestingSchedules') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  get asV70(): number {
    assert(this.isV70)
    return this._chain.getConstant('Vesting', 'MaxVestingSchedules')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Vesting', 'MaxVestingSchedules') != null
  }
}

export class VestingMinVestedTransferConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum amount transferred to call `vested_transfer`.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('Vesting', 'MinVestedTransfer') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The minimum amount transferred to call `vested_transfer`.
   */
  get asV70(): bigint {
    assert(this.isV70)
    return this._chain.getConstant('Vesting', 'MinVestedTransfer')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Vesting', 'MinVestedTransfer') != null
  }
}

export class VoterListBagThresholdsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The list of thresholds separating the various bags.
   * 
   *  Ids are separated into unsorted bags according to their score. This specifies the
   *  thresholds separating the bags. An id's bag is the largest bag for which the id's score
   *  is less than or equal to its upper threshold.
   * 
   *  When ids are iterated, higher bags are iterated completely before lower bags. This means
   *  that iteration is _semi-sorted_: ids of higher score tend to come before ids of lower
   *  score, but peer ids within a particular bag are sorted in insertion order.
   * 
   *  # Expressing the constant
   * 
   *  This constant must be sorted in strictly increasing order. Duplicate items are not
   *  permitted.
   * 
   *  There is an implied upper limit of `Score::MAX`; that value does not need to be
   *  specified within the bag. For any two threshold lists, if one ends with
   *  `Score::MAX`, the other one does not, and they are otherwise equal, the two
   *  lists will behave identically.
   * 
   *  # Calculation
   * 
   *  It is recommended to generate the set of thresholds in a geometric series, such that
   *  there exists some constant ratio such that `threshold[k + 1] == (threshold[k] *
   *  constant_ratio).max(threshold[k] + 1)` for all `k`.
   * 
   *  The helpers in the `/utils/frame/generate-bags` module can simplify this calculation.
   * 
   *  # Examples
   * 
   *  - If `BagThresholds::get().is_empty()`, then all ids are put into the same bag, and
   *    iteration is strictly in insertion order.
   *  - If `BagThresholds::get().len() == 64`, and the thresholds are determined according to
   *    the procedure given above, then the constant ratio is equal to 2.
   *  - If `BagThresholds::get().len() == 200`, and the thresholds are determined according to
   *    the procedure given above, then the constant ratio is approximately equal to 1.248.
   *  - If the threshold list begins `[1, 2, 3, ...]`, then an id with score 0 or 1 will fall
   *    into bag 0, an id with score 2 will fall into bag 1, etc.
   * 
   *  # Migration
   * 
   *  In the event that this list ever changes, a copy of the old bags list must be retained.
   *  With that `List::migrate` can be called, which will perform the appropriate migration.
   */
  get isV70() {
    return this._chain.getConstantTypeHash('VoterList', 'BagThresholds') === '80f0a5ace0a61d64a6f491b97a94a053f62a56c6e1bd2c0d0d06946c6741d540'
  }

  /**
   *  The list of thresholds separating the various bags.
   * 
   *  Ids are separated into unsorted bags according to their score. This specifies the
   *  thresholds separating the bags. An id's bag is the largest bag for which the id's score
   *  is less than or equal to its upper threshold.
   * 
   *  When ids are iterated, higher bags are iterated completely before lower bags. This means
   *  that iteration is _semi-sorted_: ids of higher score tend to come before ids of lower
   *  score, but peer ids within a particular bag are sorted in insertion order.
   * 
   *  # Expressing the constant
   * 
   *  This constant must be sorted in strictly increasing order. Duplicate items are not
   *  permitted.
   * 
   *  There is an implied upper limit of `Score::MAX`; that value does not need to be
   *  specified within the bag. For any two threshold lists, if one ends with
   *  `Score::MAX`, the other one does not, and they are otherwise equal, the two
   *  lists will behave identically.
   * 
   *  # Calculation
   * 
   *  It is recommended to generate the set of thresholds in a geometric series, such that
   *  there exists some constant ratio such that `threshold[k + 1] == (threshold[k] *
   *  constant_ratio).max(threshold[k] + 1)` for all `k`.
   * 
   *  The helpers in the `/utils/frame/generate-bags` module can simplify this calculation.
   * 
   *  # Examples
   * 
   *  - If `BagThresholds::get().is_empty()`, then all ids are put into the same bag, and
   *    iteration is strictly in insertion order.
   *  - If `BagThresholds::get().len() == 64`, and the thresholds are determined according to
   *    the procedure given above, then the constant ratio is equal to 2.
   *  - If `BagThresholds::get().len() == 200`, and the thresholds are determined according to
   *    the procedure given above, then the constant ratio is approximately equal to 1.248.
   *  - If the threshold list begins `[1, 2, 3, ...]`, then an id with score 0 or 1 will fall
   *    into bag 0, an id with score 2 will fall into bag 1, etc.
   * 
   *  # Migration
   * 
   *  In the event that this list ever changes, a copy of the old bags list must be retained.
   *  With that `List::migrate` can be called, which will perform the appropriate migration.
   */
  get asV70(): bigint[] {
    assert(this.isV70)
    return this._chain.getConstant('VoterList', 'BagThresholds')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('VoterList', 'BagThresholds') != null
  }
}
