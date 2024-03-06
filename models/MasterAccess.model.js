const mongoose = require("mongoose");
const { Schema } = require("mongoose"); // Create a new schema

const masterAccessSchema = new Schema(
  {
    name: { type: String, required: false },
    email: { type: String, required: false },
    role: { type: String, required: false },
  },
  { collection: "MasterAccess" },
  {
    timestamps: true, // include field for timestamp on when it was created
  }
  
);

const MasterAccessRef = mongoose.model("MasterAccess", masterAccessSchema); // "User" can be anything

module.exports = MasterAccessRef;
