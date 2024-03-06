const mongoose = require("mongoose");
const { Schema } = require("mongoose"); // Create a new schema

const RequiredFormsSchema = new Schema(
  {
    name: { type: String, required: false },
    form: { type: String, required: false },
    fileUrl: { type: String, required: false },
  },
  {
    timestamps: true, // include field for timestamp on when it was created
  }
);

const RequiredForms = mongoose.model("RequiredForms", RequiredFormsSchema); // "User" can be anything

module.exports = RequiredForms;
