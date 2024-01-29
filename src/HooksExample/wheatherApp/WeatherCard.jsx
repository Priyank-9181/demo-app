import React from "react";
import { img, kelvinToCelcius } from "./utils";

function WeatherCard(props) {
  if (!props.weather) {
    return <h1>No Data</h1>;
  }
  return (
    <div
      style={{
        width: "300px",
        height: "auto",
        borderRadius: "20px",
        backgroundColor: "#4d31a2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        color: "white",
      }}
    >
      {!props.weather ? (
        <h3>No data</h3>
      ) : (
        <h2>{kelvinToCelcius(props.weather.main.temp).toFixed() + "°C"}</h2>
      )}
      <img src={img(props.weather.weather[0].icon)} />
      {!props.weather ? <h1>No data</h1> : <h1>{props.weather.name}</h1>}
    </div>
  );
}

export default WeatherCard;
