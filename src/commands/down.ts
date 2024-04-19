import { Command } from "commander"
import buildDb from "../utils/buildDb"
import buildMigrator from "../utils/buildMigrator"
import logMigrationResult from "../utils/logMigrationResult"
import buildConfig from "../utils/buildConfig"
import generateTypes from "../utils/generateTypes"
import generateStructure from "../utils/generateStructure"

export default function down(program: Command) {
  return program
    .command("down")
    .description("Undo the migrations")
    .action(async () => {
      const config = buildConfig(program)
      const db = buildDb(config)
      const migrator = buildMigrator(db, config)
      const result = await migrator.migrateDown()
      logMigrationResult(result)
      await generateTypes(config)
      await generateStructure(config)
      await db.destroy()
    })
}
