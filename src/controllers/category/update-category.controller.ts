import type {
  UpdateCategoryBodyDTO,
  UpdateCategoryParamsDTO,
} from '@dtos/category/update.dto'
import type { UpdateCategoryUseCase } from '@use-cases/category/update-category.use-case'
import type { FastifyReply, FastifyRequest } from 'fastify'

export class UpdateCategoryController {
  constructor(private readonly updateCategoryUseCase: UpdateCategoryUseCase) {}

  async handle(
    request: FastifyRequest<{
      Body: UpdateCategoryBodyDTO
      Params: UpdateCategoryParamsDTO
    }>,
    response: FastifyReply,
  ): Promise<Response> {
    const { id } = request.params
    const data = request.body

    const category = await this.updateCategoryUseCase.execute(id, data)

    return response.status(200).send({ category })
  }
}
