import React from "react";
import ContactDetails from "./ContactDetails";
import FormDetails from "./FormDetails";
import styles from "../../../style/component/page/contactUs.module.css";

function ContactUs() {
  return (
    <div className={styles.container}>
      <ContactDetails />
      <FormDetails />
    </div>
  );
}

export default ContactUs;
