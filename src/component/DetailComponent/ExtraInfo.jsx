import React from "react";
import styles from "../../style/pokemonDetail/extraInfo.module.css";
import StatsChart from "../DetailComponent/StatsChart";
import TypeBadge from "../DetailComponent/TypeBadge";

function ExtraInfo({ pokemon }) {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <StatsChart stats={pokemon.stats} />
        {/*Type Badge */}
        <div>
          <TypeBadge pokemon={pokemon} />
        </div>
      </div>
    </div>
  );
}

export default ExtraInfo;
