build:
	@npm run build


serve:
	@npx squid-graphql-server

process: migrate
	@node -r dotenv/config lib/processor.js

migrate:
	@npx squid-typeorm-migration apply


migration:
	@npx squid-typeorm-migration create Data


codegen:
	@npx squid-typeorm-codegen


typegen:
	@npx squid-substrate-typegen typegen.json


up:
	@docker-compose up -d


down:
	@docker-compose down


.PHONY: process serve start codegen migration migrate up down
