import React from "react";
import style from "../../style/button.module.css";

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className={style.spinner_7}></div>
    </div>
  );
}

export default Loading;
