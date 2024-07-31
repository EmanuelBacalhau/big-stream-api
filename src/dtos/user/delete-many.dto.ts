import { z } from 'zod'

export const DeleteManyUserBodySchema = z.object({
  ids: z.array(z.string().uuid()),
})

export type DeleteManyUserDTO = z.infer<typeof DeleteManyUserBodySchema>
