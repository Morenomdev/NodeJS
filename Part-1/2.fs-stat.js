const fs = require('node:fs')
const stats = fs.statSync('./file.txt')

console.log(
  stats.isFile(), // It is a file
  stats.isDirectory(), // It is a folder
  stats.isSymbolicLink(), // It is a symbolic link
  stats.size // size in bytes
)
