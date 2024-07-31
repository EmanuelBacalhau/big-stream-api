import { CreateCategoryBodySchema } from '@dtos/category/create.dto'
import { makeCreateCategory } from '@factories/category/create-user.make copy'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'

export async function categoryRoutes(app: FastifyInstance) {
  const createUserController = makeCreateCategory()
  app.withTypeProvider<ZodTypeProvider>().post(
    '/categories',
    {
      schema: {
        body: CreateCategoryBodySchema,
      },
    },
    createUserController.handle.bind(createUserController),
  )
}
