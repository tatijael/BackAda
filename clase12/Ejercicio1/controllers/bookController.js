const BookModel = require('../models/bookModel');
const BookView = require('../views/bookView');

function handleRequest(id) {
    const book = BookModel.getBookById(id);
    return BookView.formatBookResponse(book);
}

module.exports = { handleRequest };