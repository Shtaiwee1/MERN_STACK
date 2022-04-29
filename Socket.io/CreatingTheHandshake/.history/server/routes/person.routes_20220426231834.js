const PersonController = require('../controllers/peoplecontroller');
module.exports = function(app){
    app.get("/api", AuthorController.index);
    app.get("/api/people", PersonController.getAllPersons);
    app.get("/api/people/:id", PersonController.getPerson);
    app.put("/api/people/:id", PersonController.updatePerson);
    app.delete("/api/people/:id", PersonController.deletePerson);
    app.post("/api/people", PersonController.createPerson);
}