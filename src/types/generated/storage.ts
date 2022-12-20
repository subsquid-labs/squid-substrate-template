import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result, Option} from './support'
import * as v63 from './v63'
import * as v64 from './v64'

export class BalancesAccountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The Balances pallet example of storing the balance of an account.
   * 
   *  # Example
   * 
   *  ```nocompile
   *   impl pallet_balances::Config for Runtime {
   *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
   *   }
   *  ```
   * 
   *  You can also store the balance of an account in the `System` pallet.
   * 
   *  # Example
   * 
   *  ```nocompile
   *   impl pallet_balances::Config for Runtime {
   *    type AccountStore = System
   *   }
   *  ```
   * 
   *  But this comes with tradeoffs, storing account balances in the system pallet stores
   *  `frame_system` data alongside the account data contrary to storing account balances in the
   *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
   *  NOTE: This is only used in the case that this pallet is used to store balances.
   */
  get isV63() {
    return this._chain.getStorageItemTypeHash('Balances', 'Account') === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
  }

  /**
   *  The Balances pallet example of storing the balance of an account.
   * 
   *  # Example
   * 
   *  ```nocompile
   *   impl pallet_balances::Config for Runtime {
   *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
   *   }
   *  ```
   * 
   *  You can also store the balance of an account in the `System` pallet.
   * 
   *  # Example
   * 
   *  ```nocompile
   *   impl pallet_balances::Config for Runtime {
   *    type AccountStore = System
   *   }
   *  ```
   * 
   *  But this comes with tradeoffs, storing account balances in the system pallet stores
   *  `frame_system` data alongside the account data contrary to storing account balances in the
   *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
   *  NOTE: This is only used in the case that this pallet is used to store balances.
   */
  async getAsV63(key: Uint8Array): Promise<v63.AccountData> {
    assert(this.isV63)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Account', key)
  }

  async getManyAsV63(keys: Uint8Array[]): Promise<(v63.AccountData)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Account', keys.map(k => [k]))
  }

  async getAllAsV63(): Promise<(v63.AccountData)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Account')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'Account') != null
  }
}

export class BalancesTotalIssuanceStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The total units issued in the system.
   */
  get isV63() {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsV63(): Promise<bigint> {
    assert(this.isV63)
    return this._chain.getStorage(this.blockHash, 'Balances', 'TotalIssuance')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') != null
  }
}

export class BattlepassBattlepassStatesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Battlepass state.
   * 
   *  BattlepassStates: map Hash => BattlepassState
   */
  get isV64() {
    return this._chain.getStorageItemTypeHash('Battlepass', 'BattlepassStates') === '9e1714309e2209f383d6d4161099cad7fa12fbcb6b715fd2ae5d0f427d45e50f'
  }

  /**
   *  Battlepass state.
   * 
   *  BattlepassStates: map Hash => BattlepassState
   */
  async getAsV64(key: Uint8Array): Promise<v64.BattlepassState | undefined> {
    assert(this.isV64)
    return this._chain.getStorage(this.blockHash, 'Battlepass', 'BattlepassStates', key)
  }

  async getManyAsV64(keys: Uint8Array[]): Promise<(v64.BattlepassState | undefined)[]> {
    assert(this.isV64)
    return this._chain.queryStorage(this.blockHash, 'Battlepass', 'BattlepassStates', keys.map(k => [k]))
  }

  async getAllAsV64(): Promise<(v64.BattlepassState)[]> {
    assert(this.isV64)
    return this._chain.queryStorage(this.blockHash, 'Battlepass', 'BattlepassStates')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Battlepass', 'BattlepassStates') != null
  }
}

export class BattlepassBattlepassesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Battlepass by its id.
   * 
   *  Battlepasses: map Hash => Battlepass
   */
  get isV64() {
    return this._chain.getStorageItemTypeHash('Battlepass', 'Battlepasses') === '2c38818cf86779cd3cde2895c11ef43f6ce95b5f5241ea8448805cef34e5ebb8'
  }

  /**
   *  Battlepass by its id.
   * 
   *  Battlepasses: map Hash => Battlepass
   */
  async getAsV64(key: Uint8Array): Promise<v64.Battlepass | undefined> {
    assert(this.isV64)
    return this._chain.getStorage(this.blockHash, 'Battlepass', 'Battlepasses', key)
  }

  async getManyAsV64(keys: Uint8Array[]): Promise<(v64.Battlepass | undefined)[]> {
    assert(this.isV64)
    return this._chain.queryStorage(this.blockHash, 'Battlepass', 'Battlepasses', keys.map(k => [k]))
  }

  async getAllAsV64(): Promise<(v64.Battlepass)[]> {
    assert(this.isV64)
    return this._chain.queryStorage(this.blockHash, 'Battlepass', 'Battlepasses')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Battlepass', 'Battlepasses') != null
  }
}

export class BattlepassClaimedBattlepassStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Claimed Battlepass-NFT by user account.
   * 
   *  ClaimedBattlepass: map (AccountId, Hash) => BattlepassNft
   */
  get isV64() {
    return this._chain.getStorageItemTypeHash('Battlepass', 'ClaimedBattlepass') === '128ae474c5575a0bda003e3a23daa455ba5a8a5bf33468f949805e25bde4e9ce'
  }

  /**
   *  Claimed Battlepass-NFT by user account.
   * 
   *  ClaimedBattlepass: map (AccountId, Hash) => BattlepassNft
   */
  async getAsV64(key1: Uint8Array, key2: Uint8Array): Promise<v64.BattlepassNft | undefined> {
    assert(this.isV64)
    return this._chain.getStorage(this.blockHash, 'Battlepass', 'ClaimedBattlepass', key1, key2)
  }

  async getManyAsV64(keys: [Uint8Array, Uint8Array][]): Promise<(v64.BattlepassNft | undefined)[]> {
    assert(this.isV64)
    return this._chain.queryStorage(this.blockHash, 'Battlepass', 'ClaimedBattlepass', keys)
  }

  async getAllAsV64(): Promise<(v64.BattlepassNft)[]> {
    assert(this.isV64)
    return this._chain.queryStorage(this.blockHash, 'Battlepass', 'ClaimedBattlepass')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Battlepass', 'ClaimedBattlepass') != null
  }
}

export class ControlMemberStatesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Member state (Inactive | Active ...) by org Hash and member account.
   * 
   *  MemberStates: map Hash, AccountId => MemberState
   */
  get isV63() {
    return this._chain.getStorageItemTypeHash('Control', 'MemberStates') === '721feb4ecf1004329d66530e9fbd666f094a218a67a43b9786eb2ed07287c2f5'
  }

  /**
   *  Member state (Inactive | Active ...) by org Hash and member account.
   * 
   *  MemberStates: map Hash, AccountId => MemberState
   */
  async getAsV63(key1: Uint8Array, key2: Uint8Array): Promise<v63.MemberState> {
    assert(this.isV63)
    return this._chain.getStorage(this.blockHash, 'Control', 'MemberStates', key1, key2)
  }

  async getManyAsV63(keys: [Uint8Array, Uint8Array][]): Promise<(v63.MemberState)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'Control', 'MemberStates', keys)
  }

  async getAllAsV63(): Promise<(v63.MemberState)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'Control', 'MemberStates')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Control', 'MemberStates') != null
  }
}

export class ControlOrgStatesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Org state (Inactive | Active | Locked) by org id.
   * 
   *  OrgStates: map Hash => OrgState
   */
  get isV63() {
    return this._chain.getStorageItemTypeHash('Control', 'OrgStates') === 'f327a3e0fd73395ec21ebe5954d1566428ebe9161892f4e771f053a111ebd1da'
  }

  /**
   *  Org state (Inactive | Active | Locked) by org id.
   * 
   *  OrgStates: map Hash => OrgState
   */
  async getAsV63(key: Uint8Array): Promise<v63.OrgState> {
    assert(this.isV63)
    return this._chain.getStorage(this.blockHash, 'Control', 'OrgStates', key)
  }

  async getManyAsV63(keys: Uint8Array[]): Promise<(v63.OrgState)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'Control', 'OrgStates', keys.map(k => [k]))
  }

  async getAllAsV63(): Promise<(v63.OrgState)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'Control', 'OrgStates')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Control', 'OrgStates') != null
  }
}

export class ControlOrgsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Org by its id.
   * 
   *  Org: map Hash => Org
   */
  get isV63() {
    return this._chain.getStorageItemTypeHash('Control', 'Orgs') === 'dbf6593b6bdd77fdfd9b4ac441c42999e6f044fa845f7b975488f261c1c48b56'
  }

  /**
   *  Org by its id.
   * 
   *  Org: map Hash => Org
   */
  async getAsV63(key: Uint8Array): Promise<v63.Org | undefined> {
    assert(this.isV63)
    return this._chain.getStorage(this.blockHash, 'Control', 'Orgs', key)
  }

  async getManyAsV63(keys: Uint8Array[]): Promise<(v63.Org | undefined)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'Control', 'Orgs', keys.map(k => [k]))
  }

  async getAllAsV63(): Promise<(v63.Org)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'Control', 'Orgs')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Control', 'Orgs') != null
  }
}

