import type {
  UpdateCompleteUserBodyDTO,
  UpdateUserParamsDTO,
} from '@dtos/user/update.dto'
import type { UpdateCompleteUserUseCase } from '@use-cases/user/update-complete-user.use-case'
import type { FastifyReply, FastifyRequest } from 'fastify'

export class UpdateCompleteUserController {
  constructor(private readonly updateUserUseCase: UpdateCompleteUserUseCase) {}

  async handle(
    request: FastifyRequest<{
      Params: UpdateUserParamsDTO
      Body: UpdateCompleteUserBodyDTO
    }>,
    response: FastifyReply,
  ): Promise<Response> {
    const { id } = request.params
    const data = request.body

    const user = await this.updateUserUseCase.execute(id, data)

    return response.status(200).send({ user })
  }
}
