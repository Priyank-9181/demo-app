import React from "react";
import CountUp from "react-countup";
import styles from "../../../style/component/page/counterRow.module.css";

function Counter(props) {
  return (
    <div className={styles.counterContainer}>
      <h5>{props.title}</h5>
      <CountUp style={{ fontSize: "3.2rem", margin: "0px" }} end={props.end || 100} />
    </div>
  );
}

export default Counter;
