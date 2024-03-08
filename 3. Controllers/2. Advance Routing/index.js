import express from "express";
import students from "./routes/student.js";

const app = express();
app.use("/student", students);

app.listen(3000, () => console.log("Server UP!!!"));
