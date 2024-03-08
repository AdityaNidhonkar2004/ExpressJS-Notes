import express from "express";
import path from "path";
const app = express();

//express.static("path") is built in middleware to serve static files
app.use(express.static("./public"));

//process.cwd() -> gives path of currend working directory
app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "./public/index.html"));
});
//Renders the html file
