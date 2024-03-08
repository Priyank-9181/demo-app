import React from "react";

export default function Image({ pokemon }) {
  return (
    <div>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
    </div>
  );
}
