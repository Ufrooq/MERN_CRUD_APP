import { Schema, model } from "mongoose";

const todoSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
  },
  todoText: {
    type: String,
    require: true,
  },
});

export const TodoModel = new model("todos", todoSchema);
