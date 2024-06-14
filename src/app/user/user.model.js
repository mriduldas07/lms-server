const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["learner", "instractor"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports.User = model("User", userSchema);
