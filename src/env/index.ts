import { z } from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string(),
})

const { success, data, error } = envSchema.safeParse(process.env)

if (!success) {
  console.error('Invalid environment variables', error.flatten().fieldErrors)

  throw new Error('❌ Invalid environment variables')
}

export const env = data
