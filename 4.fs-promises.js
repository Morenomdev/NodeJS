const fs = require('node:fs/promises')

// It only is used when a native module doesn't have native promises 
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile) 

console.log('Reading first file... ');
fs.readFile('./file.txt', 'utf-8')
.then(text => {
    console.log('first text: ', text);
})


console.log('To doing things while read the file...');

console.log('Reading second file... ');
fs.readFile('./file2.txt', 'utf-8')
.then(text => {
    console.log('second text: ', text)})

