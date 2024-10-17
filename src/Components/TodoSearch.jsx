import { useContext } from "react";
import { TodoContext } from "../Context";

function TodoSearch() {
  const { setSearchValue, searchValue } = useContext(TodoContext);
  return (
    <input
      type="text"
      placeholder="Escribir Tarea"
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
    />
  );
}

export { TodoSearch };

