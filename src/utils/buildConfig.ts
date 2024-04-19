import { Command } from "commander"
import loadEnvFile from "./loadEnvFile"

export type Config = ReturnType<typeof buildConfig>
export default function buildConfig(program: Command) {
  const options = program.opts<Record<string, string>>()
  const env = loadEnvFile(options.env)

  const config = {
    database: options.database || env.POSTGRES_DATABASE,
    host: options.host || env.POSTGRES_HOST,
    port: options.port || env.POSTGRES_PORT,
    user: options.user || env.POSTGRES_USER,
    password: env.POSTGRES_PASSWORD,
    folder: options.folder || env.DB_FOLDER,
  }

  const hasPassword = !!config.password?.length

  return {
    ...config,
    migrations: `${config.folder}/migrations`,
    url: hasPassword
      ? `postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`
      : `postgres://${config.user}@${config.host}:${config.port}/${config.database}`,
  }
}
