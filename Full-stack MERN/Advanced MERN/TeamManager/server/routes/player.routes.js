const PlayerController = require('../controllers/player.controller');
module.exports = function(app){
    app.get("/api", PlayerController.index);
    app.get("/api/players", PlayerController.getAllPlayers);
    app.get("/api/players/:id", PlayerController.getPlayer);
    app.put("/api/players/:id", PlayerController.updatePlayer);
    app.delete("/api/players/:id", PlayerController.deletePlayer);
    app.post("/api/players", PlayerController.createPlayer);
}