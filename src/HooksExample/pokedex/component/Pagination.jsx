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
        backgroundColor: "#e8eaf6",
        overflow: "hidden",
        marginTop: "10px",
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
