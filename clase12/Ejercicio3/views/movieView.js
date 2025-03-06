const movieView = {
  formatMovieResponse: function(movie) {
      if (!movie) {
          return JSON.stringify({ error: 'Película no encontrada' });
      }
      return JSON.stringify(movie);
  }
};

module.exports = movieView;