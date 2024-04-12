import fs from "fs"

export default function loadEnvFile(filePath?: string) {
  if (!filePath) return {}

  const envData = fs.readFileSync(filePath, "utf8")
  const lines = envData.split("\n")
  return lines.reduce(
    (config, line) => {
      const [key, value] = line.split("=")
      if (value) config[key] = value?.trim()
      return config
    },
    {} as Record<string, string>,
  )
}
