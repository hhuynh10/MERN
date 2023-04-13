import { useState } from "react";
import "./App.css";
import TodoCard from "./assets/TodoCard";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const [todoName, setTodoName] = useState("");
  const [todos, setTodos] = useLocalStorage("key", []);

  const addTodo = () => {
    if (todoName.length === 0) return;

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { name: todoName, checked: false, id: crypto.randomUUID() },
      ];
    });

    setTodoName("");
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  const checkTodo = (id, checked) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked };
        }
        return todo;
      });
    });
  };

  return (
    <>
      <ul id="list">
        {todos.map((todo) => {
          return (
            <TodoCard
              key={todo.id}
              {...todo}
              deleteTodo={deleteTodo}
              checkTodo={checkTodo}
            />
          );
        })}
      </ul>

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </>
  );
}

export default App;
