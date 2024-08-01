import type { Category } from '@prisma/client'
import type { ICategoryRepository } from '@repositories/i-category.repository'
import { CategoryNotFound } from '@use-cases/errors/category-not-found'

export class GetCategoryBySlugUseCase {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async execute(slug: string): Promise<Category | null> {
    const category = await this.categoryRepository.findBySlug(slug)

    if (!category) {
      throw new CategoryNotFound()
    }

    return category
  }
}
