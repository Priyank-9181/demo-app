import React from "react";
import styles from "../styles/Navabar.module.css";
import { companyName } from "../DataFiles/ShinchanData";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav 
      className={styles.navbar}
      >
        <ul>
          <h1>{companyName}</h1>
          <li>
            <Link  to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
