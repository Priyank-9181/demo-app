import React, { useState } from "react";
import { fetchPokemonDetail } from "../../services/apiService";
import { useEffect } from "react";
import style from "../pokedex/button.module.css";
import { Link } from "react-router-dom";

function PokemonDetails() {
  const [detail, setDetail] = useState(null);
  // const [name, setName] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const name = window.location.href.split("/")[4];

  async function fetchDetail() {
    setloading(true);
    try {
      const temp = await fetchPokemonDetail(name);
      setDetail(temp);
    } catch (error) {
      console.log(error);
      seterror(error);
    } finally {
      setloading(false);
    }
  }

  useEffect(() => {
    fetchDetail();
  }, [name]);

  if (loading) {
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
  }

  if ((!loading && error) || (!loading && !detail))
    return <h1>Something went wrong...</h1>;

  console.log(detail);

  return (
    <div>
      <h1>PokemonDetails {name}</h1>
      <Link to="/">Okkk</Link>
    </div>
  );
}

export default PokemonDetails;
