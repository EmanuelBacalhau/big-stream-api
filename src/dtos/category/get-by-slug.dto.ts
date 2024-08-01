import { z } from 'zod'

export const GetCategoryBySlugParamsSchema = z.object({
  slug: z.string(),
})

export type GetCategoryBySlugDTO = z.infer<typeof GetCategoryBySlugParamsSchema>
