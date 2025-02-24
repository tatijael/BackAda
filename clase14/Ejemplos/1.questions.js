
const readlineSync = require('readline-sync');

// Preguntar al usuario su nombre
const nombre = readlineSync.question('¿Cuál es tu nombre? ');

console.log(`Hola, ${nombre}!`);