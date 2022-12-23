import type {Result, Option} from './support'

export type MemberState = MemberState_Inactive | MemberState_Active | MemberState_Pending | MemberState_Kicked | MemberState_Banned | MemberState_Exited

export interface MemberState_Inactive {
  __kind: 'Inactive'
}

export interface MemberState_Active {
  __kind: 'Active'
}

export interface MemberState_Pending {
  __kind: 'Pending'
}

export interface MemberState_Kicked {
  __kind: 'Kicked'
}

export interface MemberState_Banned {
  __kind: 'Banned'
}

export interface MemberState_Exited {
  __kind: 'Exited'
}

export type BattlepassState = BattlepassState_DRAFT | BattlepassState_ACTIVE | BattlepassState_ENDED

export interface BattlepassState_DRAFT {
  __kind: 'DRAFT'
}

export interface BattlepassState_ACTIVE {
  __kind: 'ACTIVE'
}

export interface BattlepassState_ENDED {
  __kind: 'ENDED'
}

export interface Battlepass {
  creator: Uint8Array
  orgId: Uint8Array
  name: Uint8Array
  cid: Uint8Array
  season: number
  price: number
  collectionId: number
}
