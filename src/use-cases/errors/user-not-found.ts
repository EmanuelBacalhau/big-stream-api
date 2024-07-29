export class UserNotFound {
  message: string
  status: number

  constructor() {
    this.message = 'User not found'
    this.status = 404
  }
}
