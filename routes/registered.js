const router = require("express").Router(); // Need express router
let File = require("../models/register"); // require model
const fs = require("fs");
const { ObjectId } = require("mongoose").Types;
// const FilesXRef = require("../models/invoiceLogs");

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

// this is the first route http://localhost:5000/files/
router.route("/").get((req, res) => {
  //"find()" mongoose method to get all users from MongoDB Atlas
  // find() returns a promise in JSON format
  File.find()
    .then((files) => res.json(files))
    .catch((err) => res.status(400).json("Error: " + err));
});
//http://localhost:5000/files/userData/Gerald Warren
// router.route("/userData/:username").get((req, res) => {
//   //"find()" mongoose method to get all users from MongoDB Atlas
//   // find() returns a promise in JSON format
//   const username = req.params.username;
//   File.find({ name: username })
//     .then((files) => res.json(files))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// router.route("/userData/:username").get((req, res) => {
//   const username = req.params.username;
//   console.log("username backend: " + username);
//   File.find({ name: username }, (err, user) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send("Error retrieving data");
//     } else {
//       res.json(user);
//     }
//   });
// });

// router.route("/:username").get((req, res) => {
//   const username = req.params.username;
//   // Handle the request for the specific username
//   // ...
//   res.send(`Hello, ${username}!`);
// });

// this is the second route http://localhost:5000/files/add
// this will hand the posts requests
router.route("/add").post((req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const phone = req.body.phone;
  const password = req.body.password;

  const newFileUpload = new File({
    firstname,
    lastname,
    email,
    phone,
    password,
  });
  // console.log("Trying to upload to Xref"+JSON.stringify(newFileUpload));

  newFileUpload
    .save()
    .then(() => res.json("File added!"))
    .catch((err) => res.status(400).json("Route Error: " + err));
});

// DELETE request to delete a file by ID
// router.route("/:id").delete((req, res) => {
//   const fileId = ObjectId.isValid(req.params.id)
//     ? new ObjectId(req.params.id)
//     : null;
//   if (fileId) {
//     File.findByIdAndDelete(fileId)
//       .then(() => res.json("File deleted successfully"))
//       .catch((err) => res.status(400).json("Error: " + err));
//   } else {
//     res.status(400).json("Invalid file ID");
//   }
// });

module.exports = router;
