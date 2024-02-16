import React from "react";
import { useMultiple } from "../../utils/useFetch";
import Loading from "../Loading";
import { useNavigate } from "react-router-dom";
import styles from "../../style/pokemonDetail/chainOfEvol.module.css";

function ChainOfEvol({ chain }) {
  const navigate = useNavigate();
  const { loading, pokemon, error } = useMultiple(chain);

  if (loading) {
    return <Loading />;
  }

  if ((!loading && !pokemon) || (!loading && error)) {
    return <h1>Something Wrong .....</h1>;
  }

  const imgFrame = pokemon.map((value, index) => {
    return (
      <div
        key={index}
        className={styles.container}
        onClick={() => {
          navigate(`pokemon/${value.id}`);
        }}
      >
        <img
          className={styles.imgContainer}
          src={value.sprites.other["official-artwork"].front_default}
        />
        <h6>{value.name.toUpperCase()}</h6>
      </div>
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
