import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../component/Loading";
import Pagination from "../component/Pagination";
import SearchBar from "../component/SearchBar";
import PokemonList from "../component/pokemon/PokemonList";
import { fetchPokemonDetail } from "../services/apiService";
import styles from "../style/pokedex/homePage.module.css";
import { useMultipleFetch } from "../utils/useFetch";

function HomePage() {
  const { pageNo } = useParams();
  
  const id = Number(pageNo);

  const [page, setPage] = useState(id);
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
        <div className={styles.cardContainer}>
          <PokemonList
            pageNo={pageNo}
            pokemon={pokemon}
            searchData={searchData}
            setSearchData={setSearchData}
            query={query}
          />
        </div>
        {searchData && query ? null : (
          <Pagination page={page} setPage={setPage} />
        )}
      </div>
    </>
  );
}

export default HomePage;