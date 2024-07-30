import type { DeleteUserDTO } from '@dtos/user/delete.dto'
import type { DeleteUserUseCase } from '@use-cases/user/delete-user.use-case'
import type { FastifyReply, FastifyRequest } from 'fastify'

export class DeleteUserController {
  constructor(private readonly deleteUserUseCase: DeleteUserUseCase) {}

  async handle(
    request: FastifyRequest<{ Params: DeleteUserDTO }>,
    response: FastifyReply,
  ): Promise<Response> {
    const { id } = request.params

    await this.deleteUserUseCase.execute(id)

    return response.status(204).send()
  }
}
