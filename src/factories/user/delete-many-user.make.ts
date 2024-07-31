import { DeleteManyUserController } from '@controllers/user/delete-many-user.controller'
import { UserRepository } from '@repositories/user.repository'
import { DeleteManyUserUseCase } from '@use-cases/user/delete-many-user.use-case'

export function makeDeleteManyUser() {
  const repository = new UserRepository()
  const useCase = new DeleteManyUserUseCase(repository)
  const controller = new DeleteManyUserController(useCase)

  return controller
}
