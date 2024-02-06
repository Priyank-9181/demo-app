import React, { useState } from "react";
import PokemonCard from "../../Card/pokemon/PokemonCard";
import { fetchPokemon, fetchPokemonList } from "../../services/apiService";
import { useEffect } from "react";
import style from "../pokedex/button.module.css";
import { Link } from "react-router-dom";

function HomePage() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);

  async function getPokemonList() {
    const temp = [];
    setLoading(true);
    try {
      const data = await fetchPokemonList(page);
      for (const p of data.results) {
        const detail = await fetchPokemon(p.url);
        temp.push(detail);
      }
      setPokemon(temp);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  
  useEffect(
    function () {
      getPokemonList();
    },
    [page]
  );

  console.log(pokemon);

  function handleClickPrevious() {
    if (page > 0) {
      setPage(() => {
        return page - 1;
      });
    } else {
      setPage(0);
    }
  }

  function handleClickNext() {
    setPage(() => {
      return page + 1;
    });
  }

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className={style.spinner_7}></div>
      </div>
    );

  if ((!loading && error) || (!loading && !pokemon))
    return <h1>Something went wrong...</h1>;

  return (
    <div
      style={{
        padding: "16px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.2rem",
        }}
      >
        Pokemon's Card
      </h1>
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
        {pokemon.map(function (value) {
          return (
            <Link
              style={{
                textDecorationLine: "none",
                gap: "16px",
                display: "flex",
                flexWrap: "wrap",
                width: "auto",
              }}
              to={"pokemon/" + value.name}
            >
              <PokemonCard
                key={value.id}
                name={value.name}
                id={value.id}
                img={value.sprites.other["official-artwork"].front_default}
                tags={value.types.map(function (t) {
                  return t.type.name;
                })}
              />
            </Link>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "24px",
        }}
      >
        {page === 0 ? (
          <button onClick={handleClickNext} className={style.button_49}>
            Next
          </button>
        ) : (
          <>
            <button onClick={handleClickPrevious} className={style.button_49}>
              Previous
            </button>
            <button onClick={handleClickNext} className={style.button_49}>
              Next
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default HomePage;
