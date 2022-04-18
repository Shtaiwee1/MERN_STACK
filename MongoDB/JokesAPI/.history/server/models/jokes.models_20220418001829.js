const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	name: String,
	age: Number
});

const User = mongoose.model("joke", JokeSchema);

module.exports = User;