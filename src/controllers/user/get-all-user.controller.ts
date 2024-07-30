import type { GetAllUserSchema } from '@dtos/user/get-all.dto'
import type { GetAllUsersUseCase } from '@use-cases/user/get-all-user.use-case'
import type { FastifyReply, FastifyRequest } from 'fastify'

export class GetAllUserController {
  constructor(private readonly getAllUserUseCase: GetAllUsersUseCase) {}

  async handle(
    request: FastifyRequest<{ Querystring: GetAllUserSchema }>,
    response: FastifyReply,
  ): Promise<Response> {
    const { page, perPage } = request.query

    const users = await this.getAllUserUseCase.execute(page, perPage)

    return response.send({ users: users })
  }
}
