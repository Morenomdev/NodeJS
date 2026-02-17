const net = require('node:net')

function findAvailablePort (desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desiredPort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
        // console.log(port)
      })
    })

    server.on('error', (err) => {
    //   if (err.code === 'EADDRINUSE') {
      if (err.code === 'EACCES') {
        findAvailablePort(0).then((port) => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findAvailablePort }

findAvailablePort(3)
