const fs = require('fs');
const path = require('path');

const moviesFilePath = path.join(__dirname, '../movies.json');

function getMovieByTitle(titulo) {
    const movies = JSON.parse(fs.readFileSync(moviesFilePath, 'utf-8'));
    return movies.find(movie => movie.titulo.toLowerCase() === titulo.toLowerCase());
}

module.exports = { getMovieByTitle };