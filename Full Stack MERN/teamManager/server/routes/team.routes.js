const TeamController = require('../controllers/team.controller');

module.exports = app => {
    app.get('/api/allTeams', TeamController.getAllTeams);
    app.get('/api/team/:id', TeamController.getOneTeam);
    app.post('/api/addTeam', TeamController.addTeam);
    app.put('/api/update/:id', TeamController.updateTeam);
    app.delete('/api/delete/:id', TeamController.deleteTeam);
}