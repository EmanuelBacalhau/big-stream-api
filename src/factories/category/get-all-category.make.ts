import { GetAllCategoryController } from '@controllers/category/get-all-category.controller'
import { CategoryRepository } from '@repositories/category.repository'
import { GetAllCategoryUseCase } from '@use-cases/category/get-all-category.use-case'

export function makeGetAllCategory() {
  const repository = new CategoryRepository()
  const useCase = new GetAllCategoryUseCase(repository)
  const controller = new GetAllCategoryController(useCase)

  return controller
}
