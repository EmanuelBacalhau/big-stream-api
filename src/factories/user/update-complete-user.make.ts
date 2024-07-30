import { UpdateCompleteUserController } from '@controllers/user/update-complete-user.controller'
import { UpdateUserController } from '@controllers/user/update-user.controller'
import { UserRepository } from '@repositories/user.repository'
import { UpdateCompleteUserUseCase } from '@use-cases/user/update-complete-user.use-case'
import { UpdateUserUseCase } from '@use-cases/user/update-user.use-case'

export function makeUpdateCompleteUser() {
  const repository = new UserRepository()
  const useCase = new UpdateCompleteUserUseCase(repository)
  const controller = new UpdateCompleteUserController(useCase)

  return controller
}
