// Actividad 7: Control de tareas diarias
// Consigna: Crea un programa para gestionar tus tareas diarias. El
// programa debe permitirte:
// 1. Agregar una tarea diaria: Registrar una nueva tarea con su
// descripción y estado.
// 2. Listar las tareas diarias: Mostrar todas las tareas con su estado.
// 3. Marcar una tarea como completada: Cambiar el estado de una
// tarea de "pendiente" a "completada".
// Pistas:
// • Usa un archivo JSON para guardar las tareas.
// • El estado de cada tarea puede ser "pendiente" o "completada".
// • Si el archivo no existe, comienza con un arreglo vacío.


const fs = require('fs');

const filePath = './tasks.json';

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([]));
}

function addTask(description, status) {
  const data = fs.readFileSync(filePath, 'utf8');
  const tasks = JSON.parse(data);

  tasks.push({ id: tasks.length + 1, description, status });

  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
  console.log('Task added successfully');
}

function listTasks() {
  const data = fs.readFileSync(filePath, 'utf8');
  const tasks = JSON.parse(data);

  console.log('Daily tasks:', tasks);
}

function completeTask(id) {
  const data = fs.readFileSync(filePath, 'utf8');
  const tasks = JSON.parse(data);

  const taskIndex = tasks.findIndex(task => task.id === id);

  if (taskIndex === -1) {
    console.error('Task not found');
    return;
  }

  tasks[taskIndex].status = 'completed';

  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
  console.log('Task completed successfully');
}

// Ejemplos de uso

addTask('Do the laundry', 'pending');
addTask('Buy groceries', 'pending');
addTask('Go to the gym', 'pending');
listTasks();
completeTask(1);
