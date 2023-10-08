import { Schema, model } from "mongoose";

const todoSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
  },
  todoColor: {
    type: String,
    require: true,
  },
  todoText: {
    type: String,
    require: true,
  },
});

export const TodoModel = new model("todos", todoSchema);
