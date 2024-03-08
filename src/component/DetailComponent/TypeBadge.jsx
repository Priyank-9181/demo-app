import React from "react";
import { getTagBackgroundColor } from "../../utils/pokemonCardHelper";
import styles from "../../style/pokemonDetail/typeBadge.module.css";

function TypeBadge(props) {
  const { pokemon } = props;

  return (
    <div>
      <h1>Types</h1>
      {pokemon.types.map((value, index) => {
        return (
          <span
            key={index}
            style={{
              backgroundColor: getTagBackgroundColor(
                value.type.name.toLowerCase()
              ),
            }}
            className={styles.tagStyles}
          >
            {value.type.name}
          </span>
        );
      })}
    </div>
  );
}

export default TypeBadge;
