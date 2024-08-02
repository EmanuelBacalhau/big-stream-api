import { DeleteCategoryController } from '@controllers/category/delete-category.controller'
import { CategoryRepository } from '@repositories/category.repository'
import { DeleteCategoryUseCase } from '@use-cases/category/delete-category.use-case'

export function makeDeleteCategory() {
  const repository = new CategoryRepository()
  const useCase = new DeleteCategoryUseCase(repository)
  const controller = new DeleteCategoryController(useCase)

  return controller
}
