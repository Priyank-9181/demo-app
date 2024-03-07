import React from "react";
import styles from "../../style/todo.module.css";

function NoData() {
  return (
    <div className={styles.noDataContainer}>
      <h4>Add Some Task</h4>
    </div>
  );
}

export default NoData;
