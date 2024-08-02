import type { Category } from '@prisma/client'
import type { ICategoryRepository } from '@repositories/i-category.repository'

export class GetAllCategoryUseCase {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async execute(page: number, perPage: number): Promise<Category[]> {
    return this.categoryRepository.findAll(page, perPage)
  }
}
