import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loading from "../component/Loading";
import { useFetch } from "../utils/useFetch";

function PokemonDetails() {
  const { id: str } = useParams();
  const id = Number(str);

  const [handleID, setHandleId] = useState(id);

  const { pokemon, loading, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${handleID}`
  );

  const { pokemon: info } = useFetch(
    pokemon
      ? pokemon.species.url
      : `https://pokeapi.co/api/v2/pokemon/${handleID}`
  );

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
    if (pokemon.id > 1025) {
      setHandleId((i) => ++i);
    } else {
      setHandleId(1);
    }
  }

  function handlePrevious() {
    if (pokemon.id < 1) {
      setHandleId((i) => --i);
    } else {
      setHandleId(1025);
    }
  }

  console.log(pokemon);
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
                {info.flavor_text_entries[2].flavor_text}
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
                  <h4></h4>
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
    </div>
  );
}

export default PokemonDetails;
