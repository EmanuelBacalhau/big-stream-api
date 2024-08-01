import type { Category } from '@prisma/client'
import type { ICategoryRepository } from '@repositories/i-category.repository'

export class GetCategoryBySlugUseCase {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async execute(slug: string): Promise<Category | null> {
    return await this.categoryRepository.findBySlug(slug)
  }
}
