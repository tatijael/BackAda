// Actividad 6: Gestión de un diario personal
// Consigna: Crea un programa que te permita gestionar un diario
// personal. El programa debe permitirte:
// 1. Agregar una entrada al diario: Registrar una nueva entrada con
// la fecha y el texto.
// 2. Listar las entradas: Mostrar todas las entradas registradas.
// 3. Eliminar una entrada: Eliminar una entrada específica por su ID.
// Pistas:
// • Usa un archivo JSON para guardar las entradas del diario.
// • Cada entrada tendrá una fecha y un texto.
// • Si el archivo no existe, comienza con un arreglo vacío.

const fs = require('fs');

const filePath = './diary.json';

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([]));
}

function addEntry(date, text) {
  const data = fs.readFileSync(filePath, 'utf8');
  const entries = JSON.parse(data);

  entries.push({ id: entries.length + 1, date, text });

  fs.writeFileSync(filePath, JSON.stringify(entries, null, 2));
  console.log('Entry added successfully');
}

function listEntries() {
  const data = fs.readFileSync(filePath, 'utf8');
  const entries = JSON.parse(data);

  console.log('Diary entries:', entries);
}

function deleteEntry(id) {
  const data = fs.readFileSync(filePath, 'utf8');
  const entries = JSON.parse(data);

  const entryIndex = entries.findIndex(entry => entry.id === id);

  if (entryIndex === -1) {
    console.error('Entry not found');
    return;
  }

  entries.splice(entryIndex, 1);

  fs.writeFileSync(filePath, JSON.stringify(entries, null, 2));
  console.log('Entry deleted successfully');
}


addEntry('2021-09-01', 'Today was a sunny day');
addEntry('2021-09-02', 'It rained all day today');
addEntry('2021-09-03', 'I went to the beach today');
listEntries();
deleteEntry(1);

// listEntries();