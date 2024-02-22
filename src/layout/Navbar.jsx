import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../style/layout/navbar.module.css";

function Navbar() {
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
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.isActive : "")}
            to="/pokemon"
          >
            Pokedex
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.isActive : "")}
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.isActive : "")}
            to="/contact"
          >
            Contact Us
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
