import { z } from 'zod'

export const UpdateCategoryParamsSchema = z.object({
  id: z.string().uuid(),
})

export const UpdateCategoryBodySchema = z.object({
  name: z.string(),
})

export type UpdateCategoryParamsDTO = z.infer<typeof UpdateCategoryParamsSchema>
export type UpdateCategoryBodyDTO = z.infer<typeof UpdateCategoryBodySchema>
