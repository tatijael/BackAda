const fs = require('fs');
const filePath = './contacts.json';

const initializeContactsFile = () => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8');
    console.log('contacts.json file created successfully.');
  }
};

const addContact = (contact) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    const contacts = JSON.parse(data);

    const contactExists = contacts.find((c) => c.name === contact.name);

    if (contactExists) {
      console.log('Contact already exists');
      return;
    }

    contacts.push(contact);

    const contactsJSON = JSON.stringify(contacts, null, 2);

    fs.writeFile(filePath, contactsJSON, (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }

      console.log('Contact added successfully');
    });
  });
};


const listContacts = () => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    const contacts = JSON.parse(data);

    if (contacts.length === 0) {
      console.log('No contacts found.');
      return;
    }

    console.log('Contact List:');
    contacts.forEach((contact) => {
      console.log('Name:', contact.name);
      console.log('Phone:', contact.phone);
      console.log('Email:', contact.email);
      console.log('---');
    });
  });
};

const searchContact = (name) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    const contacts = JSON.parse(data);

    const contact = contacts.find((c) => c.name === name);

    if (!contact) {
      console.log('Contact not found');
      return;
    }

    console.log('Contact found:');
    console.log('Name:', contact.name);
    console.log('Phone:', contact.phone);
    console.log('Email:', contact.email);
  });
};


initializeContactsFile();


const newContact = {
  name: 'Juan',
  phone: '123456789',
  email: 'juan@gmail.com'
};

addContact(newContact);
listContacts();
searchContact('Juan');