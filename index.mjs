// Import & initiate req Libraries & resources
import express from "express";
import cors from "cors";
import { attendance, student } from "./db.mjs";

const app = express();
app.use(express.json());
app.use(cors());

//  HTTP Requests

// GET Request at Website root
app.get("/", (req, res) => {
  res.send(`Hola! I'm your Server.`);
});

app.get("/students", (req, res) => {
  student.find({}, (err, data) => {
    if (!err) {
      return res.send(data);
    } else {
      return res.send("something went wrong");
    }
  });
});

//POST Request to Create newStudent
app.post("/student", (req, res) => {
  if (
    !req.body.studentName ||
    !req.body.studentEmail ||
    !req.body.studentRoll ||
    !req.body.studentClass
  ) {
    res.send(`All parameters are required in JSON body,
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
      res.send("Something went wrong! Try later.");
    }
  });
});

// POST Attendance Request
app.post;

app.listen(3000, () => {
  console.log("server is running");
});
