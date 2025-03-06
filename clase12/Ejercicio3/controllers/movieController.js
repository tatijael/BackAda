const MovieModel = require('../models/movieModel');
const MovieView = require('../views/movieView');

function handleRequest(titulo) {
    const movie = MovieModel.getMovieByTitle(titulo);
    return MovieView.formatMovieResponse(movie);
}

module.exports = { handleRequest };