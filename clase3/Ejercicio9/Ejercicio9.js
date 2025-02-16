// Actividad 9: Registro de eventos
// Consigna: Crea un programa para registrar eventos. El programa debe
// permitirte:
// 1. Agregar un evento: Registrar un evento con nombre, fecha y
// lugar.
// 2. Listar los eventos: Mostrar todos los eventos registrados.
// 3. Eliminar un evento: Eliminar un evento de la lista.
// Pistas:
// • Usa un archivo JSON para guardar los eventos.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • Cada evento debe tener un ID único.


const fs = require('fs');

const filePath = './events.json';

if (!fs.existsSync(filePath)) {
  fs.writeFileSync
  (filePath, JSON.stringify([]));
}

function addEvent(name, date, place) {
  const data = fs.readFileSync(filePath, 'utf8');
  const events = JSON.parse(data);

  events.push({ id: events.length + 1, name, date, place });

  fs.writeFileSync(filePath, JSON.stringify(events, null, 2));
  console.log('Event added successfully');
}

function listEvents() {
  const data = fs.readFileSync(filePath, 'utf8');
  const events = JSON.parse(data);

  console.log('Registered events:', events);
}

function deleteEvent(id) {
  const data = fs.readFileSync(filePath, 'utf8');
  const events = JSON.parse(data);

  const eventIndex = events.findIndex(event => event.id === id);

  if (eventIndex === -1) {
    console.error('Event not found');
    return;
  }

  events.splice(eventIndex, 1);

  fs.writeFileSync(filePath, JSON.stringify(events, null, 2));
  console.log('Event deleted successfully');
}

// Ejemplos de uso

addEvent('Birthday party', '2021-09-01', 'My house');
addEvent('Wedding', '2021-10-15', 'Church');
addEvent('Graduation', '2021-12-20', 'University');
listEvents();
deleteEvent(1);
