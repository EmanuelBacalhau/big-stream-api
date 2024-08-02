import { z } from 'zod'

export const GetAllCategoryQuerySchema = z.object({
  page: z.coerce.number().default(1),
  perPage: z.coerce.number().default(10),
})

export type GetAllCategoryQueryDTO = z.infer<typeof GetAllCategoryQuerySchema>
