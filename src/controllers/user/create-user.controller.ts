import type { CreateUserDTO } from '@dtos/user/create.dto'
import type { CreateUserUseCase } from '@use-cases/user/create-user.use-case'
import type { FastifyReply, FastifyRequest } from 'fastify'

export class CreateUserController {
  constructor(private readonly createUserClientUseCase: CreateUserUseCase) {}

  async handle(
    request: FastifyRequest<{ Body: CreateUserDTO }>,
    response: FastifyReply,
  ): Promise<Response> {
    const { name, email, password } = request.body

    const user = await this.createUserClientUseCase.execute({
      name,
      email,
      password,
    })

    return response.status(201).send({ user })
  }
}
