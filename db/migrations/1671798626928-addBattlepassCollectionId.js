module.exports = class Data1671798626928 {
  name = 'Data1671798626928'

  async up(db) {
    await db.query(`ALTER TABLE "battlepass_nft" DROP COLUMN "collection_id"`)
    await db.query(`ALTER TABLE "battlepass" ADD "collection_id" integer NOT NULL`)
  }

  async down(db) {
    await db.query(`ALTER TABLE "battlepass_nft" ADD "collection_id" integer NOT NULL`)
    await db.query(`ALTER TABLE "battlepass" DROP COLUMN "collection_id"`)
  }
}
