import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Information Operative System')
console.log('------------------------------------------')

console.log('Name operative system: ', platform())
console.log('Version operative system: ', release())
console.log('Arquitecture: ', arch())
console.log('CPUs ', cpus())
console.log('Free Mem ', freemem() / 1024 / 1024)
console.log('Total Mem ', totalmem() / 1024 / 1024)
console.log('uptime: ', uptime() / 60 / 60)
