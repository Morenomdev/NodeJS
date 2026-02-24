const http = require('node:http')
const { findAvailablePort } = require('../Part-1/10.free-port.js')

// console.log(process.env)

const desiredPort = process.env.PORT ?? 1234

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
