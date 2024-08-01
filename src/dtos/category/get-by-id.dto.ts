import { z } from 'zod'

export const GetCategoryByIdParamsSchema = z.object({
  id: z.string(),
})

export type GetCategoryByIdParamsDTO = z.infer<
  typeof GetCategoryByIdParamsSchema
>
