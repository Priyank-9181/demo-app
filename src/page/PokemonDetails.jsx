import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BasicInfo from "../component/DetailComponent/BasicInfo";
import EvolutionOfPokemon from "../component/DetailComponent/EvolutionOfPokemon";
import ExtraInfo from "../component/DetailComponent/ExtraInfo";
import HandleButton from "../component/DetailComponent/HandleButton";
import TitleComponent from "../component/DetailComponent/TitleComponent";
import Loading from "../component/Loading";
import styles from "../style/pokemonDetail/detailPage.module.css";
import { useFetch } from "../utils/useFetch";

function PokemonDetails() {
  const { id: str, pageNo } = useParams();
  const id1 = Number(str);

  const [handleID, setHandleId] = useState(id1);

  const { pokemon, loading, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${handleID}`
  );

  const { pokemon: info } = useFetch(pokemon ? pokemon.species.url : `null`);

  if (loading) {
    return <Loading />;
  }

  if ((!loading && error) || (!loading && !pokemon && !info) || !info)
    return <h1>Something went wrong...</h1>;

  return (
    <div>
      <TitleComponent id={pokemon.id} name={pokemon.name} />

      <BasicInfo pokemon={pokemon} info={info} />

      <ExtraInfo pokemon={pokemon} />

      <div className={styles.evolMainContainer}>
        <div className={styles.evolInnerContainer}>
          <EvolutionOfPokemon pageNo={pageNo} id1={handleID} />
        </div>
      </div>

      <HandleButton
        setHandleId={setHandleId}
        handleID={handleID}
        id={pokemon.id}
        pageNo={pageNo}
      />
    </div>
  );
}

export default PokemonDetails;
