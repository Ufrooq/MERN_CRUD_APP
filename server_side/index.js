import express from "express";
import cors from "cors";
import todoRoutes from "./Routes/todoRoutes.js";
import dbConnection from "./Connection/connection.js";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/", todoRoutes);

dbConnection();

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
