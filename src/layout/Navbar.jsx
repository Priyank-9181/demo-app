import React from "react";
import styles from "../style/layout/navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>Pokedex</h1>
      </div>
      <div className={styles.linksContainer}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
