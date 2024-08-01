import { z } from 'zod'

export const GetCategoryBySlugParamsSchema = z.object({
  slug: z.string(),
})

export type GetCategoryBySlugParamsDTO = z.infer<
  typeof GetCategoryBySlugParamsSchema
>
