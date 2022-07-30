module.exports = class Data1659196186511 {
  name = 'Data1659196186511'

  async up(db) {
    await db.query(`DROP INDEX "public"."IDX_c116ab40c3b32ca2d9c1d17d8b"`)
    await db.query(`DROP INDEX "public"."IDX_c713e6e9d332764c857e77626e"`)
    await db.query(`ALTER TABLE "transfer" DROP COLUMN "block"`)
    await db.query(`ALTER TABLE "transfer" DROP COLUMN "extrinsic"`)
    await db.query(`ALTER TABLE "transfer" ADD "block_number" integer NOT NULL`)
    await db.query(`ALTER TABLE "transfer" ADD "extrinsic_hash" text`)
    await db.query(`CREATE INDEX "IDX_d6624eacc30144ea97915fe846" ON "transfer" ("block_number") `)
    await db.query(`CREATE INDEX "IDX_070c555a86b0b41a534a55a659" ON "transfer" ("extrinsic_hash") `)
    await db.query(`CREATE INDEX "IDX_f4007436c1b546ede08a4fd7ab" ON "transfer" ("amount") `)
  }

  async down(db) {
    await db.query(`CREATE INDEX "IDX_c116ab40c3b32ca2d9c1d17d8b" ON "transfer" ("block") `)
    await db.query(`CREATE INDEX "IDX_c713e6e9d332764c857e77626e" ON "transfer" ("extrinsic") `)
    await db.query(`ALTER TABLE "transfer" ADD "block" integer NOT NULL`)
    await db.query(`ALTER TABLE "transfer" ADD "extrinsic" text`)
    await db.query(`ALTER TABLE "transfer" DROP COLUMN "block_number"`)
    await db.query(`ALTER TABLE "transfer" DROP COLUMN "extrinsic_hash"`)
    await db.query(`DROP INDEX "public"."IDX_d6624eacc30144ea97915fe846"`)
    await db.query(`DROP INDEX "public"."IDX_070c555a86b0b41a534a55a659"`)
    await db.query(`DROP INDEX "public"."IDX_f4007436c1b546ede08a4fd7ab"`)
  }
}
