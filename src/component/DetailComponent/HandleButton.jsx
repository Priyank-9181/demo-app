import React from "react";
import { Button } from "react-bootstrap";
import styles from "../../style/pokemonDetail/button.module.css";

function HandleButton({ setHandleId, handleID, id }) {
  function handleNext() {
    if (id < 1025) {
      setHandleId(() => handleID + 1);
    } else {
      setHandleId(1);
    }
  }

  function handlePrevious() {
    if (id > 1) {
      setHandleId(() => handleID - 1);
    } else {
      setHandleId(1025);
    }
  }
  return (
    <>
      <div className={styles.container}>
        <Button onClick={handlePrevious}>Prvious</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </>
  );
}

export default HandleButton;
