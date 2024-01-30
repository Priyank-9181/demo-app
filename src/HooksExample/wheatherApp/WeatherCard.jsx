import React from "react";
import { img, kelvinToCelcius } from "./utils";

function WeatherCard(props) {
  if (!props.weather) {
    return <h1>No Data</h1>;
  }

  if (props.error && props.error.cod) {
    return <h1>{props.error.message}</h1>;
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
        /* From https://css.glass */
        background: "rgba(255, 255, 255, 0.29)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(2.2px)",
        WebkitBackdropFilter: "blur(2.2px)",
        border: "1px solid rgba(255, 255, 255, 0.55)",
      }}
    >
      {!props.weather ? (
        <h3>No data</h3>
      ) : (
        <h2>{kelvinToCelcius(props.weather.main.temp).toFixed() + "°C"}</h2>
      )}
      <img
        style={{
          height: "175px",
          width: "200px",
        }}
        src={img(props.weather.weather[0].icon)}
      />
      {!props.weather ? <h1>No data</h1> : <h1>{props.weather.name}</h1>}
    </div>
  );
}

export default WeatherCard;
