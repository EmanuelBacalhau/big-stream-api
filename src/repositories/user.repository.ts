import type { User } from '@prisma/client'
import type {
  CreateUserDTO,
  CreateCompleteUserDTO,
} from '@dtos/user/create.dto'
import type { IUserRepository } from './i-user.repository'
import { prisma } from '@lib/prisma'
import type {
  UpdateCompleteUserBodyDTO,
  UpdateUserBodyDTO,
} from '@dtos/user/update.dto'

export class UserRepository implements IUserRepository {
  async create(data: CreateUserDTO | CreateCompleteUserDTO): Promise<User> {
    return await prisma.user.create({ data })
  }

  async findByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({ where: { email } })
  }

  async findById(id: string): Promise<User | null> {
    return await prisma.user.findUnique({ where: { id } })
  }

  async findAll(page: number, perPage: number): Promise<User[]> {
    return await prisma.user.findMany({
      skip: (page - 1) * perPage,
      take: perPage,
    })
  }

  async update(
    id: string,
    data: UpdateUserBodyDTO | UpdateCompleteUserBodyDTO,
  ): Promise<User> {
    return await prisma.user.update({ where: { id: id }, data })
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({ where: { id } })
  }

  async deleteMany(ids: string[]): Promise<void> {
    await prisma.user.deleteMany({ where: { id: { in: ids } } })
  }
}
