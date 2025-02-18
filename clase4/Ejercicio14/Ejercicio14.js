// Ejercicio 14: Diario personal
// Consigna:
// Desarrolla un programa para escribir entradas de un diario en un archivo
// diario.json. Cada entrada debe incluir fecha, titulo y contenido. Además:
// 1. Permite listar todas las entradas.
// 2. Filtra entradas por una palabra clave en el título.
// Pista: Usa new Date() para registrar la fecha automáticamente.

const fs = require('fs');

const filePath = './diary.json';

const diary = [];

const entry = {
  date: new Date(),
  title: 'First entry',
  content: 'This is my first diary entry.'
};

diary.push(entry);

const diaryJSON = JSON.stringify(diary, null, 2);

fs.writeFile(filePath, diaryJSON, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }

  console.log('File written successfully');
});

fs.readFile(filePath, 'utf-8', (err, data) => {
  
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const diary = JSON.parse(data);

  diary.forEach((entry, index) => {
    console.log(`Entry ${index + 1}:`);
    console.log(`Date: ${entry.date}`);
    console.log(`Title: ${entry.title}`);
    console.log(`Content: ${entry.content}`);
  });
});

const keyword = 'First';

fs.readFile(filePath, 'utf-8', (err, data) => {
  
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const diary = JSON.parse(data);

  const filteredEntries = diary.filter((entry) => entry.title.includes(keyword));

  filteredEntries.forEach((entry, index) => {
    console.log(`Entry ${index + 1}:`);
    console.log(`Date: ${entry.date}`);
    console.log(`Title: ${entry.title}`);
    console.log(`Content: ${entry.content}`);
  });
});

