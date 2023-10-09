import { TodoModel } from "../Models/todoModel.js";

export const fetchAllTodos = async (req, res) => {
  try {
    const allTodos = await TodoModel.find({});
    res.status(200).json(allTodos);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const addTodo = async (req, res) => {
  const { text, color } = req.body;
  try {
    const todo = await TodoModel.create({ todoText: text, todoColor: color });
    console.log("todo created");
    res.status(200).json("todo created successfully !");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const removeTodo = async (req, res) => {
  const { todoId } = req.body;
  try {
    await TodoModel.findByIdAndDelete(todoId);
    res.status(201).json("todo removed successfully !");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateTodo = async (req, res) => {
  const { todoId, updatedData } = req.body;
  console.log(todoId);
  try {
    await TodoModel.findOneAndUpdate(
      { _id: todoId },
      {
        todoText: updatedData,
      }
    );
    res.status(200).json("todo removed successfully !");
  } catch (error) {
    res.status(500).json(error);
  }
};
