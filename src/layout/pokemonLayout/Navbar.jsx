import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "1rem",
    position: "relative",
  };

  const navbarBrandStyle = {
    height: "3rem",
    marginRight: "2rem",
  };

  const navbarTogglerStyle = {
    display: "none",
  };

  const navbarCollapseStyle = {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    height: 0,
    overflow: "hidden",
    transition: "height 0.3s ease",
    backgroundColor: "#333",
  };

  const navbarCollapseShowStyle = {
    height: "100%",
  };

  const navbarNavStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const navItemStyle = {
    marginBottom: "1rem",
  };

  const navLinkStyle = {
    color: "#fff",
    textDecoration: "none",
  };

  const mediaQueryStyle = {
    "@media (min-width: 768px)": {
      ".navbar-toggler": {
        display: "block",
      },
      ".navbar-collapse": {
        position: "relative",
        height: "auto",
        overflow: "visible",
        backgroundColor: "transparent",
      },
      ".navbar-nav": {
        flexDirection: "row",
        alignItems: "center",
      },
      ".nav-item": {
        marginBottom: 0,
      },
    },
  };

  return (
    <nav style={navbarStyle}>
      <div style={navbarBrandStyle}>
        <img src="pokemon-logo.png" alt="Pokemon Logo" />
      </div>
      <button style={navbarTogglerStyle} onClick={() => setIsOpen(!isOpen)}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        style={{
          ...navbarCollapseStyle,
          ...(isOpen ? navbarCollapseShowStyle : {}),
        }}
      >
        <ul style={navbarNavStyle}>
          <li style={navItemStyle}>
            <a href="/" style={navLinkStyle}>
              Home
            </a>
          </li>
          <li style={navItemStyle}>
            <a href="/pokedex" style={navLinkStyle}>
              Pokedex
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
