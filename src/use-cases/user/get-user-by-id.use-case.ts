import type { IUserRepository } from '@repositories/i-user.repository'
import { UserNotFound } from '@use-cases/errors/user-not-found'

export class GetUserByIdUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(id: string) {
    const user = await this.userRepository.findById(id)

    if (!user) {
      throw new UserNotFound()
    }

    return user
  }
}
