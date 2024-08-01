import type { CreateCategoryBodyDTO } from '@dtos/category/create.dto'
import type { UpdateCategoryBodyDTO } from '@dtos/category/update.dto'
import type { Category } from '@prisma/client'

export interface ICategoryRepository {
  create(data: CreateCategoryBodyDTO): Promise<Category>
  findByName(name: string): Promise<Category | null>
  findBySlug(slug: string): Promise<Category | null>
  findById(id: string): Promise<Category | null>
  findAll(page: number, perPage: number): Promise<Category[]>
  update(id: string, data: UpdateCategoryBodyDTO): Promise<Category>
  delete(id: string): Promise<void>
  deleteMany(ids: string[]): Promise<void>
}
