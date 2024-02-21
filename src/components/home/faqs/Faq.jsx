import React, { useState } from "react";
import styles from "../../../style/component/page/faqs.module.css";

function Faq() {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.queContainer}>
        <i className="fa-solid fa-circle-question"></i>
        <p>Lorem ipsum dolor sit amet.</p>
        <i
          className="fa-solid fa-sort-down"
          onClick={() => {
            setIsExpand(!isExpand);
          }}
          style={{
            rotate: isExpand ? "180deg" : "0deg",
          }}
        ></i>
        {/* <i class="fa-solid fa-sort-up"></i> */}
      </div>
      {isExpand ? (
        <p className={styles.ansContainer}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          quod.
        </p>
      ) : null}
    </div>
  );
}

export default Faq;
