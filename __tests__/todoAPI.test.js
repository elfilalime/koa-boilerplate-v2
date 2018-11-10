import { apiHelper } from './apiHelper'

describe('todosDecorator', function() {
  describe('listTodos', function() {
    it('listTodos description', async function() {
      let request = await apiHelper()
      await request
        .GET('/')
        .send({
          firstName: 'elfilali',
          lastName: 'mohamed',
        })
        .expect(201)
        .expect('Content-Type', 'application/json; charset=utf-8')
    })
  })

  describe('createTodo', function() {
    it('createTodo description', async function() {
      let request = await apiHelper()
      await request
        .post('/')
        .send({ email: 'signupd@test.com', password: 'test@test' })
        .expect(404)
        .expect('Content-Type', 'application/json; charset=utf-8')
    })
  })
})
