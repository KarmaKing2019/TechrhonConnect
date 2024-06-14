const mongoose = require("mongoose");
const { Schema } = require("mongoose"); // Create a new schema

const FilesXrefSchema = new Schema(
  {
    name: { type: String, required: false },
    affiliation: { type: String, required: false },
    fileUrl: { type: String, required: false },
    status: { type: String, required: false },
    rejectComment: { type: String, required: false },
    docType: { type: String, required: false },
    invoiceValue: { type: String, required: false },
  },
  {
    timestamps: true, // include field for timestamp on when it was created
  }
);

const FilesXRef = mongoose.model("Files", FilesXrefSchema); // "User" can be anything

module.exports = FilesXRef;
