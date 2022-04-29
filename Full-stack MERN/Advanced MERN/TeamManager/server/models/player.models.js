const mongoose = require("mongoose");
const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: [2, "Name must be at least 2 characters"],
      required: [true, "Name is required"],
    },
    position: String,
    firstGame: { type: String, default: "undecided" },
    secondGame: { type: String, default: "undecided" },
    thirdGame: { type: String, default: "undecided" },
  },
  { timestamps: true }
);
module.exports.Player = mongoose.model("Player", PlayerSchema);