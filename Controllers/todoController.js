import { NotFound, BadRequest } from 'fejl'

import { Todo } from '../Models/todoModel'

/**
 * Todo Service.
 * Gets a todo store injected.
 */
export default class TodoService {
  async all() {
    return {
      status: 200,
      body: Todo.find({})
    }
  }

  async get(id) {
    if (Todo.findById(id).length > 0) {
      return {
        status: 200,
        body: Todo.findById(id)
      }
    } else {
      throw new NotFound({
        err_code: 'CLIENT_NOT_FOUND',
        message: 'clients not found in database'
      })
    }
  }

  async add(data) {
    let car = new Todo({ name: data.name })

    let error = existedClient.validateSync()

    if (error) {
      throw new BadRequest({
        err_code: 'FORMAT_ERROR',
        errors: error.errors
      })
    }

    await car.save()

    return {
      status: 201,
      body: car
    }
  }
}
