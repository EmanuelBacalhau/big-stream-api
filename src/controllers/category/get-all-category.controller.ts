import type { GetAllCategoryQueryDTO } from '@dtos/category/get-all.dto'
import type { GetAllCategoryUseCase } from '@use-cases/category/get-all-category.use-case'
import type { FastifyReply, FastifyRequest } from 'fastify'

export class GetAllCategoryController {
  constructor(private readonly getAllCategoryUseCase: GetAllCategoryUseCase) {}

  async handle(
    request: FastifyRequest<{ Querystring: GetAllCategoryQueryDTO }>,
    response: FastifyReply,
  ): Promise<Response> {
    const { page, perPage } = request.query

    const categories = await this.getAllCategoryUseCase.execute(page, perPage)

    return response.status(200).send({ categories })
  }
}
