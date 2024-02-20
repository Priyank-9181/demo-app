import React from "react";
import Counter from "./Counter";
import styles from "../../../style/component/page/counterRow.module.css";
import Title from "../../common/Title";

function CounterRow() {
  return (
    <div className={styles.container}>
      <div>
        <Title
          title="Lorem Ipsum"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, corrupti!"
        />
      </div>
      <div className={styles.rowInnerContainer}>
        <Counter title="Lorem, ipsum." end="100" />
        <Counter title="Lorem, ipsum." end="250" />
        <Counter title="Lorem, ipsum." end="350" />
      </div>
    </div>
  );
}

export default CounterRow;
