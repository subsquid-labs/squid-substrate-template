import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result, Option} from './support'
import * as v63 from './v63'

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
