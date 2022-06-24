import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result} from './support'
import * as v1050 from './v1050'
import * as v2025 from './v2025'
import * as v2028 from './v2028'
import * as v2030 from './v2030'

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
  get isV1050() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === '2208f857b7cd6fecf78ca393cf3d17ec424773727d0028f07c9f0dc608fc1b7a'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV1050(key: v1050.AccountId): Promise<v1050.AccountInfo> {
    assert(this.isV1050)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV1050(keys: v1050.AccountId[]): Promise<(v1050.AccountInfo)[]> {
    assert(this.isV1050)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  /**
   *  The full account information for a particular account ID.
   */
  get isV2025() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === 'eb40f1d91f26d72e29c60e034d53a72b9b529014c7e108f422d8ad5f03f0c902'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV2025(key: v2025.AccountId): Promise<v2025.AccountInfo> {
    assert(this.isV2025)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV2025(keys: v2025.AccountId[]): Promise<(v2025.AccountInfo)[]> {
    assert(this.isV2025)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  /**
   *  The full account information for a particular account ID.
   */
  get isV2028() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === '73070b537f1805475b37167271b33ac7fd6ffad8ba62da08bc14937a017b8bb2'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV2028(key: v2028.AccountId): Promise<v2028.AccountInfo> {
    assert(this.isV2028)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV2028(keys: v2028.AccountId[]): Promise<(v2028.AccountInfo)[]> {
    assert(this.isV2028)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  /**
   *  The full account information for a particular account ID.
   */
  get isV2030() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV2030(key: v2030.AccountId): Promise<v2030.AccountInfo> {
    assert(this.isV2030)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV2030(keys: v2030.AccountId[]): Promise<(v2030.AccountInfo)[]> {
    assert(this.isV2030)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Account') != null
  }
}
