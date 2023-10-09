import { Router } from "express";
import {
  addTodo,
  fetchAllTodos,
  removeTodo,
  updateTodo,
} from "../Controllers/todos.js";

const router = Router();

router.get("/", fetchAllTodos);
router.post("/", addTodo);
router.delete("/", removeTodo);
router.put("/", updateTodo);

export default router;
