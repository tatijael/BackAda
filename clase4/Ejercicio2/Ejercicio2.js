// Ejercicio 2: Descubre tu perfil
// Consigna:
// Es hora de revisar tu perfil digital. Lee el archivo perfil.json que creaste
// en el ejercicio anterior y muestra la información en la consola para
// asegurarte de que todo está correcto.
// Pista: Utiliza fs.readFile con la codificación 'utf-8' para obtener el
// contenido del archivo como texto legible.

const fs = require('fs');

const filePath = '../Ejercicio1/profile.json';

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  console.log(data);
});

