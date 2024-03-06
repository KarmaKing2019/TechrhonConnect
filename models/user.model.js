const mongoose = require("mongoose");
const { Schema } = require("mongoose"); // Create a new schema

// this schema has one field "username"
const userSchema = new Schema(
  {
    username: { type: String, required: false },
    password: { type: String, required: false },
    affiliation: { type: String, required: false },
    firstname: { type: String, required: true },
    middlename: { type: String, required: false },
    lastname: { type: String, required: true },
    address: { type: String, required: false },
    aptNo: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    zipCode: { type: String, required: false },
    homePhone: { type: String, required: false },
    mobilePhone: { type: String, required: true },
    email: { type: String, required: true },
    emergencyContact: { type: String, required: false },
    emergencyRelationship: { type: String, required: false },
    emergencyCity: { type: String, required: false },
    emergencyState: { type: String, required: false },
    emergencyPhone: { type: String, required: false },
    medicalInfo: { type: String, required: false },
  },
  {
    timestamps: true, // include field for timestamp on when it was created
  }
);

const User = mongoose.model("User", userSchema); // "User" can be anything

module.exports = User;
