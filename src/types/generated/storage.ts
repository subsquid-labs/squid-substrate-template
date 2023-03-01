import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result, Option} from './support'
import * as v70 from './v70'

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
  get isV70() {
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
  async getAsV70(key: Uint8Array): Promise<v70.AccountData> {
    assert(this.isV70)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Account', key)
  }

  async getManyAsV70(keys: Uint8Array[]): Promise<(v70.AccountData)[]> {
    assert(this.isV70)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Account', keys.map(k => [k]))
  }

  async getAllAsV70(): Promise<(v70.AccountData)[]> {
    assert(this.isV70)
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
  get isV70() {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsV70(): Promise<bigint> {
    assert(this.isV70)
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
  get isV70() {
    return this._chain.getStorageItemTypeHash('Battlepass', 'BattlepassStates') === '7c03af505c9f504a83acbf3693a4881afd7095826f8573863d847b29e2afca28'
  }

  /**
   *  Battlepass state.
   * 
   *  BattlepassStates: map Hash => BattlepassState
   */
  async getAsV70(key: Uint8Array): Promise<v70.BattlepassState | undefined> {
    assert(this.isV70)
    return this._chain.getStorage(this.blockHash, 'Battlepass', 'BattlepassStates', key)
  }

  async getManyAsV70(keys: Uint8Array[]): Promise<(v70.BattlepassState | undefined)[]> {
    assert(this.isV70)
    return this._chain.queryStorage(this.blockHash, 'Battlepass', 'BattlepassStates', keys.map(k => [k]))
  }

  async getAllAsV70(): Promise<(v70.BattlepassState)[]> {
    assert(this.isV70)
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
  get isV70() {
    return this._chain.getStorageItemTypeHash('Battlepass', 'Battlepasses') === '057231845e16567da0d414a87c1183537f60c29cb56303d195fe4bcd910e764a'
  }

  /**
   *  Battlepass by its id.
   * 
   *  Battlepasses: map Hash => Battlepass
   */
  async getAsV70(key: Uint8Array): Promise<v70.Battlepass | undefined> {
    assert(this.isV70)
    return this._chain.getStorage(this.blockHash, 'Battlepass', 'Battlepasses', key)
  }

  async getManyAsV70(keys: Uint8Array[]): Promise<(v70.Battlepass | undefined)[]> {
    assert(this.isV70)
    return this._chain.queryStorage(this.blockHash, 'Battlepass', 'Battlepasses', keys.map(k => [k]))
  }

  async getAllAsV70(): Promise<(v70.Battlepass)[]> {
    assert(this.isV70)
    return this._chain.queryStorage(this.blockHash, 'Battlepass', 'Battlepasses')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Battlepass', 'Battlepasses') != null
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
  get isV70() {
    return this._chain.getStorageItemTypeHash('Control', 'MemberStates') === '721feb4ecf1004329d66530e9fbd666f094a218a67a43b9786eb2ed07287c2f5'
  }

  /**
   *  Member state (Inactive | Active ...) by org Hash and member account.
   * 
   *  MemberStates: map Hash, AccountId => MemberState
   */
  async getAsV70(key1: Uint8Array, key2: Uint8Array): Promise<v70.MemberState> {
    assert(this.isV70)
    return this._chain.getStorage(this.blockHash, 'Control', 'MemberStates', key1, key2)
  }

  async getManyAsV70(keys: [Uint8Array, Uint8Array][]): Promise<(v70.MemberState)[]> {
    assert(this.isV70)
    return this._chain.queryStorage(this.blockHash, 'Control', 'MemberStates', keys)
  }

  async getAllAsV70(): Promise<(v70.MemberState)[]> {
    assert(this.isV70)
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
  get isV70() {
    return this._chain.getStorageItemTypeHash('Control', 'OrgStates') === 'f327a3e0fd73395ec21ebe5954d1566428ebe9161892f4e771f053a111ebd1da'
  }

  /**
   *  Org state (Inactive | Active | Locked) by org id.
   * 
   *  OrgStates: map Hash => OrgState
   */
  async getAsV70(key: Uint8Array): Promise<v70.OrgState> {
    assert(this.isV70)
    return this._chain.getStorage(this.blockHash, 'Control', 'OrgStates', key)
  }

  async getManyAsV70(keys: Uint8Array[]): Promise<(v70.OrgState)[]> {
    assert(this.isV70)
    return this._chain.queryStorage(this.blockHash, 'Control', 'OrgStates', keys.map(k => [k]))
  }

  async getAllAsV70(): Promise<(v70.OrgState)[]> {
    assert(this.isV70)
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
  get isV70() {
    return this._chain.getStorageItemTypeHash('Control', 'Orgs') === 'dbf6593b6bdd77fdfd9b4ac441c42999e6f044fa845f7b975488f261c1c48b56'
  }

  /**
   *  Org by its id.
   * 
   *  Org: map Hash => Org
   */
  async getAsV70(key: Uint8Array): Promise<v70.Org | undefined> {
    assert(this.isV70)
    return this._chain.getStorage(this.blockHash, 'Control', 'Orgs', key)
  }

  async getManyAsV70(keys: Uint8Array[]): Promise<(v70.Org | undefined)[]> {
    assert(this.isV70)
    return this._chain.queryStorage(this.blockHash, 'Control', 'Orgs', keys.map(k => [k]))
  }

  async getAllAsV70(): Promise<(v70.Org)[]> {
    assert(this.isV70)
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
  get isV70() {
    return this._chain.getStorageItemTypeHash('Flow', 'CampaignOf') === 'a88bcf86fd55e1101d2687a3ef4a2023d7273985e577ad904ec2886f0d887cfb'
  }

  /**
   *  Campaign by its id.
   * 
   *  CampaignOf: map Hash => Campaign
   */
  async getAsV70(key: Uint8Array): Promise<v70.Campaign | undefined> {
    assert(this.isV70)
    return this._chain.getStorage(this.blockHash, 'Flow', 'CampaignOf', key)
  }

  async getManyAsV70(keys: Uint8Array[]): Promise<(v70.Campaign | undefined)[]> {
    assert(this.isV70)
    return this._chain.queryStorage(this.blockHash, 'Flow', 'CampaignOf', keys.map(k => [k]))
  }

  async getAllAsV70(): Promise<(v70.Campaign)[]> {
    assert(this.isV70)
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
  get isV70() {
    return this._chain.getStorageItemTypeHash('Flow', 'CampaignStates') === 'a257ccef36770bad35457d8d6a3bfa37cd8d04acde9eabfa82e8416a7ed4b796'
  }

  /**
   *  Campaign state by campaign id.
   *  0 created, 1 activated, 2 paused, ...
   * 
   *  CampaignStates: map Hash => CampaignState
   */
  async getAsV70(key: Uint8Array): Promise<v70.CampaignState> {
    assert(this.isV70)
    return this._chain.getStorage(this.blockHash, 'Flow', 'CampaignStates', key)
  }

  async getManyAsV70(keys: Uint8Array[]): Promise<(v70.CampaignState)[]> {
    assert(this.isV70)
    return this._chain.queryStorage(this.blockHash, 'Flow', 'CampaignStates', keys.map(k => [k]))
  }

  async getAllAsV70(): Promise<(v70.CampaignState)[]> {
    assert(this.isV70)
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
  get isV70() {
    return this._chain.getStorageItemTypeHash('Sense', 'Entities') === '774ef83e73e2a7ab63c708f30f61360e50802de36a2642a0c93da77043b1c724'
  }

  /**
   *  Sense Entity of the account.
   * 
   *  Entities: map AccountId => Entity
   */
  async getAsV70(key: Uint8Array): Promise<v70.Entity | undefined> {
    assert(this.isV70)
    return this._chain.getStorage(this.blockHash, 'Sense', 'Entities', key)
  }

  async getManyAsV70(keys: Uint8Array[]): Promise<(v70.Entity | undefined)[]> {
    assert(this.isV70)
    return this._chain.queryStorage(this.blockHash, 'Sense', 'Entities', keys.map(k => [k]))
  }

  async getAllAsV70(): Promise<(v70.Entity)[]> {
    assert(this.isV70)
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
  get isV70() {
    return this._chain.getStorageItemTypeHash('Sense', 'Properties') === '7ec27592c3630a713f32c3aea3d3240848a205caf963ef0ef04ebf364dc7b77e'
  }

  /**
   *  All properties of the account.
   * 
   *  Properties: map (PropertyType, AccountId) => EntityProperty
   */
  async getAsV70(key1: v70.PropertyType, key2: Uint8Array): Promise<v70.EntityProperty | undefined> {
    assert(this.isV70)
    return this._chain.getStorage(this.blockHash, 'Sense', 'Properties', key1, key2)
  }

  async getManyAsV70(keys: [v70.PropertyType, Uint8Array][]): Promise<(v70.EntityProperty | undefined)[]> {
    assert(this.isV70)
    return this._chain.queryStorage(this.blockHash, 'Sense', 'Properties', keys)
  }

  async getAllAsV70(): Promise<(v70.EntityProperty)[]> {
    assert(this.isV70)
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
  get isV70() {
    return this._chain.getStorageItemTypeHash('Signal', 'ProposalOf') === 'bcb011a3737b73879bc187b61c200cd2b5777426ce7761572e89461aae5e081e'
  }

  /**
   *  Proposal by its hash (id).
   * 
   *  Proposals: map Hash => Proposal
   */
  async getAsV70(key: Uint8Array): Promise<v70.Type_746 | undefined> {
    assert(this.isV70)
    return this._chain.getStorage(this.blockHash, 'Signal', 'ProposalOf', key)
  }

  async getManyAsV70(keys: Uint8Array[]): Promise<(v70.Type_746 | undefined)[]> {
    assert(this.isV70)
    return this._chain.queryStorage(this.blockHash, 'Signal', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV70(): Promise<(v70.Type_746)[]> {
    assert(this.isV70)
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
  get isV70() {
    return this._chain.getStorageItemTypeHash('Signal', 'ProposalStates') === 'c7ce61c1c29cbaa5c1a056b9f220696346cae180012d06c6c3714bfab89e6b63'
  }

  /**
   *  Proposal's state: Created | Activated | Accepted | Rejected | Expired | Aborted | Finalized
   * 
   *  ProposalStates: map Hash => ProposalState
   */
  async getAsV70(key: Uint8Array): Promise<v70.ProposalState> {
    assert(this.isV70)
    return this._chain.getStorage(this.blockHash, 'Signal', 'ProposalStates', key)
  }

  async getManyAsV70(keys: Uint8Array[]): Promise<(v70.ProposalState)[]> {
    assert(this.isV70)
    return this._chain.queryStorage(this.blockHash, 'Signal', 'ProposalStates', keys.map(k => [k]))
  }

  async getAllAsV70(): Promise<(v70.ProposalState)[]> {
    assert(this.isV70)
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

  get isV70() {
    return this._chain.getStorageItemTypeHash('Signal', 'ProposalVoting') === 'cd4cdab8cd84f1e89f98eba5839f50a8d73142ac8857ccd97d1f1b60f9a3ae9e'
  }

  async getAsV70(key: Uint8Array): Promise<v70.Type_752 | undefined> {
    assert(this.isV70)
    return this._chain.getStorage(this.blockHash, 'Signal', 'ProposalVoting', key)
  }

  async getManyAsV70(keys: Uint8Array[]): Promise<(v70.Type_752 | undefined)[]> {
    assert(this.isV70)
    return this._chain.queryStorage(this.blockHash, 'Signal', 'ProposalVoting', keys.map(k => [k]))
  }

  async getAllAsV70(): Promise<(v70.Type_752)[]> {
    assert(this.isV70)
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
  get isV70() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV70(key: Uint8Array): Promise<v70.AccountInfo> {
    assert(this.isV70)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV70(keys: Uint8Array[]): Promise<(v70.AccountInfo)[]> {
    assert(this.isV70)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  async getAllAsV70(): Promise<(v70.AccountInfo)[]> {
    assert(this.isV70)
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
  get isV70() {
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
  async getAsV70(key1: Uint8Array, key2: v70.CurrencyId): Promise<v70.Type_714> {
    assert(this.isV70)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'Accounts', key1, key2)
  }

  async getManyAsV70(keys: [Uint8Array, v70.CurrencyId][]): Promise<(v70.Type_714)[]> {
    assert(this.isV70)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Accounts', keys)
  }

  async getAllAsV70(): Promise<(v70.Type_714)[]> {
    assert(this.isV70)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Accounts')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Tokens', 'Accounts') != null
  }
}
