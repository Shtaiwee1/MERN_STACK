const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup:{
        type : String,
        required : []
    }
});

const Joke = mongoose.model("joke", JokeSchema);

module.exports = Joke;