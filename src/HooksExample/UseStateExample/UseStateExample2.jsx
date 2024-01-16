import React, { useState } from "react";

function UseStateExample2() {
  const [car, setcar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "2016",
    color: "red",
  });

  const [formValue, setFormValue] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "2016",
    color: "red",
  });

  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  }

  function submit(e) {
    setcar({ ...car, ...formValue });
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "300px",
          height: "300px",
          border: "1px solid black",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
          padding: "15px",
          fontSize: "1.2rem",
        }}
      >
        <ul>
          <li>My Car Name is {car.brand}.</li>
          <li>Car Color is {car.color}.</li>
          <li>
            Car Model is {car.model} from {car.year}.
          </li>
        </ul>

        <input
          type="text"
          name="brand"
          placeholder="name"
          onChange={function onHandle(e) {
            handleChange(e);
          }}
        />

        <input
          type="text"
          name="model"
          placeholder="model"
          onChange={function onHandle(e) {
            handleChange(e);
          }}
        />

        <input
          type="text"
          name="year"
          placeholder="year"
          onChange={function onHandle(e) {
            handleChange(e);
          }}
        />

        <input
          type="text"
          name="color"
          placeholder="color"
          onChange={function onHandle(e) {
            handleChange(e);
          }}
        />

        <button
          onClick={(e) => {
            submit(e);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default UseStateExample2;
