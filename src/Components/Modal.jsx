import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { TodoContext } from "../Context";

const Modal = () => {
  const { setOpenModal, addTodo } = useContext(TodoContext);
  const onSaveBotton = (e) => {
    e.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false);
  };

  const [newTodoValue, setNewTodoValue] = useState("");

  return createPortal(
    <div className="modal">
      <div className="modal-overlay" onClick={() => setOpenModal(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>Ingresar nuevo ToDo</h2>
          <form onSubmit={onSaveBotton}>
            <textarea
              value={newTodoValue}
              onChange={(e) => setNewTodoValue(e.target.value)}
              placeholder="Escribe algo..."
            />
            <div className="modal-buttons">
              <button>Anadir</button>
              <button onClick={() => setOpenModal(false)}>Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export { Modal };
