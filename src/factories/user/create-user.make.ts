import { CreateUserController } from '@controllers/user/create-user.controller'
import { UserRepository } from '@repositories/user.repository'
import { CreateUserUseCase } from '@use-cases/user/create-user.use-case'

export function makeCreateUser() {
  const repository = new UserRepository()
  const useCase = new CreateUserUseCase(repository)
  const controller = new CreateUserController(useCase)

  return controller
}
