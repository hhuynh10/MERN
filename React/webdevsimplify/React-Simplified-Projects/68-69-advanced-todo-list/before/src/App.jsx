import { useState, useReducer, useEffect, createContext } from "react";
import "./styles.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import TodoFilterForm from "./TodoFilterForm";

const LOCAL_STORAGE_KEY = "TODOS";

export const TodoContext = createContext();

const ACTION = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  TOGGLE: "TOGGLE",
  UPDATE: "UPDATE",
};

function reducer(todos, { type, payload }) {
  switch (type) {
    case ACTION.ADD:
      return [
        ...todos,
        { name: payload.name, completed: false, id: crypto.randomUUID() },
      ];

    case ACTION.TOGGLE:
      return todos.map((todo) => {
        if (todo.id === payload.id)
          return { ...todo, completed: payload.completed };

        return todo;
      });

    case ACTION.DELETE:
      return todos.filter((todo) => {
        return todo.id !== payload.id;
      });

    case ACTION.UPDATE:
      return todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, name: payload.name };
        }
        return todo;
      });

    default:
      throw Error(`No action was found for ${type}.`);
  }
}

function App() {
  const [filterName, setFilterName] = useState("");
  const [completedCheckbox, setCompletedCheckbox] = useState("");
  const [todos, dispatch] = useReducer(reducer, [], (initialValue) => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (value == null) return initialValue;
    return JSON.parse(value);
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const filterTodos = todos.filter((todo) => {
    if (completedCheckbox && todo.completed) return false;
    return todo.name.includes(filterName);
  });

  function addNewTodo(name) {
    dispatch({ type: ACTION.ADD, payload: { name } });
  }

  function toggleTodo(todoId, completed) {
    dispatch({
      type: ACTION.TOGGLE,
      payload: { id: todoId, completed },
    });
  }

  function deleteTodo(todoId) {
    dispatch({ type: ACTION.DELETE, payload: { id: todoId } });
  }

  function updateTodo(name, id) {
    dispatch({ type: ACTION.UPDATE, payload: { name, id } });
  }

  return (
    <TodoContext.Provider
      value={{
        todos: filterTodos,
        addNewTodo,
        toggleTodo,
        deleteTodo,
        updateTodo,
      }}
    >
      <TodoFilterForm
        name={filterName}
        setName={setFilterName}
        completedCheckbox={completedCheckbox}
        setCompletedCheckbox={setCompletedCheckbox}
      />

      <TodoList />

      <NewTodoForm />
    </TodoContext.Provider>
  );
}

export default App;
