// Crea una función que reciba una cadena de texto y devuelva cuántas
// vocales contiene.
// Consigna:
// • Usa un bucle for y condicionales.
// • Considera vocales mayúsculas y minúsculas (a, e, i, o, u).

let text = 'Hola Mundo';

function countVowels(text) {
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for(let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

console.log(countVowels(text)); // 4