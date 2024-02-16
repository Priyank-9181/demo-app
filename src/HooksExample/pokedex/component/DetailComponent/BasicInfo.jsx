import React from "react";
import Image from "./basicDetail/Image";
import InfoDescription from "./basicDetail/InfoDescription";
import styles from "../../style/pokemonDetail/basicInfo.module.css";

export default function BasicInfo({ pokemon, info }) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.innerContainer}>
        {/* Image */}
        <Image pokemon={pokemon} />
        <InfoDescription pokemon={pokemon} info={info} />
      </div>
    </div>
  );
}
