import { useContext } from "react";
import { TodoContext } from "../Context";

function TodoCounter() {
  const { completedTodos, totalTodos, compledTodos } = useContext(TodoContext);
  return (
    <div>
      {compledTodos && (
        <h1>
          Felicidades
          <br />
        </h1>
      )}
      <h2>
        {totalTodos === 0
          ? "Realiza nueva tarea"
          : `Has completado ${completedTodos} de ${totalTodos}`}
      </h2>
    </div>
  );
}

export { TodoCounter };
