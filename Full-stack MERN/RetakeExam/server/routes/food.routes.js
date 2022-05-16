const FoodController = require('../controllers/food.controller');
module.exports = function(app){
    //app.get('/api', FoodController.index);
    app.post('/api/food', FoodController.createFood);
    app.get('/api/food', FoodController.getAllFood);
    app.get('/api/food/:id', FoodController.getFood);
    //app.get('/api/food/find/:title', FoodController.getFoodTitle);
    app.put('/api/food/:id', FoodController.updateFood);
    app.delete('/api/food/:id', FoodController.deleteFood);}