const PetController = require('../controllers/pet.controller');

module.exports = app => {
    app.get('/api/allPets', PetController.getAllPets);
    app.get('/api/pet/:id', PetController.getOnePet);
    app.post('/api/addPet', PetController.addPet);
    app.put('/api/update/:id', PetController.updatePet);
    app.delete('/api/delete/:id', PetController.deletePet);
}