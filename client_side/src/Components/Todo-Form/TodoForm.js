import React, { useState } from "react";
import "./style.scss";
import { useContext } from "react";
import { globalSelectedContext } from "../../App";
import { useRef } from "react";
import { useEffect } from "react";

const TodoForm = ({ addTodo, dataToUpdate_id, editTodo }) => {
  const { isSelectedColor, setIsSelectedColor } = useContext(
    globalSelectedContext
  );
  const inputRef = useRef();
  const [data, setdata] = useState("");
  const [updatedData, setupdatedData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    addTodo(data);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    editTodo(updatedData);
    setdata("");
    setupdatedData("");
    setIsSelectedColor(true);
  };

  // to auto-focus on input --->
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [dataToUpdate_id]);
  //-------------------------
  return (
    <>
      <h1>What's the Plan for Today?</h1>
      {dataToUpdate_id == 0 ? (
        <form onSubmit={handleSubmit}>
          <div className="inp">
            <input
              type="text"
              placeholder="Add a todo"
              value={data}
              onChange={(e) => {
                setdata(e.target.value);
              }}
            />
            <button type="submit">Add Todo</button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleUpdate}>
          <div className="inp">
            <input
              ref={inputRef}
              type="text"
              placeholder="Update the todo"
              value={updatedData}
              onChange={(e) => {
                setupdatedData(e.target.value);
              }}
            />
            <button type="submit">Update</button>
          </div>
        </form>
      )}
    </>
  );
};

export default TodoForm;