export class FlowCampaignOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Campaign by its id.
   * 
   *  CampaignOf: map Hash => Campaign
   */
  get isV63() {
    return this._chain.getStorageItemTypeHash('Flow', 'CampaignOf') === 'a88bcf86fd55e1101d2687a3ef4a2023d7273985e577ad904ec2886f0d887cfb'
  }

  /**
   *  Campaign by its id.
   * 
   *  CampaignOf: map Hash => Campaign
   */
  async getAsV63(key: Uint8Array): Promise<v63.Campaign | undefined> {
    assert(this.isV63)
    return this._chain.getStorage(this.blockHash, 'Flow', 'CampaignOf', key)
  }

  async getManyAsV63(keys: Uint8Array[]): Promise<(v63.Campaign | undefined)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'Flow', 'CampaignOf', keys.map(k => [k]))
  }

  async getAllAsV63(): Promise<(v63.Campaign)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'Flow', 'CampaignOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Flow', 'CampaignOf') != null
  }
}

export class FlowCampaignStatesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Campaign state by campaign id.
   *  0 created, 1 activated, 2 paused, ...
   * 
   *  CampaignStates: map Hash => CampaignState
   */
  get isV63() {
    return this._chain.getStorageItemTypeHash('Flow', 'CampaignStates') === 'a257ccef36770bad35457d8d6a3bfa37cd8d04acde9eabfa82e8416a7ed4b796'
  }

  /**
   *  Campaign state by campaign id.
   *  0 created, 1 activated, 2 paused, ...
   * 
   *  CampaignStates: map Hash => CampaignState
   */
  async getAsV63(key: Uint8Array): Promise<v63.CampaignState> {
    assert(this.isV63)
    return this._chain.getStorage(this.blockHash, 'Flow', 'CampaignStates', key)
  }

  async getManyAsV63(keys: Uint8Array[]): Promise<(v63.CampaignState)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'Flow', 'CampaignStates', keys.map(k => [k]))
  }

  async getAllAsV63(): Promise<(v63.CampaignState)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'Flow', 'CampaignStates')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Flow', 'CampaignStates') != null
  }
}

export class SenseEntitiesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Sense Entity of the account.
   * 
   *  Entities: map AccountId => Entity
   */
  get isV63() {
    return this._chain.getStorageItemTypeHash('Sense', 'Entities') === '774ef83e73e2a7ab63c708f30f61360e50802de36a2642a0c93da77043b1c724'
  }

  /**
   *  Sense Entity of the account.
   * 
   *  Entities: map AccountId => Entity
   */
  async getAsV63(key: Uint8Array): Promise<v63.Entity | undefined> {
    assert(this.isV63)
    return this._chain.getStorage(this.blockHash, 'Sense', 'Entities', key)
  }

  async getManyAsV63(keys: Uint8Array[]): Promise<(v63.Entity | undefined)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'Sense', 'Entities', keys.map(k => [k]))
  }

  async getAllAsV63(): Promise<(v63.Entity)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'Sense', 'Entities')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Sense', 'Entities') != null
  }
}

export class SensePropertiesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  All properties of the account.
   * 
   *  Properties: map (PropertyType, AccountId) => EntityProperty
   */
  get isV63() {
    return this._chain.getStorageItemTypeHash('Sense', 'Properties') === '7ec27592c3630a713f32c3aea3d3240848a205caf963ef0ef04ebf364dc7b77e'
  }

  /**
   *  All properties of the account.
   * 
   *  Properties: map (PropertyType, AccountId) => EntityProperty
   */
  async getAsV63(key1: v63.PropertyType, key2: Uint8Array): Promise<v63.EntityProperty | undefined> {
    assert(this.isV63)
    return this._chain.getStorage(this.blockHash, 'Sense', 'Properties', key1, key2)
  }

  async getManyAsV63(keys: [v63.PropertyType, Uint8Array][]): Promise<(v63.EntityProperty | undefined)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'Sense', 'Properties', keys)
  }

  async getAllAsV63(): Promise<(v63.EntityProperty)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'Sense', 'Properties')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Sense', 'Properties') != null
  }
}

