const fs = require('fs');
const filePath = './tasks.json';

const initializeTasksFile = () => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8');
    console.log('tasks.json file created successfully.');
  }
};

initializeTasksFile();

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const tasks = JSON.parse(data);

  // Función para agregar una tarea
  const addTask = (name, description, status) => {
    const task = {
      name,
      description,
      status,
    };
    tasks.push(task);
    const tasksJSON = JSON.stringify(tasks, null, 2);
    fs.writeFile(filePath, tasksJSON, (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('Task added successfully');
    });
  };

  const completeTask = (name) => {
    const task = tasks.find((task) => task.name === name);
    if (task) {
      task.status = 'complete';
      const tasksJSON = JSON.stringify(tasks, null, 2);
      fs.writeFile(filePath, tasksJSON, (err) => {
        if (err) {
          console.error('Error writing file:', err);
          return;
        }
        console.log('Task completed successfully');
      });
    }
  };

  const listTasks = (status) => {
    const tasksByStatus = tasks.filter((task) => task.status === status);
    if (tasksByStatus.length === 0) {
      console.log(`No tasks found with status: ${status}`);
      return;
    }
    console.log(`Tasks with status "${status}":`);
    tasksByStatus.forEach((task) => {
      console.log(`Name: ${task.name}`);
      console.log(`Description: ${task.description}`);
      console.log(`Status: ${task.status}`);
      console.log('---');
    });
  };

  addTask('Estudiar JavaScript', 'Estudiar JavaScript en el curso de ADA', 'pending');
  addTask('Hacer ejercicio', 'Hacer ejercicio por la mañana', 'pending');
  addTask('Comprar comida', 'Comprar comida para la semana', 'pending');
  addTask('Hacer la tarea', 'Hacer la tarea de la escuela', 'pending');
  completeTask('Hacer ejercicio');
  listTasks('pending');
  listTasks('complete');
});