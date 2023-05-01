import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { getTodos } from "../api/todos";

const TodosList = () => {
  const todos = useLoaderData();

  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className={`${todo.completed && "strike-through"}`}
            >
              {todo.title}
            </li>
          );
        })}
      </ul>
    </>
  );
};

const loader = ({ request: { signal } }) => {
  return getTodos({ signal });
};

export const todosRoute = {
  loader,
  element: <TodosList />,
};
