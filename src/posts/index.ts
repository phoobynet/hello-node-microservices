import axios from 'axios'
import { Post } from './Post'

export const posts = {
  async get (): Promise<Post[]> {
    return await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts').then(r => r.data)
  }
}
