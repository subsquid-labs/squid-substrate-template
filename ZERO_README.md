# Squid for Zero Network

The concept is next:

* Use the trigger (event or extrinsic).
* Get the data from the trigger itself or from the chain storage.
* Save normalized data into the relational db.

## Project structure

* `schema.graphql` - database schema definition.
* `typegen.json` - describes which types should be introspected from the chain.
* `hasura_metadata.json` - not a part of the squid itself, but tightly connected to the changes in the database schema.
* `dev/docker-compose.yml` - contains all the required services for the local development.
* `db/` - contains db migrations.
* `src/processor` - the entry point (has two flows: standard flow and non-standard flow, ex. balances).
* `src/mappings` - the main logic lives here, contains handlers for events and calls.
* `src/balances, tokens, chainState` - something not included in `src/mappings` because of the different processing logic.
* `src/storage` - chain storage getters.
* `src/model` - both custom and auto-generated TypeORM classes.

## Dev flow

### 1. Setup local environment

Everything needed for the local setup and Squid to work is located in `dev/docker-compose.yml`.

* Check `docker-compose.yml`. A target chain for the archiver could be changed via `ingest`'s service command, 
ex.: `"-e", "wss://node.dev.sub.zero.io"`
* Run `cd dev && docker-compose up -d`. As a result, db, squid archiver, gamedao-service and hasura will be started. 
* Wait until the archiver is fully synced with a chain.
* Check the squid configs. Make sure to check if `src/config.ts` has proper `dataSource` config for both chain and 
archive, ex.: `archive: 'http://localhost:8888/graphql', chain: 'wss://node.dev.sub.zero.io'`.
* Run a local Squid, which will be connected to the local archiver to get the data feed and types introspection information.

### 1.1. Run the Squid

Considering step 1 is complete and db, archiver and the other services are running, you can can build and run the Squid (processor).

```bash
# 1. Install dependencies
npm ci

# 2. Compile typescript files
make build

# 3. Start the processor
make process
```

### 2. Feature flow

* If the feature needs additional events, storage and the other types from the chain, 
update `typegen.json` and generate types with `make typegen`. As a result `src/types/generated` will be updated.
* If the feature needs a db schema changes, update `schema.graphql` and generate TypeORM classes with `make codegen`. 
As a result `src/model/generated` will be updated. Then [generate a migration and apply it](#3-generate-database-migration).
* If the feature needs a data retreival from the chain storage, add/update getters at `src/storage`, which
will be used later by the event/call handlers.
* Depending on the feature flow (standard or non-standard), update the event/call handlers. For standard flow - 
`src/mappings/{pallet name}`, for non-standard - it's a processor code `src/processor.ts`.
* If needed, reset db (`cd dev && docker-compose down -v && docker-compose up -d` or `npx sqd db {drop|create|migrate}`)
* Build and run an updated Squid `make build && make process`.
* If there were some DB changes, update `hasura_metadata.json`.
* Go to hasura, ex. `http://localhost:9080/console`, import hasura metadata `hasura_metadata.json` and query the objects.

### 2.1. Standard vs non-standard feature flow

For the most cases, the standard feature flow is enough. So, before starting a new feature development, 
you should understand if it's possible to process an object only relying on an event or a call (standard "internal" flow),
or do you need also an extra information and processing from the other events, calls or blocks in order 
to store an object (non-standart "external" flow).

For `balances`, `tokens` we'd like to accumulate all the account ids, which were involved in the balance 
change before making a storage call. This way we are reducing storage calls significantly, but from 
the other side we need to operate above the event and also above the block level.
The `chainState` needs non-standard flow as well, because it operates not on the event or extrinsic level,
but on the block level.

For the `gamedao-protocol` objects we don't need this extra processing and the standard flow is reasonably enough.

### 3. Generate database migration

All database changes are applied through migration files located at `db/migrations`.
`squid-typeorm-migration(1)` tool provides several commands to drive the process.
It is all [TypeORM](https://typeorm.io/#/migrations) under the hood.

```bash
# Connect to database, analyze its state and generate migration to match the target schema.
# The target schema is derived from entity classes generated earlier.
# Don't forget to compile your entity classes beforehand!
npx squid-typeorm-migration generate

# Create template file for custom database changes
npx squid-typeorm-migration create

# Apply database migrations from `db/migrations`
npx squid-typeorm-migration apply

# Revert the last performed migration
npx squid-typeorm-migration revert         
```
