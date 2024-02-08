import React, { createContext, useState } from "react";
import CardB from "./CardB";
import UserContext from "./UserContext";


function CardA() {
  return (
    <UserContext>
      <CardB />
    </UserContext>
  );
}

export default CardA;
