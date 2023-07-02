describe('env', () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    jest.resetModules() // this is important - it clears the cache
    process.env = { ...OLD_ENV }
  })

  afterAll(() => {
    process.env = OLD_ENV // restore old env
  })

  describe('PORT is not set', () => {
    it('should be 3000', () => {
      const { env } = require('../../src/env')

      expect(env.PORT).toBe(3000)
    })
  })

  describe('PORT is set', () => {
    beforeEach(() => {
      process.env.PORT = '8080'
    })

    it('should be 8080', () => {
      const { env } = require('../../src/env')

      expect(env.PORT).toBe(8080)
    })
  })
})
