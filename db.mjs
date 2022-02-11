import mongoose from "mongoose";

// mongodb connection code ////
let dbURI =
  "mongodb+srv://atlas-monster:greek-Myth@cluster0.owvlg.mongodb.net/studentDb?retryWrites=true&w=majority";
// let dbURI = 'mongodb://localhost/mydatabase';
mongoose.connect(dbURI);

// ---START---//// Mongodb connected disconnected events ////
mongoose.connection.on("connected", function () {
  // if Connected callback
  console.log("Mongoose is connected");
});

mongoose.connection.on("disconnected", function () {
  // if Disconnected callback
  console.log("Mongoose is disconnected");
  process.exit(1);
});

mongoose.connection.on("error", function (err) {
  // for any error callback
  console.log("Mongoose connection error: ", err);
  process.exit(1);
});

process.on("SIGINT", function () {
  // Signal Intent function runs just before the app closes
  console.log("App is terminating");
  mongoose.connection.close(function () {
    console.log("Mongoose connection closed");
    process.exit(0);
  });
});
//---END---//// Mongodb connected disconnected events ////

// !! Mongodb Schema for Students & Attendance Collections ////---START---////

// ** Schema for Student Collection ** //
const studentSchema = new mongoose.Schema({
  studentName: String,
  studentEmail: String,
  studentRoll: String,
  studentClass: String,
  createdOn: { type: Date, default: Date.now },
});
export const student = mongoose.model("student", studentSchema);

// ** Schema for Attendance Collection ** //
const attendanceSchema = new mongoose.Schema({
  studentId: String,
  studentName: String,
  isPresent: Boolean,
  createdOn: { type: Date, default: Date.now },
});
export const attendance = mongoose.model("attendance", attendanceSchema);