export class SignalProposalOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Proposal by its hash (id).
   * 
   *  Proposals: map Hash => Proposal
   */
  get isV63() {
    return this._chain.getStorageItemTypeHash('Signal', 'ProposalOf') === 'bcb011a3737b73879bc187b61c200cd2b5777426ce7761572e89461aae5e081e'
  }

  /**
   *  Proposal by its hash (id).
   * 
   *  Proposals: map Hash => Proposal
   */
  async getAsV63(key: Uint8Array): Promise<v63.Type_544 | undefined> {
    assert(this.isV63)
    return this._chain.getStorage(this.blockHash, 'Signal', 'ProposalOf', key)
  }

  async getManyAsV63(keys: Uint8Array[]): Promise<(v63.Type_544 | undefined)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'Signal', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV63(): Promise<(v63.Type_544)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'Signal', 'ProposalOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Signal', 'ProposalOf') != null
  }
}

export class SignalProposalStatesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Proposal's state: Created | Activated | Accepted | Rejected | Expired | Aborted | Finalized
   * 
   *  ProposalStates: map Hash => ProposalState
   */
  get isV63() {
    return this._chain.getStorageItemTypeHash('Signal', 'ProposalStates') === 'c7ce61c1c29cbaa5c1a056b9f220696346cae180012d06c6c3714bfab89e6b63'
  }

  /**
   *  Proposal's state: Created | Activated | Accepted | Rejected | Expired | Aborted | Finalized
   * 
   *  ProposalStates: map Hash => ProposalState
   */
  async getAsV63(key: Uint8Array): Promise<v63.ProposalState> {
    assert(this.isV63)
    return this._chain.getStorage(this.blockHash, 'Signal', 'ProposalStates', key)
  }

  async getManyAsV63(keys: Uint8Array[]): Promise<(v63.ProposalState)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'Signal', 'ProposalStates', keys.map(k => [k]))
  }

  async getAllAsV63(): Promise<(v63.ProposalState)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'Signal', 'ProposalStates')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Signal', 'ProposalStates') != null
  }
}

export class SignalProposalVotingStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV63() {
    return this._chain.getStorageItemTypeHash('Signal', 'ProposalVoting') === 'cd4cdab8cd84f1e89f98eba5839f50a8d73142ac8857ccd97d1f1b60f9a3ae9e'
  }

  async getAsV63(key: Uint8Array): Promise<v63.Type_549 | undefined> {
    assert(this.isV63)
    return this._chain.getStorage(this.blockHash, 'Signal', 'ProposalVoting', key)
  }

  async getManyAsV63(keys: Uint8Array[]): Promise<(v63.Type_549 | undefined)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'Signal', 'ProposalVoting', keys.map(k => [k]))
  }

  async getAllAsV63(): Promise<(v63.Type_549)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'Signal', 'ProposalVoting')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Signal', 'ProposalVoting') != null
  }
}

export class SystemAccountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The full account information for a particular account ID.
   */
  get isV63() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV63(key: Uint8Array): Promise<v63.AccountInfo> {
    assert(this.isV63)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV63(keys: Uint8Array[]): Promise<(v63.AccountInfo)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  async getAllAsV63(): Promise<(v63.AccountInfo)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Account') != null
  }
}

export class TokensAccountsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The balance of a token type under an account.
   * 
   *  NOTE: If the total is ever zero, decrease account ref account.
   * 
   *  NOTE: This is only used in the case that this module is used to store
   *  balances.
   */
  get isV63() {
    return this._chain.getStorageItemTypeHash('Tokens', 'Accounts') === 'bc59892f5e1d451c39c67e82ed63e06183d9028016536d3083d176a3e0d401a2'
  }

  /**
   *  The balance of a token type under an account.
   * 
   *  NOTE: If the total is ever zero, decrease account ref account.
   * 
   *  NOTE: This is only used in the case that this module is used to store
   *  balances.
   */
  async getAsV63(key1: Uint8Array, key2: v63.CurrencyId): Promise<v63.Type_517> {
    assert(this.isV63)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'Accounts', key1, key2)
  }

  async getManyAsV63(keys: [Uint8Array, v63.CurrencyId][]): Promise<(v63.Type_517)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Accounts', keys)
  }

  async getAllAsV63(): Promise<(v63.Type_517)[]> {
    assert(this.isV63)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Accounts')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Tokens', 'Accounts') != null
  }
}
