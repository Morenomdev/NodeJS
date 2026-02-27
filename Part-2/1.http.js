const http = require('node:http')
const fs = require('node:fs')
// const { findAvailablePort } = require('../Part-1/10.free-port.js')

// console.log(process.env)

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Welcome to my pagé')
  } else if (req.url === '/node.webp') {
    res.setHeader('Content-Type', 'image/webp')

    fs.readFile('./node.webp', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('500 Internal Server Error')
      } else {
        res.setHeader('Content-Type', 'image/webp')
        res.end(data)
      }
    })
  } else if (req.url === '/contact') {
    res.end('Contact')
  } else {
    res.statusCode = 404 // not found
    res.end('404')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening http://localhost:${desiredPort}`)
})
// findAvailablePort(desiredPort).then((port) => {
//   server.listen(port, () => {
//     console.log(`server listening http://localhost:${server.address().port}`)
//   })
// })
