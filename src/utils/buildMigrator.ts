import * as path from "path"
import { Migrator, FileMigrationProvider, Kysely } from "kysely"
import { promises as fs } from "fs"
import { Config } from "./buildConfig"

export default function buildMigrator(db: Kysely<unknown>, config: Config) {
  const migrator = new Migrator({
    db,
    provider: new FileMigrationProvider({
      fs,
      path,
      migrationFolder: path.join(config.migrations),
    }),
  })

  return migrator
}
