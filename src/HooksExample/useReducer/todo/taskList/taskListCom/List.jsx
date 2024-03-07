import React, { useState } from "react";
import styles from "../../style/todo.module.css";
import { ACTIONS } from "../../ToDoMain";

function List({ state, dispatch }) {
  const [isComplete, setisComplete] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div className={styles.taskListContainer}>
      {state.map((value, index) => {
        return (
          <div className={styles.taskContainer} key={index}>
            <input
              type="checkbox"
              checked={value.isCompleted ? true : false}
              onChange={(e) => {
                setisComplete(e.target.checked);
                dispatch({ type: ACTIONS.UPDATE, payload: value.id });
              }}
            />
            {isFocus ? (
              <input type="text" value={value.task} />
            ) : (
              <p className={value.isCompleted ? styles.isCompleteTask : null}>
                {value.task}
              </p>
            )}
            <button
              onClick={() => {
                setIsFocus(true);
              }}
            >
              <i class="fa-regular fa-pen-to-square"></i>
            </button>
            <button
              onClick={() => {
                dispatch({ type: ACTIONS.DELETE, payload: value.id });
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default List;
