import { GetUserByIdController } from '@controllers/user/get-user-by-id.controller'
import { UserRepository } from '@repositories/user.repository'
import { GetUserByIdUseCase } from '@use-cases/user/get-user-by-id.use-case'

export function makeGetUserById() {
  const repository = new UserRepository()
  const useCase = new GetUserByIdUseCase(repository)
  const controller = new GetUserByIdController(useCase)

  return controller
}
