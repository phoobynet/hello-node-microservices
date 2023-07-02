import { posts } from '../../src/posts'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
const mockAxios = new MockAdapter(axios)

describe('posts', () => {
  beforeEach(() => {
    mockAxios.onGet('https://jsonplaceholder.typicode.com/posts').reply(200, [])
  })

  afterEach(() => {
    mockAxios.reset()
  })

  it('should call axios.get', async () => {
    await posts.get()

    expect(mockAxios.history.get[0].url).toBe('https://jsonplaceholder.typicode.com/posts')
  })
})
