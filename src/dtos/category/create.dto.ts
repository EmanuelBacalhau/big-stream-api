import { z } from 'zod'

export const CreateCategoryBodySchema = z.object({
  name: z.string(),
})

export type CreateCategoryBodyDTO = z.infer<typeof CreateCategoryBodySchema>
