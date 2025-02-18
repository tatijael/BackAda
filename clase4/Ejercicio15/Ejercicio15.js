// Ejercicio 15: Historial de actividades deportivas
// Consigna:
// Crea un programa para registrar actividades deportivas en un archivo
// actividades.json. Debe incluir:
// 1. Registrar una actividad con tipo (correr, nadar), duración (en
// minutos) y fecha.
// 2. Mostrar todas las actividades realizadas.
// 3. Filtrar actividades por tipo (por ejemplo, solo mostrar las de
// "correr").
// Pista: Usa Date.now() para obtener la fecha exacta.


const fs = require('fs');

const filePath = './activities.json';

const activities = [];

const activity = {
  type: 'correr',
  duration: 30,
  date: Date.now()
};

activities.push(activity);

const activitiesJSON = JSON.stringify(activities, null, 2);

fs.writeFile(filePath, activitiesJSON, (err) => {
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

  const activities = JSON.parse(data);

  activities.forEach((activity, index) => {
    console.log(`Activity ${index + 1}:`);
    console.log(`Type: ${activity.type}`);
    console.log(`Duration: ${activity.duration} minutes`);
    console.log(`Date: ${activity.date}`);
  });
});

const type = 'correr';

fs.readFile(filePath, 'utf-8', (err, data) => {
  
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const activities = JSON.parse(data);

  const filteredActivities = activities.filter((activity) => activity.type === type);

  filteredActivities.forEach((activity, index) => {
    console.log(`Activity ${index + 1}:`);
    console.log(`Type: ${activity.type}`);
    console.log(`Duration: ${activity.duration} minutes`);
    console.log(`Date: ${activity.date}`);
  });
});

