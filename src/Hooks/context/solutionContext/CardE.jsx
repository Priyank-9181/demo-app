import React from "react";
import { useUser } from "./UserContext";

function CardE() {
  // const user = useContext(UserContext);
  const user = useUser()
  return <div>CardE {user}</div>;
}

export default CardE;
