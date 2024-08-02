import type { ICategoryRepository } from '@repositories/i-category.repository'
import { CategoryNotFound } from '@use-cases/errors/category-not-found'

export class DeleteManyCategoryUseCase {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async execute(ids: string[]) {
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i]

      const category = await this.categoryRepository.findById(id)

      if (!category) {
        throw new CategoryNotFound()
      }
    }

    await this.categoryRepository.deleteMany(ids)
  }
}
