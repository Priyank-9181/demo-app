import React from "react";
import styles from "../style/layout/footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div>
        <p>&copy; all rights reserved text or the Pokedex symbol.</p>
      </div>
      <div>
        <ul>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
