import React, { useContext } from "react";
import { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import "./style.css";
import { globalSelectedContext } from "../../App";

const Todos = ({ todos, removeTodo, getTodoToEdit }) => {
  const { isSelectedColor, setIsSelectedColor } = useContext(
    globalSelectedContext
  );
  const [selectedTodoId, setSelectedTodoId] = useState(null);
  const handleEditClick = (id) => {
    setSelectedTodoId(id);
  };

  return todos.map((todo, key) => (
    <div
      style={{
        backgroundColor: todo.color,
        opacity: selectedTodoId == todo.id && !isSelectedColor ? 0.5 : 1,
      }}
      key={key}
      className="todo-card"
    >
      <div>{todo.todoText}</div>
      <div className="icons">
        <AiFillEdit
          onClick={() => {
            getTodoToEdit(todo);
            handleEditClick(todo.id);
            setIsSelectedColor(false);
          }}
          className="icon me-1"
          size="1.3rem"
          color="white"
        />
        <AiFillDelete
          onClick={() => {
            removeTodo(todo.id);
          }}
          size="1.34rem"
          color="white"
        />
      </div>
    </div>
  ));
};

export default Todos;
