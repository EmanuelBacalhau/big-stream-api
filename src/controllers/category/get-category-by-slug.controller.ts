import type { GetCategoryBySlugDTO } from '@dtos/category/get-by-slug.dto'
import type { GetCategoryBySlugUseCase } from '@use-cases/category/get-category-by-slug.use-case'
import type { FastifyReply, FastifyRequest } from 'fastify'

export class GetCategoryBySlugController {
  constructor(
    private readonly getCategoryByNameUseCase: GetCategoryBySlugUseCase,
  ) {}

  async handle(
    request: FastifyRequest<{ Params: GetCategoryBySlugDTO }>,
    response: FastifyReply,
  ): Promise<Response> {
    const { slug } = request.params

    const category = await this.getCategoryByNameUseCase.execute(slug)

    return response.status(200).send({ category })
  }
}
