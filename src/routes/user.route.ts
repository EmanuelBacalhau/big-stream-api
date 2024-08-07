import {
  CreateCompleteUserSchema,
  CreateUserSchema,
} from '@dtos/user/create.dto'
import { DeleteManyUserBodySchema } from '@dtos/user/delete-many.dto'
import { DeleteUserParamsSchema } from '@dtos/user/delete.dto'
import { GetAllUserSchema } from '@dtos/user/get-all.dto'
import { GetUserByIdSchema } from '@dtos/user/get-by-id.dto'
import {
  UpdateCompleteUserBodySchema,
  UpdateUserBodySchema,
  UpdateUserParamsSchema,
} from '@dtos/user/update.dto'
import { makeCreateCompleteUser } from '@factories/user/create-complete-user.make'
import { makeCreateUser } from '@factories/user/create-user.make'
import { makeDeleteManyUser } from '@factories/user/delete-many-user.make'
import { makeDeleteUser } from '@factories/user/delete-user.make'
import { makeGetAllUser } from '@factories/user/get-all-user.make'
import { makeGetUserById } from '@factories/user/get-user-by-id.make'
import { makeUpdateCompleteUser } from '@factories/user/update-complete-user.make'
import { makeUpdateUser } from '@factories/user/update-user.make'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'

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

  const getAllUsersController = makeGetAllUser()
  app.withTypeProvider<ZodTypeProvider>().get(
    '/users',
    {
      schema: {
        querystring: GetAllUserSchema,
      },
    },
    getAllUsersController.handle.bind(getAllUsersController),
  )

  const updateUserController = makeUpdateUser()
  app.withTypeProvider<ZodTypeProvider>().patch(
    '/users/:id',
    {
      schema: {
        params: UpdateUserParamsSchema,
        body: UpdateUserBodySchema,
      },
    },
    updateUserController.handle.bind(updateUserController),
  )

  const updateCompleteUserController = makeUpdateCompleteUser()
  app.withTypeProvider<ZodTypeProvider>().patch(
    '/users/:id/complete',
    {
      schema: {
        params: UpdateUserParamsSchema,
        body: UpdateCompleteUserBodySchema,
      },
    },
    updateCompleteUserController.handle.bind(updateCompleteUserController),
  )

  const deleteUserController = makeDeleteUser()
  app.withTypeProvider<ZodTypeProvider>().delete(
    '/users/:id',
    {
      schema: {
        params: DeleteUserParamsSchema,
      },
    },
    deleteUserController.handle.bind(deleteUserController),
  )

  const deleteManyUserController = makeDeleteManyUser()
  app.withTypeProvider<ZodTypeProvider>().delete(
    '/users',
    {
      schema: {
        body: DeleteManyUserBodySchema,
      },
    },
    deleteManyUserController.handle.bind(deleteManyUserController),
  )
}
