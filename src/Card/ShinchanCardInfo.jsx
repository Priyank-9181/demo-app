import React from "react";
import styles from "../styles/ShinchanCardInfo.module.css";

function ShinchanCardInfo(props) {
  return (
    <table className={styles.cardTable}>
      <tbody>
        <tr>
          <td style={{ textAlign: "left" }}>{props.id}</td>
          <td style={{ textAlign: "right" }}>{props.value}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ShinchanCardInfo;
