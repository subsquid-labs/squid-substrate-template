module.exports = class Data1659186904593 {
  name = 'Data1659186904593'

  async up(db) {
    await db.query(`CREATE TABLE "transfer" ("id" character varying NOT NULL, "block" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic" text, "amount" numeric NOT NULL, "fee" numeric, "from_id" character varying, "to_id" character varying, CONSTRAINT "PK_fd9ddbdd49a17afcbe014401295" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_c116ab40c3b32ca2d9c1d17d8b" ON "transfer" ("block") `)
    await db.query(`CREATE INDEX "IDX_70ff8b624c3118ac3a4862d22c" ON "transfer" ("timestamp") `)
    await db.query(`CREATE INDEX "IDX_c713e6e9d332764c857e77626e" ON "transfer" ("extrinsic") `)
    await db.query(`CREATE INDEX "IDX_76bdfed1a7eb27c6d8ecbb7349" ON "transfer" ("from_id") `)
    await db.query(`CREATE INDEX "IDX_0751309c66e97eac9ef1149362" ON "transfer" ("to_id") `)
    await db.query(`CREATE TABLE "account" ("id" character varying NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`)
    await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_76bdfed1a7eb27c6d8ecbb73496" FOREIGN KEY ("from_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_0751309c66e97eac9ef11493623" FOREIGN KEY ("to_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`DROP TABLE "transfer"`)
    await db.query(`DROP INDEX "public"."IDX_c116ab40c3b32ca2d9c1d17d8b"`)
    await db.query(`DROP INDEX "public"."IDX_70ff8b624c3118ac3a4862d22c"`)
    await db.query(`DROP INDEX "public"."IDX_c713e6e9d332764c857e77626e"`)
    await db.query(`DROP INDEX "public"."IDX_76bdfed1a7eb27c6d8ecbb7349"`)
    await db.query(`DROP INDEX "public"."IDX_0751309c66e97eac9ef1149362"`)
    await db.query(`DROP TABLE "account"`)
    await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_76bdfed1a7eb27c6d8ecbb73496"`)
    await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_0751309c66e97eac9ef11493623"`)
  }
}
