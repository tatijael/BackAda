// Ejercicio 7: Filtrar palabras largas
// Escribe una función que reciba un array de palabras y un número, y
// devuelva las palabras que tienen más caracteres que el número dado.
// Consigna:
// • Usa el método filter().
// • Usa una función flecha para simplificar el código.

function filterWords(words, number) {
  return words.filter(word => word.length > number);
}

const words = [ "javascript", "html", "css", "nodejs" ];

console.log(filterWords(words, 4)); // ["javascript", "nodejs"]

