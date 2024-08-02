import { UpdateCategoryController } from '@controllers/category/update-category.controller'
import { CategoryRepository } from '@repositories/category.repository'
import { UpdateCategoryUseCase } from '@use-cases/category/update-category.use-case'

export function makeUpdateCategory() {
  const repository = new CategoryRepository()
  const useCase = new UpdateCategoryUseCase(repository)
  const controller = new UpdateCategoryController(useCase)

  return controller
}
