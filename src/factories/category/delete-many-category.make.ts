import { DeleteManyCategoryController } from '@controllers/category/delete-many-category.controller'
import { CategoryRepository } from '@repositories/category.repository'
import { DeleteManyCategoryUseCase } from '@use-cases/category/delete-many-category.use-case'

export function makeDeleteManyCategory() {
  const repository = new CategoryRepository()
  const useCase = new DeleteManyCategoryUseCase(repository)
  const controller = new DeleteManyCategoryController(useCase)

  return controller
}
