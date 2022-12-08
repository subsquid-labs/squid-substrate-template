module.exports = class addWeb3NameAndDiscordToIdentity1687425670669 {
  name = 'addWeb3NameAndDiscordToIdentity1687425670669'

  async up(db) {
    await db.query(`ALTER TABLE "identity" ADD "web3name" text`)
    await db.query(`ALTER TABLE "identity" ADD "discord" text`)
  }

  async down(db) {
    await db.query(`ALTER TABLE "identity" DROP COLUMN "discord"`)
    await db.query(`ALTER TABLE "identity" DROP COLUMN "web3name"`)
  }
}
