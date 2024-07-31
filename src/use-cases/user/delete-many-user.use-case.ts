import type { IUserRepository } from '@repositories/i-user.repository'
import { UserNotFound } from '@use-cases/errors/user-not-found'

export class DeleteManyUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(ids: string[]): Promise<void> {
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i]
      const element = await this.userRepository.findById(id)

      if (!element) {
        throw new UserNotFound()
      }
    }

    await this.userRepository.deleteMany(ids)
  }
}
