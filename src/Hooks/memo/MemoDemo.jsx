import React, { useCallback, useState } from "react";
import Todo from "./Todo";

function MemoDemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(
    function () {
      setTodos([...todos, "New Todo"]);
    },
    [todos]
  );

  return (
    <>
      <Todo todos={todos} addTodo={addTodo} />

      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default MemoDemo;
