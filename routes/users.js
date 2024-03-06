const router = require("express").Router(); // Need express router
let User = require("../models/user.model"); // require model
const { ObjectId } = require("mongoose").Types;

// this is the first route http://localhost:5000/users/
router.route("/").get((req, res) => {
  //"find()" mongoose method to get all users from MongoDB Atlas
  // find() returns a promise in JSON format
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  const id2Delete = req.params.id;
  const userId = new ObjectId(id2Delete);

  User.findByIdAndDelete(userId)
    .then((deletedUser) => {
      if (!deletedUser) {
        res.send(`Not Found, ${id2Delete}!`);
        return res.status(404).json({ message: "User not found" });
      }
      res.send("User deleted successfully");
    })
    .catch((err) => res.status(400).json({ message: "Error: " + err }));
});


// this is the second route http://localhost:5000/users/add
// this will hand the posts requests
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const affiliation = req.body.affiliation;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const middlename = req.body.middlename;
  const address = req.body.address;
  const aptNo = req.body.aptNo;
  const city = req.body.city;
  const state = req.body.state;
  const zipCode = req.body.zipCode;
  const homePhone = req.body.homePhone;
  const mobilePhone = req.body.mobilePhone;
  const email = req.body.email;
  const emergencyContact = req.body.emergencyContact;
  const emergencyRelationship = req.body.emergencyRelationship;
  const emergencyCity = req.body.emergencyCity;
  const emergencyState = req.body.emergencyState;
  const emergencyPhone = req.body.emergencyPhone;
  const medicalInfo = req.body.medicalInfo;

  console.log(state);

  const date = req.body.date;
  // Create a new instance of User
  const newUser = new User({
    username,
    affiliation,
    firstname,
    middlename,
    lastname,
    address,
    aptNo,
    city,
    state,
    zipCode,
    homePhone,
    mobilePhone,
    email,
    emergencyContact,
    emergencyRelationship,
    emergencyCity,
    emergencyState,
    emergencyPhone,
    medicalInfo,
    date,
  });
  // The new user is saved to database with the save() method

  //////////////////////////////////////////////////////

  // DELETE request to delete a file by ID

  //   To submit an object with multiple elements ...
  // EXAMPLE
  //   // create a new exercise with info provided above
  //   const newExercise = new Exercise({
  //     username,
  //     description,
  //     duration,
  //     date,
  //   });

  //////////////////////////////////////////////////////

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
