import { Router } from "express";
import { addTodo, fetchAllTodos, removeTodo } from "../Controllers/todos.js";

const router = Router();

router.get("/", fetchAllTodos);
router.post("/", addTodo);
router.delete("/", removeTodo);

export default router;
