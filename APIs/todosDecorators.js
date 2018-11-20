import { route, GET, POST } from 'awilix-koa' // or `awilix-router-core`
import { authentification } from '../Middlewares/authentification.js'
let jsonMerger = require('json_merger')

@route('/todosDecorator')
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

  @POST('/')
  async createTodo(ctx) {
    jsonMerger.merge(ctx, await this.todoController.add(ctx.request.body))
  }
}
