import { Command } from "commander"
import buildDb from "../utils/buildDb"
import buildMigrator from "../utils/buildMigrator"
import logMigrationResult from "../utils/logMigrationResult"
import buildConfig from "../utils/buildConfig"

export default function down(program: Command) {
  return program
    .command("down")
    .description("Undo the migrations")
    .action(async () => {
      const config = buildConfig(program)
      const db = buildDb({
        database: config.database,
        host: config.host,
        port: Number(config.port),
        user: config.user,
      })
      const migrator = buildMigrator(db, config)
      const result = await migrator.migrateDown()
      logMigrationResult(result)
      await db.destroy()
    })
}
