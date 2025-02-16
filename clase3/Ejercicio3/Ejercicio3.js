// Actividad 3: Registro de tareas pendientes
// Consigna: Crea un programa para gestionar tus tareas pendientes. El
// programa debe permitirte:
// 1. Agregar una tarea: Registrar una tarea pendiente con su
// descripción.
// 2. Listar las tareas: Mostrar todas las tareas registradas.
// 3. Eliminar una tarea: Eliminar una tarea de la lista.
// Pistas:
// • Usa un archivo JSON para guardar las tareas.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • Eliminar una tarea se puede hacer por su ID.


const fs = require('fs');

const filePath = './tasks.json';

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([]));     
}

function addTask(taskDescription) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    const tasks = JSON.parse(data);
    tasks.push({ id: tasks.length + 1, description: taskDescription });

    fs.writeFile(filePath, JSON.stringify(tasks, null, 2), (err) => {
      if (err) {
        console.error('Error writing the file:', err);
        return;
      }
      console.log('Task added successfully');
    });
  });
}