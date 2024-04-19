import { Config } from "./buildConfig"
import exec from "./exec"

export default async function generateTypes(config: Config) {
  await exec(`DATABASE_URL=${config.url} kysely-codegen`)
}
