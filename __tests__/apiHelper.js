import { createServer } from '../lib/server'
import { memoize } from 'lodash'
let request = require('supertest')

/**
 * API helper to make it easier to test endpoints.
 */
export async function apiHelper() {
  const server = await startServer()
  const baseURL = 'http://127.0.0.1:' + server.address().port

  let r = request(baseURL)
  return r
}


const startServer = memoize(async () => {
  return (await createServer()).listen()
})

afterAll(async () => {
  // Server is memoized so it won't start a new one.
  // We need to close it.
  const server = await startServer()
  server.close()
})
