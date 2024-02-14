import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import StatsChart from "../component/DetailComponent/StatsChart";
import Loading from "../component/Loading";
import { useFetch } from "../utils/useFetch";
import TypeBadge from "../component/DetailComponent/TypeBadge";
import EvolutionOfPokemon from "../component/DetailComponent/EvolutionOfPokemon";

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

  function padding(num) {
    const str = num.toString();
    return "#" + str.padStart(4, "0");
  }

  function handleNext() {
    if (pokemon.id < 1025) {
      setHandleId(() => handleID + 1);
    } else {
      setHandleId(1);
    }
  }

  function handlePrevious() {
    if (pokemon.id > 1) {
      setHandleId(() => handleID - 1);
    } else {
      setHandleId(1025);
    }
  }

  console.log(info);
  return (
    <div>
      {/* Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "8px",
        }}
      >
        <Button onClick={handlePrevious}>Prvious</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>

      {/* Title */}
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>{`${pokemon.name} ` + padding(pokemon.id)}</h1>
      </div>

      {/* Basic Info */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "70%",
            justifyContent: "center",
            height: "auto",
            backgroundColor: "#c2c2c2",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "24px",
            padding: "16px",
          }}
        >
          {/* Image */}
          <div>
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt=""
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* Info */}
            <div>
              <p style={{ fontSize: "1.2rem" }}>
                {info.flavor_text_entries &&
                info.flavor_text_entries.length &&
                info.flavor_text_entries.length > 0
                  ? info.flavor_text_entries[0].flavor_text
                      .toString()
                      .replace("\f", " ")
                  : "No Record Found"}
              </p>
            </div>

            {/* Description */}
            <div
              style={{
                width: "auto",
                height: "auto",
                backgroundColor: "#30a7d7",
                borderRadius: "16px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  padding: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span>Heigth</span>
                  <h4>{pokemon.height}</h4>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>Category</span>
                  <h4>{pokemon.types[0].type.name}</h4>
                </div>
              </div>

              <div
                style={{
                  padding: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>Weight</span>
                  <h4>{pokemon.weight}</h4>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>Abilities</span>
                  <h4>{pokemon.abilities[0].ability.name}</h4>
                </div>
              </div>

              <div
                style={{
                  padding: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>Gender</p>
                  <h4 style={{ fontWeight: "bold" }}>♂ ♀</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Info */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "24px",
        }}
      >
        <div
          style={{
            width: "70%",
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "24px",
            backgroundColor: "rgb(194, 194, 194)",
            borderRadius: "24px",
            padding: "24px",
            gap: "24px",
          }}
        >
          <StatsChart stats={pokemon.stats} />
          {/*Type Badge */}
          <div
            style={{
              margin: "0",
              top: "0",
            }}
          >
            <TypeBadge pokemon={pokemon} />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "24px",
        }}
      >
        <div
          style={{
            width: "70%",
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "24px",
            backgroundColor: "rgb(194, 194, 194)",
            marginBottom: "24px",
            borderRadius: "24px",
            padding: "24px",
            gap: "24px",
          }}
        >
          <EvolutionOfPokemon id1={handleID} />
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
