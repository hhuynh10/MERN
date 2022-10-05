const JokeController = require('../controllers/joke.controller');

module.exports = app => {
    app.get('/api/allJokes', JokeController.getAllJokes);
    app.get('/api/joke/:id', JokeController.getOneJoke);
    app.post('/api/addJoke', JokeController.addJoke);
    app.put('/api/update/:id', JokeController.updateJoke);
    app.delete('/api/delete/:id', JokeController.deleteJoke);
}