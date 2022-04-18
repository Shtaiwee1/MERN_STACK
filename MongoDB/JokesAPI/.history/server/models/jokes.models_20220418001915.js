const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	name: String,
	age: Number
});

const Joke = mongoose.model("joke", JokeSchema);

module.exports = Joke;