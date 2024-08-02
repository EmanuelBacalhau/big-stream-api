import type { DeleteCategoryParamsDTO } from '@dtos/category/delete.dto'
import type { DeleteCategoryUseCase } from '@use-cases/category/delete-category.use-case'
import type { FastifyReply, FastifyRequest } from 'fastify'

export class DeleteCategoryController {
  constructor(private readonly deleteCategoryUseCase: DeleteCategoryUseCase) {}

  async handle(
    request: FastifyRequest<{
      Params: DeleteCategoryParamsDTO
    }>,
    response: FastifyReply,
  ): Promise<Response> {
    const { id } = request.params

    await this.deleteCategoryUseCase.execute(id)

    return response.status(204).send()
  }
}
