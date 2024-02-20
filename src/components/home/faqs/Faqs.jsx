import React from "react";
import Faq from "./Faq";
import styles from "../../../style/component/page/faqs.module.css";
import Title from "../../common/Title";

function Faqs() {
  return (
    <div className={styles.faqsColumnContainer}>
      <div>
        <Title title="Frequently Asked Question" />
      </div>
      <Faq />
      <Faq />
      <Faq />
      <Faq />
    </div>
  );
}

export default Faqs;
