// Ejercicio 2: Conversión de Objetos JavaScript a JSON
// 1.En la misma carpeta clase2, crea un nuevo archivo llamado
// actividad2.js.
// 2.Crea un objeto en JavaScript que represente a un estudiante con las
// siguientes propiedades: nombre, edad, curso, notas (un array de
// números).
// Instrucciones:
// • Convierte este objeto a una cadena JSON usando JSON.stringify().
// • Muestra la cadena JSON en la consola.
// • Luego, convierte la cadena JSON de nuevo a un ob


const fs = require('fs');
const filePath = "./student.json";


fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const student = JSON.parse(data);
  console.log("JavaScript Object:", student);

  const studentJSON = JSON.stringify(student);
  console.log("JSON String:", studentJSON);

});