const express = require("express");
const app  = express();
app.use(express.json());
const productController = 
require("./controllers/product.controllers");



app.set("view engine", "ejs");

app.use(express.static("public"))

app.use("/product", productController)


module.exports = app;