module.exports = class Data1677684616572 {
  name = 'Data1677684616572'

  async up(db) {
    await db.query(`ALTER TABLE "nft_collection" DROP CONSTRAINT "FK_ac41ce5c2e28effcf644a9cd6d1"`)
    await db.query(`DROP INDEX "public"."IDX_ac41ce5c2e28effcf644a9cd6d"`)
    await db.query(`ALTER TABLE "nft_collection" DROP COLUMN "metadata"`)
    await db.query(`ALTER TABLE "nft_collection" DROP COLUMN "symbol"`)
    await db.query(`ALTER TABLE "nft_collection" DROP COLUMN "issuer_id"`)
    await db.query(`ALTER TABLE "nft" DROP COLUMN "pending"`)
    await db.query(`ALTER TABLE "nft" DROP COLUMN "transferable"`)
    await db.query(`ALTER TABLE "nft" DROP COLUMN "owner"`)
    await db.query(`ALTER TABLE "nft" DROP COLUMN "metadata"`)
    await db.query(`ALTER TABLE "nft_collection" ADD "owner_id" character varying`)
    await db.query(`ALTER TABLE "nft" ADD "owner_id" character varying`)
    await db.query(`CREATE INDEX "IDX_a44ae247ba071997b3849ec571" ON "nft_collection" ("owner_id") `)
    await db.query(`CREATE INDEX "IDX_83cfd3a290ed70c660f8c9dfe2" ON "nft" ("owner_id") `)
    await db.query(`ALTER TABLE "nft_collection" ADD CONSTRAINT "FK_a44ae247ba071997b3849ec5717" FOREIGN KEY ("owner_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "nft" ADD CONSTRAINT "FK_83cfd3a290ed70c660f8c9dfe2c" FOREIGN KEY ("owner_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`ALTER TABLE "nft_collection" ADD CONSTRAINT "FK_ac41ce5c2e28effcf644a9cd6d1" FOREIGN KEY ("issuer_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`CREATE INDEX "IDX_ac41ce5c2e28effcf644a9cd6d" ON "nft_collection" ("issuer_id") `)
    await db.query(`ALTER TABLE "nft_collection" ADD "metadata" text NOT NULL`)
    await db.query(`ALTER TABLE "nft_collection" ADD "symbol" text NOT NULL`)
    await db.query(`ALTER TABLE "nft_collection" ADD "issuer_id" character varying`)
    await db.query(`ALTER TABLE "nft" ADD "pending" boolean NOT NULL`)
    await db.query(`ALTER TABLE "nft" ADD "transferable" boolean NOT NULL`)
    await db.query(`ALTER TABLE "nft" ADD "owner" text NOT NULL`)
    await db.query(`ALTER TABLE "nft" ADD "metadata" text NOT NULL`)
    await db.query(`ALTER TABLE "nft_collection" DROP COLUMN "owner_id"`)
    await db.query(`ALTER TABLE "nft" DROP COLUMN "owner_id"`)
    await db.query(`DROP INDEX "public"."IDX_a44ae247ba071997b3849ec571"`)
    await db.query(`DROP INDEX "public"."IDX_83cfd3a290ed70c660f8c9dfe2"`)
    await db.query(`ALTER TABLE "nft_collection" DROP CONSTRAINT "FK_a44ae247ba071997b3849ec5717"`)
    await db.query(`ALTER TABLE "nft" DROP CONSTRAINT "FK_83cfd3a290ed70c660f8c9dfe2c"`)
  }
}
