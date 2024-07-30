import { DeleteUserController } from '@controllers/user/delete-user.controller'
import { UserRepository } from '@repositories/user.repository'
import { DeleteUserUseCase } from '@use-cases/user/delete-user.use-case'

export function makeDeleteUser() {
  const repository = new UserRepository()
  const useCase = new DeleteUserUseCase(repository)
  const controller = new DeleteUserController(useCase)

  return controller
}
