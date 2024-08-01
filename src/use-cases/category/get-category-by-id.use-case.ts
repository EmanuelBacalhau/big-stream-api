import type { Category } from '@prisma/client'
import type { ICategoryRepository } from '@repositories/i-category.repository'
import { CategoryNotFound } from '@use-cases/errors/category-not-found'

export class GetCategoryByIdUseCase {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async execute(id: string): Promise<Category | null> {
    const category = await this.categoryRepository.findById(id)

    if (!category) {
      throw new CategoryNotFound()
    }

    return category
  }
}
