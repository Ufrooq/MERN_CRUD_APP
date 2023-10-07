import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());

app.use("/", () => {
  console.log("hello world");
});

async function dbConnection() {
  try {
    const connect = await mongoose.connect("mongodb://localhost:27017/todos");
    console.log("connected to db --->");
  } catch (error) {
    console.log(error);
  }
}
dbConnection();

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
