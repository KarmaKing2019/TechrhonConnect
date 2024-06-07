const mongoose = require("mongoose");
const { Schema } = require("mongoose"); // Create a new schema

const RejectCommentsSchema = new Schema(
  {
    comment: { type: String, required: false },
    fileObjID: mongoose.Schema.Types.ObjectId,
  },
  {
    timestamps: true, // include field for timestamp on when it was created
  }
);

const RejectComments = mongoose.model("rejectComments", RejectCommentsSchema); // "User" can be anything

module.exports = RejectComments;
