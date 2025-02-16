// Crea una función que reciba una cadena de texto y devuelva otra cadena
// con las palabras en orden inverso.
// Consigna:
// • Usa el método split() para separar las palabras.
// • Usa el método reverse() para invertir el array.
// • Usa el método join() para unir las palabras en una nueva cadena.


let text = "Aprender a programar es divertido";

function reverseWords(text) {
  return text.split(' ').reserve().join(' ');
}

console.log(reverseWords(text)); // "divertido es programar a Aprender"