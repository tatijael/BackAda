// Actividad 8: Seguimiento de proyectos
// Consigna: Crea un programa para gestionar proyectos. El programa debe
// permitirte:
// 1. Agregar un proyecto: Registrar un proyecto con su nombre y
// estado (pendiente o en progreso).
// 2. Listar los proyectos: Mostrar todos los proyectos registrados.
// 3. Actualizar el estado de un proyecto: Cambiar el estado de un
// proyecto a "finalizado" o "en progreso".
// Pistas:
// • Usa un archivo JSON para guardar los proyectos.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • Cada proyecto debe tener un ID único.


const fs = require('fs');

const filePath = './projects.json';

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([]));
}

function addProject(name, status) {
  const data = fs.readFileSync(filePath, 'utf8');
  const projects = JSON.parse(data);

  projects.push({ id: projects.length + 1, name, status });

  fs.writeFileSync(filePath, JSON.stringify(projects, null, 2));
  console.log('Project added successfully');
}

function listProjects() {
  const data = fs.readFileSync(filePath, 'utf8');
  const projects = JSON.parse(data);

  console.log('Registered projects:', projects);
}

function updateProjectStatus(id, status) {
  const data = fs.readFileSync(filePath, 'utf8');
  const projects = JSON.parse(data);

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex === -1) {
    console.error('Project not found');
    return;
  }

  projects[projectIndex].status = status;

  fs.writeFileSync(filePath, JSON.stringify(projects, null, 2));
  console.log('Project status updated successfully');
}


addProject('Web development', 'pending');
addProject('Mobile app', 'in progress');
addProject('Data analysis', 'pending');
listProjects();
updateProjectStatus(1, 'in progress');
listProjects();
updateProjectStatus(2, 'completed');
listProjects();