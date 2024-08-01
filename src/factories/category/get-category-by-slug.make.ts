import { GetCategoryBySlugController } from '@controllers/category/get-category-by-slug.controller'
import { CategoryRepository } from '@repositories/category.repository'
import { GetCategoryBySlugUseCase } from '@use-cases/category/get-category-by-slug.use-case'

export function makeGetCategoryBySlug() {
  const repository = new CategoryRepository()
  const useCase = new GetCategoryBySlugUseCase(repository)
  const controller = new GetCategoryBySlugController(useCase)

  return controller
}
