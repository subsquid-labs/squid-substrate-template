import type {Result} from './support'

export type AccountId = Uint8Array

export interface AccountInfo {
  nonce: Index
  refcount: RefCount
  data: AccountData
}

export type Index = number

export type RefCount = number

export interface AccountData {
  free: Balance
  reserved: Balance
  miscFrozen: Balance
  feeFrozen: Balance
}

export type Balance = bigint
