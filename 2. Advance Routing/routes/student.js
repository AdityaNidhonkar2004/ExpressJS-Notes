import express from "express";

const route = express.Router();

route.get("/all", (req, res) => {
  res.end("All Students");
});
route.post("/create", (req, res) => {
  res.end("Add Students");
});
route.put("/update", (req, res) => {
  res.end("Update Students");
});
route.delete("/delete", (req, res) => {
  res.end("Delete Students");
});

export default route;
