import type { CreateCategoryBodyDTO } from '@dtos/category/create.dto'
import type { Category } from '@prisma/client'
import type { ICategoryRepository } from '@repositories/i-category.repository'
import { CategoryAlreadyExists } from '@use-cases/errors/category-already-exists'

export class CreateCategoryUseCase {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async execute(data: CreateCategoryBodyDTO): Promise<Category> {
    const categoryExists = await this.categoryRepository.findByName(data.name)

    if (categoryExists) {
      throw new CategoryAlreadyExists()
    }

    return this.categoryRepository.create(data)
  }
}
