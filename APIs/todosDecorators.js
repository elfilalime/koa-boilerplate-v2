import { route, GET, POST } from 'awilix-koa' // or `awilix-router-core`
import { authentification } from '../Middlewares/authentification.js'
let jsonMerger = require('json_merger')

@route('/todosDecorator')
export default class todosAPI {
  constructor({ todoService }) {
    this.todoService = todoService
  }

  @route('/')
  @GET()
  async listTodos(ctx) {
    jsonMerger.merge(ctx, await this.todoService.all())
  }

  @route('/:id')
  @GET()
  async getTodo(ctx) {
    jsonMerger.merge(ctx, await this.todoService.get(ctx.params.id))
  }

  @POST('/')
  async createTodo(ctx) {
    jsonMerger.merge(ctx, await this.todoService.add(ctx.request.body))
  }
}
