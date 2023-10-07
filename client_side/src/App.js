import React, { createContext, useState } from "react";
import "./App.css";
import TodoList from "./Components/Todo-List/TodoList";

export const globalSelectedContext = createContext();
function App() {
  const [isSelectedColor, setIsSelectedColor] = useState(true);
  return (
    <globalSelectedContext.Provider
      value={{ isSelectedColor, setIsSelectedColor }}
    >
      <TodoList />
    </globalSelectedContext.Provider>
  );
}

export default App;
