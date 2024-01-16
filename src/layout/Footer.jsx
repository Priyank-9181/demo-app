import React from "react";
import styles from "../styles/Footer.module.css";
import { companyName } from "../DataFiles/ShinchanData";

function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <h1>&copy; 2024 {companyName}. All rights reserved.</h1>
      </footer>
    </div>
  );
}

export default Footer;
