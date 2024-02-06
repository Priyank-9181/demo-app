import React from "react";

function PokemonCard(props) {
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

  const cardContainerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "16px",
    width: "100%",
    maxWidth: "250px",

    "@media (min-width: 768px)": {
      maxWidth: "400px",
    },

    "@media (min-width: 1024px)": {
      maxWidth: "500px",
    },
  };

  const imageContainerStyles = {
    position: "relative",
    width: "100%",
    height: 0,
    paddingBottom: "100%",
    overflow: "hidden",
    borderRadius: "8px",
    marginBottom: "16px",
  };

  const imageStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const nameStyles = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "8px",
    textAlign: "center",
  };

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
    fontSize: "14px",
    fontWeight: "bold",
    marginRight: "8px",
    marginBottom: "8px",
    borderRadius: "20px",
  };

  function padding(num) {
    const str = num.toString();
    return "#" + str.padStart(4, "0");
  }

  return (
    <div style={cardContainerStyles}>
      <h6
        style={{
          color: "gray",
        }}
      >
        {padding(props.id)}
      </h6>
      <div style={imageContainerStyles}>
        <img src={props.img} alt={props.name} style={imageStyles} />
      </div>
      <h2 style={nameStyles}>{props.name}</h2>
      <div style={tagsStyles}>
        {props.tags.map((tag, index) => (
          <span
            key={index}
            style={{
              ...tagStyles,
              backgroundColor: getTagBackgroundColor(tag.toLowerCase()),
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
