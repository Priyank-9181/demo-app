import React from "react";
import styles from "../../../style/component/page/productRow.module.css";

function ProductJenerate(props) {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productImgContainer}>
        <img src={props.img} alt={props.title} />
      </div>
      <div className={styles.productDescContainer}>
        <h6>{props.title}</h6>
        <p>{props.desc}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductJenerate;
