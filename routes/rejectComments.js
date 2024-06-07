const router = require("express").Router(); // Need express router
let RejectComments = require("../models/rejectComments"); // require model
const { ObjectId } = require("mongoose").Types;

// this is the first route http://localhost:5000/users/
router.route("/").get((req, res) => {
  //res.send(`Comments Response!`);
  RejectComments.find()
    .then((comments) => res.json(comments))
    .catch((err) => res.status(400).json("Error: " + err));
});

// router.route("/:id").delete((req, res) => {
//   const id2Delete = req.params.id;
//   const userId = new ObjectId(id2Delete);

//   User.findByIdAndDelete(userId)
//     .then((deletedUser) => {
//       if (!deletedUser) {
//         res.send(`Not Found, ${id2Delete}!`);
//         return res.status(404).json({ message: "User not found" });
//       }
//       res.send("User deleted successfully");
//     })
//     .catch((err) => res.status(400).json({ message: "Error: " + err }));
// });

// this is the second route http://localhost:5000/users/add
// this will hand the posts requests
router.route("/add").post((req, res) => {
  const comment = req.body.comment;

  const fileObjID = ObjectId.isValid(req.body.fileObjID)
    ? new ObjectId(req.body.fileObjID)
    : null;
  //   const fileObjID = req.body.fileObjID;
  console.log(fileObjID);
  if (!fileObjID) {
    res.status(400).json("Invalid file ID");
    return; // Exit early if fileId is invalid
  }

  try {
  } catch (err) {}

  const newComment = new RejectComments({
    comment,
    fileObjID,
  });

  newComment
    .save()
    .then(() => res.json("Comment added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
