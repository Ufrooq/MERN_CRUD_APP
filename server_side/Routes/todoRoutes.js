import { Router } from "express";
import { addTodo, fetchAllTodos } from "../Controllers/todos.js";

const router = Router();

router.get("/", fetchAllTodos);
router.post("/", addTodo);
router.put("/");

export default router;
