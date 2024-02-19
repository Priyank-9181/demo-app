import React from "react";
import styles from "../../../style/component/page/carousel.module.css";

function CarouselList({ src, alt }) {
  return (
    <div className={styles.imgContainer}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default CarouselList;
