import express from "express";
import {
  allStudents,
  newStudent,
  upadateStudent,
  deleteStudent,
} from "../Controllers/students.js";
const route = express.Router();

route.get("/all", allStudents);
route.post("/create", newStudent);
route.put("/update", upadateStudent);
route.delete("/delete", deleteStudent);

export default route;
