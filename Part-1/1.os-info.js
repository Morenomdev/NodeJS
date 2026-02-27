const os = require('node:os')

console.log('Information Operative System')
console.log('------------------------------------------')

console.log('Name operative system: ', os.platform())
console.log('Version operative system: ', os.release())
console.log('Arquitecture: ', os.arch())
console.log('CPUs ', os.cpus())
console.log('Free Mem ', os.freemem() / 1024 / 1024)
console.log('Total Mem ', os.totalmem() / 1024 / 1024)
console.log('uptime: ', os.uptime() / 60 / 60)
