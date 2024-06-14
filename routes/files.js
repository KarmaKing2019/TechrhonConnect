const router = require("express").Router(); // Need express router
let File = require("../models/files.model"); // require model
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
//http://localhost:5000/files/userData/Gerald Warren
router.route("/userData/:username").get((req, res) => {
  //"find()" mongoose method to get all users from MongoDB Atlas
  // find() returns a promise in JSON format
  const username = req.params.username;
  File.find({ name: username })
    .then((files) => res.json(files))
    .catch((err) => res.status(400).json("Error: " + err));
});

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

router.route("/:username").get((req, res) => {
  const username = req.params.username;
  // Handle the request for the specific username
  // ...
  res.send(`Hello, ${username}!`);
});

// this is the second route http://localhost:5000/files/add
// this will hand the posts requests
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const affiliation = req.body.affiliation;
  const fileUrl = req.body.fileUrl;
  const status = req.body.status;
  const rejectComment = req.body.rejectComment;
  const docType = req.body.docType;
  const invoiceValue = req.body.invoiceValue;

  console.log(name);

  const newFileUpload = new File({
    name,
    affiliation,
    fileUrl,
    status,
    rejectComment,
    docType,
    invoiceValue,
  });
  // console.log("Trying to upload to Xref"+JSON.stringify(newFileUpload));

  newFileUpload
    .save()
    .then(() => res.json("File added!"))
    .catch((err) => res.status(400).json("Route Error: " + err));
});

// DELETE request to delete a file by ID
router.route("/:id").delete((req, res) => {
  const fileId = ObjectId.isValid(req.params.id)
    ? new ObjectId(req.params.id)
    : null;
  if (fileId) {
    File.findByIdAndDelete(fileId)
      .then(() => res.json("File deleted successfully"))
      .catch((err) => res.status(400).json("Error: " + err));
  } else {
    res.status(400).json("Invalid file ID");
  }
});

// UPDATE request to delete a file by ID
router.patch("/reject/:id", async (req, res) => {
  const fileId = ObjectId.isValid(req.params.id)
    ? new ObjectId(req.params.id)
    : null;

  if (!fileId) {
    res.status(400).json("Invalid file ID");
    return; // Exit early if fileId is invalid
  }
  //res.json("router.patch");
  console.log("Patch Called: " + fileId);

  try {
    // Assuming you've connected to MongoDB and defined the File model
    await File.updateMany(
      { _id: fileId },
      {
        $set: {
          status: "Rejected",
        },
      }
    );
    res.send(`Successfully updated status for ${fileId}!`);
  } catch (err) {
    console.error("Error updating document:", err.message);
    res.status(500).send(err.message);
  }
});

router.patch("/approve/:id", async (req, res) => {
  const fileId = ObjectId.isValid(req.params.id)
    ? new ObjectId(req.params.id)
    : null;

  if (!fileId) {
    res.status(400).json("Invalid file ID");
    return; // Exit early if fileId is invalid
  }
  //res.json("router.patch");
  console.log("Patch Called: " + fileId);

  try {
    // Assuming you've connected to MongoDB and defined the File model
    await File.updateMany(
      { _id: fileId },
      {
        $set: {
          status: "Approved",
        },
      }
    );
    res.send(`Successfully updated status for ${fileId}!`);
  } catch (err) {
    console.error("Error updating document:", err.message);
    res.status(500).send(err.message);
  }
});

module.exports = router;
