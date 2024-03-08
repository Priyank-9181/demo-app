import React from "react";
import ShinchanCard from "../Card/ShinchanCard";
import { shinchanFandomData } from "../DataFiles/ShinchanData";
import styles from "../styles/ShinchanFnadom.module.css";
// import Layout from "../layout/Layout";

function ShinchanFnadom() {
  const data = shinchanFandomData;

  const jsx = data.map(function (value, index, array) {
    return (
      <div>
        <ShinchanCard
          key={index}
          name={value.name}
          imgUrl={value.imgUrl}
          description={value.description}
          info={value.info}
          link={value.link}
        />
      </div>
    );
  });

  return (
    // <Layout>
    <div className={styles.container}>{jsx}</div>
    // </Layout>
  );
}

export default ShinchanFnadom;

// style={{
//   width: "98%",
//   // border: "1px solid black",
//   marginTop: "20px",
//   height: "auto",
//   display: "flex",
//   flexWrap: "wrap",
//   // flexDirection: "row",
//   justifyContent: "center",
//   placeItems: "center",
//   padding: "20px",
//   gap: "16px",
//   overflow: "hidden",
// }}
