import React, { useState } from "react";
import { fetchData } from "../../services/apiService";

function SearchBar(props) {
  const [city, setCity] = useState(null);

  function handleChange(e) {
    setCity(e.target.value);
    // console.log(e.target.value);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "16px",
      }}
    >
      <input
        type="text"
        style={{
          borderRadius: "16px",
          padding: "8px",
          fontSize: "1rem",
          backgroundColor: "#252245",
          border: "1px solid",
          color: "white",
          boxShadow:
            "0 20px 10px -20px rgba(0,0,0,0.45) inset, -20px 0 10px -20px rgba(0,0,0,0.45) inset",
        }}
        // value="Surat"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button
        style={{
          border: "1px solid",
          borderRadius: "16px",
          padding: "8px",
          fontSize: "1rem",
          backgroundColor: "#252245",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => {
          fetchData(
            city,
            function (data) {
              console.log(data);
              return props.setWeather(data);
            },
            function (error) {
              props.setError(error);
            }
          );
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default SearchBar;
