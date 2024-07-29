import type { CreateUserDTO } from '@dtos/user/create.dto'
import type { User } from '@prisma/client'
import { EmailAlreadyExists } from '@use-cases/errors/email-already-exists'
import { hash } from 'bcryptjs'
import type { IUserRepository } from 'repositories/i-user.repository'

type IRequest = CreateUserDTO
type IResponse = Omit<User, 'password'>

export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(data: IRequest): Promise<IResponse> {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new EmailAlreadyExists()
    }

    const user = await this.userRepository.create({
      ...data,
      password: await hash(data.password, 8),
    })

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      role: user.role,
    }
  }
}
