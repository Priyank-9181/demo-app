import React from "react";
import styles from "../../style/contactUs.module.css";
function DetailsGenrate(props) {
  return (
    <div className={styles.detailContainer}>
      <i className={`fa-solid ${props.icon}`}></i>
      <div>
        <h5>{props.title}</h5>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

function ContactDetails() {
  const data = [
    { icon: "fa-map", title: "Address", desc: "Lope Multimedia" },
    { icon: "fa-phone", title: "Phone No", desc: "+91-8200099181" },
    { icon: "fa-envelope", title: "Gmail", desc: "asdDemo@gmail.com" },
  ];

  const component = data.map((value, index) => {
    return (
      <DetailsGenrate
        icon={value.icon}
        title={value.title}
        desc={value.desc}
        key={index}
      />
    );
  });

  return (
    <div className={styles.contactContainer}>
      {component}
      <div className={styles.mapContainer} style={{ width: "100%" }}>
        <iframe
          title="map"
          className={styles.mapStyle}
          width="100%"
          height="200"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Crustal%20LuXuria+(Lope)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps devices</a>
        </iframe>
      </div>
    </div>
  );
}

export default ContactDetails;
