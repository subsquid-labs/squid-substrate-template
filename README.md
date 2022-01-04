# squid-template

Sample [squid](https://subsquid.io) project to demonstrate its structure and conventions.
It accumulates [kusama](https://kusama.network) account balances and serves them via graphql API.

## Prerequisites

* node 16.x
* docker

## Quickly running the sample

```bash
# 1. Install dependencies
npm ci

# 2. Compile typescript files
npm run build

# 3. Start target Postgres database
docker compose up -d

# 4. Apply database migrations from db/migrations
npx sqd db migrate

# 5. Now start the processor
node -r dotenv/config lib/processor.js

# 6. The above command will block the terminal
#    being busy with fetching the chain data, 
#    transforming and storing it in the target database.
#
#    To start the graphql server open the separate terminal
#    and run
npx squid-graphql-server
```
