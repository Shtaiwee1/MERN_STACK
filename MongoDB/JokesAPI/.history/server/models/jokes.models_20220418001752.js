const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: String,
	age: Number
});

const User = mongoose.model("joke", JokeSchema);

module.exports = User;