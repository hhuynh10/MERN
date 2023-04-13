import React from "react";

const TodoCard = ({ name, checked, id , checkTodo, deleteTodo }) => {
  return (
    <li className="list-item">
      <label className="list-item-label">
        <input
          type="checkbox"
          data-list-item-checkbox
          onChange={(e) => checkTodo(id, e.target.checked)}
        />
        <span data-list-item-text>{name}</span>
      </label>
      <button data-button-delete onClick={(e) => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoCard;
