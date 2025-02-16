const fs = require('fs');
const filePath = './series.json';

// Verificar si el archivo JSON existe. Si no existe, crear un archivo con un arreglo vacío.
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([]));
}

function addSerie(serieName, seasons) {
  const data = fs.readFileSync(filePath, 'utf8');
  const series = JSON.parse(data);

  series.push({ name: serieName, seasons: seasons });

  fs.writeFileSync(filePath, JSON.stringify(series, null, 2));
  console.log('Serie added successfully');
}

function listSeries() {
  const data = fs.readFileSync(filePath, 'utf8');
  const series = JSON.parse(data);

  console.log('Registered series:', series);
}

function updateSeasons(serieName, seasons) {
  const data = fs.readFileSync(filePath, 'utf8');
  const series = JSON.parse(data);

  const serie = series.find((serie) => serie.name === serieName);

  if (!serie) {
    console.log('Serie not found');
    return;
  }

  serie.seasons = seasons;

  fs.writeFileSync(filePath, JSON.stringify(series, null, 2));
  console.log('Seasons updated successfully');
}

// Ejecución de las funciones
addSerie('Game of Thrones', 8);
addSerie('Breaking Bad', 5);
updateSeasons('Game of Thrones', 10);
listSeries();