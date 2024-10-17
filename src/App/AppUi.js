import { useContext } from "react";
import {
  CreateTodoButton,
  LoadingSpinner,
  Modal,
  TodoCounter,
  TodoItem,
  TodoList,
  TodoSearch,
} from "../Components";
import { TodoContext } from "../Context";

function AppUi() {
  const { loading, error, searchedTodos, completeTodo, deleteTodo, openModal } =
    useContext(TodoContext);
  return (
    <div className="container">
      <TodoCounter />
      <TodoSearch />
      <CreateTodoButton />
      <TodoList>
        {loading && <LoadingSpinner />}
        {error && <p>Estamos Errando</p>}
        {!loading && searchedTodos.length === 0 && <p>Crea to primera tarea</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && <Modal/>}
    </div>
  );
}
export default AppUi;
