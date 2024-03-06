const mongoose = require("mongoose");
const { Schema } = require("mongoose"); // Create a new schema

const AffiliationFormsSchema = new Schema(
  {
    Affiliation: { type: String, required: false },
  },
  {
    timestamps: true, // include field for timestamp on when it was created
  }
);

const Affiliation = mongoose.model("Affiliation", AffiliationFormsSchema); // "User" can be anything

module.exports = Affiliation;
