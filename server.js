const express = require("express");
const mongoose = require("mongoose"); // will help connect to mongodb
const fs = require("fs");
const https = require("https");
const path = require("path");

// Not needed in the new vesrion of express
// const bodyParser = require("body-parser");

const cors = require("cors");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send("Hello World!");
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(cors());

// app.use(bodyParser.json());
app.use(express.json());
// bodyParser is included in express
//alert("connecting to server");

const uri = process.env.ATLAS_URI; // get uri from Mongo dashboard - Need to set env variable "ATLAS_URI"
mongoose.connect(
  "mongodb+srv://KarmaKing2023:SiYdaqP8DHhGQqef@cluster0.rnhec1c.mongodb.net/?retryWrites=true&w=majority",
  { useNewURLParser: true }
); // 2 flags added to deal with Mongo (required)
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// We have to require the files
// const exerciseRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");
const filesRouter = require("./routes/files");
const requiredFormsRouter = require("./routes/requiredForms");
const masterAccessRouter = require("./routes/masterAccess");
const affiliateAccessRouter = require("./routes/affiliation");
const registerRouter = require("./routes/registered");

// then use the required files .. each router will load the respective Router.
// app.use("/exercises", exerciseRouter);
app.use("/users", usersRouter);
app.use("/files", filesRouter);
app.use("/requiredForms", requiredFormsRouter);
app.use("/masterAccess", masterAccessRouter);
app.use("/affiliate", affiliateAccessRouter);
app.use("/registered", registerRouter);

// Your middleware and routing here

// const privatekey = fs.readFileSync(path.join(__dirname, "cert", "privkey.pem"));
// const certificate = fs.readFileSync(path.join(__dirname, "cert", "cert.pem"));
// const ca = fs.readFileSync(path.join(__dirname, "cert", "chain.pem"));

// const options = {
//   key: privatekey,
//   cert: certificate,
//   ca: ca,
// };

// https.createServer(options, app).listen(5000, () => {
//   console.log("HTTPS server is running on port 5000");
// });

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port: ${port}`);
});
