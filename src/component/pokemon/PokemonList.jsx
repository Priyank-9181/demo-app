import React from "react";
import PokemonCard from "./PokemonCard";

function PokemonList({ pokemon, searchData, query, setSearchData, pageNo }) {
  return (
    <>
      {searchData && query ? (
        <PokemonCard
          pageNo={pageNo}
          key={searchData.id}
          name={searchData.name}
          id={searchData.id}
          img={searchData.sprites.other["official-artwork"].front_default}
          tags={searchData.types.map(function (t) {
            return t.type.name;
          })}
        />
      ) : (
        pokemon.map(function (value) {
          return (
            <PokemonCard
              pageNo={pageNo}
              key={value.id}
              name={value.name}
              id={value.id}
              img={value.sprites.other["official-artwork"].front_default}
              tags={value.types.map(function (t) {
                return t.type.name;
              })}
            />
          );
        })
      )}
    </>
  );
}

export default PokemonList;
