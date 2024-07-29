import type { User } from '@prisma/client'
import type {
  CreateUserDTO,
  CreateCompleteUserDTO,
} from '@dtos/user/create.dto'
import type { IUserRepository } from './i-user.repository'
import { prisma } from '@lib/prisma'

export class UserRepository implements IUserRepository {
  async create(data: CreateUserDTO): Promise<User> {
    return await prisma.user.create({ data })
  }

  async createComplete(data: CreateCompleteUserDTO): Promise<User> {
    return await prisma.user.create({ data })
  }

  async findByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({ where: { email } })
  }

  async findById(id: string): Promise<User | null> {
    return await prisma.user.findUnique({ where: { id } })
  }

  async update(user: User): Promise<User> {
    return await prisma.user.update({ where: { id: user.id }, data: user })
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({ where: { id } })
  }

  async deleteMany(ids: string[]): Promise<void> {
    await prisma.user.deleteMany({ where: { id: { in: ids } } })
  }
}
