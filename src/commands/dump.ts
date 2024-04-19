import { Command } from "commander"
import buildConfig from "../utils/buildConfig"
import generateStructure from "../utils/generateStructure"

export default function dump(program: Command) {
  return program
    .command("dump")
    .description("Undo the migrations")
    .action(async () => {
      const config = buildConfig(program)
      await generateStructure(config)
    })
}
