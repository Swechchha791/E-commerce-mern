import express from "express";
import colors from "colors";
// import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 3001;

app.listen(
  process.env.PORT,
  console.log(
    `app is listening in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);
