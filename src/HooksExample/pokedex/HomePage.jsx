import React, { useState } from "react";
import PokemonCard from "../../Card/pokemon/PokemonCard";
import Loading from "./Loading";
import Pagination from "./Pagination";
import { useMultipleFetch } from "./useFetch";
import SearchBar from "./SearchBar";
import { fetchPokemonDetail } from "../../services/apiService";

function HomePage() {
  const [page, setPage] = useState(0);
  const limit = 20;
  const offset = page * limit;

  const [searchData, setSearchData] = useState(null);
  const [query, setQuery] = useState(null);
  const { loading, pokemon, error } = useMultipleFetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );

  async function getDetail() {
    const data = await fetchPokemonDetail(query);
    setSearchData(data);
  }

  // if (query && searchData !== null) {
  //   setSearchData(null);
  // }

  if (loading) return <Loading />;

  if ((!loading && error) || (!loading && !pokemon))
    return <h1>Something went wrong...</h1>;

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <SearchBar setQuery={setQuery} getDetail={getDetail} />
      </div>
      <div
        style={{
          padding: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "32px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {searchData && query ? (
            <PokemonCard
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
        </div>
        <Pagination page={page} setPage={setPage} />
      </div>
    </>
  );
}

export default HomePage;
