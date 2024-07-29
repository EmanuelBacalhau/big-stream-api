import {
  CreateCompleteUserSchema,
  CreateUserSchema,
} from '@dtos/user/create.dto'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { makeCreateUser } from '@factories/user/create-user.make'
import { makeCreateCompleteUser } from '@factories/user/create-complete-user.make'
import { makeGetUserById } from '@factories/user/get-user-by-id.make'
import { GetUserByIdSchema } from '@dtos/user/get-by-id.dto'

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

  const createCompleteUserController = makeCreateCompleteUser()
  app.withTypeProvider<ZodTypeProvider>().post(
    '/users/complete',
    {
      schema: {
        body: CreateCompleteUserSchema,
      },
    },
    createCompleteUserController.handle.bind(createCompleteUserController),
  )

  const getUserByIdController = makeGetUserById()
  app
    .withTypeProvider<ZodTypeProvider>()
    .get(
      '/users/:id',
      { schema: { params: GetUserByIdSchema } },
      getUserByIdController.handle.bind(getUserByIdController),
    )
}
