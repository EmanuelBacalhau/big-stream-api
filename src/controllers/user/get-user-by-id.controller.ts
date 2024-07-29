import type { GetUserByIdDTO } from '@dtos/user/get-by-id.dto'
import type { GetUserByIdUseCase } from '@use-cases/user/get-user-by-id.use-case'
import type { FastifyReply, FastifyRequest } from 'fastify'

export class GetUserByIdController {
  constructor(private readonly getUserByIdUseCase: GetUserByIdUseCase) {}

  async handle(
    request: FastifyRequest<{ Params: GetUserByIdDTO }>,
    response: FastifyReply,
  ): Promise<Response> {
    const { id } = request.params

    const user = await this.getUserByIdUseCase.execute(id)

    return response.send({ user })
  }
}
