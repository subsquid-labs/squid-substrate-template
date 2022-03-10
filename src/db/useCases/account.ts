import { Store } from "@subsquid/substrate-processor";
import { DeepPartial } from "typeorm";
import { findById, upsert } from "./common";
import { Account } from "../../model";
import * as ss58 from "@subsquid/ss58";

export const createOrUpdateAccount = (
  store: Store,
  data: DeepPartial<Account>
): Promise<Account> => upsert(store, Account, data);

export const getKusamaAccount = (store: Store, address: Uint8Array): Promise<Account | undefined> => {
  const kusamaAddress = ss58.codec("kusama").encode(address);
  return findById(store, Account, kusamaAddress)
}

export const creteOrUpdateKusamaAccount = (store: Store, address: Uint8Array, data: Omit<Partial<Account>, 'id'>): Promise<Account> => {
  const kusamaAddress = ss58.codec("kusama").encode(address);
  return upsert(store, Account, { id: kusamaAddress, ...data })
}
