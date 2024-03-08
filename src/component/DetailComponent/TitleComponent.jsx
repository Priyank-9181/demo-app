import React from "react";
import styles from "../../style/pokemonDetail/detailPage.module.css";
import { padding } from "../../utils/pokemonCardHelper";

function TitleComponent({ name, id }) {
  return (
    <div className={styles.titleContainer}>
      <h1>{`${name} ` + padding(id)}</h1>
    </div>
  );
}

export default TitleComponent;
