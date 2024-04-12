import { Command } from "commander"
import loadEnvFile from "./loadEnvFile"

export type Config = ReturnType<typeof buildConfig>
export default function buildConfig(program: Command) {
  const options = program.opts<Record<string, string>>()
  const env = loadEnvFile(options.env)

  return {
    database: options.database || env.POSTGRES_DATABASE,
    host: options.host || env.POSTGRES_HOST,
    port: options.port || env.POSTGRES_PORT,
    user: options.user || env.POSTGRES_USER,
    migrations: options.migrations,
  }
}
