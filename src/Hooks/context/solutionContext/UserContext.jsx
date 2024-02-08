import React, { createContext, useContext, useState } from "react";

const UserCon = createContext();

export function useUser() {
  const user = useContext(UserCon);
  return user;
}

function UserContext({ children }) {
  const [user, setuser] = useState("User");
  return <UserCon.Provider value={user}>{children}</UserCon.Provider>;
}

export default UserContext;
