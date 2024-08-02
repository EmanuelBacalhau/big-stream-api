import type { ICategoryRepository } from '@repositories/i-category.repository'
import { CategoryNotFound } from '@use-cases/errors/category-not-found'

export class DeleteCategoryUseCase {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async execute(id: string): Promise<void> {
    const category = await this.categoryRepository.findById(id)

    if (!category) {
      throw new CategoryNotFound()
    }

    await this.categoryRepository.delete(id)
  }
}
