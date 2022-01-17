# How-to cheat sheet

## How to run a processor against a different chain?

You will need to have WebSocket endpoint to connect to the chain node and a Squid Archive. For a registry of Squid Archives, check this community-owned [Archive Registry](https://github.com/subsquid/archive-registry)

If you don't find a suitable Squid Archive in the registry, set up your own Squid archive. There are multiple examples in this [repo](https://github.com/subsquid/squid-archive-setup)

Once set up, we encourage to contribute to the Squid community and make a PR to the [Archive Registry](https://github.com/subsquid/archive-registry).


## Where do I get a type bundle for my chain?

Most chains publish their type bundles as an npm package. One of the best places to check for the latest version is the [polkadot-js/app repo](https://github.com/polkadot-js/apps/tree/master/packages/apps-config). Note, however, that a types bundle only needed for pre-Metadata v14 blocks, so newly setup chains it may be not needed. 


## How do I write the schema?

The schema file defines the shape of the final GraphQL API and has very few limitations. Designing the schema file is very similar to the design of the database schema. As a rule of thumb, the schema should represent high level domain specific entities and relations between them, to make data fetching and filtering easy for the API consumers.

Typically, the API is consumed by the frontend and mobile apps, so it's a good idea to design the schema even before you go on with implementing the processor mappings. In fact, the processor is completely indpendent from the GraphQL server serving the API, so you can experiment how the API looks like.

## How do I update my schema?

So here's a step-by-step instruction. First, generated the model files:

```sh
npx sqd codegen
npm run build
```

Now you have to options: either create a migration for an incremental schema update or recreate the whole schema from scratch. 

During the development process, recreating the schema is often more convenient. However, if you already have a running API in production and don't want to resync it, having an incremental update is more preferrable (but requires data backfilling).

### Option 1: Make an incremental update to the schema

Generate a migration for the incremental changes and apply it
```
npx -r dotenv/config sqd db create-migration AddMyAwesomeNewField
npx -r dotenv/config sqd db migrate
```

You can find the newly generated and applied migration in `db/migrations`.

### Option 2: Recreate schema from scratch

To reset the database and recreate the schema from scratch:

```
npx -r dotenv/config sqd db drop
npx -r dotenv/config sqd db create
```

Remove the old migrationa and create a new init migration:

```
rm -rf db/migrations
npx -r dotenv/config db create-migration Init
```

Apply the migration:

```
npx -r dotenv/config db migrate
```

## How do I run and test the GraphQL API?

Once the migrations are applied, simply run

```
npm run query-node:start
```

Observe the port (4350 by default) and navigate to `localhost:4350/graphql` to explore your API. However, you need to run the processor to start populating the database.


## So how do I start the processor?

First, make sure you have compiled your project with
```
npm run build
```

Then simply run 
```
node -r dotenv/config lib/processor.js
```

## How do I know which events and extrinsics I need for the handlers? 

This part depends on the runtime business-logic of the chain. The primary and the most reliable source of information is thus the Rust sources for the pallets used by the chain. 
For a quick lookup of the documentation and the data format it is often useful to check `Runtime` section of Subscan, e.g. for [Statemine](https://statemine.subscan.io/runtime). One can see the deployed pallets and drill down to events and extrinsics from there. One can also choose the spec version on the drop down.

## How do I decode the event data? And how to deal with runtime upgrades?

Runtime upgrades may change the event data and even the event logic altogether, but Squid gets you covered with a first-class support for runtime upgrades. 

Subsquid SDK comes with a tool called metadata explorer which makes it easy to keep track of all runtime upgrades happen so far.

The basic usage of the explorer is as follows (check also README):

```sh
npx squid-substrate-metadata-explorer \
  --chain <chain endpoint here> \
  --archive <archive endpoint here> \
  --out metadataVersions.json
```

Once it's generated, define all events and calls of interest in `typegen.json`, adjust the bundle and metadata history references and run

```sh
npx squid-substrate-typegen typegen.json
```

A type-safe definition for each and every version of the event will be generated. Most of the times, one should be able to have a simple generic interface together with an runtime version specific adaptors. For example, for Kusama `balances.Transfer` event typegen generated three slightly different versions which can be easily reconciled as follows:

```typescript
/**
 * Normalized `balances.Transfer` event data
 */
interface TransferEvent {
    from: Uint8Array
    to: Uint8Array
    amount: bigint
}

function getTransferEvent(ctx: EventHandlerContext): TransferEvent {
    // instanciate type-safe facade around event data
    let event = new BalancesTransferEvent(ctx)
    // initial version, with runtime spec 1020
    if (event.isV1020) { 
        let [from, to, amount, fee] = event.asV1020 
        return {from, to, amount}
    // first upgrade at runtime spec version 1050
    } else if (event.isV1050) { 
        let [from, to, amount] = event.asV1050
        return {from, to, amount}
    } else { // current version
        // This cast will assert,  
        // that the type of a given event matches
        // the type of generated facade.
        return event.asLatest
    }
}
```