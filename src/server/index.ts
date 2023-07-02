import express from 'express'
import axios from 'axios'
import { posts } from '../posts'

export const server = express()

server.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello World!'
  })
})

server.get('/api/posts', async (req, res) => {
  try {
    const actual = await posts.get()
    res.json(actual)
  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong'
    })
  }
})
