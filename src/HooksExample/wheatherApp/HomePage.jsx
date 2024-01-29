import React, { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";

// https://api.openweathermap.org/data/2.5/weather?q=surat&appid=a607bd945efb23bbef1e1d64c00d5415

function HomePage() {
  const [weather, setWeather] = useState(null);

  const key = 123432;

  // console.log(weather);

  // debugger;

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#362f64",
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
        <SearchBar key={key} weather={weather} setWeather={setWeather} />
        <WeatherCard weather={weather} />
      </div>
    </div>
  );
}

export default HomePage;
