import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../style/pokedex/pokemonCard.module.css";
import { getTagBackgroundColor, padding } from "../../utils/pokemonCardHelper";

function PokemonCard(props) {
  const navigate = useNavigate();

  return (
    <div
      className={styles.cardContainerStyles}
      onClick={() => {
        navigate(`/${props.pageNo}/pokemon/${props.id}`);
      }}
    >
      <h6
        style={{
          color: "gray",
        }}
      >
        {padding(props.id)}
      </h6>
      <div className={styles.imageContainerStyles}>
        <img src={props.img} alt={props.name} className={styles.imageStyles} />
      </div>
      <h2 className={styles.nameStyles}>{props.name}</h2>
      <div className={styles.tagsStyles}>
        {props.tags.map((tag, index) => (
          <span
            key={index}
            className={styles.tagStyles}
            style={{
              backgroundColor: getTagBackgroundColor(tag.toLowerCase()),
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
