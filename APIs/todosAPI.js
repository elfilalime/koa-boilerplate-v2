import { route, GET, POST } from 'awilix-koa' // or `awilix-router-core`
let jsonMerger = require('json_merger')

@route('/todosAPI')
export default class todosAPI {
  constructor({ todoController }) {
    this.todoController = todoController
  }

  @route('/')
  @GET()
  async listTodos(ctx) {
    jsonMerger.merge(ctx, await this.todoController.all())
  }

  @route('/:id')
  @GET()
  async getTodo(ctx) {
    jsonMerger.merge(ctx, await this.todoController.get(ctx.params.id))
  }

  @route('/')
  @POST()
  async createTodo(ctx) {
    jsonMerger.merge(ctx, await this.todoController.add(ctx.request.body))
  }
}
