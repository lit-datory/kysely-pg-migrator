import { Command } from "commander"
import { Config } from "../utils/buildConfig"

export default function migrateDown(program: Command) {
  return program
    .command("down")
    .description("Rollbacks the migrations")
    .action(() => {
      console.log(config)
      console.log("migrate down")
    })
}
