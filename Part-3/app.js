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
  const { genre } = req.query
  console.log(genre)
  console.log(genre)
  console.log(genre.length)
  if (genre.length > 1) {
    const filteredMovies = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase()))
    return res.json(filteredMovies)
  }
  if (genre) {
    const filteredMovies = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }
  res.json(movies)
})

app.get('/movies/:id', (req, res) => {
  const { id } = req.params
  const movie = movies.find((movie) => movie.id === id)
  if (movie) return res.json(movie)
  res.status(404).json({ message: 'Movie not found' })
})

app.post('/movies', (req, res) => {
})

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`)
})
