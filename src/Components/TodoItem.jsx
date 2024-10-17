import { FaCheckCircle } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

function TodoItem(props) {
  // console.log(pr.TodoItem);s.completeTodo)
  return (
    <li>
      <span
        className={props.completed ? "listo" : ""}
        onClick={props.onComplete}
      >
        <FaCheckCircle />
        {props.completed}
      </span>
      <p className={props.completed ? "listo" : ""}>{props.text}</p>
      <span onClick={props.onDelete}>{<FaDeleteLeft />}</span>
    </li>
  );
}

export { TodoItem };
