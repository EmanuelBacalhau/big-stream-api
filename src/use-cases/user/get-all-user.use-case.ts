import type { User } from '@prisma/client'
import type { IUserRepository } from '@repositories/i-user.repository'

type IResponse = Omit<User, 'password'>[]

export class GetAllUsersUseCase {
  constructor(private readonly repository: IUserRepository) {}

  async execute(page: number, perPage: number): Promise<IResponse> {
    const currentPage = page || 1
    const usersPorPage = perPage || 10

    const users = await this.repository.findAll(currentPage, usersPorPage)

    return users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      created_at: user.created_at,
    }))
  }
}
