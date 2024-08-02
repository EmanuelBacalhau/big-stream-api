import { z } from 'zod'

export const DeleteCategoryParamsSchema = z.object({
  id: z.string().uuid(),
})

export type DeleteCategoryParamsDTO = z.infer<typeof DeleteCategoryParamsSchema>
