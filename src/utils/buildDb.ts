import { Kysely, PostgresDialect } from "kysely"
import { Pool, PoolConfig } from "pg"

export default function buildDb(options: PoolConfig) {
  const dialect = new PostgresDialect({
    pool: new Pool(options),
  })

  const db = new Kysely<unknown>({ dialect })
  return db
}
