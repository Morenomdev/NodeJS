// proecess object

// argumentos de entrada
// console.log(process.argv);

// Controlar el proceso y su salida
// 1 -> Hay algun error  ||  0 -> Todo salio bien
// process.exit(0);

// Escuchar eventos del proceso
process.on('exit', () => {
  // limpiar recursos
})

// Current Working Directory
// console.log(process.cwd());

// Platform
console.log(process.env.PEPITO)
