import { Command } from "commander"
import packageJson from "../package.json"
import generate from "./commands/generate"
import up from "./commands/up"
import down from "./commands/down"
import dump from "./commands/dump"
import codegen from "./commands/codegen"

const program = new Command()

program
  .name(packageJson.name)
  .description(packageJson.description)
  .version(packageJson.version)
  .option("-d, --database <dbname>", "Specify the database name")
  .option("-h, --host <hostname>", "Specify the host name")
  .option("-p, --port <port>", "Specify the port number")
  .option("-u, --user <username>", "Specify the username")
  .option("-f, --folder <folder>", "Specify the db folder")
  .option("-e, --env <envfile>", "Specify the path to the environment file")

generate(program)
up(program)
down(program)
dump(program)
codegen(program)

export default program
