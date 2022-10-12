const MovieController = require('../controllers/movie.controller');

module.exports = app => {
    app.get('/api/allMovies', MovieController.getAllMovies);
    app.get('/api/movie/:id', MovieController.getOneMovie);
    app.post('/api/addMovie', MovieController.addMovie);
    app.put('/api/update/:id', MovieController.updateMovie);
    app.delete('/api/delete/:id', MovieController.deleteMovie);
}