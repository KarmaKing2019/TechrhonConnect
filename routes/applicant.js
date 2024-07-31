const router = require("express").Router(); // Need express router
let Applicant = require("../models/applicant"); // require model
// const fs = require("fs");
// const { ObjectId } = require("mongoose").Types;
// const FilesXRef = require("../models/invoiceLogs");

// this is the first route http://localhost:5000/files/
router.route("/").get((req, res) => {
  //"find()" mongoose method to get all users from MongoDB Atlas
  // find() returns a promise in JSON format
  Applicant.find()
    .then((files) => res.json(files))
    .catch((err) => res.status(400).json("Error: " + err));
});

// this is the second route http://localhost:5000/files/add
// this will hand the posts requests
router.route("/add").post((req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const address = req.body.address;
  const apt = req.body.apt;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;
  const homePhone = req.body.homePhone;
  const mobilePhone = req.body.mobilePhone;
  const email = req.body.email;
  const jobTitle = req.body.jobTitle;
  const employer = req.body.employer;
  const hasExperience = req.body.hasExperience;
  const isContractor = req.body.isContractor;
  const isCitizen = req.body.isCitizen;
  const canStart = req.body.canStart;

  const newApplicant = new Applicant({
    firstname,
    lastname,
    address,
    apt,
    city,
    state,
    zip,
    homePhone,
    mobilePhone,
    email,
    jobTitle,
    employer,
    hasExperience,
    isContractor,
    isCitizen,
    canStart,
  });
  console.log("Trying to upload to Xref " + JSON.stringify(newApplicant));

  newApplicant
    .save()
    .then(() => res.json("File added!"))
    .catch((err) => res.status(400).json("Route Error: " + err));
});

module.exports = router;
