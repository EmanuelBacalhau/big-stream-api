import type { UpdateCategoryBodyDTO } from '@dtos/category/update.dto'
import type { Category } from '@prisma/client'
import type { ICategoryRepository } from '@repositories/i-category.repository'
import { CategoryAlreadyExists } from '@use-cases/errors/category-already-exists'
import { CategoryNotFound } from '@use-cases/errors/category-not-found'

export class UpdateCategoryUseCase {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async execute(id: string, data: UpdateCategoryBodyDTO): Promise<Category> {
    const category = await this.categoryRepository.findById(id)

    if (!category) {
      throw new CategoryNotFound()
    }
    const categoryWithSameName = await this.categoryRepository.findByName(
      data.name,
    )

    if (categoryWithSameName) {
      throw new CategoryAlreadyExists()
    }

    const updatedCategory = await this.categoryRepository.update(id, data)

    return updatedCategory
  }
}
