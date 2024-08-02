import { z } from 'zod'

export const DeleteManyCategoryBodySchema = z.object({
  ids: z.array(z.string().uuid()),
})

export type DeleteManyCategoryBodyDTO = z.infer<
  typeof DeleteManyCategoryBodySchema
>
