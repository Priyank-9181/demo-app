import React from "react";
import styles from "../style/page/notFound.module.css";

function NotFound() {
  return (
    <div className={styles.container}>
      <div>
        <h1>
          404 <sub>Not Found</sub>
        </h1>
        <p>Page Not Found!</p>
        <p>Please Go To The Home-Page</p>
      </div>
    </div>
  );
}

export default NotFound;
