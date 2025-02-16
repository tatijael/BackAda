// Escribe una función que reciba un array de números y devuelva el
// promedio.
// Consigna:
// • Usa un bucle for para sumar los números.
// • Divide la suma total entre la cantidad de elementos del array.

function average(numbers) {
  let sum = 0;

  for ( let i = 0; i < numbers.lengt; i++ ) {
    sum += numbers[i]; 
  }

  return sum / numbers.length;
}

const califications = [8, 9, 10, 7, 6];

console.log(average(califications)); // 8