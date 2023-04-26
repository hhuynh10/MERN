import axios from "axios";
import { useLoaderData } from "react-router-dom";

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
  return axios
    .get("http://127.0.0.1:3000/todos", { signal })
    .then((res) => res.data);
};

export const todosRoute = {
  loader,
  element: <TodosList />,
};
