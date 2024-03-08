import React, { useEffect, useState } from "react";
import { fetchPokemon } from "../../services/apiService";
import ChainOfEvol from "./ChainOfEvol";

function EvolutionOfPokemon({ id1, pageNo }) {
  // const [data, setData] = useState(null);
  const [chain, setChain] = useState(null);

  useEffect(() => {
    async function all() {
      const data = await fetchPokemon(
        `https://pokeapi.co/api/v2/pokemon-species/${id1}`
      );

      // setData(data.evolution_chain.url);

      if (data.evolution_chain.url) {
        async function sec() {
          const evolution = await fetchPokemon(data.evolution_chain.url);
          function getAllSpeciesNames(chain) {
            const species = [];

            function getAllSpecies(chain) {
              for (const c in chain) {
                if (
                  c === "evolves_to" &&
                  Array.isArray(chain[c]) &&
                  chain[c].length > 0
                ) {
                  getAllSpecies(chain[c][0]);
                } else {
                  if (c === "species") {
                    species.push(chain[c]);
                    return;
                  }
                }
              }
            }

            getAllSpecies(chain);

            const names = species.reverse().map((value) => {
              return value.name;
            });

            return names;
          }

          setChain(getAllSpeciesNames(evolution.chain));
        }
        sec();
      }
    }

    all();
  }, [id1]);

  if (!chain) return <h1>Something ...</h1>;

  const link = chain.map((v) => {
    return `https://pokeapi.co/api/v2/pokemon/${v}`;
  });

  return (
    <div>
      <ChainOfEvol pageNo={pageNo} chain={link} />
    </div>
  );
}

export default EvolutionOfPokemon;
