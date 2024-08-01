import { CreateCategoryController } from '@controllers/category/create-category.controller'
import { CategoryRepository } from '@repositories/category.repository'
import { CreateCategoryUseCase } from '@use-cases/category/create-category.use-case'

export function makeCreateCategory() {
  const repository = new CategoryRepository()
  const useCase = new CreateCategoryUseCase(repository)
  const controller = new CreateCategoryController(useCase)

  return controller
}
