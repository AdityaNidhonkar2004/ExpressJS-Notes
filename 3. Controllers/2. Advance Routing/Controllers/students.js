// Put  all the callbacks function from route to this file
import express from "express";

const allStudents = (req, res) => {
  res.send("All Students");
};
const newStudent = (req, res) => {
  res.send("create Student");
};
const upadateStudent = (req, res) => {
  res.send("update Students");
};
const deleteStudent = (req, res) => {
  res.send("delete Students");
};

//Now  just export this call-back function to routes folder
export { allStudents, newStudent, upadateStudent, deleteStudent };
