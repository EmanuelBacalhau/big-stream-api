export class EmailAlreadyExists {
  message: string
  status: number

  constructor() {
    this.message = 'Email already exists'
    this.status = 409
  }
}
