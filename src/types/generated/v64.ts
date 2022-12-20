import type {Result, Option} from './support'

export type BattlepassState = BattlepassState_Draft | BattlepassState_Active | BattlepassState_Closed

export interface BattlepassState_Draft {
  __kind: 'Draft'
}

export interface BattlepassState_Active {
  __kind: 'Active'
}

export interface BattlepassState_Closed {
  __kind: 'Closed'
}

export interface Battlepass {
  creator: Uint8Array
  orgId: Uint8Array
  name: Uint8Array
  cid: Uint8Array
  season: number
  price: number
  collectionId: number
  created: number
  mutated: number
}

export interface BattlepassNft {
  collectionId: number
  nftId: number
}
