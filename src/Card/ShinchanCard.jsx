import React from "react";
import ShinchanCardInfo from "./ShinchanCardInfo";
import styles from "../styles/ShinchanCard.module.css";
import LinkButton from "./commanCard/LinkButton";

function ShinchanCard(props) {
  const jsx = props.info.map(function (value, index, array) {
    return <ShinchanCardInfo id={value.key} value={value.value} key={index} />;
  });

  // console.log(jsx);

  return (
    <div>
      <img className={styles.img} src={props.imgUrl} alt={props.name} />
      <div className={styles.container}>
        <h1>{props.name}</h1>
        <hr />
        <p className={styles.description}>{props.description}</p>
        <hr />
        {jsx}
        <hr />
        <LinkButton link = {props.link} />
      </div>
    </div>
  );
}

export default ShinchanCard;
