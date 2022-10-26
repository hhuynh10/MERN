const MovieController = require('../controllers/movie.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.get('/api/allMovies', authenticate, MovieController.getAllMovies);
    app.get('/api/movie/:id', authenticate, MovieController.getOneMovie);
    app.post('/api/addMovie', authenticate, MovieController.addMovie);
    app.put('/api/update/:id', authenticate, MovieController.updateMovie);
    app.delete('/api/delete/:id', authenticate, MovieController.deleteMovie);
}