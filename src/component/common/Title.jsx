import React from "react";
import styles from "../../style/common/title.module.css";

function Title(props) {
  return (
    <div className={styles.container}>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
}

export default Title;
