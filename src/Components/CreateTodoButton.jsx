import { useContext } from "react";
import { TodoContext } from "../Context";

function CreateTodoButton() {
  // return <button onClick={(event) => console.log(event)}>Agregar Tarea</button>;
  const {setOpenModal} = useContext(TodoContext)
  return (
    <button className={`boton-flotante`} onClick={() => setOpenModal(true)}>
      +
    </button>
  );
}
export { CreateTodoButton };
