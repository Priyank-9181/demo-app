import React, { useState } from "react";
import { ACTIONS } from "../ToDoMain";
import styles from "../style/todo.module.css";

function AddTask({ dispatch }) {
  const [task, setTask] = useState(null);

  return (
    <div className={styles.addTaskContainer}>
      <input
        id="taskInput"
        type="text"
        value={!task ? "" : null}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (task === null || task.trim() === "") {
            alert("please Add some info");
          } else {
            dispatch({
              type: ACTIONS.ADD,
              payload: {
                id: new Date(),
                task: task.trim(),
                isCompleted: false,
              },
            });
            setTask(null);
          }
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export default AddTask;
