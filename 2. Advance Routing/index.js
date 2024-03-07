import express from "express";

const app = express();

//Ugly method
// app.get("/student", (req, res) => {
//   res.send("All students");
// });
// app.post("/student", (req, res) => {
//   res.send("All students");
// });
// app.put("/student", (req, res) => {
//   res.send("All students");
// });
// app.delete("/student", (req, res) => {
//   res.send("All students");
// });

//Refactor above code :
// app
//   .route("/student")
//   .get((req, res) => {
//     res.end("All Students");
//   })
//   .post((req, res) => {
//     res.end("Add Students");
//   })
//   .put((req, res) => {
//     res.end("Update Students");
//   })
//   .delete((req, res) => {
//     res.end("Delete Students");
//   });

//More Refactoring the code :
// 1. Create routes folder and put your routes in a seperate file
// 2. Create instance of express.Router()
// 3. Instead of app.method change that to "router.method"
// 4. Export router
// 5.Import router
// 6.use the (app.use) built-in middle-ware & provide your routes

import students from "./routes/student.js";

app.use("/students", students);

//So now the path is /students/(all,create,update,delete)

app.listen(3000, () => console.log("Server up !!"));
