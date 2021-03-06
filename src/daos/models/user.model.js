const { Schema } = require("mongoose");

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    phoneNumber: { type: Number, required: true },
    // avatar: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = userSchema;
