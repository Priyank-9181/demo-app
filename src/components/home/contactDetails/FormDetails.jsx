import React, { useRef, useState } from "react";
import styles from "../../../style/component/page/contactUs.module.css";

import { sendMailApiService } from "../../../apiServices/apiService";
import Module from "../../common/Module";

function FormDetails() {
  const form = useRef();
  const [isError, setIsError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function sendMail(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await sendMailApiService(form.current);
    } catch (e) {
      setIsError(true);
    } finally {
      setLoading(false);
      setIsOpen(true);
    }
  }

  function onClose() {
    setIsOpen(false);
  }

  return (
    <div className={styles.formContainer}>
      <form ref={form} onSubmit={sendMail}>
        <label htmlFor="Name">Your name</label>
        <input type="text" id="Name" name="Name" required />

        <label htmlFor="Email">Your Email</label>
        <input type="email" id="Email" name="Email" required />

        <label htmlFor="Message">Your Message</label>
        <textarea id="Message" name="Message" rows="6" required></textarea>

        <button type="submit">
          {loading ? "Sending...." : "Send Message"}
        </button>
      </form>
      {isOpen && (
        <Module
          title={isError ? "Failed!" : "Success!"}
          closeBtnText="Ok"
          component={
            isError ? (
              <p>Something went wrong!</p>
            ) : (
              <p>Message sent successfully!</p>
            )
          }
          onClose={onClose}
        />
      )}
    </div>
  );
}

export default FormDetails;
