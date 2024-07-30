import { z } from 'zod'

export const DeleteUserParamsSchema = z.object({
  id: z.string().uuid(),
})

export type DeleteUserDTO = z.infer<typeof DeleteUserParamsSchema>
