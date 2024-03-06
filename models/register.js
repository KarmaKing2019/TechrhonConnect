const mongoose = require("mongoose");
const { Schema } = require("mongoose"); // Create a new schema

const RegisterSchema = new Schema(
  {
    firstname: { type: String, required: false },
    lastname: { type: String, required: false },
    phone: { type: String, required: false },
    email: { type: String, required: false },
    password: { type: String, required: false },
  },
  {
    timestamps: true, // include field for timestamp on when it was created
  }
);

const Registered = mongoose.model("Registered", RegisterSchema); // "User" can be anything

module.exports = Registered;
