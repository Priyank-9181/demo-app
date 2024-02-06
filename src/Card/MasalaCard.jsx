import React from "react";

function MasalaCard(props) {
//  {
//   title: "daal chini",
//   imgURL: "",
//   price: ""
//  }
// console.log("props",props)
  const setImage = {
    width: "300px",
    height: "300px",
    border: "1px solid black",
    borderRadius: "20px",
  };

  return (
    <div style={{ display: "block", overflow: "hidden" }}>
      <div>
          <h1>{props.title}</h1>
          <img
            style={setImage}
            src={props.imgURL}
            alt={props.index}
          />
          <p>Price:-{props.price}</p>
        </div>
    </div>
  );
}

export default MasalaCard;
