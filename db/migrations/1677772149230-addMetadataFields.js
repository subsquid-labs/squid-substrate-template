module.exports = class Data1677772149230 {
  name = 'Data1677772149230'

  async up(db) {
    await db.query(`ALTER TABLE "nft_collection" ADD "metadata" text`)
    await db.query(`ALTER TABLE "nft_collection" ADD "metadata_is_frozen" boolean`)
    await db.query(`ALTER TABLE "nft" ADD "metadata" text`)
    await db.query(`ALTER TABLE "nft" ADD "metadata_is_frozen" boolean`)
  }

  async down(db) {
    await db.query(`ALTER TABLE "nft_collection" DROP COLUMN "metadata"`)
    await db.query(`ALTER TABLE "nft_collection" DROP COLUMN "metadata_is_frozen"`)
    await db.query(`ALTER TABLE "nft" DROP COLUMN "metadata"`)
    await db.query(`ALTER TABLE "nft" DROP COLUMN "metadata_is_frozen"`)
  }
}
