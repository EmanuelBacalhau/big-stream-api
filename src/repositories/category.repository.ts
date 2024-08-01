import type { CreateCategoryBodyDTO } from '@dtos/category/create.dto'
import type { UpdateCategoryBodyDTO } from '@dtos/category/update.dto'
import type { Category } from '@prisma/client'
import type { ICategoryRepository } from './i-category.repository'
import { prisma } from '@lib/prisma'

export class CategoryRepository implements ICategoryRepository {
  async create(data: CreateCategoryBodyDTO): Promise<Category> {
    return await prisma.category.create({
      data: {
        name: data.name,
        slug: data.name.toLowerCase().replace(' ', '-'),
      },
    })
  }

  async findByName(name: string): Promise<Category | null> {
    return await prisma.category.findFirst({ where: { name } })
  }

  async findBySlug(slug: string): Promise<Category | null> {
    return await prisma.category.findFirst({ where: { slug } })
  }

  async findById(id: string): Promise<Category | null> {
    return await prisma.category.findUnique({ where: { id } })
  }

  async findAll(page: number, perPage: number): Promise<Category[]> {
    return await prisma.category.findMany({
      skip: (page - 1) * perPage,
      take: perPage,
    })
  }

  async update(id: string, data: UpdateCategoryBodyDTO): Promise<Category> {
    return await prisma.category.update({ where: { id }, data })
  }

  async delete(id: string): Promise<void> {
    await prisma.category.delete({ where: { id } })
  }

  async deleteMany(ids: string[]): Promise<void> {
    await prisma.category.deleteMany({ where: { id: { in: ids } } })
  }
}
