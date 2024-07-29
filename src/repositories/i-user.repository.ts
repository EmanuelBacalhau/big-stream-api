import type { User } from '@prisma/client'
import type {
  CreateCompleteUserDTO,
  CreateUserDTO,
} from '@dtos/user/create.dto'

export interface IUserRepository {
  create(data: CreateUserDTO): Promise<User>
  createComplete(data: CreateCompleteUserDTO): Promise<User>
  findByEmail(email: string): Promise<User | null>
  findById(id: string): Promise<User | null>
  update(user: User): Promise<User>
  delete(id: string): Promise<void>
  deleteMany(ids: string[]): Promise<void>
}
