export class CategoryNotFound {
  message: string
  status: number

  constructor() {
    this.message = 'Category not found'
    this.status = 404
  }
}
