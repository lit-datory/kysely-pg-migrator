import { Command } from "commander"
import buildConfig from "../utils/buildConfig"
import generateTypes from "../utils/generateTypes"

export default function codegen(program: Command) {
  return program
    .command("codegen")
    .description("Undo the migrations")
    .action(async () => {
      const config = buildConfig(program)
      await generateTypes(config)
    })
}
