import { CreateCategoryBodySchema } from '@dtos/category/create.dto'
import { GetCategoryBySlugParamsSchema } from '@dtos/category/get-by-slug.dto'
import { makeCreateCategory } from '@factories/category/create-category.make'
import { makeGetCategoryBySlug } from '@factories/category/get-category-by-slug.make'
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

  const getCategoryBySlug = makeGetCategoryBySlug()
  app.withTypeProvider<ZodTypeProvider>().get(
    '/categories/:slug',
    {
      schema: {
        params: GetCategoryBySlugParamsSchema,
      },
    },
    getCategoryBySlug.handle.bind(getCategoryBySlug),
  )
}
