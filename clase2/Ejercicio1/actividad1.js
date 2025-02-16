// Ejercicio 1: Creación y Manipulación de un Objeto JSON
// 1.Dentro de la carpeta ADA_TRABAJOS, crea una nueva carpeta llamada
// clase2.
// 2.En la carpeta clase2, crea un archivo JavaScript llamado actividad1.js.
// 3.En este archivo, crea un objeto JSON que represente un libro. El objeto
// debe tener las siguientes propiedades: titulo, autor, año, genero (puede
// ser un array de géneros).
// Instrucciones:
// • Muestra en la consola el título y el autor del libro.
// • Actualiza el año del libro a un valor más reciente.
// • Añade una nueva propiedad llamada páginas que indique el número
// de páginas del libro.
// • Muestra el objeto actualizado en la consola


const fs = require('fs');
const filePath = "./book.json";

fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
        console.error('Error reading the file:', error);
        return;
    }

    const books = JSON.parse(data);
    const book = books[0]

    console.log("Title Book:", book.title);
    console.log("Author Book:", book.author);

    book.year = 2021;
    book.pages = 300;

    book.genere.push("Adventure");

    console.log("Update Book:", book);

    fs.writeFile(filePath, JSON.stringify(books, null, 2), (error) => {
        if (error) {
            console.error('Error writing the file:', error);
            return;
        }
    });
});

