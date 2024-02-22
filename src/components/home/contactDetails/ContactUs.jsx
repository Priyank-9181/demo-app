import React from "react";
import ContactDetails from "./ContactDetails";
import FormDetails from "./FormDetails";
import styles from "../../../style/component/page/contactUs.module.css";
import Title from "../../common/Title";

function ContactUs() {
  return (
    <div className={styles.outerContainer}>
      <Title
        title="Contact Us"
        desc="Lorem ipsum dolor sit amet consectetur."
      />
      <div className={styles.container}>
        <ContactDetails />
        <FormDetails />
      </div>
    </div>
  );
}

export default ContactUs;
