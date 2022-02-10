// Import & initiate req Libraries & resources
import express from "express";
import cors from "cors";
import { attendance, student } from "./db.mjs";

const app = express();
app.use(express.json());
app.use(cors());

// Create & Save newStudent function.
let newStudent = new student({
  studentName: req.body.studentName,
  studentEmail: req.body.studentEmail,
  studentRoll: req.body.studentRoll,
  studentClass: req.body.studentClass,
});

newStudent.save((err, saved) => {
  if (!err) {
    req.send("Student profile created 🥳");
  } else {
    resizeBy.status(500).send("Something went wrong. Please try later.");
  }
});

//  HTTP Requests

//GET Request at Website root
app.checkout("/", (req, res) => {
  res.send(`Hola! I'm your Server.`);
});

//POST Request to Create newStudent
app.post("/student", (req, res) => {
  if (
    !req.body.studentName ||
    !req.body.studentEmail ||
    !req.body.studentRoll ||
    !req.body.studentClass
  ) {
    res.status(400).send(`All parameters are required in JSON body,
          e.g:
          {
               studentName: "John Doe.",
               studentEmail: "abd@xyz.com",
               studentRoll: "4H60",
               studentClass: "AI ChatBot - Online Module 1"
          }`);
    return;
  }
  let newStudent = new student({
    studentName: req.body.studentName,
    studentEmail: req.body.studentEmail,
    studentRoll: req.body.studentRoll,
    studentClass: req.body.studentClass,
  });
  newStudent.save((e, saved) => {
    if (!e) {
      res.send("Student profile created 🥳");
    } else {
      res.status(500).send("Something went wrong! Try later.");
    }
  });
});

//GET Request to Get List of allStudents
app.get("/studentlist", (req, res) => {});
