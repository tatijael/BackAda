// Escribe una función que reciba un array de números y devuelva un nuevo
// array sin números repetidos.
// Consigna:
// • Usa el objeto Set para eliminar duplicados.
// • Convierte el Set a un array usando el operador spread (...).

let numbers = [ 1, 2, 3, 2, 4, 1, 5 ];

function removeDuplicates(numbers) {
  return [...new Set(numbers)];
}

console.log(removeDuplicates(numbers)); // [1, 2, 3, 4, 5, 8]

