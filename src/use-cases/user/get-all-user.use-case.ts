import type { User } from '@prisma/client'
import type { IUserRepository } from '@repositories/i-user.repository'

export class GetAllUsersUseCase {
  constructor(private readonly repository: IUserRepository) {}

  async execute(page: number, perPage: number): Promise<User[]> {
    const currentPage = page || 1
    const usersPorPage = perPage || 10

    const users = await this.repository.findAll(currentPage, usersPorPage)

    return users
  }
}
