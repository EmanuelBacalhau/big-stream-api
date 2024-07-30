import type { UpdateCompleteUserBodyDTO } from '@dtos/user/update.dto'
import type { User } from '@prisma/client'
import type { IUserRepository } from '@repositories/i-user.repository'
import { UserNotFound } from '@use-cases/errors/user-not-found'
import { EmailAlreadyExists } from '@use-cases/errors/email-already-exists'
import { hash } from 'bcryptjs'

type IRequest = UpdateCompleteUserBodyDTO
type IResponse = Omit<User, 'password'>

export class UpdateCompleteUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(id: string, data: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findById(id)

    if (!user) {
      throw new UserNotFound()
    }

    if (data.email) {
      const emailAlreadyExists = await this.userRepository.findByEmail(
        data.email,
      )

      if (emailAlreadyExists) {
        throw new EmailAlreadyExists()
      }
    }

    if (data.password) {
      data.password = await hash(data.password, 8)
    }

    const updatedUser = { ...user, ...data }

    await this.userRepository.update(id, updatedUser)

    return {
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      created_at: updatedUser.created_at,
      role: updatedUser.role,
    }
  }
}
