const mongoose = require("mongoose");
const { Schema } = require("mongoose"); // Create a new schema

const ApplicantSchema = new Schema(
  {
    firstname: { type: String, required: false },
    lastname: { type: String, required: false },
    address: { type: String, required: false },
    apt: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    zip: { type: String, required: false },
    homePhone: { type: String, required: false },
    mobilePhone: { type: String, required: false },
    email: { type: String, required: false },
    jobTitle: { type: String, required: false },
    employer: { type: String, required: false },
    hasExperience: { type: String, required: false },
    isContractor: { type: String, required: false },
    isCitizen: { type: String, required: false },
    canStart: { type: String, required: false },
  },
  {
    timestamps: true, // include field for timestamp on when it was created
  }
);

const ApplicantRef = mongoose.model("Applicant", ApplicantSchema); // "User" can be anything

module.exports = ApplicantRef;
