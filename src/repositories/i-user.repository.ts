import type { User } from '@prisma/client'
import type {
  CreateCompleteUserDTO,
  CreateUserDTO,
} from '@dtos/user/create.dto'
import type {
  UpdateCompleteUserBodyDTO,
  UpdateUserBodyDTO,
} from '@dtos/user/update.dto'

export interface IUserRepository {
  create(data: CreateUserDTO | CreateCompleteUserDTO): Promise<User>
  findByEmail(email: string): Promise<User | null>
  findById(id: string): Promise<User | null>
  findAll(page: number, perPage: number): Promise<User[]>
  update(
    id: string,
    data: UpdateUserBodyDTO | UpdateCompleteUserBodyDTO,
  ): Promise<User>
  delete(id: string): Promise<void>
  deleteMany(ids: string[]): Promise<void>
}
