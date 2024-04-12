import { Command } from "commander"
import buildDb from "../utils/buildDb"
import buildMigrator from "../utils/buildMigrator"
import logMigrationResult from "../utils/logMigrationResult"
import buildConfig from "../utils/buildConfig"

export default function migrateUp(program: Command) {
  return program
    .command("up")
    .description("Runs the migrations")
    .action(async () => {
      const config = buildConfig(program)
      const db = buildDb({
        database: config.database,
        host: config.host,
        port: Number(config.port),
        user: config.user,
      })
      console.log(1)
      const migrator = buildMigrator(db, config)
      console.log(2)
      const result = await migrator.migrateToLatest()
      logMigrationResult(result)
      await db.destroy()
    })
}
