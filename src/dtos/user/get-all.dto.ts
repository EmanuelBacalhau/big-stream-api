import { z } from 'zod'

export const GetAllUserSchema = z.object({
  page: z.coerce.number().default(1),
  perPage: z.coerce.number().default(10),
})

export type GetAllUserSchema = z.infer<typeof GetAllUserSchema>
