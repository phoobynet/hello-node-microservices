import { cleanEnv, num } from 'envalid'

export interface Env {
  PORT: number
}

export const env = cleanEnv<Env>(process.env, {
  PORT: num({ default: 3000 })
})
