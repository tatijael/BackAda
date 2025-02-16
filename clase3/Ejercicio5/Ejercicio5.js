// Actividad 5: Registro de contactos
// Consigna: Crea un programa que permita registrar contactos con
// nombre, teléfono y correo electrónico. El programa debe permitirte:
// 1. Agregar un contacto: Registrar un nuevo contacto.
// 2. Listar los contactos: Mostrar todos los contactos registrados.
// 3. Eliminar un contacto: Eliminar un contacto de la lista.
// Pistas:
// • Usa un archivo JSON para guardar los contactos.
// • Si el archivo no existe, comienza con un arreglo vacío.

const fs = require('fs');

const filePath = './contact.json';

if (!fs.existsSync(filePath)) {
  fs.writeFileSync
  (filePath, JSON.stringify([]));
}

function addContact(name, phone, email) {
  const data = fs.readFileSync(filePath, 'utf8');
  const contacts = JSON.parse(data);

  contacts.push({ id: contacts.length + 1, name, phone, email });

  fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));
  console.log('Contact added successfully');
}

function listContacts() {
  const data = fs.readFileSync(filePath, 'utf8');
  const contacts = JSON.parse(data);

  console.log('Registered contacts:', contacts);
}

function deleteContact(id) {
  const data = fs.readFileSync(filePath, 'utf8');
  const contacts = JSON.parse(data);

  const contactIndex = contacts.findIndex(contact => contact.id === id);

  if (contactIndex === -1) {
    console.error('Contact not found');
    return;
  }

  contacts.splice(contactIndex, 1);

  fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));
  console.log('Contact deleted successfully');
}

// Ejemplos de uso

addContact('Juan Perez', '123456789', 'juanperez@gmail.com');
addContact('Maria Gomez', '987654321', 'marimari@hotmail.com');
listContacts();
deleteContact(1);

// listContacts();