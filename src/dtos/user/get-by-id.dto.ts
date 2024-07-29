import { z } from 'zod'

export const GetUserByIdSchema = z.object({
  id: z.string().uuid(),
})

export type GetUserByIdDTO = z.infer<typeof GetUserByIdSchema>
