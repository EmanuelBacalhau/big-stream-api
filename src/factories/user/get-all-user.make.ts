import { GetAllUserController } from '@controllers/user/get-all-user.controller'
import { UserRepository } from '@repositories/user.repository'
import { GetAllUsersUseCase } from '@use-cases/user/get-all-user.use-case'

export function makeGetAllUser() {
  const repository = new UserRepository()
  const useCase = new GetAllUsersUseCase(repository)
  const controller = new GetAllUserController(useCase)

  return controller
}
