const http = require('node:http')
const { findAvailablePort } = require('./10.free-port.js')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hello world')
})

findAvailablePort(300).then((port) => {
  server.listen(port, () => {
    console.log(`server listening http://localhost:${server.address().port}`)
  })
})

// server.listen(0, () => {
//   console.log(`server listening http://localhost:${server.address().port}`)
// })
