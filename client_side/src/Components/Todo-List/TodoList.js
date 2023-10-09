import React, { useEffect } from "react";
import TodoForm from "../Todo-Form/TodoForm";
import { useState } from "react";
import Todos from "../Todo/Todos";

import "./style.css";
const TodoList = () => {
  const [todos, settodos] = useState([]);
  const [dataToUpdate_id, setDataToUpdate_id] = useState(0);
  const colors = [
    "#8e44ad",
    "#fd79a8",
    "#f9ca24",
    "#badc58",
    "#eb4d4b",
    "#ED4C67",
    "#B53471",
    "#fa8231",
  ];
  // add todo function --->

  const addTodo = async (data) => {
    if (!data || /^\s*$/.test(data)) {
      alert("Please enter a valid todo!");
    } else {
      const randomNumber = Math.floor(Math.random() * 8);
      const color = colors[randomNumber];
      try {
        const response = await fetch("http://localhost:3001", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: data,
            color: color,
          }),
        });
        if (response.ok) {
          fetchTodos();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  // function for getting todo to edit  --->
  const getTodoToEdit = (todoId) => {
    setDataToUpdate_id(todoId);
  };

  // function to edit todo --->
  const editTodo = async (updatedData) => {
    if (!updatedData || /^\s*$/.test(updatedData)) {
      alert("Please enter a valid newData!");
    } else {
      try {
        const response = await fetch("http://localhost:3001", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            todoId: dataToUpdate_id,
            updatedData: updatedData,
          }),
        });
        console.log(response);
        if (response.ok) {
          fetchTodos();
          dataToUpdate_id(0);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  //  remove todo function --->
  const removeTodo = async (id) => {
    try {
      const response = await fetch("http://localhost:3001", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todoId: id,
        }),
      });
      console.log(response);
      if (response.ok) {
        fetchTodos();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:3001");
      const data = await response.json();
      console.log(data);
      settodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div className="Main mt-5">
      <h1 className="text-center text-white">Todo App</h1>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-6 col-md-8 col-sm-10 col-12 ">
            <div className="card text-center pt-3 pb-5">
              <TodoForm
                addTodo={addTodo}
                dataToUpdate_id={dataToUpdate_id}
                editTodo={editTodo}
              />
              <div className="mx-auto my-todos">
                <Todos
                  todos={todos}
                  removeTodo={removeTodo}
                  getTodoToEdit={getTodoToEdit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
