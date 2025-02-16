// Ejercicio 5: Generador de iniciales 🅰️
// Escribe una función que reciba un nombre completo y devuelva las
// iniciales en mayúsculas.
// Consigna:
// • Usa el método split() para dividir el nombre.
// • Usa un bucle for y métodos de string.

function initials(name) {
  let initials = '';
  let names = name.split(' ');

  for (let i = 0; i < names.length; i++ ) {
    initials += names[i][0].toUpperCase();
  }
  return initials;
}

const nameExample = 'juan perez gomez';

console.log(initials(nameExample)); // JPG