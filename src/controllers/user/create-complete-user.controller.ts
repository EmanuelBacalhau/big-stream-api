import type { CreateCompleteUserDTO } from '@dtos/user/create.dto'
import type { CreateCompleteUserUseCase } from '@use-cases/user/create-complete-user.use-case'
import type { FastifyReply, FastifyRequest } from 'fastify'

export class CreateCompleteUserController {
  constructor(
    private readonly createUserClientUseCase: CreateCompleteUserUseCase,
  ) {}

  async handle(
    request: FastifyRequest<{ Body: CreateCompleteUserDTO }>,
    response: FastifyReply,
  ): Promise<Response> {
    const data = request.body

    const user = await this.createUserClientUseCase.execute(data)

    return response.status(201).send({ user })
  }
}
