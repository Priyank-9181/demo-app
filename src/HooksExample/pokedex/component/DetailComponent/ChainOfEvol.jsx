import React from "react";
import { useMultiple } from "../../utils/useFetch";
import Loading from "../Loading";
import { useNavigate } from "react-router-dom";

function ChainOfEvol({ chain }) {
  const navigate = useNavigate();
  const { loading, pokemon, error } = useMultiple(chain);

  if (loading) {
    return <Loading />;
  }

  if ((!loading && !pokemon) || (!loading && error)) {
    return <h1>Something Wrong .....</h1>;
  }

  const imgFrame = pokemon.map((value) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate(`pokemon/${value.id}`);
        }}
      >
        <img
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: "white",
            borderRadius: "40%",
            padding: "16px",
          }}
          src={value.sprites.other["official-artwork"].front_default}
        />
        <h6>{value.name.toUpperCase()}</h6>
      </div>
    );
  });

  return (
    <div>
      <h3>Evolutions</h3>
      <div
        style={{
          display: "flex",
          gap: "72px",
          marginTop: "18px",
        }}
      >
        {imgFrame}
      </div>
    </div>
  );
}

export default ChainOfEvol;
