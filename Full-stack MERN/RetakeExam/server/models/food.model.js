const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Food name is required"
        ],
        minlength:[ 4,"food name must be at least 4 characters"] ,
        unique: true //this validation is added to make every title unique from the rest
    },kitchen:{
        type: String,
        required:[
            true,
            "kitchen is required"
        ],
        minlength:[ 2,"kitchen must be at least 2 characters"] ,
    },
    recipe :{
        type : String,
        required:[
            true,
            "Recipe is required"
        ],
        minlength:[ 5,"Recipe must be at least 5 characters"] ,
    },
    image:{
        type: String,
        required: [
            true,
            "Image is required"
        ]
    },
}, { timestamps: true });

module.exports.Food = mongoose.model('Food', FoodSchema);