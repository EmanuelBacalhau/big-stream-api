import { CreateCategoryBodySchema } from '@dtos/category/create.dto'
import { DeleteCategoryParamsSchema } from '@dtos/category/delete.dto'
import { GetAllCategoryQuerySchema } from '@dtos/category/get-all.dto'
import { GetCategoryByIdParamsSchema } from '@dtos/category/get-by-id.dto'
import { GetCategoryBySlugParamsSchema } from '@dtos/category/get-by-slug.dto'
import {
  UpdateCategoryBodySchema,
  UpdateCategoryParamsSchema,
} from '@dtos/category/update.dto'
import { makeCreateCategory } from '@factories/category/create-category.make'
import { makeDeleteCategory } from '@factories/category/delete-category.make'
import { makeGetAllCategory } from '@factories/category/get-all-category.make'
import { makeGetCategoryById } from '@factories/category/get-category-by-id.make'
import { makeGetCategoryBySlug } from '@factories/category/get-category-by-slug.make'
import { makeUpdateCategory } from '@factories/category/update-category.make'
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

  const updateCategoryController = makeUpdateCategory()
  app.withTypeProvider<ZodTypeProvider>().patch(
    '/categories/:id',
    {
      schema: {
        body: UpdateCategoryBodySchema,
        params: UpdateCategoryParamsSchema,
      },
    },
    updateCategoryController.handle.bind(updateCategoryController),
  )

  const deleteCategoryController = makeDeleteCategory()
  app.withTypeProvider<ZodTypeProvider>().delete(
    '/categories/:id',
    {
      schema: {
        params: DeleteCategoryParamsSchema,
      },
    },
    deleteCategoryController.handle.bind(deleteCategoryController),
  )
}
