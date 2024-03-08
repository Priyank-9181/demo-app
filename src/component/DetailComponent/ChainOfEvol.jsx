import React from "react";
import styles from "../../style/pokemonDetail/chainOfEvol.module.css";
import { useMultiple } from "../../utils/useFetch";
import Loading from "../Loading";

function ChainOfEvol({ chain, pageNo }) {
  const { loading, pokemon, error } = useMultiple(chain);

  if (loading) {
    return <Loading />;
  }

  if ((!loading && !pokemon) || (!loading && error)) {
    return <h1>Something Wrong .....</h1>;
  }

  const imgFrame = pokemon.map((value, index) => {
    return (
      <a key={index} href={`/${pageNo}/pokemon/${value.id}`}>
        <div className={styles.container}>
          <img
            className={styles.imgContainer}
            alt={value.name}
            src={value.sprites.other["official-artwork"].front_default}
          />
          <h6>{value.name.toUpperCase()}</h6>
        </div>
      </a>
    );
  });

  return (
    <div>
      <h3>Evolutions</h3>
      <div className={styles.mainContainer}>{imgFrame}</div>
    </div>
  );
}

export default ChainOfEvol;
