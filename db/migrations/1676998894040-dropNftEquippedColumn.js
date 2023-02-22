module.exports = class Data1676998894040 {
  name = 'Data1676998894040'

  async up(db) {
    await db.query(`ALTER TABLE "nft" DROP COLUMN "equipped"`)
  }

  async down(db) {
    await db.query(`ALTER TABLE "nft" ADD "equipped" boolean`)
  }
}
