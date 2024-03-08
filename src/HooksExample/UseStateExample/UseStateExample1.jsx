import React from "react";
import { useState } from "react";

export default function () {
  const randomColor = randomColorGenrator();
  const [color, setColor] = useState(randomColor);

  function onClick() {
    setColor(randomColorGenrator());
  }

  function randomColorGenrator() {
    return (
      "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0")
    );
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color,
      }}
    >
      <div
        style={{
          width: "300px",
          height: "300px",
          border: "1px solid white",
          backgroundColor: "white",
          borderRadius: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "30px",
          cursor: "pointer",
          gap: "20px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        }}
        onClick={onClick}
      >
        <div
          style={{
            width: "200px",
            height: "200px",
            border: "1px solid " + color,
            backgroundColor: color,
            borderRadius: "20px",
          }}
        ></div>
        <h1 style={{ color: color }}>{color}</h1>
      </div>
    </div>
  );
}
