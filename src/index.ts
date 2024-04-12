#!/usr/bin/env node

import { Command } from "commander"
import generateMigration from "./commands/generateMigration"
import migrateUp from "./commands/migrateUp"
import migrateDown from "./commands/migrateDown"
import buildConfig from "./utils/buildConfig"

const program = new Command()

program
  .name("migrator")
  .description("CLI to run and create DB migrations")
  .version("0.0.1")
  .option("-d, --database <dbname>", "Specify the database name")
  .option("-h, --host <hostname>", "Specify the host name")
  .option("-p, --port <port>", "Specify the port number")
  .option("-u, --user <username>", "Specify the username")
  .option("-m, --migrations <folder>", "Specify the migration folder")
  .option("-e, --env <envfile>", "Specify the path to the environment file")

const config = buildConfig(program)
generateMigration(program, config)
migrateUp(program, config)
migrateDown(program, config)

program.parse(process.argv)
