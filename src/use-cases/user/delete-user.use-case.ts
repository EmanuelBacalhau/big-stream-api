import type { IUserRepository } from '@repositories/i-user.repository'
import { UserNotFound } from '@use-cases/errors/user-not-found'

export class DeleteUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(id: string): Promise<void> {
    const isUserExists = await this.userRepository.findById(id)

    if (!isUserExists) {
      throw new UserNotFound()
    }

    await this.userRepository.delete(id)
  }
}
