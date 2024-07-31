export class CategoryAlreadyExists {
  message: string
  status: number

  constructor() {
    this.message = 'Category already exists'
    this.status = 409
  }
}
