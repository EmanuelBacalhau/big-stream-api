import type { DeleteManyCategoryBodyDTO } from '@dtos/category/delete-many.dto'
import type { DeleteManyCategoryUseCase } from '@use-cases/category/delete-many-category.use-case'
import type { FastifyReply, FastifyRequest } from 'fastify'

export class DeleteManyCategoryController {
  constructor(
    private readonly deleteManyCategoryUseCase: DeleteManyCategoryUseCase,
  ) {}

  async handle(
    request: FastifyRequest<{ Body: DeleteManyCategoryBodyDTO }>,
    reply: FastifyReply,
  ) {
    const { ids } = request.body

    await this.deleteManyCategoryUseCase.execute(ids)

    reply.code(204).send()
  }
}
