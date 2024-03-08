import express from "express";
const app = express();
// Query String :
// Its a part of a   URL that follow "?" and it is used to passed the data from the clinet to the server .It consist of one or more value pair seperated by "&" .Also each key is seperated by value by "="

app.get("/products", (req, res) => {
  res.send(`Response ok ${req.query.category}`);
});
//URL   : https://localhost:3000/products?category=apple
//Output: Response ok apple

app.get("/products", (req, res) => {
  const { category, id } = req.query;
  res.send(`Response ok category:${category} , id:${id}`);
});
//URL   : https://localhost:3000/products?category=apple&id=15
//Output: Response ok apple

app.listen(3000);
