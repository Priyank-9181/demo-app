import React from "react";
import ProductJenerate from "./ProductJenerate";
import styles from "../../../style/component/page/productRow.module.css";
import Title from "../../common/Title";
import { data } from "../../../data/productData";

function ProductRow() {
  const product = data.map((value, index) => {
    return (
      <ProductJenerate
        img={value.img}
        title={value.title}
        desc={value.desc}
        key={index}
      />
    );
  });

  return (
    <div className={styles.container}>
      <div>
        <Title
          title="Pokemon Products"
          desc="The Best Pokemon Card Packs to Buy in 2024 and Beyond"
        />
      </div>
      <div className={styles.productRowContainer}>{product}</div>
    </div>
  );
}

export default ProductRow;
