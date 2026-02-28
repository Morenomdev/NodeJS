// const { json } = require('express')
const express = require('express') // require -> commonJS
// const { loadavg } = require('node:os')
const movies = require('./movies.json')

const app = express()
app.disable('x-powered-by')

app.use(express.json())

const PORT = process.env.PORT ?? 1234

app.get('/', (req, res) => {
  res.json({ message: 'Hello world' })
})

app.get('/movies', (req, res) => {
  res.json(movies)
})

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`)
})
