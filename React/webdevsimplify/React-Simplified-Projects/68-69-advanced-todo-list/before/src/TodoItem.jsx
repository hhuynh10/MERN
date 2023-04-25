import { useContext, useState } from "react";
import { TodoContext } from "./App";

export function TodoItem({ id, name, completed }) {
  const { toggleTodo, deleteTodo, updateTodo } = useContext(TodoContext);

  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    if (newName === "") return;
    updateTodo(newName, id);

    setIsEditing(false);
  }

  return (
    <li className="list-item">
      {isEditing ? (
        <>
          <form onSubmit={submitHandler}>
            <label className="list-item-label">
              <input
                type="text"
                defaultValue={name}
                onChange={(e) => setNewName(e.target.value)}
              />
              <span data-list-item-text>{newName}</span>
            </label>
            <button data-button-edit onClick={() => setIsEditing(false)}>
              Save
            </button>
          </form>
        </>
      ) : (
        <>
          <label className="list-item-label">
            <input
              checked={completed}
              type="checkbox"
              data-list-item-checkbox
              onChange={(e) => toggleTodo(id, e.target.checked)}
            />
            <span data-list-item-text>{name}</span>
          </label>
          <button data-button-edit onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button onClick={() => deleteTodo(id)} data-button-delete>
            Delete
          </button>
        </>
      )}
    </li>
  );
}
