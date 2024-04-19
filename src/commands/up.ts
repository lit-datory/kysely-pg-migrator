import { Command } from "commander"
import buildMigrator from "../utils/buildMigrator"
import logMigrationResult from "../utils/logMigrationResult"
import buildConfig from "../utils/buildConfig"
import generateTypes from "../utils/generateTypes"
import generateStructure from "../utils/generateStructure"
import buildDb from "../utils/buildDb"

export default function up(program: Command) {
  return program
    .command("up")
    .description("Runs the migrations")
    .action(async () => {
      const config = buildConfig(program)
      const db = buildDb(config)
      const migrator = buildMigrator(db, config)
      const result = await migrator.migrateToLatest()
      logMigrationResult(result)
      await generateTypes(config)
      await generateStructure(config)
      await db.destroy()
    })
}
