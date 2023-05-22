import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  PORT: z.string(),
  DB_ClIENT: z.string(),
  DB_HOST: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string(),
  DB_PORT: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  const error = 'Invalid invornment variables'
  console.error(error, _env.error.format())
  throw new Error(error)
}

export const env = _env.data
