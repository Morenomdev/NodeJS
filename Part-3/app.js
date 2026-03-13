// const { json } = require('express')
const express = require('express') // require -> commonJS
// const { loadavg } = require('node:os')
const movies = require('./movies.json')
const crypto = require('node:crypto')
const z = require('zod')
const { validateMovie } = require('./schemas/schemasMovies.js')

const app = express()
app.disable('x-powered-by')

app.use(express.json())

const PORT = process.env.PORT ?? 1234

app.get('/', (req, res) => {
  res.json({ message: 'Hello world' })
})

app.get('/movies', (req, res) => {
  const { genre } = req.query
  // console.log(genre)
  // console.log(genre)
  // console.log(genre.length)
  // if (genre.length > 1) {
  //   const filteredMovies = movies.filter(
  //     movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase()))
  //   return res.json(filteredMovies)
  // }
  if (genre) {
    const filteredMovies = movies.filter((movie) =>
      movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
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
  const result = validateMovie(req.body)

  if (result.error) {
    // podria ser 422 unprocessable entity
    return res.status(400).json({ error: JSON.parse(result.error.message) }) // 400 bad rquest
  }
  // if (!title || !year || !director || !duration || !genre) {
  //   res.status(404).json({ message: 'Missing required fields' })
  // }

  const newMovie = {
    id: crypto.randomUUID(), // uuid v4
    ...result.data,
  }

  // agregar pelicula
  movies.push(newMovie)

  res.status(201).json(newMovie)
})

app.patch('/movies/:id', (req, res) => {
  const { id } = req.params
  const movieIndex = movies.findIndex((movie) => movie.id === id)

  if (movieIndex === -1)
    return res.status(404).json({ message: 'Movie not found' })
})

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`)
})
