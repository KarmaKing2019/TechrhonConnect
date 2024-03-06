const router = require("express").Router(); // Need express router
let File = require("../models/requiredForms"); // require model
const fs = require("fs");
const { ObjectId } = require("mongoose").Types;
// const FilesXRef = require("../models/invoiceLogs");

// this is the first route http://localhost:5000/files/
router.route("/").get((req, res) => {
  //"find()" mongoose method to get all users from MongoDB Atlas
  // find() returns a promise in JSON format
  File.find()
    .then((files) => res.json(files))
    .catch((err) => res.status(400).json("Error: " + err));
});

// this is the second route http://localhost:5000/files/add
// this will hand the posts requests
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const form = req.body.form;
  const fileUrl = req.body.fileUrl;
  console.log("=======" + name);
  console.log("=======" + form);

  const newFileUpload = new File({
    name,
    form,
    fileUrl,
  });
  // console.log("Trying to upload to Xref"+JSON.stringify(newFileUpload));

  newFileUpload
    .save()
    .then(() => res.json("File added!"))
    .catch((err) => res.status(400).json("Route Error: " + err));
});

module.exports = router;
