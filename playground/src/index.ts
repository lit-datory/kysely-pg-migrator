import { Kysely, PostgresDialect } from "kysely"
import { DB } from "kysely-codegen/dist/db"
import { Pool } from "pg"

const dialect = new PostgresDialect({
  pool: new Pool({
    database: "playground",
    host: "postgres",
    port: 5432,
    user: "postgres",
  }),
})

const db = new Kysely<DB>({ dialect })

async function run() {
  console.log(await db.selectFrom("users").selectAll().execute())
}

void run()
