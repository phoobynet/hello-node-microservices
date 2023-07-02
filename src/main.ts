import { env } from './env'
import { server } from './server'

server.listen(env.PORT, () => {
  console.log('Server listening on port %s', env.PORT)
})
