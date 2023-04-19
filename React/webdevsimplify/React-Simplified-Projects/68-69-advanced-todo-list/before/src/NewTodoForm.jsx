import { useContext, useRef, useState } from "react";
import { TodoContext } from "./App";

const NewTodoForm = () => {
  //   const nameRef = useRef();

  const [todoName, setTodoName] = useState("");

  const { addNewTodo } = useContext(TodoContext);

  const submitHandler = (e) => {
    e.preventDefault();

    // if (nameRef.current.value === "") return
    // addNewTodo(nameRef.current.value)
    // nameRef.current.value = ""

    if (todoName === "") return;
    addNewTodo(todoName);
    setTodoName("");
  };

  return (
    <form onSubmit={submitHandler} id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input
        type="text"
        id="todo-input"
        value={todoName}
        onChange={
          (e) => setTodoName(e.target.value)
          // ref={nameRef}
        }
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
