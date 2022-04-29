const mongoose = require("mongoose");
const PersonSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Name is required!"],
      minlength: [3, "Name must be at least 3 characters!"],
    },
    lastName:{
      type:String,
      required: [true, "Name is required!"],
      minlength: [3, "Name must be at least 3 characters!"],
    }
  },
  { timestamps: true }
);
module.exports.Person = mongoose.model("Person", PersonSchema);