import mongoose from "mongoose";
async function dbConnection() {
  try {
    const connect = await mongoose.connect("mongodb://localhost:27017/todos");
    console.log("connected to db --->");
  } catch (error) {
    console.log(error);
  }
}

export default dbConnection;
