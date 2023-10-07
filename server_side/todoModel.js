import { Schema, model, models } from "mongoose";

const todoSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
  },
  todoText: {
    type: String,
    require: true,
  },
});
