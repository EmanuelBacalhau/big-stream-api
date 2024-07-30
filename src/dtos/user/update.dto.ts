import { z } from 'zod'

export const UpdateUserParamsSchema = z.object({
  id: z.string().uuid(),
})

export const UpdateUserBodySchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  password: z.string().min(8).optional(),
})

export const UpdateCompleteUserBodySchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  password: z.string().optional(),
  role: z.enum(['ADMIN', 'USER']).optional(),
})

export type UpdateUserParamsDTO = z.infer<typeof UpdateUserParamsSchema>
export type UpdateUserBodyDTO = z.infer<typeof UpdateUserBodySchema>
export type UpdateCompleteUserBodyDTO = z.infer<
  typeof UpdateCompleteUserBodySchema
>
