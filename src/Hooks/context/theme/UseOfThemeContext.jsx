import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function useTheme() {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return theme;
}

function UseOfThemeContext({ children }) {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default UseOfThemeContext;
