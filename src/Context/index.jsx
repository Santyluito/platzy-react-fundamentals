import { createContext, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false)

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  const compledTodos = todos.every((todo) => todo.completed);
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const addTodo = (text) => {
    const newTodos = [...todos, { text, completed: false }];
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((t) => t.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((t) => t.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        compledTodos,
        setSearchValue,
        searchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

// localStorage.removeItem("TODOS_V1");
// const defaultTodos = [
//   { text: "Hacer la compra de pan", completed: false },
//   { text: "Hacer la compra de leche", completed: true },
//   { text: "Hacer la compra de arroz", completed: false },
//   { text: "Hacer la compra de cereal", completed: true },
//   { text: "Hacer la compra de cafe", completed: false },
//   { text: "Hacer la compra de maestrias", completed: true },
// ];
// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
