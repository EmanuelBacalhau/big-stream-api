import type { CreateCategoryBodyDTO } from '@dtos/category/create.dto'
import type { CreateCategoryUseCase } from '@use-cases/category/create-category.use-case'
import type { FastifyReply, FastifyRequest } from 'fastify'

export class CreateCategoryController {
  constructor(private readonly createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(
    request: FastifyRequest<{ Body: CreateCategoryBodyDTO }>,
    response: FastifyReply,
  ): Promise<Response> {
    const data = request.body

    const category = await this.createCategoryUseCase.execute(data)

    return response.code(201).send({ category })
  }
}
