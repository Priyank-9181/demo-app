import React from "react";
import style from "../style/button.module.css";

function Pagination(props) {
  function handleClickPrevious() {
    if (props.page > 0) {
      props.setPage(() => {
        return props.page - 1;
      });
    } else {
      props.setPage(0);
    }
  }

  function handleClickNext() {
    props.setPage(() => {
      return props.page + 1;
    });
  }
  return (
    <div
      style={{
        width: "100%",
        height: "70px",
        backgroundColor: "white",
        overflow: "hidden",
        position: "fixed",
        bottom: "0",
        boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 2px 0px inset",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "12px",
        }}
      >
        {props.page === 0 ? (
          <button onClick={handleClickNext} className={style.button_30}>
            Next
          </button>
        ) : (
          <>
            <button onClick={handleClickPrevious} className={style.button_30}>
              Previous
            </button>
            <button onClick={handleClickNext} className={style.button_30}>
              Next
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Pagination;
