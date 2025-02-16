// Crea una función que reciba una cadena de texto y una letra, y devuelva
// cuántas veces aparece esa letra en la cadena.
// Consigna:
// • Usa un bucle for y condicionales.
// • Haz que la búsqueda no distinga entre mayúsculas y minúsculas.

let text = "Programar es divertido";

function countLetter(text, letter) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i].toLowerCase() === letter.toLowerCase()) {
      count++;
    }
  }
  return count;
}

console.log(countLetter(text, 'r')); // 3