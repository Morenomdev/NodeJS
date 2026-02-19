const http = require('node:http')
const { findAvailablePort } = require('./10.free-port')

console.log(process.env)

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hello world')
})

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`server listening http://localhost:${server.address().port}`)
  })
})

// server.listen(0, () => {
//   console.log(`server listening http://localhost:${server.address().port}`)
// })
