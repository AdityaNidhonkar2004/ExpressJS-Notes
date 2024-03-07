//Create Folder
// npm intit -y(!!mention ->"type ": "module" in package.json!!)
//npm i express
// Create Instance of expressjs
//Provide port

import express from "express";
// Create Instance of expressjs
const app = express();

//Basic Route:
// Express_instance.HTTP_method("Path",Call_back-function)

app.get("/", (req, res) => {
  // res.send("Hello");
  res.send("<h1>Welcome home bro</h1>");
});
app.get("/about", (req, res) => {
  // res.send("Hello");
  res.send("<h1>Welcome about bro</h1>");
});
app.get("/contact", (req, res) => {
  // res.send("Hello");
  res.send("<h1>Welcome contact bro</h1>");
});

app.get("/about", (req, res) => {});

app.listen(3000, () => console.log("Server Up!!"));

//HTTP Methods
// 1) GET ->  Retrive Data
// 2) POST->  Create/Insert Data
// 3) PUT ->  Completely Update Data
// 4) PATCH-> Partially Update Data
// 5) ALL  -> Any HTTP Request Method
// 6) DELETE->Delete Data

//Advance Routing

// 1] String Pattern Path :Rarely used
app.get("/ab?cd", (req, res) => {
  res.send("<h1>If user hit (acd) or (abcd) this will run </h1>");
});

// 2] Regex :
app.get(/x/, (req, res) => {
  res.send("<h1>If the path include x it will work </h1>");
});
app.get(/\user\/[0,9]{4}$/, (req, res) => {
  //path is user/any 4 number from 0-9
  res.send("<h1>hi user1234 </h1>");
});

// 3] Nested Routing :
app.get("/app/nodejs/expressjs", (req, res) => {
  res.send("<h1>Welcome expressjs </h1>");
});

// Call-Back functions (req,res) -> (request,respond)

//Single Call back function:
app.get("/single-cb", (req, res) => {
  res.send("<h1>Single Call-Back</h1>");
});

//Double Call-back function:
//Here we have to pass a new parameter i.e next() with req and res (req,res,next)
app.get(
  "/double-cb",
  (req, res, next) => {
    console.log("First Call-back");
    next();
  },
  (req, res) => {
    res.send("<h1>Second  Call-back</h1>");
  }
);

//Array of Call-Backs:
const cb1 = (req, res, next) => {
  console.log("First");
  next();
};
const cb2 = (req, res, next) => {
  console.log("First");
  next();
};
const cb3 = (req, res) => {
  console.log("First");
};
app.get("/", [cb1, cb2, cb3]);

//App.Route() :
