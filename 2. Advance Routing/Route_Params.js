//Route Params :
//Used to cature some type of data from the user

import express from "express";

const app = express();

// app.get("/ecom/products/iphone/:id", (req, res) => {
//   res.send(req.id);
//Output : the id which we give
// });

app.get("/products/:category/:id", (req, res) => {
  const { category, id } = req.params;
  res.send(`Product category (${category}) and product id (${id})`);
});

app.listen(3000);
