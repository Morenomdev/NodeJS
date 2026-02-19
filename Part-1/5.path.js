const path = require('node:path')

console.log(path.sep)

// console.log(process.cwd());

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('./tmp/secret/file/password.txt')
console.log(base)
const filename = path.basename('./tmp/secret/file/password.txt', '.txt')
console.log(filename)
const extension = path.extname('password.jpg')
console.log(extension)
