import { Store } from "@subsquid/substrate-processor";
import { insertAndReturn } from "./common";
import { HistoricalBalance } from "../../model";

export const createHistoricalBalance = (
  store: Store,
  data: HistoricalBalance
): Promise<HistoricalBalance> => insertAndReturn(store, HistoricalBalance, data);
