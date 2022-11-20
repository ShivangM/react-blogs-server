import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
import dotenv from 'dotenv'
dotenv.config()
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

const PORT = process.env.PORT || 5000
mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() => app.listen(PORT))
  .then(() =>
    console.log(`Connected TO Database and Listening on port ${PORT}`)
  )
  .catch((err) => console.log(err));
