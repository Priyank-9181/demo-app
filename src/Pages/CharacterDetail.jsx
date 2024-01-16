import React from "react";
import { shinchanFandomData } from "../DataFiles/ShinchanData";
import styles from "../styles/CharacterDetail.module.css";

function CharacterDetail() {
  const name = window.location.href.split("/");
  const character = name[4];
  const final = shinchanFandomData.find(function (value, index, array) {
    if (character === value.link) {
      return value;
    }
  });

  function onClick() {
    const table = document.querySelector("table");
    if (table.style.display === "none") {
      table.style.display = "block";
    } else {
      table.style.display = "none";
    }
  }

  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.description}>
          <h1>{final.name}</h1>
          <p>{final.description}</p>
        </div>
        <div className={styles.innerContainer}>
          <img src={final.imgUrl} alt={final.name} />
          <table style={{ display: "none" }}>
            <tbody>
              {final.info.map(function (value, index, array) {
                return (
                  <tr>
                    <td>{value.key}</td>
                    <td>{value.value}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button onClick={onClick}>See More Info</button>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
