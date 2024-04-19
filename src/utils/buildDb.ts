import { Kysely, PostgresDialect } from "kysely"
import { Pool } from "pg"
import { Config } from "./buildConfig"

export default function buildDb(config: Config) {
  const dialect = new PostgresDialect({
    pool: new Pool({
      database: config.database,
      host: config.host,
      port: Number(config.port),
      user: config.user,
    }),
  })

  const db = new Kysely<unknown>({ dialect })
  return db
}
