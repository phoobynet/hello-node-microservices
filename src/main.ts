import express from 'express'

const PORT = parseInt(process.env.PORT || '') || 3000

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log('Server listening on port %s', PORT)
})


