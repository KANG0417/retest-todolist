import { useState } from "react";
import ApplyButton from "../button/ApplyButton";
import TodoList from "../components/TodoList";

function Input() {
  const [titleQuery, setTitleQuery] = useState("");
  const [contentQuery, setContentQuery] = useState("");
  const uid = crypto.randomUUID();

  const initialState = {
    id: uid,
    title: titleQuery,
    content: contentQuery,
    isDone: false,
  };

  const [todos, setTodos] = useState([]);
  const working = todos.filter((item) => !item.isDone);
  const done = todos.filter((item) => item.isDone);

  const titleChangeHandler = (e) => {
    setTitleQuery(e.target.value);
  };

  const contentChangeHandler = (e) => {
    setContentQuery(e.target.value);
  };

  const clickApplyHandler = (e) => {
    e.preventDefault();

    setTodos([...todos, initialState]);
    alert("등록되었습니다!");
  };

  const clickRemoveHandler = (id) => {
    const newTodo = working.filter((item) => item.id !== id);
    setTodos(newTodo);
  };

  return (
    <>
      <form method="get">
        제목:{" "}
        <input type="text" value={titleQuery} onChange={titleChangeHandler} />
        내용:{" "}
        <input
          type="text"
          value={contentQuery}
          onChange={contentChangeHandler}
        />
        <ApplyButton applyFunc={clickApplyHandler} />
      </form>
      <TodoList working={working} done={done} removeFunc={clickRemoveHandler} />
    </>
  );
}

export default Input;
