import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((pd) => pd._id === req.params.id);
  res.json(product);
});

app.listen(
  process.env.PORT,
  console.log(
    `app is listening in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
);
