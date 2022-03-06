import {
  EventHandlerContext,
  SubstrateProcessor,
} from "@subsquid/substrate-processor";
import { BalancesTransferEvent } from "./types/events";
import {
  createHistoricalBalance,
  creteOrUpdateKusamaAccount,
  getKusamaAccount,
} from "./db/useCases";

const processor = new SubstrateProcessor("kusama_balances");

processor.setTypesBundle("kusama");
processor.setBatchSize(500);

processor.setDataSource({
  archive: "https://kusama.indexer.gc.subsquid.io/v4/graphql",
  chain: "wss://kusama-rpc.polkadot.io",
});

processor.addEventHandler("balances.Transfer", async (ctx) => {
  const transfer = getTransferEvent(ctx);
  const tip = ctx.extrinsic?.tip || 0n;

  let fromAccount = await getKusamaAccount(ctx.store, transfer.from);
  fromAccount = await creteOrUpdateKusamaAccount(ctx.store, transfer.from, {
    balance: (fromAccount?.balance || 0n) - transfer.amount - tip,
  });

  await createHistoricalBalance(ctx.store, {
    id: `${ctx.event.id}-from`,
    account: fromAccount,
    balance: fromAccount.balance,
    date: new Date(ctx.block.timestamp),
  });

  let toAccount = await getKusamaAccount(ctx.store, transfer.to);
  toAccount = await creteOrUpdateKusamaAccount(ctx.store, transfer.to, {
    balance: (toAccount?.balance || 0n) - transfer.amount,
  });

  await createHistoricalBalance(ctx.store, {
    id: `${ctx.event.id}-to`,
    account: toAccount,
    balance: toAccount.balance,
    date: new Date(ctx.block.timestamp),
  });
});

processor.run();

interface TransferEvent {
  from: Uint8Array;
  to: Uint8Array;
  amount: bigint;
}

function getTransferEvent(ctx: EventHandlerContext): TransferEvent {
  const event = new BalancesTransferEvent(ctx);
  if (event.isV1020) {
    const [from, to, amount] = event.asV1020;
    return { from, to, amount };
  }
  if (event.isV1050) {
    const [from, to, amount] = event.asV1050;
    return { from, to, amount };
  }
  return event.asLatest;
}
