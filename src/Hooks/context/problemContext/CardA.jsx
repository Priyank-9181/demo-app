import React, { useState } from "react";
import CardB from "./CardB";


function CardA() {
  const [user, setuser] = useState("User");
  return <CardB user={user} />;
}

export default CardA;
