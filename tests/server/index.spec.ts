import request from 'supertest'
import { server } from '../../src/server'
import mockAxios from 'jest-mock-axios'

describe('server', () => {
  let requestWithSupertest: request.SuperTest<request.Test>

  beforeAll(() => {
    requestWithSupertest = request(server)
  })

  describe('GET /api/hello', () => {
    it('should return 200', async () => {
      const response = await requestWithSupertest.get('/api/hello')
      expect(response.status).toBe(200)
      expect(response.type).toBe('application/json')
    })
  })
})

