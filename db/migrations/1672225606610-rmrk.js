module.exports = class Data1672225606610 {
  name = 'Data1672225606610'

  async up(db) {
    await db.query(`CREATE TABLE "nft_collection" ("id" character varying NOT NULL, "metadata" text NOT NULL, "max" integer, "symbol" text NOT NULL, "issuer_id" character varying, CONSTRAINT "PK_ffe58aa05707db77c2f20ecdbc3" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_ac41ce5c2e28effcf644a9cd6d" ON "nft_collection" ("issuer_id") `)
    await db.query(`CREATE TABLE "nft" ("id" character varying NOT NULL, "owner" text NOT NULL, "metadata" text NOT NULL, "equipped" boolean, "pending" boolean NOT NULL, "transferable" boolean NOT NULL, "collection_id" character varying, CONSTRAINT "PK_8f46897c58e23b0e7bf6c8e56b0" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_ffe58aa05707db77c2f20ecdbc" ON "nft" ("collection_id") `)
    await db.query(`ALTER TABLE "battlepass" DROP COLUMN "collection_id"`)
    await db.query(`ALTER TABLE "battlepass_nft" ADD "nft_id" character varying`)
    await db.query(`CREATE INDEX "IDX_dec78fd10a5802b108b163047d" ON "battlepass_nft" ("nft_id") `)
    await db.query(`ALTER TABLE "nft_collection" ADD CONSTRAINT "FK_ac41ce5c2e28effcf644a9cd6d1" FOREIGN KEY ("issuer_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "nft" ADD CONSTRAINT "FK_ffe58aa05707db77c2f20ecdbc3" FOREIGN KEY ("collection_id") REFERENCES "nft_collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "battlepass_nft" ADD CONSTRAINT "FK_dec78fd10a5802b108b163047d6" FOREIGN KEY ("nft_id") REFERENCES "nft"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`DROP TABLE "nft_collection"`)
    await db.query(`DROP INDEX "public"."IDX_ac41ce5c2e28effcf644a9cd6d"`)
    await db.query(`DROP TABLE "nft"`)
    await db.query(`DROP INDEX "public"."IDX_ffe58aa05707db77c2f20ecdbc"`)
    await db.query(`ALTER TABLE "battlepass" ADD "collection_id" integer NOT NULL`)
    await db.query(`ALTER TABLE "battlepass_nft" DROP COLUMN "nft_id"`)
    await db.query(`DROP INDEX "public"."IDX_dec78fd10a5802b108b163047d"`)
    await db.query(`ALTER TABLE "nft_collection" DROP CONSTRAINT "FK_ac41ce5c2e28effcf644a9cd6d1"`)
    await db.query(`ALTER TABLE "nft" DROP CONSTRAINT "FK_ffe58aa05707db77c2f20ecdbc3"`)
    await db.query(`ALTER TABLE "battlepass_nft" DROP CONSTRAINT "FK_dec78fd10a5802b108b163047d6"`)
  }
}
