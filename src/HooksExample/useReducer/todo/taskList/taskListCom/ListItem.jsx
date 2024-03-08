import React, { useState } from "react";
import styles from "../../style/todo.module.css";
import { ACTIONS } from "../../ToDoMain";

function ListItem({ value, dispatch }) {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div className={styles.taskContainer}>
      <input
        type="checkbox"
        checked={value.isCompleted ? true : false}
        onChange={(e) => {
          dispatch({ type: ACTIONS.UPDATE, payload: value.id });
        }}
      />
      {isFocus ? (
        <input
          type="text"
          onFocus={(e) => {
            e.target.value = value.task;
          }}
          onBlur={(e) => {
            setIsFocus(false);
            dispatch({
              type: ACTIONS.UPDATETASK,
              payload: { task: e.target.value, id: value.id },
            });
          }}
          autoFocus
        />
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
        <i className="fa-regular fa-pen-to-square"></i>
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
}

export default ListItem;
