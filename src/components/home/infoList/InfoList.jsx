import React from "react";
import InfoRow from "./InfoRow";

function InfoList() {
  return (
    <>
      <InfoRow
        title="About Us"
        desc="Lorem ipsum dolor sit amet."
        img="/image/01.jpg"
      />
      <InfoRow
        title="Experince"
        desc="Lorem ipsum dolor sit amet."
        img="/image/02.jpg"
        contentFirst
      />
    </>
  );
}

export default InfoList;
