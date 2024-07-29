import { CreateUserSchema } from '@dtos/user/create.dto'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { makeCreateUser } from '@factories/user/create-user.make'

export async function userRoutes(app: FastifyInstance) {
  const createUserController = makeCreateUser()
  app.withTypeProvider<ZodTypeProvider>().post(
    '/users',
    {
      schema: {
        body: CreateUserSchema,
      },
    },
    createUserController.handle.bind(createUserController),
  )
}
