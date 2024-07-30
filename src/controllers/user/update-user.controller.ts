import type {
  UpdateUserBodyDTO,
  UpdateUserParamsDTO,
} from '@dtos/user/update.dto'
import type { UpdateUserUseCase } from '@use-cases/user/update-user.use-case'
import type { FastifyReply, FastifyRequest } from 'fastify'

export class UpdateUserController {
  constructor(private readonly updateUserUseCase: UpdateUserUseCase) {}

  async handle(
    request: FastifyRequest<{
      Params: UpdateUserParamsDTO
      Body: UpdateUserBodyDTO
    }>,
    response: FastifyReply,
  ): Promise<Response> {
    const { id } = request.params
    const data = request.body

    const user = await this.updateUserUseCase.execute(id, data)

    return response.status(200).send({ user })
  }
}
