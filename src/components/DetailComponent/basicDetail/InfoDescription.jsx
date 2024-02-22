import React from "react";
import styles from "../../../style/pokemonDetail/InfoDescription.module.css";

function InfoDescription({ pokemon, info }) {
  return (
    <div className={styles.mainContainer}>
      {/* Info */}
      <div>
        <p style={{ fontSize: "1.2rem" }}>
          {info.flavor_text_entries &&
          info.flavor_text_entries.length &&
          info.flavor_text_entries.length > 0
            ? info.flavor_text_entries[0].flavor_text
                .toString()
                .replace("\f", " ")
            : "No Record Found"}
        </p>
      </div>

      {/* Description */}
      <div className={styles.descriptionContainer}>
        <div className={styles.descriptionInnnerContainer}>
          <div className={styles.rowContainer}>
            <span>Heigth</span>
            <h4>{pokemon.height}</h4>
          </div>

          <div className={styles.rowContainer}>
            <span>Category</span>
            <h4>{pokemon.types[0].type.name}</h4>
          </div>
        </div>

        <div className={styles.descriptionInnnerContainer}>
          <div className={styles.rowContainer}>
            <span>Weight</span>
            <h4>{pokemon.weight}</h4>
          </div>

          <div className={styles.rowContainer}>
            <span>Abilities</span>
            <h4>{pokemon.abilities[0].ability.name}</h4>
          </div>
        </div>

        <div className={styles.descriptionInnnerContainer}>
          <div className={styles.rowContainer}>
            <p>Gender</p>
            <h4>♂ ♀</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoDescription;
