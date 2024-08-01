import type { GetCategoryByIdParamsDTO } from '@dtos/category/get-by-id.dto'
import type { GetCategoryByIdUseCase } from '@use-cases/category/get-category-by-id.use-case'
import type { FastifyReply, FastifyRequest } from 'fastify'
export class GetCategoryByIdController {
  constructor(
    private readonly getCategoryByIdUseCase: GetCategoryByIdUseCase,
  ) {}

  async handle(
    request: FastifyRequest<{ Params: GetCategoryByIdParamsDTO }>,
    response: FastifyReply,
  ): Promise<Response> {
    const { id } = request.params

    const category = await this.getCategoryByIdUseCase.execute(id)

    return response.status(200).send({ category })
  }
}
