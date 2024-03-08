import React from "react";
import styles from "../../style/todo.module.css";
import ListItem from "./ListItem";

function List({ state, dispatch }) {
  return (
    <div className={styles.taskListContainer}>
      {state.map((value, index) => {
        return <ListItem dispatch={dispatch} value={value} key={index} />;
      })}
    </div>
  );
}

export default List;
