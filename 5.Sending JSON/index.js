//How to send json data
import express from "express";
import products from "./products.js";
const app = express();

app.get("/", (req, res) => {
  res.json(products);
});
//Output:
//[ {"title": "Greet",
// "msg": "Good morning"}]
