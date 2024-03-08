import React from "react";
import { Button } from "react-bootstrap";
import styles from "../../style/pokemonDetail/button.module.css";

function HandleButton({ setHandleId, handleID, id, pageNo }) {
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
        <a href={`/${pageNo}/pokemon/${handleID}`}>
          <Button onClick={handlePrevious}>Prvious</Button>
        </a>
        <a href={`/${pageNo}/pokemon/${handleID}`}>
          <Button onClick={handleNext}>Next</Button>
        </a>
      </div>
    </>
  );
}

export default HandleButton;
