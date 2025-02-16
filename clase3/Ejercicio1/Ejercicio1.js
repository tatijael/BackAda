// : Registro de libros favoritos
// Consigna: ¡Hola! Hoy serás una bibliotecaria digital. Debes crear un
// programa que permita registrar libros favoritos en un archivo JSON.
// Implementa las siguientes funciones:
// 1. Agregar un libro: Se debe agregar un libro a la lista de favoritos.
// Para esto, el libro tendrá solo un campo: su nombre.
// 2. Listar los libros: Muestra todos los libros registrados.
// Pistas:
// • Usa un archivo JSON para guardar los libros.
// • Si el archivo no existe, comienza con un arreglo vacío.


const fs = require('fs');
const filePath = "./books.json";

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([]));
}

function addBook(bookName) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    const books = JSON.parse(data);
    books.push({ name: bookName });

    fs.writeFile(filePath, JSON.stringify(books, null, 2), (err) => {
      if (err) {
        console.error('Error writing the file:', err);
        return;
      }
      console.log('Book added successfully');
    });
  });
}

function listBooks() {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    const books = JSON.parse(data);
    console.log('Registered books:', books);
  });
}

addBook('The Great Gatsby');
listBooks();

