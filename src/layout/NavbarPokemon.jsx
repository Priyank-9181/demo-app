import React from "react";
import styles from "../style/layout/navbar.module.css";
import { NavLink } from "react-router-dom";

const NavbarPokemon = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>Pokedex</h1>
      </div>
      <div className={styles.linksContainer}>
        <ul>
          {/* <Link to="/">Home</Link>
          <Link to="/pokemon">Pokedex</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link> */}
          <NavLink
            className={({ isActive }) => (isActive ? styles.isActive : "")}
            to={`/${0}`}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.isActive : "")}
            to="/contactUs"
          >
            Contact Us
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavbarPokemon;
