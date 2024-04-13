import * as path from "path"
import fs from "fs"
import { Command } from "commander"
import buildConfig from "../utils/buildConfig"

export default function generate(program: Command) {
  const templateFolder = path.resolve(__dirname, "..", "./templates")
  const templateFile = fs.readFileSync(`${templateFolder}/migration.template`)

  return program
    .command("generate")
    .description("Generate new migration file.")
    .argument("<string>", "file name")
    .action((name: string) => {
      const config = buildConfig(program)
      const migrationFolder = path.join(config.migrations)
      const mkdir = () => fs.mkdirSync(migrationFolder)
      const dateStr = new Date().toISOString().replace(/[-:]/g, "").split(".")[0]
      const fileName = `${migrationFolder}/${dateStr}-${name}.ts`

      try {
        if (!fs.lstatSync(migrationFolder).isDirectory()) mkdir()
      } catch {
        fs.mkdirSync(migrationFolder)
      }

      fs.writeFileSync(fileName, templateFile)
      console.info("Created Migration:", fileName)
    })
}
