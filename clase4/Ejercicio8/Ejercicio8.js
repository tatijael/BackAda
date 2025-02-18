// Ejercicio 8: Cuenta tus metas
// Consigna:
// ¿Sabes cuántas metas has establecido? Escribe un programa que lea tu
// archivo metas.json y cuente cuántas metas tienes actualmente.
// Pista: Usa length para obtener la cantidad de elementos en la lista.

const fs = require('fs');

const filePath = '../Ejercicio6/goals.json';

fs.readFile(filePath, 'utf-8', (err, data) => {
  if(err) {
    console.error('Error reading file:', err);
    return;
  }
  const goals = JSON.parse(data);

  const goalCount = goals.length;

  console.log(`You have ${goalCount} goals.`);
});



