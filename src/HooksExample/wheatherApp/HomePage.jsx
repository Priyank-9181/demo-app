import React, { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";

// https://api.openweathermap.org/data/2.5/weather?q=surat&appid=a607bd945efb23bbef1e1d64c00d5415

function HomePage() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const key = 123432;

  // console.log(weather);

  // debugger;

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        // backgroundColor: "#362f64",
        background: "rgb(2,0,36)",
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(10,9,123,1) 0%, rgba(15,15,177,1) 24%, rgba(8,114,216,1) 69%, rgba(0,212,255,1) 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
          flexDirection: "column",
        }}
      >
        <SearchBar
          key={key}
          weather={weather}
          setWeather={setWeather}
          setError={setError}
        />
        <WeatherCard weather={weather} error={error} />
      </div>
    </div>
  );
}

export default HomePage;
