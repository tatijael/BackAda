// Ejercicio 6: Tu lista de metas
// Consigna:
// Es momento de planear tus metas. Crea un archivo llamado metas.json
// con una lista vacía al principio. Luego, agrega metas como: “Aprender
// Node.js” y “Viajar a Japón”. Guarda la lista actualizada en el archivo.
// Pista: Usa fs.writeFile para crear el archivo y agregar elementos a la
// lista.

const fs = require('fs');

const filePath = './goals.json';

const metas = [];

metas.push('Aprender Node.js');

metas.push('Viajar a Japón');

const metasJSON = JSON.stringify(metas, null, 2);

fs.writeFile(filePath, metasJSON, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }

  console.log('File written successfully');
});

