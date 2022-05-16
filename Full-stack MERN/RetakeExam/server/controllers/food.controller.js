const {Food}  = require('../models/food.model');
module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

module.exports.createFood= (request, response) => {
    const { name , kitchen , recipe , image } = request.body;
    Food.create({
        name,
        kitchen,
        recipe,
        image
    })
        .then(food => response.json(food))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllFood = (request, response) => {
    Food.find({})
        .then(food => response.json(food))
        .catch(err => response.json(err))
}

module.exports.getFood = (request, response) => {
    Food.findOne({_id:request.params.id})
        .then(food => response.json(food))
        .catch(err => response.json(err))
}

module.exports.getFoodTitle = (request, response) => {
    Food.findOne({name:request.params.name})
        .then(food => response.json(food))
        .catch(err => response.json(err))
}
module.exports.updateFood = (request, response) => {
    Food.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(upkitchendFood => response.json(upkitchendFood))
        .catch(err => response.json(err))
}

module.exports.deleteFood = (request, response) => {
    Food.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}