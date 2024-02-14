import React from "react";

function TypeBadge(props) {
  const { pokemon } = props;

  const tagsStyles = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "16px",
  };

  const tagStyles = {
    display: "inline-block",
    // backgroundColor: getTagBackgroundColor(type),
    padding: "4px 8px",
    fontSize: "19px",
    fontWeight: "bold",
    marginRight: "8px",
    marginBottom: "8px",
    borderRadius: "20px",
  };

  function getTagBackgroundColor(type) {
    switch (type) {
      case "grass":
        return "#48B858";
      case "fire":
        return "#E45F56";
      case "water":
        return "#3C91E6";
      case "bug":
        return "#AAB150";
      case "dark":
        return "#4F4F4F";
      case "dragon":
        return "#743DB7";
      case "electric":
        return "#F0C831";
      case "fairy":
        return "#F08B8B";
      case "fighting":
        return "#D54551";
      case "flying":
        return "#8A8CFF";
      case "ghost":
        return "#636392";
      case "ground":
        return "#E48B41";
      case "ice":
        return "#88F3FB";
      case "normal":
        return "#B0B0C1";
      case "poison":
        return "#9C70A1";
      case "psychic":
        return "#F968D3";
      case "rock":
        return "#A87E5F";
      case "steel":
        return "#58A8F8";
      default:
        return "#f0f0f0";
    }
  }

  console.log(pokemon.types);
  return (
    <div>
      <h1>Types</h1>
      {pokemon.types.map((value, index) => {
        return (
          <span
            key={index}
            style={{
              ...tagStyles,
              backgroundColor: getTagBackgroundColor(
                value.type.name.toLowerCase()
              ),
            }}
          >
            {value.type.name}
          </span>
        );
      })}
    </div>
  );
}

export default TypeBadge;
