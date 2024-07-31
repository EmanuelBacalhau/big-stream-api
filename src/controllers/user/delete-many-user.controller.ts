import type { DeleteManyUserDTO } from '@dtos/user/delete-many.dto'
import type { DeleteManyUserUseCase } from '@use-cases/user/delete-many-user.use-case'
import type { FastifyReply, FastifyRequest } from 'fastify'

export class DeleteManyUserController {
  constructor(private readonly deleteManyUserUseCase: DeleteManyUserUseCase) {}

  async handle(
    request: FastifyRequest<{ Body: DeleteManyUserDTO }>,
    response: FastifyReply,
  ): Promise<Response> {
    const { ids } = request.body

    await this.deleteManyUserUseCase.execute(ids)

    return response.status(204).send()
  }
}
