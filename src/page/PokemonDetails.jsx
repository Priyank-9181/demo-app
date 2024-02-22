import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BasicInfo from "../components/DetailComponent/BasicInfo";
import EvolutionOfPokemon from "../components/DetailComponent/EvolutionOfPokemon";
import ExtraInfo from "../components/DetailComponent/ExtraInfo";
import HandleButton from "../components/DetailComponent/HandleButton";
import TitleComponent from "../components/DetailComponent/TitleComponent";
import Loading from "../components/common/Loading";
import styles from "../style/pokemonDetail/detailPage.module.css";
import { useFetch } from "../utils/useFetch";

function PokemonDetails() {
  const { id: str } = useParams();
  const id1 = Number(str);
 
  const [handleID, setHandleId] = useState(id1);

  const { pokemon, loading, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${handleID}`
  );

  let temp;

  if (pokemon) {
    temp = pokemon.species.url;
  }

  const { pokemon: info } = useFetch(pokemon ? pokemon.species.url : `null`);

  if (loading) {
    return <Loading />;
  }

  if ((!loading && error) || (!loading && !pokemon && !info) || !info)
    return <h1>Something went wrong...</h1>;

  return (
    <div>
      <HandleButton
        setHandleId={setHandleId}
        handleID={handleID}
        id={pokemon.id}
      />

      <TitleComponent id={pokemon.id} name={pokemon.name} />

      <BasicInfo pokemon={pokemon} info={info} />

      <ExtraInfo pokemon={pokemon} />

      <div className={styles.evolMainContainer}>
        <div className={styles.evolInnerContainer}>
          <EvolutionOfPokemon id1={handleID} />
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
