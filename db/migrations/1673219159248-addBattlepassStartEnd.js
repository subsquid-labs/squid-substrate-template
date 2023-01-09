module.exports = class Data1673219159248 {
  name = 'Data1673219159248'

  async up(db) {
    await db.query(`ALTER TABLE "battlepass" ADD "active_from_block" integer`)
    await db.query(`ALTER TABLE "battlepass" ADD "active_to_block" integer`)
  }

  async down(db) {
    await db.query(`ALTER TABLE "battlepass" DROP COLUMN "active_from_block"`)
    await db.query(`ALTER TABLE "battlepass" DROP COLUMN "active_to_block"`)
  }
}
