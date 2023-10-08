import { TodoModel } from "../Models/todoModel.js";

export const fetchAllTodos = async (req, res) => {
  try {
    console.log("all todos fetched");
  } catch (error) {
    console.log(error);
  }
};

export const addTodo = async (req, res) => {
  const { data } = req.body;
  try {
    const todo = await TodoModel.create({ todoText: data });
    console.log("todo created");
    res.status(200).json("todo created successfully !");
  } catch (error) {
    console.log(error);
  }
};
