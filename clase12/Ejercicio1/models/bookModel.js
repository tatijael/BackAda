const fs = require('fs');
const path = require('path');

const booksFilePath = path.join(__dirname, '../books.json');

const bookModel = {
    getBookById: function(id) {
        const books = JSON.parse(fs.readFileSync(booksFilePath, 'utf-8'));
        return books.find(book => book.id === id);
    }
};

module.exports = bookModel;