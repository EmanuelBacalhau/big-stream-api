import { z } from 'zod'

export const CreateUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
})

export const CreateCompleteUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.enum(['ADMIN', 'USER']),
})

export type CreateUserDTO = z.infer<typeof CreateUserSchema>
export type CreateCompleteUserDTO = z.infer<typeof CreateCompleteUserSchema>
