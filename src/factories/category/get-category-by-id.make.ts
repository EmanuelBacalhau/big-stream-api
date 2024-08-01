import { GetCategoryByIdController } from '@controllers/category/get-category-by-id.controller'
import { CategoryRepository } from '@repositories/category.repository'
import { GetCategoryByIdUseCase } from '@use-cases/category/get-category-by-id.use-case'

export function makeGetCategoryById() {
  const repository = new CategoryRepository()
  const useCase = new GetCategoryByIdUseCase(repository)
  const controller = new GetCategoryByIdController(useCase)

  return controller
}
