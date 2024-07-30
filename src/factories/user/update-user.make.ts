import { UpdateUserController } from '@controllers/user/update-user.controller'
import { UserRepository } from '@repositories/user.repository'
import { UpdateUserUseCase } from '@use-cases/user/update-user.use-case'

export function makeUpdateUser() {
  const repository = new UserRepository()
  const useCase = new UpdateUserUseCase(repository)
  const controller = new UpdateUserController(useCase)

  return controller
}
