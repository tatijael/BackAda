// Ejercicio 7: Encuentra tu meta perdida
// Consigna:
// Revisa tu lista de metas en el archivo metas.json. Busca si una meta
// específica, como “Viajar a Japón”, ya está incluida. Si no, agrégala.
// Pista: Usa fs.readFile para leer el archivo y un método como find para
// buscar en la lista.


const fs = require('fs');

const filePath = '../Ejercicio6/goals.json';

fs.readFile(filePath, 'utf-8', (err, data) => {

  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const metas = JSON.parse(data);

  const meta = metas.find((meta) => meta === 'Viajar a Japón');

  if (!meta) {
    metas.push('Viajar a Japón');
  }

  const metasJSON = JSON.stringify(metas, null, 2);

  fs.writeFile(filePath, metasJSON, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }

    console.log('File written successfully');
  });
});

