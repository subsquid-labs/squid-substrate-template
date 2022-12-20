module.exports = class Data1671475881741 {
  name = 'Data1671475881741'

  async up(db) {
    await db.query(`CREATE TABLE "battlepass" ("id" character varying NOT NULL, "name" text NOT NULL, "state" text NOT NULL, "season" text NOT NULL, "price" numeric NOT NULL, "created_at_block" integer NOT NULL, "updated_at_block" integer NOT NULL, "cid" text NOT NULL, "creator_id" character varying, "org_id" character varying, CONSTRAINT "PK_434ed07af6067d5b12ec01d502c" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_9b9cd4134d96145521de25f536" ON "battlepass" ("creator_id") `)
    await db.query(`CREATE INDEX "IDX_28e3dd04131afd63b535212b64" ON "battlepass" ("org_id") `)
    await db.query(`CREATE TABLE "battlepass_nft" ("id" character varying NOT NULL, "collection_id" integer NOT NULL, "owner_id" character varying, "battlepass_id" character varying, CONSTRAINT "PK_403a8a9635a02968aca94a14c75" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_011aba7b83327bfd2602c04354" ON "battlepass_nft" ("owner_id") `)
    await db.query(`CREATE INDEX "IDX_52e4467b3374bb7fe3c43a88e0" ON "battlepass_nft" ("battlepass_id") `)
    await db.query(`ALTER TABLE "organization" ADD "url" text NOT NULL`)
    await db.query(`ALTER TABLE "organization" ADD "location" text NOT NULL`)
    await db.query(`ALTER TABLE "organization" ADD "tags" text array NOT NULL`)
    await db.query(`ALTER TABLE "battlepass" ADD CONSTRAINT "FK_9b9cd4134d96145521de25f536a" FOREIGN KEY ("creator_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "battlepass" ADD CONSTRAINT "FK_28e3dd04131afd63b535212b643" FOREIGN KEY ("org_id") REFERENCES "organization"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "battlepass_nft" ADD CONSTRAINT "FK_011aba7b83327bfd2602c04354b" FOREIGN KEY ("owner_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "battlepass_nft" ADD CONSTRAINT "FK_52e4467b3374bb7fe3c43a88e03" FOREIGN KEY ("battlepass_id") REFERENCES "battlepass"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`DROP TABLE "battlepass"`)
    await db.query(`DROP INDEX "public"."IDX_9b9cd4134d96145521de25f536"`)
    await db.query(`DROP INDEX "public"."IDX_28e3dd04131afd63b535212b64"`)
    await db.query(`DROP TABLE "battlepass_nft"`)
    await db.query(`DROP INDEX "public"."IDX_011aba7b83327bfd2602c04354"`)
    await db.query(`DROP INDEX "public"."IDX_52e4467b3374bb7fe3c43a88e0"`)
    await db.query(`ALTER TABLE "organization" DROP COLUMN "url"`)
    await db.query(`ALTER TABLE "organization" DROP COLUMN "location"`)
    await db.query(`ALTER TABLE "organization" DROP COLUMN "tags"`)
    await db.query(`ALTER TABLE "battlepass" DROP CONSTRAINT "FK_9b9cd4134d96145521de25f536a"`)
    await db.query(`ALTER TABLE "battlepass" DROP CONSTRAINT "FK_28e3dd04131afd63b535212b643"`)
    await db.query(`ALTER TABLE "battlepass_nft" DROP CONSTRAINT "FK_011aba7b83327bfd2602c04354b"`)
    await db.query(`ALTER TABLE "battlepass_nft" DROP CONSTRAINT "FK_52e4467b3374bb7fe3c43a88e03"`)
  }
}
