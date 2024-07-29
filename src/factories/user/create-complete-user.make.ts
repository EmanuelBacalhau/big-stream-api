import { CreateCompleteUserController } from '@controllers/user/create-complete-user.controller'
import { UserRepository } from '@repositories/user.repository'
import { CreateCompleteUserUseCase } from '@use-cases/user/create-complete-user.use-case'

export function makeCreateCompleteUser() {
  const repository = new UserRepository()
  const useCase = new CreateCompleteUserUseCase(repository)
  const controller = new CreateCompleteUserController(useCase)

  return controller
}
