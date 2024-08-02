import { CreateCategoryBodySchema } from '@dtos/category/create.dto'
import { GetAllCategoryQuerySchema } from '@dtos/category/get-all.dto'
import { GetCategoryByIdParamsSchema } from '@dtos/category/get-by-id.dto'
import { GetCategoryBySlugParamsSchema } from '@dtos/category/get-by-slug.dto'
import { makeCreateCategory } from '@factories/category/create-category.make'
import { makeGetAllCategory } from '@factories/category/get-all-category.make'
import { makeGetCategoryById } from '@factories/category/get-category-by-id.make'
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

  const getCategoryBySlugController = makeGetCategoryBySlug()
  app.withTypeProvider<ZodTypeProvider>().get(
    '/categories/:slug',
    {
      schema: {
        params: GetCategoryBySlugParamsSchema,
      },
    },
    getCategoryBySlugController.handle.bind(getCategoryBySlugController),
  )

  const getCategoryByIdController = makeGetCategoryById()
  app.withTypeProvider<ZodTypeProvider>().get(
    '/categories/:id/details',
    {
      schema: {
        params: GetCategoryByIdParamsSchema,
      },
    },
    getCategoryByIdController.handle.bind(getCategoryByIdController),
  )

  const getAllCategoryController = makeGetAllCategory()
  app.withTypeProvider<ZodTypeProvider>().get(
    '/categories',
    {
      schema: {
        querystring: GetAllCategoryQuerySchema,
      },
    },
    getAllCategoryController.handle.bind(getAllCategoryController),
  )
}
