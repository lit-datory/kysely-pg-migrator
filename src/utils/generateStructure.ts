import { Config } from "./buildConfig"
import exec from "./exec"

export default async function generateStructure(config: Config) {
  await exec(`
    pg_dump ${config.url} --no-owner --schema-only -U postgres > ${config.folder}/structure.sql
  `)

  await exec(`
    pg_dump ${config.url} --no-owner -t kysely_migration -t kysely_migration_lock --data-only > ${config.folder}/data.sql
  `)
}
